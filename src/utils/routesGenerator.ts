import { IPaths, IRoute } from "../interface";

export const routesGenerator = (paths : IPaths[])=>{
    const routes = paths.reduce((acc : IRoute[], item) => {
        if (item.path && item.element) {
            acc.push({
                path: item.path,
                element: item.element,
            });
        }
        if (item.children) {
            item.children.forEach((child) => {
                acc.push({
                    path: child.path,
                    element: child.element,
                });
            });
        }
        return acc;
    }, []);
    return routes
}