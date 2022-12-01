"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostList = void 0;
const React = require("react");
const refine_core_1 = require("@pankod/refine-core");
const refine_mui_1 = require("@pankod/refine-mui");
const PostList = () => {
    const { dataGridProps } = (0, refine_mui_1.useDataGrid)();
    const categoryIds = dataGridProps.rows.map((item) => item.category.id);
    const { data: categoriesData, isLoading } = (0, refine_core_1.useMany)({
        resource: "categories",
        ids: categoryIds,
        queryOptions: {
            enabled: categoryIds.length > 0,
        },
    });
    const columns = React.useMemo(() => [
        {
            field: "id",
            headerName: "ID",
            type: "number",
            width: 50,
        },
        {
            field: "title",
            headerName: "Title",
            minWidth: 400,
            flex: 1,
        },
        {
            field: "category.id",
            headerName: "Category",
            type: "number",
            headerAlign: "left",
            align: "left",
            minWidth: 250,
            flex: 0.5,
            renderCell: function render({ row }) {
                if (isLoading) {
                    return "Loading...";
                }
                const category = categoriesData === null || categoriesData === void 0 ? void 0 : categoriesData.data.find((item) => item.id === row.category.id);
                return category === null || category === void 0 ? void 0 : category.title;
            },
        },
        {
            field: "status",
            headerName: "Status",
            minWidth: 120,
            flex: 0.3,
        },
        {
            field: "actions",
            type: "actions",
            headerName: "Actions",
            renderCell: function render({ row }) {
                return (React.createElement(refine_mui_1.Stack, { direction: "row", spacing: 1 },
                    React.createElement(refine_mui_1.EditButton, { size: "small", hideText: true, recordItemId: row.id }),
                    React.createElement(refine_mui_1.DeleteButton, { size: "small", hideText: true, recordItemId: row.id })));
            },
            align: "center",
            headerAlign: "center",
            minWidth: 80,
        },
    ], [categoriesData, isLoading]);
    return (React.createElement(refine_mui_1.List, null,
        React.createElement(refine_mui_1.DataGrid, Object.assign({}, dataGridProps, { columns: columns, autoHeight: true }))));
};
exports.PostList = PostList;
//# sourceMappingURL=list.js.map