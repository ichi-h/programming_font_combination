import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";

import { Theme } from '../TypeAliases';
import Editor from '../../Editor';
import { fireEvent } from "@testing-library/dom";

jest.mock('../GridCodeMirror', () => {
  return function DummyGridCodeMirror
  (
    props: {
      fontSize: number,
      codeMirrorRef: React.MutableRefObject<HTMLInputElement>,
      textValue: string,
      theme: Theme }
  ) {
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
    )
  }
})

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


it('click ReverseButton', () => {
  render(<Editor />, container);

  const button =
    container.querySelector('[data-testid="reverse-button"]');
  const codeMirrorDiv =
    container.querySelector('[data-testid="right-codemirror"]') as HTMLDivElement;

  act(() => {
    button.dispatchEvent(new MouseEvent('click', { bubbles: true }));
  })
  expect(
    codeMirrorDiv.style.fontFamily
  ).toEqual('"Cica", "agave"');
})


it('change FontSize', () => {
  render(<Editor />, container);

  const fontSizeDiv =
    container.querySelector('[data-testid="right-fontsize"]') as HTMLDivElement;
  const inputDiv =
    container.querySelector('[data-testid="fontsize-input"]') as HTMLDivElement;
  const input = inputDiv.children[0] as HTMLInputElement;

  act(() => {
    fireEvent.change(input, { target: { value: '19' } });
  })
  expect(
    fontSizeDiv.style.fontSize
  ).toEqual('19px');
})