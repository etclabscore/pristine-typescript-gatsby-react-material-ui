import React from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { solarizedLight, solarizedDark, agate} from "react-syntax-highlighter/dist/esm/styles/hljs";
// import Mermaid from "./Mermaid";

interface IProps {
  language?: null | string;
  value?: any;
  darkMode: boolean;
  className: string;
  key: string;
}

const CodeBlock: React.FC<IProps> = (props) => {
  let lang = "javascript";
  if (props.className && props.className.includes("language-")) {
    try {
      lang = props.className.split("language-")[1];
    } catch (e) {
      // do nothing
    }
  }

  // if (lang === "mermaid") {
  //   return (
  //     <Mermaid theme={props.darkMode ? "dark" : "forest"} children={props.children as any} height={"300px"}/>
  //   );
  // }
  if (!props.children) {
    return null;
  }
  return (
    <SyntaxHighlighter language={lang} key={props.key} style={props.darkMode ? agate : solarizedLight}>
      {props.children}
    </SyntaxHighlighter>
  );
};

export default React.memo(CodeBlock);
