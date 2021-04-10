import React from "react";
import { Tooltip } from "@chakra-ui/react";

import { Lang } from "../TypeAliases";

function FavoriteBtn(props: {
  index: number;
  lang: Lang;
  favValue: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}): JSX.Element {
  return (
    <Tooltip label="Favorite!" placement="top">
      <label htmlFor={`${props.lang}-fav-${props.index}`}>
        <input
          className="fav-button"
          data-testid={`fav-button-${props.index}`}
          id={`${props.lang}-fav-${props.index}`}
          type="checkbox"
          name="favrite"
          value={props.index}
          defaultChecked={props.favValue}
          onChange={props.onChange}
        />
        <i id={`${props.lang}fav-icon-${props.index}`} className="icon-heart" />
      </label>
    </Tooltip>
  );
}

export default FavoriteBtn;
