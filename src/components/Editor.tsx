import { useState } from 'react';
import { Controlled as CodeMirror } from 'react-codemirror2';
import { Grid, GridItem } from "@chakra-ui/react";

import './Editor.css';
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/monokai.css';

import FontList from './Editor/FontList';
import Settings from './Editor/Settings';

function Editor() {
  const [value, setValue] = useState('console.log("Hello!");');
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
          <FontList />
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
