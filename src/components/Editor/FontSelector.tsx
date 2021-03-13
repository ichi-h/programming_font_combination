import { useState } from 'react';
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
  const engLength = fontListJson.eng.length;
  const jpnLength = fontListJson.jpn.length;
  const favoArray = [Array(engLength).fill(false), Array(jpnLength).fill(false)]
  const [favoValue, setFavoValue] = useState(favoArray);

  function renderFontList(lang: string): JSX.Element[] {
    let fontJson;
    let index: number;

    if (lang === 'eng') {
      fontJson = fontListJson.eng;
      index = 0;
    }
    else {
      fontJson = fontListJson.jpn;
      index = 1;
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
            <Button variant="link"><i className="icon-link"></i></Button>
            <input
              id={'favo-' + i}
              type="checkbox"
              name="favorite"
              defaultChecked={favoValue[index][Number(i)]}
              onChange={() => updateFavoValue(index, Number(i))}
            />
            <label htmlFor={'favo-' + i}><i id={'favo-icon-' + i} className="icon-heart" /></label>
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

  function updateFavoValue(index: number, num: number) {
    let favoValueCopy = favoValue;

    favoValueCopy[index][num] = !favoValueCopy[index][num];
    
    setFavoValue(favoValueCopy);
    console.log(favoValueCopy[0], favoValueCopy[1]);
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
