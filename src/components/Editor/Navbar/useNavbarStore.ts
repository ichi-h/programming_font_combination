import { useContext } from 'react';

import { Theme } from '../TypeAliases';
import {
  FontSizeContext,
  ThemeContext
} from '../../Editor';



interface ChangeFontSize {
  message: 'ChangeFontSize',
  newFontSize: number
}

interface ChangeTheme {
  message: 'ChangeTheme',
  newTheme: Theme,
}

type Msg
  = ChangeFontSize
  | ChangeTheme;


  
function useNavbarStore():
[
  number,
  Theme,
  (msg: Msg) => void
]
{
  const fontSize = useContext(FontSizeContext);
  const theme = useContext(ThemeContext);

  const updateSettings = (msg: Msg) => {
    switch (msg.message) {
      case 'ChangeFontSize':
        const newFontSize = msg.newFontSize;
        fontSize.setValue(newFontSize);
        break;
      
      case 'ChangeTheme':
        const newTheme = msg.newTheme;
        theme.setValue(newTheme);
        break;
    }
  };

  return [fontSize.value, theme.value, updateSettings];
}

export default useNavbarStore;
