import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";

import { Theme } from '../TypeAliases';
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

jest.mock('../Navbar', () => {
  return function DummyNavbar() {
    return <div className="navbar"></div>
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


it('change current font', () => {
  render(<Editor />, container);

  const font = { number: 48, name: "Victor Mono" };

  const codeMirrorDiv =
    container.querySelector('[data-testid="right-codemirror"]') as HTMLDivElement;
  const radioDiv =
    container.querySelector(`[data-testid="radio-${font.number}"]`);
  const radio = radioDiv.children[0];

  act(() => {
    radio.dispatchEvent(new MouseEvent('click', { bubbles: true }));
  })
  expect(
    codeMirrorDiv.style.fontFamily
  ).toEqual(`"${font.name}", "Cica"`);
})
