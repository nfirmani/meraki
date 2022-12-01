"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var QueryWidget_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.QueryWidget = void 0;
const React = require("react");
const inversify_1 = require("inversify");
const react_widget_1 = require("@theia/core/lib/browser/widgets/react-widget");
const axios_1 = require("axios");
const react_query_1 = require("react-query");
const devtools_1 = require("react-query/devtools");
const queryClient = new react_query_1.QueryClient();
function usePosts() {
    return (0, react_query_1.useQuery)("posts", async () => {
        const { data } = await axios_1.default.get("https://jsonplaceholder.typicode.com/posts");
        return data;
    });
}
function Posts({ setPostId, }) {
    const queryClient = (0, react_query_1.useQueryClient)();
    const { status, data, error, isFetching } = usePosts();
    return (React.createElement("div", null,
        React.createElement("h1", null, "Posts"),
        React.createElement("div", null, status === "loading" ? ("Loading...") : error instanceof Error ? (React.createElement("span", null,
            "Error: ",
            error.message)) : (React.createElement(React.Fragment, null,
            React.createElement("div", null, data === null || data === void 0 ? void 0 : data.map((post) => (React.createElement("p", { key: post.id },
                React.createElement("a", { onClick: () => setPostId(post.id), href: "#", style: 
                    // We can access the query data here to show bold links for
                    // ones that are cached
                    queryClient.getQueryData(["post", post.id])
                        ? {
                            fontWeight: "bold",
                            color: "green",
                        }
                        : {} }, post.title))))),
            React.createElement("div", null, isFetching ? "Background Updating..." : " "))))));
}
const getPostById = async (id) => {
    const { data } = await axios_1.default.get(`https://jsonplaceholder.typicode.com/posts/${id}`);
    return data;
};
function usePost(postId) {
    return (0, react_query_1.useQuery)(["post", postId], () => getPostById(postId), {
        enabled: !!postId,
    });
}
function Post({ postId, setPostId, }) {
    const { status, data, error, isFetching } = usePost(postId);
    return (React.createElement("div", null,
        React.createElement("div", null,
            React.createElement("a", { onClick: () => setPostId(-1), href: "#" }, "Back")),
        !postId || status === "loading" ? ("Loading...") : error instanceof Error ? (React.createElement("span", null,
            "Error: ",
            error.message)) : (React.createElement(React.Fragment, null,
            React.createElement("h1", null, data === null || data === void 0 ? void 0 : data.title),
            React.createElement("div", null,
                React.createElement("p", null, data === null || data === void 0 ? void 0 : data.body)),
            React.createElement("div", null, isFetching ? "Background Updating..." : " ")))));
}
function Inizio() {
    const [postId, setPostId] = React.useState(-1);
    return (React.createElement(react_query_1.QueryClientProvider, { client: queryClient },
        React.createElement("p", null,
            "As you visit the posts below, you will notice them in a loading state the first time you load them. However, after you return to this list and click on any posts you have already visited again, you will see them load instantly and background refresh right before your eyes!",
            " ",
            React.createElement("strong", null, "(You may need to throttle your network speed to simulate longer loading sequences)")),
        postId > -1 ? (React.createElement(Post, { postId: 2, setPostId: setPostId })) : (React.createElement(Posts, { setPostId: setPostId })),
        React.createElement(devtools_1.ReactQueryDevtools, { initialIsOpen: true })));
}
let QueryWidget = QueryWidget_1 = class QueryWidget extends react_widget_1.ReactWidget {
    async init() {
        //  initialization 
        this.id = QueryWidget_1.ID;
        this.title.label = QueryWidget_1.LABEL;
        this.title.caption = QueryWidget_1.LABEL;
        this.title.closable = true;
        this.title.iconClass = 'fa fa-window-maximize'; // example widget icon.
        this.update(); //  Update the view 
    }
    setText(text) {
        this.text = text;
    }
    //  According to the parameters received 
    render() {
        return (React.createElement(Inizio, null));
    }
};
QueryWidget.ID = 'query:widget';
QueryWidget.LABEL = 'Vista query';
__decorate([
    (0, inversify_1.postConstruct)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], QueryWidget.prototype, "init", null);
QueryWidget = QueryWidget_1 = __decorate([
    (0, inversify_1.injectable)()
], QueryWidget);
exports.QueryWidget = QueryWidget;
//# sourceMappingURL=query-widget.js.map