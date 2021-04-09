import { Select } from '@chakra-ui/react';
import { Button } from '@chakra-ui/react';
import { Portal } from '@chakra-ui/react';
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverBody,
  PopoverArrow,
} from '@chakra-ui/react';
import {
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
} from '@chakra-ui/react';

import useNavbarModel, { Media } from './useNavbarModel';
import { Theme } from '../TypeAliases';

import './Navbar.css';



/* Navbar items */
export const ReverseBtn = 
(
  props: {
    checked: boolean,
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void }
) => {
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
}

export function FontSizeInput
(
  props: {
    fontSize: number,
    onChange: (e: string) => void }
) {
  return (
    <div className="setting-item">
      <NumberInput
        className="setting-item input"
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
  )
}

export function ThemeSelector
(
  props: {
    theme: Theme,
    onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void }
) {
  return (
    <div className="setting-item select">
      <Select
        size="sm"
        isFullWidth={false}
        defaultValue={props.theme}
        onChange={props.onChange}
      >
        <option value="base16-dark">base16-dark</option>
        <option value="base16-light">base16-light</option>
      </Select>
    </div>
  )
}

export function ShareBtn
(
  props: {
    media: Media,
    onClick: () => void }
) {
  let Icon;
  switch (props.media) {
    case 'Twitter':
      Icon = () => <i className="icon-twitter" />;
      break
    case 'Facebook':
      Icon = () => <i className="icon-facebook-official" />
      break
    case 'Pocket':
      Icon = () => <i className="icon-get-pocket" />
      break
  }

  return (
    <Button
      variant="link"
      onClick={props.onClick}
      width="3rem"
    >
      <Icon />
    </Button>
  )
}



/* Navbar */
function Navbar() {
  const [revBtnChecked, fontSizeValue, themeValue, updateNavbar] = useNavbarModel();

  const handleRevBtn = (e: React.ChangeEvent<HTMLInputElement>) => {
    updateNavbar({
      message: 'ClickedReverseButton',
      checked: e.currentTarget.checked
    });
  };

  const handleFontSize = (e: string) => {
    updateNavbar({
      message: 'ChangeFontSize',
      newFontSize: Number(e)
    })
  };

  const handleSelectTheme = (e: React.ChangeEvent<HTMLSelectElement>) => {
    updateNavbar({
      message: 'ChangeTheme',
      newTheme: e.target.value as Theme
    });
  };

  const handleTwitterBtn = () => { updateNavbar({
    message: 'ClickedShareButton',
    media: 'Twitter'
  })};

  const handleFacebookBtn = () => { updateNavbar({
    message: 'ClickedShareButton',
    media: 'Facebook'
  })};

  const handlePocketBtn = () => { updateNavbar({
    message: 'ClickedShareButton',
    media: 'Pocket'
  })};

  const handleGitHubBtn = () => {
    window.open('https://github.com/ippee/programming_fonts_combination')
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
                  <ShareBtn media="Twitter" onClick={handleTwitterBtn} />
                  <ShareBtn media="Facebook" onClick={handleFacebookBtn} />
                  <ShareBtn media="Pocket" onClick={handlePocketBtn} />
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
