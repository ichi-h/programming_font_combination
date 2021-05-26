import React from "react";
import {
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
} from "@chakra-ui/react";

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

export default FontSizeInput;
