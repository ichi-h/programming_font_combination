# Programming Font Combination

[![Deploy to GitHub Pages](https://github.com/ichi-h/programming_font_combination/actions/workflows/pages-hosting.yml/badge.svg?branch=main)](https://github.com/ichi-h/programming_font_combination/actions/workflows/pages-hosting.yml)

自分に合ったプログラミングフォントを見つける Web アプリ。  
[https://ichi-h.github.io/programming_font_combination/](https://ichi-h.github.io/programming_font_combination/)

![App](./images/app.jpg)

## 使用技術

### 概要

- JavaScript
  - React
  - TypeScript
- CSS
  - Chakra UI
  - レスポンシブ対応
- Linter/Formatter
  - ESLint
  - Prettier
- Testing tools
  - Jest
  - React Testing Library
- その他
  - Hosting service
    - GitHub Pages
  - CI/CD
    - GitHub Actions
      - main ブランチへ変更が加わった際、GitHub Pages へ自動デプロイ

## アプリ詳細

プログラミングフォントを選ぶ上で、文字の可読性・識別性・判読性はもちろん、個人的な読みやすさというのも重要な項目です。

なのですが、プログラミング向けの和文フォントはあまり多く存在しません。  
そのため、フォントのバリエーションを求めるとなると英文フォントと組み合わせて使用することになるのですが、その組み合わせを見つけるためには、「フォントを探し、インストールしては組み合わせ、ダメだったらアンインストール……」という面倒な作業を何回も繰り返さなければいけません。

こうした手間を省くために、**Programming Font Combination** ではブラウザ上でプログラミング向け欧文+和文フォントを組み合わせを簡単に試すことができ、自分に合ったフォントを見つけることができます。

### 使い方

- **English**
  - 欧文フォントの一覧を表示する
- **Japanese**
  - 和文フォントの一覧を表示する
- **ENG ⇔ JPN**
  - フォントの読み込む順番を変更する（デフォルト：欧文 → 和文）
- **Font Size**
  - フォントサイズを変更する
- **Theme**
  - エディターのテーマを変更する
- **License**
  - フォントのライセンスを表示する
- **Link**
  - フォントのホームページへ遷移する
- **Favorite!**
  - お気に入りのフォントをリスト上部に固定する

### 個人的にオススメの組み合わせ

#### Ricty Diminished

私がフォントを組み合わせる前に使っていたフォントです。  
自分に合ったフォントが既に存在するのであれば、わざわざフォントを組み合わせる必要はありません。  
重要なことは、**自分が快適にコーディングできる環境を整えること** です。

#### Office Code Pro + NasuM

私の現在の組み合わせです。  
そのまま組み合わせると「全角：半角＝３：５」という白源 Like な比率になります。１：２だと英字が細々として読みにくいので、私はこの比率の組み合わせをよく使います。  
視認性・可読性・判読性は申し分なし。ほどよく丸く、且つ太過ぎず細すぎないので大変読みやすいです。難点はリガチャがないくらい。 ~~**全人類このフォントにすれば良いと思います。**~~

#### Courier Prime Code + Ricty Diminished

今使用しているフォントの１つ前の組み合わせです。  
こちらも３：５という比率になります。  
私が丸っこいフォントが好きなのでしばらく使っていたのですが、文字の背が少し低く、若干読みにくかったので上の組み合わせに乗り換えました。

#### JetBrains Mono + NasuM

これも３：５。  
JetBrains Mono は書体がハッキリとしておりとても読みやすいのですが、そんなことよりリガチャを使えるのがとても楽しいです。

### ここにはないオススメのフォント

有料であったり、ライセンスの理由でアプリに搭載できなかったフォントをいくつかご紹介いたします。

#### 欧文フォント

- Cartograh
  - [https://connary.com/cartograph.html](https://connary.com/cartograph.html)
  - 有料フォント
- Ellograph
  - [https://connary.com/ellograph.html](https://connary.com/ellograph.html)
  - 有料フォント
- Envy Code R
  - [https://damieng.com/blog/2008/05/26/envy-code-r-preview-7-coding-font-released](https://damieng.com/blog/2008/05/26/envy-code-r-preview-7-coding-font-released)
  - 利用規約により、リポジトリにフォントをアップできない
- input
  - [https://input.djr.com/](https://input.djr.com/)
  - 個人利用は無料
- Overpass
  - [http://overpassfont.org/](http://overpassfont.org/)
  - OFL と LGPL のデュアルライセンス

#### 和文フォント

- Migu
  - [https://mix-mplus-ipa.osdn.jp/migu/](https://mix-mplus-ipa.osdn.jp/migu/)
  - IPA 系フォント
