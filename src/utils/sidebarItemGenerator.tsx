import { NavLink } from "react-router-dom";
import { INavLink, IPaths } from "../interface";

export const sidebarItemsGenerator = (paths: IPaths[], role: string) => {
    const sidebarItems = paths.reduce((acc: INavLink[], item) => {
        if (item.path && item.element) {
            acc.push({
                key: item.name,
                label: (
                    <NavLink to={`/${role}/${item.path}`}>{item.name}</NavLink>
                ),
            });
        }
        if (item.children) {
            acc.push({
                key: item.name,
                label: item.name,
                children: item.children.map((child) => ({
                    key: child.name,
                    label: (
                        <NavLink to={`/${role}/${child.path}`}>
                            {child.name}
                        </NavLink>
                    ),
                })),
            });
        }
        return acc;
    }, []);
    return sidebarItems;
};
