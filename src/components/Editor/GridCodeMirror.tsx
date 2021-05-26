import React from "react";
import { UnControlled as CodeMirror } from "react-codemirror2";

import { Theme } from "./util/typeAliases";

import "codemirror/lib/codemirror.css";
import "codemirror/theme/base16-dark.css";
import "codemirror/theme/base16-light.css";

require("codemirror/mode/htmlmixed/htmlmixed.js");

function GridCodeMirror(props: {
  fontSize: number;
  codeMirrorRef: React.MutableRefObject<HTMLDivElement>;
  textValue: string;
  theme: Theme;
}): JSX.Element {
  return (
    <div style={{ fontSize: props.fontSize }} ref={props.codeMirrorRef}>
      <CodeMirror
        value={props.textValue}
        options={{
          mode: "htmlmixed",
          theme: props.theme,
          lineNumbers: true,
        }}
      />
    </div>
  );
}

export default GridCodeMirror;
