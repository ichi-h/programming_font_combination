import { useState, useContext, useRef } from 'react';

import { Lang } from './FontSelector';
import { CurrentFontContext, CurrentFontState } from '../Editor';
import { FontInfo, getFontJson } from '../../assets/json/fontlist.json';

export type Action = 'updateCurrentFont' | 'updateFavValue' | 'sortItems';

interface UpdateProps {
  fontName?: string,
  itemIndex?: number
}

function useStore(lang: Lang):
[
  CurrentFontState,
  React.MutableRefObject<HTMLInputElement>,
  FontInfo[],
  boolean[],
  (action: Action, props?: UpdateProps) => void
]
{
  const fontItemsRef = useRef() as React.MutableRefObject<HTMLInputElement>;

  const fontJson = getFontJson(lang);

  const favArray: boolean[] = Array(fontJson.length).fill(false)
  const [favValue, setfavValue] = useState(favArray);

  const currentFont = useContext(CurrentFontContext);

  const update = (action: Action, props?: UpdateProps) => {
    // Will run the function depending on the client's action.

    switch(action) {
      case 'updateCurrentFont':
        const fontName = props.fontName;

        let currentFontCopy = currentFont.value;
        currentFontCopy[lang] = fontName;
        currentFont.setValue(currentFontCopy);

        let elem = document.getElementsByClassName("CodeMirror") as HTMLCollectionOf<HTMLElement>;
        elem[0].style.fontFamily = `"${currentFontCopy['eng']}", "${currentFontCopy['jpn']}"`;

        break;

      case 'updateFavValue':
        const i = props.itemIndex;

        let favValueCopy = favValue;
        favValueCopy[i] = !favValueCopy[i];
        setfavValue(favValueCopy);

        break;

      case 'sortItems':
        // Will sort fonts list based on 'favValue'.
        // 'favValue' is a state to manage client's favorite
        // fonts, which are sorted at the top of the fonts list.

        let liked = [];
        let unliked = [];

        for (let i=0; i < favValue.length; i++) {
          let elem = 
            fontItemsRef.current.getElementsByClassName(
              lang + '-font-item-' + i
            )[0];

          if (favValue[i]) {
            liked.push(elem);
          }
          else {
            unliked.push(elem);
          }
        }

        const sortedItems = liked.concat(unliked);
        fontItemsRef.current.innerHTML = '';

        for (let item of sortedItems) {
          fontItemsRef.current.appendChild(item);
        }

        break;
    }
  }

  return [currentFont, fontItemsRef, fontJson, favValue, update];
}

export default useStore;
