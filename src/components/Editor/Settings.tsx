import { Grid, GridItem } from "@chakra-ui/react";
import { Select } from "@chakra-ui/react"
import {
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
} from "@chakra-ui/react"

interface SettingsProps {
  theme: string,
  fontSize: number,
  setTheme: React.Dispatch<React.SetStateAction<string>>,
  setFontSize: React.Dispatch<React.SetStateAction<number>>
}

function Settings(props: SettingsProps) {
  return (
    <div className="settings">
      <Grid
        templateRows="repeat(1, 1fr)"
        templateColumns="repeat(15, 1fr)"
        gap={5}
      >
        <GridItem colSpan={1}>
          <p>Font Size</p>
        </GridItem>
        <GridItem colSpan={2}>
          <NumberInput defaultValue={16} min={1}>
            <NumberInputField />
            <NumberInputStepper>
              <NumberIncrementStepper />
              <NumberDecrementStepper />
            </NumberInputStepper>
          </NumberInput>
        </GridItem>

        <GridItem colSpan={1}>
          <p>Theme</p>
        </GridItem>
        <GridItem colSpan={2}>
          <Select
            className="selector theme"
            defaultValue="base16-dark"
            onChange={(e) => props.setTheme(e.target.value)}
          >
            <option value="base16-dark">base16-dark</option>
            <option value="base16-light">base16-light</option>
          </Select>
        </GridItem>
      </Grid>
    </div>
  );
}

export default Settings;
