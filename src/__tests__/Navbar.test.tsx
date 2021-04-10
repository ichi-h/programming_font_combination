import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import { fireEvent, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import Editor from "../components/Editor";

let container: HTMLDivElement;
beforeEach(() => {
  // setup a DOM element as a render target
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  // cleanup on exiting
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

it("click ReverseButton", () => {
  render(<Editor />, container);

  const button = container.querySelector('[data-testid="reverse-button"]');
  const codeMirrorDiv: HTMLDivElement = container.querySelector(
    '[data-testid="right-codemirror"]'
  );

  act(() => {
    button.dispatchEvent(new MouseEvent("click", { bubbles: true }));
  });
  expect(codeMirrorDiv.style.fontFamily).toEqual('"Cica", "agave"');
});

it("change FontSize", () => {
  render(<Editor />, container);

  const fontSizeDiv: HTMLDivElement = container.querySelector(
    '[data-testid="right-fontsize"]'
  );
  const inputDiv = container.querySelector('[data-testid="fontsize-input"]');
  const input = inputDiv.children[0] as HTMLInputElement;

  act(() => {
    fireEvent.change(input, { target: { value: "19" } });
  });
  expect(fontSizeDiv.style.fontSize).toEqual("19px");
});

it("change theme", () => {
  render(<Editor />, container);

  const codeMirrorDiv = container.querySelector(
    '[data-testid="right-codemirror"]'
  );

  act(() => {
    userEvent.selectOptions(
      screen.getByTestId("theme-selector"),
      "base16-light"
    );
  });
  expect(codeMirrorDiv.className).toEqual("CodeMirror cm-s-base16-light");
});
