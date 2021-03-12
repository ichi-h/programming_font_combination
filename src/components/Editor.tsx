import { useState } from 'react';
import { Controlled as CodeMirror } from 'react-codemirror2';
import { Grid, GridItem } from "@chakra-ui/react";

import './Editor.css';
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/monokai.css';

import FontSelector from './Editor/FontSelector';
import Settings from './Editor/Settings';

function Editor() {
  const [value, setValue] = useState('console.log("Hello!");');
  const [currentFont, setCurrentFont] = useState([0, 0]);
  const [options, setOptions] = useState({
    mode: 'javascript',
    theme: 'monokai',
    lineNumbers: true
  });

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
          <Settings options={options} setOptions={setOptions} />
          <CodeMirror
            value={value}
            options={options}
            onBeforeChange={(editor, data, value) => {
              setValue(value);
            }}
            onChange={(editor, data, value) => {
            }}
          />
        </GridItem>
      </Grid>
    </div>
  );
}

export default Editor;
