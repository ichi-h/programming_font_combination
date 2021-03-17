import { useState, useContext, useRef } from 'react';

import { CurrentFontContext, CurrentFontState } from '../Editor';
import { fontListJson, FontInfo, getFontJson } from '../../assets/json/fontlist.json';

export type Action = 'updateCurrentFont' | 'updateFavValue' | 'sortItems';

interface UpdateProps {
  fontName?: string,
  index?: number
}

function useStore(lang: string):
[
  CurrentFontState,
  React.MutableRefObject<HTMLInputElement>,
  FontInfo[],
  boolean[],
  (action: Action, props: UpdateProps) => void
]
{
  const currentFont = useContext(CurrentFontContext);
  const fontItemsRef = useRef() as React.MutableRefObject<HTMLInputElement>;

  const fontJson = getFontJson(lang);

  const favArray: boolean[] = Array(fontJson.length).fill(false)
  const [favValue, setfavValue] = useState(favArray);

  const update = (action: Action, props: UpdateProps) => {
    switch(action) {
      case 'updateCurrentFont':
        const fontName = props.fontName;

        let currentFontCopy = currentFont.value;

        let fontTitles = [];
        for (let font of fontListJson.eng) {
          fontTitles.push(font.name);
        }

        let fontIndex = fontTitles.indexOf(fontName);

        if (fontIndex !== -1) {
          currentFontCopy['eng'] = fontName;
        }
        else {
          currentFontCopy['jpn'] = fontName;
        }

        currentFont.setValue(currentFontCopy);

        let elem = document.getElementsByClassName("CodeMirror") as HTMLCollectionOf<HTMLElement>;
        elem[0].style.fontFamily = `"${currentFontCopy['eng']}", "${currentFontCopy['jpn']}"`;

        break;

      case 'updateFavValue':
        const i = props.index;

        let favValueCopy = favValue;
        favValueCopy[i] = !favValueCopy[i];
        setfavValue(favValueCopy);

        break;

      case 'sortItems':
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

        let sortedItems = liked.concat(unliked);
        fontItemsRef.current.innerHTML = '';

        for (let item of sortedItems) {
          fontItemsRef.current.appendChild(item);
        }

        break;
    }
  }

  return [currentFont, fontItemsRef, fontJson, favValue, update]
}

export default useStore;
