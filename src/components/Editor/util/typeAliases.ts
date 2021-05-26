export type Lang = "eng" | "jpn";

export type Theme = "base16-dark" | "base16-light";

export type CurrentFont = {
  eng: string;
  jpn: string;
};

export class CodeMirrorElement extends HTMLDivElement {
  updateFont(currentFont: CurrentFont, isReverse: boolean) {
    const k: Lang[] = ["eng", "jpn"];
    if (isReverse) k.reverse();

    const elem = this.children[0].children as HTMLCollectionOf<HTMLElement>;
    // Will reference the CodeMirror Element from the Virtual DOM.
    elem[0].style.fontFamily = `"${currentFont[k[0]]}", "${
      currentFont[k[1]]
    }"`;
  };
}
