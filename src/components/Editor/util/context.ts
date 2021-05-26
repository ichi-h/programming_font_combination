import React from "react";
import { Theme, CurrentFont, CodeMirrorElement} from "./TypeAliases";

interface ThemeState {
  value: Theme;
  setValue: React.Dispatch<React.SetStateAction<Theme>>;
}

interface FontSizeState {
  value: number;
  setValue: React.Dispatch<React.SetStateAction<number>>;
}

interface CurrentFontState {
  value: CurrentFont;
  setValue: React.Dispatch<React.SetStateAction<CurrentFont>>;
}

export const ThemeContext = React.createContext<ThemeState | undefined>(
  undefined
);

export const FontSizeContext = React.createContext<FontSizeState | undefined>(
  undefined
);

export const CurrentFontContext = React.createContext<
  CurrentFontState | undefined
>(undefined);

export const CodeMirrorRefContext = React.createContext<
  React.MutableRefObject<CodeMirrorElement> | undefined
>(undefined);
