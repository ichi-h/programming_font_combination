import React, { useState, useContext, useRef, useCallback } from 'react';

import { FontInfo, getFontJson } from './font.json';
import { Lang } from '../TypeAliases';
import {
  CurrentFontContext,
  CodeMirrorRefContext
} from '../../Editor';

interface UpdateCurrentFont {
  message: 'UpdateCurrentFont',
  fontName: string
}

interface UpdateFavValue {
  message: 'UpdateFavValue',
  itemIndex: number
}

interface SortItems {
  message: 'SortItems'
}

type Msg
  = UpdateCurrentFont
  | UpdateFavValue
  | SortItems;

function useFontItemsModel(lang: Lang):
[
  string,
  React.MutableRefObject<HTMLInputElement>,
  FontInfo[],
  boolean[],
  (msg: Msg) => void
]
{
  const fontJson = getFontJson(lang);

  const favArray: boolean[] = Array<boolean>(fontJson.length).fill(false);
  const [favValue, setfavValue] = useState(favArray);

  const currentFont = useContext(CurrentFontContext);
  const codeMirrorRef = useContext(CodeMirrorRefContext);

  const fontItemsRef: React.MutableRefObject<HTMLInputElement> = useRef();

  const updateFontItems = useCallback((msg: Msg) => {
    // Will update the FontItems component depending on the client's action.

    switch(msg.message) {
      case 'UpdateCurrentFont':
        const fontName = msg.fontName;

        const currentFontCopy = currentFont.value;
        currentFontCopy[lang] = fontName;
        currentFont.setValue(currentFontCopy);

        const k = ['eng', 'jpn'] as Lang[];
        if (currentFontCopy.reverse) k.reverse();

        const elem = codeMirrorRef.current.children[0].children as HTMLCollectionOf<HTMLElement>;
          // Will reference the CodeMirror Element from the Virtual DOM.
        elem[0].style.fontFamily = `"${currentFontCopy[k[0]]}", "${currentFontCopy[k[1]]}"`;

        break;

      case 'UpdateFavValue':
        const i = msg.itemIndex;

        const favValueCopy = favValue;
        favValueCopy[i] = !favValueCopy[i];
        setfavValue(favValueCopy);

        break;

      case 'SortItems':
        // Will sort the font items based on 'favValue'.
        // 'favValue' is a state to manage client's favorite
        // fonts, which are sorted at the top of the font items.

        const liked = [];
        const unliked = [];

        for (let i=0; i < favValue.length; i++) {
          const elem = 
            fontItemsRef.current.getElementsByClassName(
              `${lang}-font-item-${i}`
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

        for (const item of sortedItems) {
          fontItemsRef.current.appendChild(item);
        }

        break;
    }
  }, [lang, favValue, currentFont, codeMirrorRef, fontItemsRef]);

  return [currentFont.value[lang], fontItemsRef, fontJson, favValue, updateFontItems];
}

export default useFontItemsModel;
