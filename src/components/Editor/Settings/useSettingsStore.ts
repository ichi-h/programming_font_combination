import { useContext } from 'react';

import { Theme } from '../TypeAliases';
import {
  FontSizeContext,
  ThemeContext
} from '../../Editor';

interface ChangeFontSize {
  message: 'ChangeFontSize',
  fontSize: number
}

interface ChangeTheme {
  message: 'ChangeTheme',
  theme: string,
}

type Msg
  = ChangeFontSize
  | ChangeTheme;

function useSettingsStore():
[
  number,
  string,
  (msg: Msg) => void
]
{
  const fontSize = useContext(FontSizeContext);
  const theme = useContext(ThemeContext);

  const updateSettings = (msg: Msg) => {
    switch (msg.message) {
      case 'ChangeFontSize':
        break;
      
      case 'ChangeTheme':
        break;
    }
  };

  return [fontSize.value, theme.value, updateSettings];
}

export default useSettingsStore;
