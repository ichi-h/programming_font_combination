import { CurrentFont, Lang } from "./typeAliases";

declare global {
  interface HTMLDivElement {
    updateFont(currentFont: CurrentFont, isReverse: boolean): void;
  }
}

HTMLDivElement.prototype.updateFont = function (
  currentFont: CurrentFont,
  isReverse: boolean
) {
  const k: Lang[] = ["eng", "jpn"];
  if (isReverse) k.reverse();

  const elem = this.children[0].children as HTMLCollectionOf<HTMLElement>;
  elem[0].style.fontFamily = `"${currentFont[k[0]]}", "${currentFont[k[1]]}"`;
};
