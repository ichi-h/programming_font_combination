import { useState, useContext, useRef } from 'react';

import { FontInfo, getFontJson } from './font.json';
import { Lang } from './FontSelector';
import {
  CurrentFontContext,
  CodeMirrorRefContext,
  CurrentFontState
} from '../../Editor';

interface UpdateCurrentFont {
  action: 'UpdateCurrentFont',
  fontName: string
}

interface UpdateFavValue {
  action: 'UpdateFavValue',
  itemIndex: number
}

interface SortItems {
  action: 'SortItems'
}

type Msg
  = UpdateCurrentFont
  | UpdateFavValue
  | SortItems;

function useStore(lang: Lang):
[
  CurrentFontState,
  React.MutableRefObject<HTMLInputElement>,
  FontInfo[],
  boolean[],
  (msg: Msg) => void
]
{
  const fontJson = getFontJson(lang);

  const favArray: boolean[] = Array(fontJson.length).fill(false);
  const [favValue, setfavValue] = useState(favArray);

  const currentFont = useContext(CurrentFontContext);
  const codeMirrorRef = useContext(CodeMirrorRefContext);

  const fontItemsRef = useRef() as React.MutableRefObject<HTMLInputElement>;

  const update = (msg: Msg) => {
    // Will run the function depending on the client's action.

    switch(msg.action) {
      case 'UpdateCurrentFont':
        const fontName = msg.fontName;

        let currentFontCopy = currentFont.value;
        currentFontCopy[lang] = fontName;
        currentFont.setValue(currentFontCopy);

        let elem = codeMirrorRef.current.children[0].children as HTMLCollectionOf<HTMLElement>;
          // Will reference the CodeMirror Element from the Virtual DOM.
        elem[0].style.fontFamily = `"${currentFontCopy['eng']}", "${currentFontCopy['jpn']}"`;

        break;

      case 'UpdateFavValue':
        const i = msg.itemIndex;

        let favValueCopy = favValue;
        favValueCopy[i] = !favValueCopy[i];
        setfavValue(favValueCopy);

        break;

      case 'SortItems':
        // Will sort the font items based on 'favValue'.
        // 'favValue' is a state to manage client's favorite
        // fonts, which are sorted at the top of the font items.

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
  };

  return [currentFont, fontItemsRef, fontJson, favValue, update];
}

export default useStore;
