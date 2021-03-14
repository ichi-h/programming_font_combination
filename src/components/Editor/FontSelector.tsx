import { useState, useRef } from 'react';
import SimpleBar from 'simplebar-react';
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";
import { Radio, RadioGroup } from "@chakra-ui/react"
import { Button } from "@chakra-ui/react"

import 'simplebar/dist/simplebar.min.css';
import './FontSelector.css';
import fontListJson, { FontInfo } from '../../assets/json/fontlist.json';

interface FontSelectorProps {
  currentFont: string[],
  setCurrentFont: React.Dispatch<React.SetStateAction<string[]>>
}

interface FontListProps extends FontSelectorProps {
  lang: string,
}

function FontList(props: FontListProps) {
  const engLength = fontListJson.eng.length;
  const jpnLength = fontListJson.jpn.length;
  const favArray = [Array(engLength).fill(false), Array(jpnLength).fill(false)]
  const [favValue, setfavValue] = useState(favArray);

  let fontItemsRef = [
    useRef() as React.MutableRefObject<HTMLInputElement>,
    useRef() as React.MutableRefObject<HTMLInputElement>
  ];

  function makeIter(listLen: number, index: number): number[] {
    let likedNum = [];
    let unlikedNum = [];

    for (let i = 0; i < listLen; i++) {
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

    let fontTitles = [];
    for (let font of fontListJson.eng) {
      fontTitles.push(font.name);
    }

    let index = fontTitles.indexOf(fontName);

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

  let fontJson: FontInfo[] = [];
  let index: number;

  if (props.lang === 'eng') {
    fontJson = fontListJson.eng;
    index = 0;
  }
  else {
    fontJson = fontListJson.jpn;
    index = 1;
  }

  let iter = makeIter(fontJson.length, index);

  return (
    <div className={props.lang + '-font'}>
      <RadioGroup
        defaultValue={props.currentFont[index]}
        onChange={(e) => updateCurrentFont(String(e))}
        ref={fontItemsRef[index]}
      >
      {
        iter.map(i => { return (
          <div className={props.lang + '-font-item-' + i}>
            <Radio
              value={fontJson[i].name}
              name={props.lang + '-radio'}
            >
              {fontJson[i].name}
            </Radio>
            <div className="buttons">
              <Button variant="link"><i className="icon-link"></i></Button>
              <label htmlFor={props.lang + '-fav-' + i}>
                <input
                  className="fav-button"
                  id={props.lang + '-fav-' + i}
                  type="checkbox"
                  name="favrite"
                  defaultChecked={favValue[index][i]}
                  onChange={() => {
                    updatefavValue(index, i);
                    sortItems(index);
                  }}
                />
                <i id={props.lang + 'fav-icon-' + i} className="icon-heart" />
              </label>
            </div>
          </div>
        );})
      }
      </RadioGroup>
    </div>
  );
}

function FontSelector(props: FontSelectorProps) {
  return (
    <div className="font-selector">
      <Tabs>
        <TabList>
          <Tab>English</Tab>
          <Tab>Japanese</Tab>
        </TabList>

        <SimpleBar style={{ height: "95vh" }}>
          <TabPanels>
            <TabPanel>
              <FontList
                lang="eng"
                currentFont={props.currentFont}
                setCurrentFont={props.setCurrentFont}
              />
            </TabPanel>
            <TabPanel>
              <FontList
                lang="jpn"
                currentFont={props.currentFont}
                setCurrentFont={props.setCurrentFont}
              />
            </TabPanel>
          </TabPanels>
        </SimpleBar>
      </Tabs>
    </div>
  );
}

export default FontSelector;
