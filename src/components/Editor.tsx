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
  const [addedFont, setAddedfont] = useState([""]);
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
          <FontSelector addedFont={addedFont} setAddedfont={setAddedfont} />
        </GridItem>

        <GridItem className="right" colSpan={5}>
          <Settings />
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
