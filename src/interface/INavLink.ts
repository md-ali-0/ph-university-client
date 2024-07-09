import { ReactNode } from "react";

export interface INavLink {
    key : string;
    label: ReactNode;
    children?: INavLink[]
}