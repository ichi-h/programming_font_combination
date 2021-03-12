import SimpleBar from 'simplebar-react';
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";
import { Radio, RadioGroup } from "@chakra-ui/react"
import { Button } from "@chakra-ui/react"

import 'simplebar/dist/simplebar.min.css';
import fontListJson from '../../assets/json/fontlist.json';

interface FontSelectorProps {
  currentFont: number[],
  setCurrentFont: React.Dispatch<React.SetStateAction<number[]>>
}

function FontSelector(props: FontSelectorProps) {
  function renderFontList(lang: string): JSX.Element[] {
    let fontJson;

    if (lang === 'eng') {
      fontJson = fontListJson.eng;
    }
    else if (lang === 'jpn') {
      fontJson = fontListJson.jpn;
    }

    let items = [];

    for (let i in fontJson) {
      let fontName = fontJson[Number(i)];

      items.push(
        <div className="font-item">
          <Radio
            value={i}
            name={lang + '-radio'}
            onClick={() => updateCurrentFont(lang, Number(i))}
          >
            {fontName}
          </Radio>
          <br />
          <div className="buttons">
            <Button><i className="icon-link"></i></Button>
            <Button><i className="icon-heart"></i></Button>
          </div>
        </div>
      );
    }

    return items;
  }

  function updateCurrentFont(lang: string, num: number) {
    let currentFontCopy = props.currentFont;

    if (lang === 'eng') {
      currentFontCopy[0] = num;
    }
    else if (lang === 'jpn') {
      currentFontCopy[1] = num;
    }

    props.setCurrentFont(currentFontCopy);
  }

  function FontList(args: { lang: string }) {
    let items = renderFontList(args.lang);

    let value;
    if (args.lang === 'eng') value = props.currentFont[0];
    else if (args.lang === 'jpn') value = props.currentFont[1];

    return (
      <div className={args.lang + '-font'}>
        <RadioGroup defaultValue={String(value)}>
          {items}
        </RadioGroup>
      </div>
    );
  }

  return (
    <div className="font-selector">
      <Tabs>
        <TabList>
          <Tab>English</Tab>
          <Tab>Japanese</Tab>
        </TabList>

        <SimpleBar style={{ height: "95vh" }}>
          <TabPanels>
            <TabPanel><FontList lang="eng" /></TabPanel>
            <TabPanel><FontList lang="jpn" /></TabPanel>
          </TabPanels>
        </SimpleBar>
      </Tabs>
    </div>
  );
}

export default FontSelector;
