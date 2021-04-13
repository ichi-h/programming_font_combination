// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import React from "react";
import "@testing-library/jest-dom";

import { Theme } from "./components/Editor/TypeAliases";

jest.mock("./components/Editor/GridCodeMirror", () => {
  return function DummyGridCodeMirror(props: {
    fontSize: number;
    codeMirrorRef: React.MutableRefObject<HTMLInputElement>;
    textValue: string;
    theme: Theme;
  }) {
    return (
      <div
        style={{ fontSize: props.fontSize }}
        ref={props.codeMirrorRef}
        data-testid="right-fontsize"
      >
        <div className="react-codemirror2">
          <div
            className={`CodeMirror cm-s-${props.theme}`}
            data-testid="right-codemirror"
          />
        </div>
      </div>
    );
  };
});
