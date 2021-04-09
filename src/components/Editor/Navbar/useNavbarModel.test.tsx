import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";

import { Theme } from '../TypeAliases';
import { ReverseBtn, FontSizeInput, ThemeSelector, ShareBtn } from './Navbar';
import Editor from '../../Editor';

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

it('render Editor & click ReverseButton', () => {
  const onChange = jest.fn();
  render(
    <>
      <Editor />
      <ReverseBtn checked={false} onChange={onChange} />
    </>,
    container
  );

  const button = container.querySelector('[data-testid="reverse-button"]');
  const codeMirrorDiv =
    container.querySelector('[data-testid="right-codemirror"]') as HTMLDivElement;

  act(() => {
    button.dispatchEvent(new MouseEvent('click', { bubbles: true }));
  })
  expect(
    codeMirrorDiv.style.fontFamily
  ).toEqual('"Cica", "agave"');
})