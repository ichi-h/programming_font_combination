import { useState } from 'react';
import { Controlled as CodeMirror } from 'react-codemirror2';
import { Grid, GridItem } from "@chakra-ui/react";

import './Editor.css';
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/base16-dark.css';
import 'codemirror/theme/base16-light.css';

import FontSelector from './Editor/FontSelector';
import Settings from './Editor/Settings';

require('codemirror/mode/javascript/javascript.js');

function Editor() {
  const [value, setValue] = useState('console.log("Hello!");');
  const [currentFont, setCurrentFont] = useState([0, 0]);
  const [theme, setTheme] = useState("base16-dark");
  const [fontSize, setFontSize] = useState(18);

  return (
    <div className="editor">
      <Grid
        h="100"
        templateRows="repeat(1, 1fr)"
        templateColumns="repeat(6, 1fr)"
        gap={0}
      >
        <GridItem className="left" colSpan={1}>
          <FontSelector currentFont={currentFont} setCurrentFont={setCurrentFont} />
        </GridItem>

        <GridItem className="right" colSpan={5}>
          <Settings
            theme={theme}
            fontSize={fontSize}
            setTheme={setTheme}
            setFontSize={setFontSize}
          />
          <div style={{ fontSize: fontSize }}>
            <CodeMirror
              value={value}
              options={{
                mode: 'javascript',
                theme: theme,
                lineNumbers: true
              }}
              onBeforeChange={(editor, data, value) => {
                setValue(value);
              }}
            />
          </div>
        </GridItem>
      </Grid>
    </div>
  );
}

export default Editor;
