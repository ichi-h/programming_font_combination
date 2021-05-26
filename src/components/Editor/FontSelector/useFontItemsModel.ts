import React, { useState, useContext, useRef } from "react";

import { FontInfo, getFontJson } from "./font.json";
import { Lang } from "../util/typeAliases";
import { CurrentFontContext, CodeMirrorRefContext, IsReverseContext } from "../../Editor/util/context";
import "../util/HTMLDivElem.extensions";

interface UpdateCurrentFont {
  message: "UpdateCurrentFont";
  fontName: string;
}

interface UpdateFavValue {
  message: "UpdateFavValue";
  itemIndex: number;
}

interface SortItems {
  message: "SortItems";
}

type Msg = UpdateCurrentFont | UpdateFavValue | SortItems;

function useFontItemsModel(
  lang: Lang
): [
  string,
  React.MutableRefObject<HTMLDivElement>,
  FontInfo[],
  boolean[],
  (msg: Msg) => void
] {
  const fontJson = getFontJson(lang);

  const favArray: boolean[] = Array<boolean>(fontJson.length).fill(false);
  const [favValue, setfavValue] = useState(favArray);

  const currentFont = useContext(CurrentFontContext);
  const isReverse = useContext(IsReverseContext);
  const codeMirrorRef = useContext(CodeMirrorRefContext);

  const fontItemsRef: React.MutableRefObject<HTMLDivElement> = useRef();

  const updateFontItems = (msg: Msg) => {
    // Will update the FontItems component depending on the client's action.

    switch (msg.message) {
      case "UpdateCurrentFont":
        const fontName = msg.fontName;

        const currentFontCopy = currentFont.value;
        currentFontCopy[lang] = fontName;
        currentFont.setValue(currentFontCopy);

        codeMirrorRef.current.updateFont(currentFontCopy, isReverse.value);

        break;

      case "UpdateFavValue":
        const i = msg.itemIndex;

        const favValueCopy = favValue;
        favValueCopy[i] = !favValueCopy[i];
        setfavValue(favValueCopy);

        break;

      case "SortItems":
        // Will sort the font items based on 'favValue'.
        // 'favValue' is a state to manage client's favorite
        // fonts, which are sorted at the top of the font items.

        const liked = [];
        const unliked = [];

        for (let i = 0; i < favValue.length; i++) {
          const elem = fontItemsRef.current.getElementsByClassName(
            `${lang}-font-item-${i}`
          )[0];

          if (favValue[i]) {
            liked.push(elem);
          } else {
            unliked.push(elem);
          }
        }

        const sortedItems = liked.concat(unliked);
        fontItemsRef.current.innerHTML = "";

        for (const item of sortedItems) {
          fontItemsRef.current.appendChild(item);
        }

        break;
    }
  };

  return [
    currentFont.value[lang],
    fontItemsRef,
    fontJson,
    favValue,
    updateFontItems,
  ];
}

export default useFontItemsModel;
