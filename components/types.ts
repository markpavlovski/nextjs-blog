import {Dispatch, SetStateAction} from "react";

export interface LayoutProps {
 home?: boolean;
}

export interface NavProps {
 activePage: string;
 setActivePage: Dispatch<SetStateAction<string>>;
 pages: string[];
}