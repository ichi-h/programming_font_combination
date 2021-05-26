import React from "react";

import useNavbarModel from "./Navbar/useNavbarModel";
import { Theme } from "./util/typeAliases";
import ReverseBtn from "./Navbar/ReverseBtn";
import FontSizeInput from "./Navbar/FontSizeInput";
import ThemeSelector from "./Navbar/ThemeSelector";
import SocialBtns from "./Navbar/SocialBtns";

import "./Navbar.css";

/* Navbar */
function Navbar(): JSX.Element {
  const [
    revBtnChecked,
    fontSizeValue,
    themeValue,
    updateNavbar,
  ] = useNavbarModel();

  const handleRevBtn = (e: React.ChangeEvent<HTMLInputElement>) => {
    updateNavbar({
      message: "ClickedReverseButton",
      checked: e.currentTarget.checked,
    });
  };

  const handleFontSize = (e: string) => {
    updateNavbar({
      message: "ChangeFontSize",
      newFontSize: Number(e),
    });
  };

  const handleSelectTheme = (e: React.ChangeEvent<HTMLSelectElement>) => {
    updateNavbar({
      message: "ChangeTheme",
      newTheme: e.target.value as Theme,
    });
  };

  return (
    <div className="navbar">
      <div className="settings">
        <ReverseBtn checked={revBtnChecked} onChange={handleRevBtn} />

        <p className="setting-label">Font Size</p>
        <FontSizeInput fontSize={fontSizeValue} onChange={handleFontSize} />

        <p className="setting-label">Theme</p>
        <ThemeSelector theme={themeValue} onChange={handleSelectTheme} />
      </div>

      <SocialBtns />
    </div>
  );
}

export default Navbar;
