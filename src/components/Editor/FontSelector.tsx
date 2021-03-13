import { useState, useRef } from 'react';
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
  const favArray = [Array(engLength).fill(false), Array(jpnLength).fill(false)]
  const [favValue, setfavValue] = useState(favArray);

  let fontItemsRef = [
    useRef() as React.MutableRefObject<HTMLInputElement>,
    useRef() as React.MutableRefObject<HTMLInputElement>
  ];

  function FontList(args: { lang: string}) {
    let fontJson: string[];
    let index: number;

    if (args.lang === 'eng') {
      fontJson = fontListJson.eng;
      index = 0;
    }
    else {
      fontJson = fontListJson.jpn;
      index = 1;
    }

    let iter = makeIter(fontJson, index);

    return (
      <div className={args.lang + '-font'}>
        <RadioGroup
          defaultValue={props.currentFont[index]}
          onChange={(e) => updateCurrentFont(String(e))}
          ref={fontItemsRef[index]}
        >
        {
          iter.map(i => { return (
            <div className={args.lang + '-font-item-' + i}>
              <Radio
                value={fontJson[i]}
                name={args.lang + '-radio'}
              >
                {fontJson[i]}
              </Radio>
              <br />
              <div className="buttons">
                <Button variant="link"><i className="icon-link"></i></Button>
                <input
                  id={args.lang + '-fav-' + i}
                  type="checkbox"
                  name="favrite"
                  defaultChecked={favValue[index][i]}
                  onChange={() => {
                    updatefavValue(index, i);
                    sortItems(index);
                  }}
                />
                <label htmlFor={args.lang + '-fav-' + i}>
                  <i id={args.lang + 'fav-icon-' + i} className="icon-heart" />
                </label>
              </div>
            </div>
          );})
        }
        </RadioGroup>
      </div>
    );
  }

  function makeIter(list: string[], index: number): number[] {
    let likedNum = [];
    let unlikedNum = [];

    for (let i = 0; i < list.length; i++) {
      if (favValue[index][i]) {
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

  function updatefavValue(index: number, checkboxNum: number) {
    let favValueCopy = favValue;

    favValueCopy[index][checkboxNum] = !favValueCopy[index][checkboxNum];
    setfavValue(favValueCopy);
  }

  function sortItems(index: number) {
    let lang = ['eng', 'jpn'];
    let liked = [];
    let unliked = [];

    for (let i=0; i < favValue[index].length; i++) {
      let elem = 
        fontItemsRef[index].current.getElementsByClassName(
          lang[index] + '-font-item-' + i
        )[0];
      
      if (favValue[index][i]) {
        liked.push(elem);
      }
      else {
        unliked.push(elem);
      }
    }

    let sortedItems = liked.concat(unliked);
    fontItemsRef[index].current.innerHTML = '';

    for (let item of sortedItems) {
      fontItemsRef[index].current.appendChild(item);
    }
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
