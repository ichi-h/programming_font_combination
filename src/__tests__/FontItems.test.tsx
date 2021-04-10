import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";

import Editor from "../components/Editor";
import FavoriteBtn from "../components/Editor/FontSelector/FavoriteBtn";

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

it("change current font", () => {
  render(<Editor />, container);

  const font = { number: 48, name: "Victor Mono" };

  const codeMirrorDiv: HTMLDivElement = container.querySelector(
    '[data-testid="right-codemirror"]'
  );
  const radioDiv = container.querySelector(
    `[data-testid="radio-${font.number}"]`
  );
  const radio = radioDiv.children[0];

  act(() => {
    radio.dispatchEvent(new MouseEvent("click", { bubbles: true }));
  });
  expect(codeMirrorDiv.style.fontFamily).toEqual(`"${font.name}", "Cica"`);
});

it("click FavoriteBtn", () => {
  const index = 48;
  const onChange = jest.fn();
  render(
    <FavoriteBtn
      index={index}
      lang={"eng"}
      favValue={false}
      onChange={onChange}
    />,
    container
  );

  const favBtn = container.querySelector(`[data-testid="fav-button-${index}"]`);

  act(() => {
    favBtn.dispatchEvent(new MouseEvent("click", { bubbles: true }));
  });
  expect(onChange).toHaveBeenCalledTimes(1);
});
