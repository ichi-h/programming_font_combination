import { useState } from 'react';
import SimpleBar from 'simplebar-react';
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";
import { Radio, RadioGroup } from "@chakra-ui/react"
import { Button } from "@chakra-ui/react"

import 'simplebar/dist/simplebar.min.css';
import fontListJson from '../../assets/json/fontlist.json';

interface FontSelectorProps {
  currentFont: string[],
  setCurrentFont: React.Dispatch<React.SetStateAction<string[]>>
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
    let iter = makeIter(fontJson, index);

    for (let i of iter) {
      let fontName = fontJson[i];

      items.push(
        <div className="font-item">
          <Radio
            value={fontName}
            name={lang + '-radio'}
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
              defaultChecked={favoValue[index][i]}
              onChange={() => { updateFavoValue(index, i) }}
            />
            <label htmlFor={'favo-' + i}><i id={'favo-icon-' + i} className="icon-heart" /></label>
          </div>
        </div>
      );
    }

    return items;
  }

  function makeIter(list: string[], index: number): number[] {
    let likedNum = [];
    let unlikedNum = [];

    for (let i = 0; i < list.length; i++) {
      if (favoValue[index][i]) {
        likedNum.push(i);
      }
      else {
        unlikedNum.push(i);
      }
    }

    let iter = likedNum.concat(unlikedNum);

    return iter;
  }

  function updateCurrentFont(fontName: string) {
    let currentFontCopy = props.currentFont;
    let index = fontListJson.eng.indexOf(fontName) ;

    if (index !== -1) {
      currentFontCopy[0] = fontName;
    }
    else {
      currentFontCopy[1] = fontName;
    }

    props.setCurrentFont(currentFontCopy);
  }

  function updateFavoValue(index: number, num: number) {
    let favoValueCopy = favoValue;

    favoValueCopy[index][num] = !favoValueCopy[index][num];
    
    setFavoValue(favoValueCopy);
  }

  function FontList(args: { lang: string }) {
    let items = renderFontList(args.lang);

    let index;
    if (args.lang === 'eng') index = 0;
    else index = 1;

    return (
      <div className={args.lang + '-font'}>
        <RadioGroup
          defaultValue={props.currentFont[index]}
          onChange={(e) => updateCurrentFont(String(e))}
        >
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
