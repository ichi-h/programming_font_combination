import { Grid, GridItem } from '@chakra-ui/react';
import { Select } from '@chakra-ui/react';
import { Center } from '@chakra-ui/react';
import {
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
} from '@chakra-ui/react';

import useSettingsStore from './useSettingsStore';
import { Theme } from '../TypeAliases';

import './Settings.css';

function Settings() {
  const [fontSizeValue, themeValue, updateSettings] = useSettingsStore();

  return (
    <div className="settings">
      <Grid
        templateRows="repeat(1, 1fr)"
        templateColumns="repeat(12, 1fr)"
        gap={5}
      >
        <GridItem colSpan={1}>
          <Center h="6vh">
            <p className="setting-item">Font Size</p>
          </Center>
        </GridItem>
        <GridItem colSpan={2}>
          <Center h="6vh">
            <NumberInput
              className="setting-item"
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
          </Center>
        </GridItem>

        <GridItem colSpan={1}>
          <Center h="6vh">
            <p className="setting-item">Theme</p>
          </Center>
        </GridItem>
        <GridItem colSpan={2}>
          <Center h="6vh">
            <Select
              size="sm"
              defaultValue={themeValue}
              onChange={(e) => { updateSettings({
                message: 'ChangeTheme',
                newTheme: e.target.value as Theme
              })}}
            >
              <option value="base16-dark">base16-dark</option>
              <option value="base16-light">base16-light</option>
            </Select>
          </Center>
        </GridItem>
      </Grid>
    </div>
  );
}

export default Settings;
