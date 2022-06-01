import { createContext } from "react";
import { ModeContextProps } from "../type";

export const ModeContext = createContext<ModeContextProps | null>(null)