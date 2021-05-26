import React from "react";
import { Select } from "@chakra-ui/react";

import { Theme } from "../util/typeAliases";

function ThemeSelector(props: {
  theme: Theme;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}) {
  return (
    <div className="setting-item select">
      <Select
        data-testid="theme-selector"
        size="sm"
        isFullWidth={false}
        defaultValue={props.theme}
        onChange={props.onChange}
      >
        <option value="base16-dark">base16-dark</option>
        <option value="base16-light">base16-light</option>
      </Select>
    </div>
  );
}

export default ThemeSelector;
