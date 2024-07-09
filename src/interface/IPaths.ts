import { ReactNode } from "react";

export interface IPaths {
    index?: boolean;
    name: string;
    path?: string;
    element?: ReactNode;
    children?: IPaths[]
}