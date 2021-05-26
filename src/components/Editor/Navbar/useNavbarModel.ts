import { useContext } from "react";

import { Theme } from "../util/typeAliases";
import {
  CurrentFontContext,
  IsReverseContext,
  CodeMirrorRefContext,
  FontSizeContext,
  ThemeContext,
} from "../../Editor/util/context";
import "../util/HTMLDivElem.extensions";

interface ClickedReverseButton {
  message: "ClickedReverseButton";
  checked: boolean;
}

interface ChangeFontSize {
  message: "ChangeFontSize";
  newFontSize: number;
}

interface ChangeTheme {
  message: "ChangeTheme";
  newTheme: Theme;
}

type Msg = ClickedReverseButton | ChangeFontSize | ChangeTheme;

function useNavbarModel(): [boolean, number, Theme, (msg: Msg) => void] {
  const currentFont = useContext(CurrentFontContext);
  const isReverse = useContext(IsReverseContext);
  const codeMirrorRef = useContext(CodeMirrorRefContext);
  const fontSize = useContext(FontSizeContext);
  const theme = useContext(ThemeContext);

  const updateNavbar = (msg: Msg) => {
    switch (msg.message) {
      case "ClickedReverseButton":
        const checked = msg.checked;

        let isReverseCopy = isReverse.value;
        isReverseCopy = checked;
        isReverse.setValue(isReverseCopy);

        codeMirrorRef.current.updateFont(currentFont.value, isReverseCopy);

        break;

      case "ChangeFontSize":
        const newFontSize = msg.newFontSize;
        fontSize.setValue(newFontSize);
        break;

      case "ChangeTheme":
        const newTheme = msg.newTheme;
        theme.setValue(newTheme);
        break;
    }
  };

  return [isReverse.value, fontSize.value, theme.value, updateNavbar];
}

export default useNavbarModel;
