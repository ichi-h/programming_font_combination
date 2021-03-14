import { useState } from 'react';
import { UnControlled as CodeMirror } from 'react-codemirror2';
import { Grid, GridItem } from '@chakra-ui/react';

import FontSelector from './Editor/FontSelector';
import Settings from './Editor/Settings';

import './Editor.css';
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/base16-dark.css';
import 'codemirror/theme/base16-light.css';
import fontListJson from '../assets/json/fontlist.json';

require('codemirror/mode/javascript/javascript.js');

function Editor() {
  const value = 'console.log("Hello!");';
  const [theme, setTheme] = useState('base16-dark');
  const [fontSize, setFontSize] = useState(18);
  const [currentFont, setCurrentFont] = useState([
    fontListJson.eng[0].name,
    fontListJson.jpn[0].name
  ]);

  return (
    <div className="editor">
      <Grid
        h="100"
        templateRows="repeat(1, 1fr)"
        templateColumns="repeat(5, 1fr)"
        gap={0}
      >
        <GridItem className="left" colSpan={1}>
          <FontSelector currentFont={currentFont} setCurrentFont={setCurrentFont} />
        </GridItem>

        <GridItem className="right" colSpan={4}>
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
            />
          </div>
        </GridItem>
      </Grid>
    </div>
  );
}

export default Editor;
