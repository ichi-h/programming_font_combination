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

interface ClickedShareButton {
  message: 'ClickedShareButton',
  media: Media
}

type Media = 'Twitter' | 'Facebook' | 'Pocket';

type Msg
  = ChangeFontSize
  | ChangeTheme
  | ClickedShareButton;


  
function useNavbarStore():
[
  number,
  Theme,
  (msg: Msg) => void
]
{
  const fontSize = useContext(FontSizeContext);
  const theme = useContext(ThemeContext);

  const updateNavbar = (msg: Msg) => {
    switch (msg.message) {
      case 'ChangeFontSize':
        const newFontSize = msg.newFontSize;
        fontSize.setValue(newFontSize);
        break;
      
      case 'ChangeTheme':
        const newTheme = msg.newTheme;
        theme.setValue(newTheme);
        break;
      
      case 'ClickedShareButton':
        const media = msg.media;

        const title = document.title;
        const pageURL = window.location.href;

        let shareURL: string;

        switch (media) {
          case 'Twitter':
            shareURL = `https://twitter.com/share?ref_src=${pageURL}&text=${title}`;
            break;
          case 'Facebook':
            shareURL = `http://www.facebook.com/sharer.php?u=${pageURL}&t=${title}`;
            break;
          case 'Pocket':
            shareURL = `http://getpocket.com/edit?url=${pageURL}&title=${title}`;
            break;
        }

        window.open(shareURL);

        break;
    }
  };

  return [fontSize.value, theme.value, updateNavbar];
}

export default useNavbarStore;
