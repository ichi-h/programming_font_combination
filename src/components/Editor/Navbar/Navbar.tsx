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

import useNavbarModel from './useNavbarModel';
import { Theme } from '../TypeAliases';

import './Navbar.css';

function Navbar() {
  const [revBtnChecked, fontSizeValue, themeValue, updateNavbar] = useNavbarModel();

  const handleTwitterBtn = () => { updateNavbar({
    message: 'ClickedShareButton',
    media: 'Twitter'
  })}
  const handleFacebookBtn = () => { updateNavbar({
    message: 'ClickedShareButton',
    media: 'Facebook'
  })}
  const handlePocketBtn = () => { updateNavbar({
    message: 'ClickedShareButton',
    media: 'Pocket'
  })}
  const handleGitHubBtn = () => {
    window.open('https://github.com/ippee/programming_fonts_combination')
  };

  return (
    <div className="navbar">
      <div className="settings">

        <div className="settings-item reverse">
          <label htmlFor="reverse-button">
            <input
              className="reverse-button"
              id="reverse-button"
              type="checkbox"
              name="reverse"
              defaultChecked={revBtnChecked}
              onClick={(e) => { updateNavbar({
                message: 'ClickedReverseButton',
                checked: e.currentTarget.checked
              })}}
            />
            <i className="icon-arrows-cw" />
          </label>
        </div>
        
        <p className="setting-label">Font Size</p>
        <div className="setting-item">
          <NumberInput
            className="setting-item input"
            size="sm"
            value={fontSizeValue}
            min={1}
            onChange={(e) => { updateNavbar({
              message: 'ChangeFontSize',
              newFontSize: Number(e)
            })}}
          >
            <NumberInputField />
            <NumberInputStepper>
              <NumberIncrementStepper />
              <NumberDecrementStepper />
            </NumberInputStepper>
          </NumberInput>
        </div>

        <p className="setting-label">Theme</p>
        <div className="setting-item select">
          <Select
            size="sm"
            isFullWidth={false}
            defaultValue={themeValue}
            onChange={(e) => { updateNavbar({
              message: 'ChangeTheme',
              newTheme: e.target.value as Theme
            })}}
          >
            <option value="base16-dark">base16-dark</option>
            <option value="base16-light">base16-light</option>
          </Select>
        </div>
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
                  <Button
                    variant="link"
                    onClick={handleTwitterBtn}
                    width="3rem"
                  >
                    <i className="icon-twitter" />
                  </Button>
                  <Button
                    variant="link"
                    onClick={handleFacebookBtn}
                    width="3rem"
                  >
                    <i className="icon-facebook-official" />
                  </Button>
                  <Button
                    variant="link"
                    onClick={handlePocketBtn}
                    width="3rem"
                  >
                    <i className="icon-get-pocket" />
                  </Button>
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
