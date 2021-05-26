import React from "react";

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

export default ReverseBtn;
