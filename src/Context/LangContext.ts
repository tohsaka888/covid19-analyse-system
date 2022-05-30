import { createContext } from "react";
import { LangContextProps } from "../type";

export const LangContext = createContext<LangContextProps | null>(null)