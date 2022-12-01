"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Sider = void 0;
const React = require("react");
const react_1 = require("react");
const refine_mui_1 = require("@pankod/refine-mui");
const icons_material_1 = require("@mui/icons-material");
const refine_core_1 = require("@pankod/refine-core");
const title_1 = require("../title");
const Sider = ({ render }) => {
    const [collapsed, setCollapsed] = (0, react_1.useState)(false);
    const [opened, setOpened] = (0, react_1.useState)(false);
    const drawerWidth = () => {
        if (collapsed)
            return 64;
        return 200;
    };
    const t = (0, refine_core_1.useTranslate)();
    const { Link } = (0, refine_core_1.useRouterContext)();
    const { hasDashboard } = (0, refine_core_1.useRefineContext)();
    const translate = (0, refine_core_1.useTranslate)();
    const { menuItems, selectedKey, defaultOpenKeys } = (0, refine_core_1.useMenu)();
    const isExistAuthentication = (0, refine_core_1.useIsExistAuthentication)();
    const { mutate: mutateLogout } = (0, refine_core_1.useLogout)();
    const Title = (0, refine_core_1.useTitle)();
    const [open, setOpen] = (0, react_1.useState)({});
    React.useEffect(() => {
        setOpen((previousOpen) => {
            const previousOpenKeys = Object.keys(previousOpen);
            const uniqueKeys = new Set([...previousOpenKeys, ...defaultOpenKeys]);
            const uniqueKeysRecord = Object.fromEntries(Array.from(uniqueKeys.values()).map((key) => [key, true]));
            return uniqueKeysRecord;
        });
    }, [defaultOpenKeys]);
    const RenderToTitle = Title !== null && Title !== void 0 ? Title : title_1.Title;
    const handleClick = (key) => {
        setOpen(Object.assign(Object.assign({}, open), { [key]: !open[key] }));
    };
    const renderTreeView = (tree, selectedKey) => {
        return tree.map((item) => {
            const { icon, label, route, name, children, parentName } = item;
            const isOpen = open[route || ""] || false;
            const isSelected = route === selectedKey;
            const isNested = !(parentName === undefined);
            if (children.length > 0) {
                return (React.createElement(refine_core_1.CanAccess, { key: route, resource: name.toLowerCase(), action: "list", params: {
                        resource: item,
                    } },
                    React.createElement("div", { key: route },
                        React.createElement(refine_mui_1.Tooltip, { title: label !== null && label !== void 0 ? label : name, placement: "right", disableHoverListener: !collapsed, arrow: true },
                            React.createElement(refine_mui_1.ListItemButton, { onClick: () => {
                                    if (collapsed) {
                                        setCollapsed(false);
                                        if (!isOpen) {
                                            handleClick(route || "");
                                        }
                                    }
                                    else {
                                        handleClick(route || "");
                                    }
                                }, sx: {
                                    pl: isNested ? 4 : 2,
                                    justifyContent: "center",
                                    "&.Mui-selected": {
                                        "&:hover": {
                                            backgroundColor: "transparent",
                                        },
                                        backgroundColor: "transparent",
                                    },
                                } },
                                React.createElement(refine_mui_1.ListItemIcon, { sx: {
                                        justifyContent: "center",
                                        minWidth: 36,
                                        color: "primary.contrastText",
                                    } }, icon !== null && icon !== void 0 ? icon : React.createElement(icons_material_1.ListOutlined, null)),
                                React.createElement(refine_mui_1.ListItemText, { primary: label, primaryTypographyProps: {
                                        noWrap: true,
                                        fontSize: "14px",
                                        fontWeight: isSelected ? "bold" : "normal",
                                    } }),
                                !collapsed && (isOpen ? React.createElement(icons_material_1.ExpandLess, null) : React.createElement(icons_material_1.ExpandMore, null)))),
                        !collapsed && (React.createElement(refine_mui_1.Collapse, { in: open[route || ""], timeout: "auto", unmountOnExit: true },
                            React.createElement(refine_mui_1.MuiList, { component: "div", disablePadding: true }, renderTreeView(children, selectedKey)))))));
            }
            return (React.createElement(refine_core_1.CanAccess, { key: route, resource: name.toLowerCase(), action: "list", params: { resource: item } },
                React.createElement(refine_mui_1.Tooltip, { title: label !== null && label !== void 0 ? label : name, placement: "right", disableHoverListener: !collapsed, arrow: true },
                    React.createElement(refine_mui_1.ListItemButton, { component: Link, to: route, selected: isSelected, onClick: () => {
                            setOpened(false);
                        }, sx: {
                            pl: isNested ? 4 : 2,
                            py: isNested ? 1.25 : 1,
                            "&.Mui-selected": {
                                "&:hover": {
                                    backgroundColor: "transparent",
                                },
                                backgroundColor: "transparent",
                            },
                            justifyContent: "center",
                        } },
                        React.createElement(refine_mui_1.ListItemIcon, { sx: {
                                justifyContent: "center",
                                minWidth: 36,
                                color: "primary.contrastText",
                            } }, icon !== null && icon !== void 0 ? icon : React.createElement(icons_material_1.ListOutlined, null)),
                        React.createElement(refine_mui_1.ListItemText, { primary: label, primaryTypographyProps: {
                                noWrap: true,
                                fontSize: "14px",
                                fontWeight: isSelected ? "bold" : "normal",
                            } })))));
        });
    };
    const dashboard = hasDashboard ? (React.createElement(refine_core_1.CanAccess, { resource: "dashboard", action: "list" },
        React.createElement(refine_mui_1.Tooltip, { title: translate("dashboard.title", "Dashboard"), placement: "right", disableHoverListener: !collapsed, arrow: true },
            React.createElement(refine_mui_1.ListItemButton, { component: Link, to: "/", selected: selectedKey === "/", onClick: () => {
                    setOpened(false);
                }, sx: {
                    pl: 2,
                    py: 1,
                    "&.Mui-selected": {
                        "&:hover": {
                            backgroundColor: "transparent",
                        },
                        backgroundColor: "transparent",
                    },
                    justifyContent: "center",
                } },
                React.createElement(refine_mui_1.ListItemIcon, { sx: {
                        justifyContent: "center",
                        minWidth: 36,
                        color: "primary.contrastText",
                    } },
                    React.createElement(icons_material_1.Dashboard, null)),
                React.createElement(refine_mui_1.ListItemText, { primary: translate("dashboard.title", "Dashboard"), primaryTypographyProps: {
                        noWrap: true,
                        fontSize: "14px",
                        fontWeight: selectedKey === "/" ? "bold" : "normal",
                    } }))))) : null;
    const logout = isExistAuthentication && (React.createElement(refine_mui_1.Tooltip, { title: t("buttons.logout", "Logout"), placement: "right", disableHoverListener: !collapsed, arrow: true },
        React.createElement(refine_mui_1.ListItemButton, { key: "logout", onClick: () => mutateLogout(), sx: { justifyContent: "center" } },
            React.createElement(refine_mui_1.ListItemIcon, { sx: {
                    justifyContent: "center",
                    minWidth: 36,
                    color: "primary.contrastText",
                } },
                React.createElement(icons_material_1.Logout, null)),
            React.createElement(refine_mui_1.ListItemText, { primary: t("buttons.logout", "Logout"), primaryTypographyProps: {
                    noWrap: true,
                    fontSize: "14px",
                } }))));
    const items = renderTreeView(menuItems, selectedKey);
    const renderSider = () => {
        if (render) {
            return render({
                dashboard,
                logout,
                items,
                collapsed,
            });
        }
        return (React.createElement(React.Fragment, null,
            dashboard,
            items,
            logout));
    };
    const drawer = (React.createElement(refine_mui_1.MuiList, { disablePadding: true, sx: { mt: 1, color: "primary.contrastText" } }, renderSider()));
    return (React.createElement(React.Fragment, null,
        React.createElement(refine_mui_1.Box, { sx: {
                width: { xs: drawerWidth() },
                display: {
                    xs: "none",
                    md: "block",
                },
                transition: "width 0.3s ease",
            } }),
        React.createElement(refine_mui_1.Box, { component: "nav", sx: {
                position: "fixed",
                zIndex: 1101,
                width: { sm: drawerWidth() },
                display: "flex",
            } },
            React.createElement(refine_mui_1.Drawer, { variant: "temporary", open: opened, onClose: () => setOpened(false), ModalProps: {
                    keepMounted: true, // Better open performance on mobile.
                }, sx: {
                    display: { sm: "block", md: "none" },
                    "& .MuiDrawer-paper": {
                        width: 256,
                        bgcolor: "secondary.main",
                    },
                } },
                React.createElement(refine_mui_1.Box, { sx: {
                        height: 64,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                    } },
                    React.createElement(RenderToTitle, { collapsed: false })),
                drawer),
            React.createElement(refine_mui_1.Drawer, { variant: "permanent", PaperProps: { elevation: 1 }, sx: {
                    display: { xs: "none", md: "block" },
                    "& .MuiDrawer-paper": {
                        width: drawerWidth,
                        bgcolor: "secondary.main",
                        overflow: "hidden",
                        transition: "width 200ms cubic-bezier(0.4, 0, 0.6, 1) 0ms",
                    },
                }, open: true },
                React.createElement(refine_mui_1.Box, { sx: {
                        height: 64,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                    } },
                    React.createElement(RenderToTitle, { collapsed: collapsed })),
                React.createElement(refine_mui_1.Box, { sx: {
                        flexGrow: 1,
                        overflowX: "hidden",
                        overflowY: "auto",
                    } }, drawer),
                React.createElement(refine_mui_1.Button, { sx: {
                        background: "rgba(0,0,0,.5)",
                        color: "primary.contrastText",
                        textAlign: "center",
                        borderRadius: 0,
                        borderTop: "1px solid #ffffff1a",
                    }, fullWidth: true, size: "large", onClick: () => setCollapsed((prev) => !prev) }, collapsed ? React.createElement(icons_material_1.ChevronRight, null) : React.createElement(icons_material_1.ChevronLeft, null))),
            React.createElement(refine_mui_1.Box, { sx: {
                    display: { xs: "block", md: "none" },
                    position: "fixed",
                    top: "64px",
                    left: "0px",
                    borderRadius: "0 6px 6px 0",
                    bgcolor: "secondary.main",
                    zIndex: 1199,
                    width: "36px",
                } },
                React.createElement(refine_mui_1.IconButton, { sx: { color: "#fff", width: "36px" }, onClick: () => setOpened((prev) => !prev) },
                    React.createElement(icons_material_1.MenuRounded, null))))));
};
exports.Sider = Sider;
//# sourceMappingURL=index.js.map