import { Select } from '@chakra-ui/react';
import { Button } from '@chakra-ui/react';
import {
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
} from '@chakra-ui/react';

import useSettingsStore from './useSettingsStore';
import { Theme } from '../TypeAliases';

import './Navbar.css';

function Navbar() {
  const [fontSizeValue, themeValue, updateSettings] = useSettingsStore();

  return (
    <div className="navbar">
      <div className="settings">

        <p className="setting-label">Font Size</p>
        <div className="setting-item">
          <NumberInput
            className="setting-item input"
            size="sm"
            value={fontSizeValue}
            min={1}
            onChange={(e) => { updateSettings({
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
            onChange={(e) => { updateSettings({
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
        <Button
          className="font-license"
          variant="link"
          onClick={() => { window.open('https://github.com/ippee/programming_fonts_combination') }}
        >
          <i className="icon-github-circled" />
        </Button>
      </div>

    </div>
  );
}

export default Navbar;
