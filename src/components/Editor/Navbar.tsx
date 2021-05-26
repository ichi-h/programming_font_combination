import React from "react";
import {
  Select,
  Button,
  Portal,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverBody,
  PopoverArrow,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
} from "@chakra-ui/react";

import useNavbarModel from "./Navbar/useNavbarModel";
import { Theme } from "./util/typeAliases";

import "./Navbar.css";

/* Navbar components*/
const ReverseBtn = (props: {
  checked: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}) => {
  return (
    <div className="settings-item reverse">
      <label htmlFor="reverse-button">
        <input
          className="reverse-button"
          id="reverse-button"
          data-testid="reverse-button"
          type="checkbox"
          name="reverse"
          defaultChecked={props.checked}
          onChange={props.onChange}
        />
        <i className="icon-arrows-cw" />
      </label>
    </div>
  );
};

function FontSizeInput(props: {
  fontSize: number;
  onChange: (e: string) => void;
}) {
  return (
    <div className="setting-item">
      <NumberInput
        className="setting-item input"
        data-testid="fontsize-input"
        size="sm"
        value={props.fontSize}
        min={1}
        onChange={props.onChange}
      >
        <NumberInputField />
        <NumberInputStepper>
          <NumberIncrementStepper />
          <NumberDecrementStepper />
        </NumberInputStepper>
      </NumberInput>
    </div>
  );
}

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

type Media = "Twitter" | "Facebook" | "Pocket";

function ShareBtn(props: { media: Media }) {
  let Icon: JSX.Element;
  let shareURL: string;
  const title = document.title;
  const pageURL = window.location.href;

  switch (props.media) {
    case "Twitter":
      Icon = <i className="icon-twitter" />;
      shareURL = `https://twitter.com/share?url=${pageURL}&text=${title}`;
      break;
    case "Facebook":
      Icon = <i className="icon-facebook-official" />;
      shareURL = `http://www.facebook.com/sharer.php?u=${pageURL}&t=${title}`;
      break;
    case "Pocket":
      Icon = <i className="icon-get-pocket" />;
      shareURL = `http://getpocket.com/edit?url=${pageURL}&title=${title}`;
      break;
  }

  const handleClick = () => window.open(shareURL);

  return (
    <Button variant="link" onClick={handleClick} width="3rem">
      {Icon}
    </Button>
  );
}

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

  const handleGitHubBtn = () => {
    window.open("https://github.com/ippee/programming_fonts_combination");
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

      <div className="social-buttons">
        <Popover placement="bottom-start">
          <PopoverTrigger>
            <Button className="share-button" variant="link">
              <i className="icon-share" />
            </Button>
          </PopoverTrigger>
          <Portal>
            <PopoverContent>
              <PopoverArrow />
              <PopoverBody>
                <div className="share-popver-body">
                  <ShareBtn media="Twitter" />
                  <ShareBtn media="Facebook" />
                  <ShareBtn media="Pocket" />
                </div>
              </PopoverBody>
            </PopoverContent>
          </Portal>
        </Popover>
        <Button
          className="github-button"
          variant="link"
          onClick={handleGitHubBtn}
        >
          <i className="icon-github-circled" />
        </Button>
      </div>
    </div>
  );
}

export default Navbar;
