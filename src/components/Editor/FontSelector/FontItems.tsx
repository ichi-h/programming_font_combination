import React from "react";
import { Radio, RadioGroup, Button, Tooltip } from "@chakra-ui/react";

import useFontItemsModel from "./useFontItemsModel";
import { Lang } from "../util/typeAliases";
import FavoriteBtn from "./FavoriteBtn";

import "./FontItems.css";

function FontItems(props: { lang: Lang }): JSX.Element {
  const lang = props.lang;
  const [
    currentFontValue,
    fontItemsRef,
    fontJson,
    favValue,
    updateFontItems,
  ] = useFontItemsModel(lang);

  const handleCurrentFont = (e: string) => {
    updateFontItems({
      message: "UpdateCurrentFont",
      fontName: e,
    });
  };

  const handleClickFavBtn = (e: React.ChangeEvent<HTMLInputElement>) => {
    updateFontItems({
      message: "UpdateFavValue",
      itemIndex: Number(e.target.value),
    });
    updateFontItems({ message: "SortItems" });
  };

  const handleOpenLink = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    window.open(e.currentTarget.value);
  };

  const iter = [...Array<number>(fontJson.length)].map((_, i) => i);

  return (
    <div className={lang + "-font-items"}>
      <RadioGroup
        defaultValue={currentFontValue}
        onChange={handleCurrentFont}
        ref={fontItemsRef}
      >
        {iter.map((i) => {
          return (
            <div className={`${lang}-font-item-${i}`} key={i}>
              <div className="font-info">
                <div className="font-name" data-testid={`radio-${i}`}>
                  <Radio value={fontJson[i].name} name={lang + "-radio"}>
                    <span style={{ fontFamily: `'${fontJson[i].name}'` }}>
                      {fontJson[i].name}
                    </span>
                  </Radio>
                </div>

                <p className="author">by {fontJson[i].author}</p>
              </div>

              <div className="buttons">
                <Tooltip label={fontJson[i].license} placement="top">
                  <Button
                    className="font-license"
                    variant="link"
                    value={fontJson[i].license_link}
                    onClick={handleOpenLink}
                  >
                    <i className="icon-id-card-o" />
                  </Button>
                </Tooltip>

                <Tooltip label={fontJson[i].website} placement="top">
                  <Button
                    className="font-link"
                    variant="link"
                    value={fontJson[i].website}
                    onClick={handleOpenLink}
                  >
                    <i className="icon-link" />
                  </Button>
                </Tooltip>

                <FavoriteBtn
                  index={i}
                  lang={lang}
                  favValue={favValue[i]}
                  onChange={handleClickFavBtn}
                />
              </div>
            </div>
          );
        })}
      </RadioGroup>
    </div>
  );
}

export default FontItems;
