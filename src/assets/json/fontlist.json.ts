export interface FontInfo {
  name: string,
  author: string,
  license: string,
  website: string,
  license_link: string
}

interface FontListJson {
  eng: FontInfo[],
  jpn: FontInfo[]
}

const fontListJson: FontListJson =
{
  eng: [
    {
      name: 'agave',
      author: 'b.agaric.net',
      license: 'MIT',
      website: 'https://github.com/blobject/agave',
      license_link: 'https://github.com/blobject/agave/blob/master/LICENSE'
    },
    {
      name: 'Anonymous Pro',
      author: 'Mark Simonson Studio',
      license: 'OFL-1.1',
      website: 'https://www.marksimonson.com/fonts/view/anonymous-pro',
      license_link: 'https://scripts.sil.org/cms/scripts/page.php?item_id=OFL_web'
    },
    {
      name: 'Bitstream Vera Sans Mono',
      author: 'Bitstream',
      license: 'Bitstream Vera License',
      website: 'https://www.fontsquirrel.com/fonts/Bitstream-Vera-Sans-Mono',
      license_link: 'https://www.fontsquirrel.com/license/Bitstream-Vera-Sans-Mono'
    },
    {
      name: 'Borg Sans Mono',
      author: 'marnen',
      license: 'Apache-2.0',
      website: 'https://github.com/marnen/borg-sans-mono',
      license_link: 'https://github.com/marnen/borg-sans-mono/blob/master/LICENSE'
    },
    {
      name: 'BPmono',
      author: 'Backpacker',
      license: 'CC BY-ND 3.0',
      website: 'https://www.fontsquirrel.com/fonts/BPmono',
      license_link: 'https://www.fontsquirrel.com/license/BPmono'
    },
    {
      name: 'Bront DejaVu Sans Mono',
      author: 'chrismwendt',
      license: 'DejaVuSansMono-LICENSE',
      website: 'https://github.com/chrismwendt/bront',
      license_link: 'https://github.com/chrismwendt/bront/blob/master/DejaVuSansMono-LICENSE.txt'
    },
    {
      name: 'Bront Ubuntu Mono',
      author: 'chrismwendt',
      license: 'UbuntuMono-LICENSE',
      website: 'https://github.com/chrismwendt/bront',
      license_link: 'https://github.com/chrismwendt/bront/blob/master/UbuntuMono-LICENSE.txt'
    },
    {
      name: 'Courier Prime Code',
      author: 'Quote-Unquote Company',
      license: 'OFL-1.1',
      website: 'https://quoteunquoteapps.com/courierprime/',
      license_link: 'https://scripts.sil.org/cms/scripts/page.php?site_id=nrsi&id=OFL'
    },
    {
      name: 'D2Coding',
      author: 'NAVER Corporation',
      license: 'OFL-1.1',
      website: 'https://github.com/naver/d2codingfont',
      license_link: 'https://github.com/naver/d2codingfont/wiki/Open-Font-License'
    },
    {
      name: 'DejaVu fonts',
      author: 'DejaVu Fonts',
      license: 'DejaVu Fonts — License',
      website: 'https://dejavu-fonts.github.io/',
      license_link: 'https://dejavu-fonts.github.io/License.html'
    },
    {
      name: 'DM Mono',
      author: 'Colophon Foundry',
      license: 'OFL-1.1',
      website: 'https://fonts.google.com/specimen/DM+Mono?preview.text_type=custom',
      license_link: 'https://scripts.sil.org/cms/scripts/page.php?site_id=nrsi&id=OFL'
    },
    {
      name: 'Edlo',
      author: 'ehamiter',
      license: 'OFL-1.1',
      website: 'http://ehamiter.github.io/Edlo/',
      license_link: 'https://scripts.sil.org/cms/scripts/page.php?site_id=nrsi&id=OFL'
    },
    {
      name: 'Fantasque Sans Mono',
      author: 'Jany Belluz',
      license: 'OFL-1.1',
      website: 'https://fontlibrary.org/en/font/fantasque-sans-mono',
      license_link: 'https://scripts.sil.org/cms/scripts/page.php?site_id=nrsi&id=OFL'
    },
    {
      name: 'Fifteen',
      author: 'Zeimusu',
      license: 'OFL-1.1',
      website: 'https://fontlibrary.org/en/font/fifteen',
      license_link: 'https://scripts.sil.org/cms/scripts/page.php?site_id=nrsi&id=OFL'
    },
    {
      name: 'Fira Code',
      author: 'Nikita Prokopov',
      license: 'OFL-1.1',
      website: 'https://github.com/tonsky/FiraCode',
      license_link: 'https://github.com/tonsky/FiraCode/blob/master/LICENSE'
    },
    {
      name: 'Fira Mono',
      author: 'Mozilla',
      license: 'OFL-1.1',
      website: 'https://github.com/mozilla/Fira',
      license_link: 'https://github.com/mozilla/Fira/blob/master/LICENSE'
    },
    {
      name: 'Go (the fonts)',
      author: 'golang.org',
      license: 'License for \'Go\'',
      website: 'https://www.fontsquirrel.com/fonts/go',
      license_link: 'https://www.fontsquirrel.com/license/go'
    },
    {
      name: 'Hack',
      author: 'Source Foundry Authors',
      license: 'Bitstream Vera License',
      website: 'https://sourcefoundry.org/hack/',
      license_link: 'https://sourcefoundry.org/hack/'
    },
    {
      name: 'Hasklig',
      author: 'i-tu',
      license: 'OFL-1.1',
      website: 'https://github.com/i-tu/Hasklig',
      license_link: 'https://github.com/i-tu/Hasklig/blob/main/LICENSE.md'
    },
    {
      name: 'Hermit',
      author: 'Pablo Caro',
      license: 'OFL-1.1',
      website: 'https://pcaro.es/p/hermit/',
      license_link: 'https://github.com/pcaro90/hermit/blob/master/LICENSE'
    },
    {
      name: 'iA Writer Mono',
      author: 'iA Inc.',
      license: 'OFL-1.1',
      website: 'https://github.com/iaolo/iA-Fonts',
      license_link: 'https://github.com/iaolo/iA-Fonts/blob/master/iA%20Writer%20Mono/LICENSE.md'
    },
    {
      name: 'IBM Plex Mono',
      author: 'IBM Corp.',
      license: 'OFL-1.1',
      website: 'https://github.com/IBM/plex',
      license_link: 'https://github.com/IBM/plex/blob/master/LICENSE.txt'
    },
    {
      name: 'Inconsolata',
      author: 'Raph Levien',
      license: 'OFL-1.1',
      website: 'https://www.levien.com/type/myfonts/inconsolata.html',
      license_link: 'https://scripts.sil.org/cms/scripts/page.php?site_id=nrsi&id=OFL'
    },
    {
      name: 'Inconsolata-g',
      author: 'leonardo maffi',
      license: 'OFL-1.1',
      website: 'https://leonardo-m.livejournal.com/77079.html',
      license_link: 'https://scripts.sil.org/cms/scripts/page.php?site_id=nrsi&id=OFL'
    },
    {
      name: 'Iosevka',
      author: 'Belleve Invis',
      license: 'OFL-1.1',
      website: 'https://typeof.net/Iosevka/',
      license_link: 'https://github.com/be5invis/Iosevka/blob/master/LICENSE.md'
    },
    {
      name: 'JetBrains Mono',
      author: 'The JetBrains Mono Project Authors',
      license: 'OFL-1.1',
      website: 'https://www.jetbrains.com/lp/mono/',
      license_link: 'https://github.com/JetBrains/JetBrainsMono/blob/master/OFL.txt'
    },
    {
      name: 'JuliaMono',
      author: 'cormullion',
      license: 'OFL-1.1',
      website: 'https://github.com/cormullion/juliamono',
      license_link: 'https://github.com/cormullion/juliamono/blob/master/LICENSE'
    },
    {
      name: 'League Mono',
      author: 'Tyler Finck',
      license: 'OFL-1.1',
      website: 'https://www.tylerfinck.com/leaguemonovariable/',
      license_link: 'https://github.com/theleagueof/league-mono/blob/master/OFL.md'
    },
    {
      name: 'Luculent',
      author: 'Andrew Kensler',
      license: 'OFL-1.1',
      website: 'http://eastfarthing.com/luculent/',
      license_link: 'https://scripts.sil.org/cms/scripts/page.php?site_id=nrsi&id=OFL'
    },
    {
      name: 'Meslo LG',
      author: 'André Berg',
      license: 'Apache-2.0',
      website: 'https://github.com/andreberg/Meslo-Font',
      license_link: 'https://github.com/marnen/borg-sans-mono/blob/master/LICENSE'
    },
    {
      name: 'Monoid',
      author: 'Andreas Larsen and contributors',
      license: 'MIT',
      website: 'https://larsenwork.com/monoid/',
      license_link: 'https://larsenwork.com/monoid/'
    },
    {
      name: 'mononoki',
      author: 'Matthias Tellen',
      license: 'OFL-1.1',
      website: 'http://madmalik.github.io/mononoki/',
      license_link: 'https://github.com/madmalik/mononoki/blob/master/LICENSE'
    },
    {
      name: 'Office Code Pro',
      author: 'Nathan Rutzky',
      license: 'OFL-1.1',
      website: 'https://github.com/nathco/Office-Code-Pro',
      license_link: 'https://github.com/nathco/Office-Code-Pro/blob/master/LICENSE.txt'
    },
    {
      name: 'Oxygen Mono',
      author: 'Vernon Adams',
      license: 'OFL-1.1',
      website: 'https://fonts.google.com/specimen/Oxygen+Mono?preview.text_type=custom#glyphs',
      license_link: 'https://scripts.sil.org/cms/scripts/page.php?site_id=nrsi&id=OFL'
    },
    {
      name: 'ProFont',
      author: 'Tobias Jung',
      license: 'MIT',
      website: 'https://tobiasjung.name/profont/',
      license_link: 'https://opensource.org/licenses/mit-license.php'
    },
    {
      name: 'Proggy Vector',
      author: 'Tristan Grimmer',
      license: 'MIT',
      website: 'https://github.com/bluescan/proggyfonts/',
      license_link: 'https://github.com/bluescan/proggyfonts/blob/master/LICENSE'
    },
    {
      name: 'PT Mono',
      author: 'Paratype',
      license: 'OFL-1.1',
      website: 'https://company.paratype.com/pt-sans-pt-serif',
      license_link: 'https://scripts.sil.org/cms/scripts/page.php?site_id=nrsi&id=OFL'
    },
    {
      name: 'PT Sans',
      author: 'Paratype',
      license: 'OFL-1.1',
      website: 'https://company.paratype.com/pt-sans-pt-serif',
      license_link: 'https://scripts.sil.org/cms/scripts/page.php?site_id=nrsi&id=OFL'
    },
    {
      name: 'Recursive Mono',
      author: 'Arrow Type',
      license: 'OFL-1.1',
      website: 'https://www.recursive.design/',
      license_link: 'https://github.com/arrowtype/recursive/blob/main/OFL.txt'
    },
    {
      name: 'Roboto Mono',
      author: 'Christian Robertson',
      license: 'Apache-2.0',
      website: 'https://fonts.google.com/specimen/Roboto+Mono?preview.text_type=custom',
      license_link: 'http://www.apache.org/licenses/LICENSE-2.0'
    },
    {
      name: 'Share Tech Mono',
      author: 'Carrois Apostrophe',
      license: 'OFL-1.1',
      website: 'https://fonts.google.com/specimen/Share+Tech+Mono?preview.text_type=custom',
      license_link: 'https://scripts.sil.org/cms/scripts/page.php?site_id=nrsi&id=OFL'
    },
    {
      name: 'Sometype Mono',
      author: 'Dharma Type',
      license: 'OFL-1.1',
      website: 'https://monospacedfont.com/',
      license_link: 'https://scripts.sil.org/cms/scripts/page.php?site_id=nrsi&id=OFL'
    },
    {
      name: 'Source Code Pro',
      author: 'Adobe Fonts',
      license: 'OFL-1.1',
      website: 'https://github.com/adobe-fonts/source-code-pro',
      license_link: 'https://github.com/adobe-fonts/source-code-pro/blob/release/LICENSE.md'
    },
    {
      name: 'Space Mono',
      author: 'Colophon',
      license: 'OFL-1.1',
      website: 'https://fonts.google.com/specimen/Space+Mono?preview.text_type=custom',
      license_link: 'https://scripts.sil.org/cms/scripts/page.php?site_id=nrsi&id=OFL'
    },
    {
      name: 'Terminus TTF 4.47.0',
      author: 'Tilman Blumenbach',
      license: 'OFL-1.1',
      website: 'https://files.ax86.net/terminus-ttf/',
      license_link: 'https://scripts.sil.org/cms/scripts/page.php?site_id=nrsi&id=OFL'
    },
    {
      name: 'Ubuntu Mono',
      author: 'Dalton Maag',
      license: 'Ubuntu font licence',
      website: 'https://design.ubuntu.com/font/',
      license_link: 'https://ubuntu.com/legal/font-licence'
    },
    {
      name: 'Verily Serif Mono',
      author: 'Stephen G. Hartke',
      license: 'Bitstream Vera License',
      website: 'https://www.fontsquirrel.com/fonts/Verily-Serif-Mono',
      license_link: 'https://www.fontsquirrel.com/license/Verily-Serif-Mono'
    },
    {
      name: 'Victor Mono',
      author: 'Rune Bjørnerås',
      license: 'MIT',
      website: 'https://rubjo.github.io/victor-mono/',
      license_link: 'https://github.com/rubjo/victor-mono/blob/master/LICENSE'
    }
  ],
  jpn: [
    {
      name: 'Cica',
      author: 'miiton',
      license: 'OFL-1.1',
      website: 'https://github.com/miiton/Cica',
      license_link: 'https://github.com/miiton/Cica/blob/master/LICENSE.txt'
    },
    {
      name: 'Circle M+',
      author: 'itouhiro',
      license: 'M+ FONTS License',
      website: 'https://mix-mplus-ipa.osdn.jp/mplus/',
      license_link: 'https://mix-mplus-ipa.osdn.jp/mplus/LICENSE_E.txt'
    },
    {
      name: 'M+',
      author: '森下浩司',
      license: 'M+ FONTS License',
      website: 'http://mplus-fonts.osdn.jp/',
      license_link: 'http://mplus-fonts.osdn.jp/about.html#license'
    },
    {
      name: 'Mgen+',
      author: '自家製フォント工房',
      license: 'OFL-1.1',
      website: 'http://jikasei.me/font/mgenplus/',
      license_link: 'https://scripts.sil.org/cms/scripts/page.php?site_id=nrsi&id=OFL'
    },
    {
      name: 'Myrica',
      author: 'プログラミングフォント Myrica / Estable',
      license: 'OFL-1.1',
      website: 'https://myrica.estable.jp/',
      license_link: 'https://scripts.sil.org/cms/scripts/page.php?site_id=nrsi&id=OFL'
    },
    {
      name: 'MyricaM',
      author: 'プログラミングフォント Myrica / Estable',
      license: 'OFL-1.1',
      website: 'https://myrica.estable.jp/',
      license_link: 'https://scripts.sil.org/cms/scripts/page.php?site_id=nrsi&id=OFL'
    },
    {
      name: 'Nasu',
      author: 'itouhiro',
      license: 'Apache-2.0',
      website: 'http://itouhiro.hatenablog.com/entry/20140917/font',
      license_link: 'https://www.apache.org/licenses/LICENSE-2.0'
    },
    {
      name: 'Ricty Diminished',
      author: '遊佐泰紀',
      license: 'OFL-1.1',
      website: 'https://github.com/edihbrandon/RictyDiminished',
      license_link: 'https://scripts.sil.org/cms/scripts/page.php?site_id=nrsi&id=OFL'
    },
    {
      name: 'Rounded M+',
      author: 'itouhiro',
      license: 'M+ FONTS License',
      website: 'https://mix-mplus-ipa.osdn.jp/mplus/',
      license_link: 'https://mix-mplus-ipa.osdn.jp/mplus/LICENSE_E.txt'
    },
    {
      name: 'Rounded Mgen+',
      author: '自家製フォント工房',
      license: 'OFL-1.1',
      website: 'http://jikasei.me/font/rounded-mgenplus/#_6',
      license_link: 'https://scripts.sil.org/cms/scripts/page.php?site_id=nrsi&id=OFL'
    },
    {
      name: 'Source Han Code JP',
      author: 'Adobe Fonts',
      license: 'OFL-1.1',
      website: 'https://github.com/adobe-fonts/source-han-code-jp',
      license_link: 'https://github.com/adobe-fonts/source-han-code-jp/blob/master/LICENSE.txt'
    },
    {
      name: 'VLゴシック',
      author: '鈴木大輔',
      license: 'VL ゴシックフォントファミリライセンス',
      website: 'http://vlgothic.dicey.org/',
      license_link: 'http://vlgothic.dicey.org/license.html'
    },
    {
      name: '源柔ゴシック',
      author: '自家製フォント工房',
      license: 'OFL-1.1',
      website: 'http://jikasei.me/font/genjyuu/',
      license_link: 'https://scripts.sil.org/cms/scripts/page.php?site_id=nrsi&id=OFL'
    },
    {
      name: '源真ゴシック',
      author: '自家製フォント工房',
      license: 'OFL-1.1',
      website: 'http://jikasei.me/font/genshin/',
      license_link: 'https://scripts.sil.org/cms/scripts/page.php?site_id=nrsi&id=OFL'
    },
    {
      name: '白源',
      author: 'たわら',
      license: 'OFL-1.1',
      website: 'https://github.com/yuru7/HackGen',
      license_link: 'https://github.com/yuru7/HackGen/blob/master/LICENSE.txt'
    }
  ]
};

export default fontListJson;
