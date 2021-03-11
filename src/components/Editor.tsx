import { useState } from 'react';
import {Controlled as CodeMirror} from 'react-codemirror2'

import 'codemirror/lib/codemirror.css'
import 'codemirror/theme/monokai.css'

import FontList from './Editor/FontList'
import Settings from './Editor/Settings'

function Editor() {
  const [value, setValue] = useState('console.log("Hello!");');
  const [options, setOptions] = useState({
    mode: 'javascript',
    theme: 'monokai',
    lineNumbers: true
  });

  return (
    <div className="editor">
      <CodeMirror
        value={value}
        options={options}
        onBeforeChange={(editor, data, value) => {
          setValue(value);
        }}
        onChange={(editor, data, value) => {
        }}
      />
    </div>
  );
}

export default Editor;
