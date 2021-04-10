import React, { useState, useRef } from 'react';

import { Theme } from './Editor/TypeAliases';
import FontSelector from './Editor/FontSelector';
import Navbar from './Editor/Navbar';
import GridCodeMirror from './Editor/GridCodeMirror';

import './Editor.css';
import { getFontJson } from './Editor/FontSelector/font.json';

interface ThemeState {
  value: Theme,
  setValue: React.Dispatch<React.SetStateAction<Theme>>
}

interface FontSizeState {
  value: number,
  setValue: React.Dispatch<React.SetStateAction<number>>
}

interface CurrentFontState {
  value: { eng: string, jpn: string, reverse: boolean },
  setValue: React.Dispatch<React.SetStateAction<{ eng: string, jpn: string, reverse: boolean }>>
}

export const ThemeContext = React.createContext<ThemeState | undefined>(undefined);
export const FontSizeContext = React.createContext<FontSizeState | undefined>(undefined);
export const CurrentFontContext = React.createContext<CurrentFontState | undefined>(undefined);
export const CodeMirrorRefContext = 
  React.createContext<React.MutableRefObject<HTMLInputElement> | undefined>(undefined);

function Editor() {
  const value = TextValue();

  const initialEngFont = getFontJson('eng')[0].name;
  const initialJpnFont = getFontJson('jpn')[0].name;

  const [theme, setTheme] = useState('base16-dark' as Theme);
  const [fontSize, setFontSize] = useState(20);
  const [currentFont, setCurrentFont] = useState({
    eng: initialEngFont,
    jpn: initialJpnFont,
    reverse: false
  });

  const codeMirrorRef = useRef() as React.MutableRefObject<HTMLInputElement>;

  return (
    <div className="editor">
      <div className="grid">

        <ThemeContext.Provider value={{ value: theme, setValue: setTheme }}>
        <FontSizeContext.Provider value={{ value: fontSize, setValue: setFontSize }}>
        <CurrentFontContext.Provider value={{ value: currentFont, setValue: setCurrentFont }}>
        <CodeMirrorRefContext.Provider value={codeMirrorRef}>

          <div className="left">
            <FontSelector />
          </div>

          <div className="right">
            <Navbar />
            <GridCodeMirror
              fontSize={fontSize}
              codeMirrorRef={codeMirrorRef}
              textValue={value}
              theme={theme}
            />
          </div>

        </CodeMirrorRefContext.Provider>
        </CurrentFontContext.Provider>
        </FontSizeContext.Provider>
        </ThemeContext.Provider>

      </div>
    </div>
  );
}

function TextValue(): string {
  return `<!DOCTYPE html>
<html lang="ja">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>カウントボタン</title>
</head>
<body>
  <div class="counter">
    <h1>カウンターデモ</h1>
    <input class="plus" type="button" value="+" onclick="counter.increment();" />
    <div class="count" id="count">0</div>
    <input class="minus" type="button" value="-" onclick="counter.decrement();" />
  </div>

  <script>
    console.log("紛らわしい文字: 0Oo 1iIl rnm gq9 エ工 ー一");

    console.log("リガチャ: -> => == != === !== <= >= && ||");

    let counter = {
      value: 0,
      elm: document.getElementById("count"),
      increment: function() {
        // 1クリックごとに1増加
        this.value++;
        this.elm.innerText = this.value;
      },
      decrement: function() {
        // 1クリックごとに1減少
        this.value--;
        this.elm.innerText = this.value;
      }
    };
  </script>
</body>
</html>`
}

export default Editor;
