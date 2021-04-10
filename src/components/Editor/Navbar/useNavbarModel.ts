import { useContext, useCallback } from 'react';

import { Lang, Theme } from '../TypeAliases';
import {
  CurrentFontContext,
  CodeMirrorRefContext,
  FontSizeContext,
  ThemeContext
} from '../../Editor';



interface ClickedReverseButton {
  message: 'ClickedReverseButton',
  checked: boolean
}

interface ChangeFontSize {
  message: 'ChangeFontSize',
  newFontSize: number
}

interface ChangeTheme {
  message: 'ChangeTheme',
  newTheme: Theme,
}

type Msg
  = ClickedReverseButton
  | ChangeFontSize
  | ChangeTheme;



function useNavbarModel():
[
  boolean,
  number,
  Theme,
  (msg: Msg) => void
]
{
  const currentFont = useContext(CurrentFontContext);
  const codeMirrorRef = useContext(CodeMirrorRefContext);
  const fontSize = useContext(FontSizeContext);
  const theme = useContext(ThemeContext);

  const updateNavbar = useCallback((msg: Msg) => {
    switch (msg.message) {
      case 'ClickedReverseButton':
        const checked = msg.checked;

        const currentFontCopy = currentFont.value;
        currentFontCopy.reverse = checked;
        currentFont.setValue(currentFontCopy);

        const k = ['eng', 'jpn'] as Lang[];
        if (currentFontCopy.reverse) k.reverse();

        const elem = codeMirrorRef.current.children[0].children as HTMLCollectionOf<HTMLElement>;
          // Will reference the CodeMirror Element from the Virtual DOM.
        elem[0].style.fontFamily = `"${currentFontCopy[k[0]]}", "${currentFontCopy[k[1]]}"`;

        break;

      case 'ChangeFontSize':
        const newFontSize = msg.newFontSize;
        fontSize.setValue(newFontSize);
        break;
      
      case 'ChangeTheme':
        const newTheme = msg.newTheme;
        theme.setValue(newTheme);
        break;
    }
  }, [currentFont, codeMirrorRef, fontSize, theme]);

  return [currentFont.value.reverse, fontSize.value, theme.value, updateNavbar];
}

export default useNavbarModel;
