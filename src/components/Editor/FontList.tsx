import React, { useRef } from 'react';
import SimpleBar from 'simplebar-react';
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";
import { Button } from "@chakra-ui/react"

import 'simplebar/dist/simplebar.min.css';
import fontListJson from '../../assets/json/fontlist.json';

interface FontListProps {
  addedFont: string[],
  setAddedfont: React.Dispatch<React.SetStateAction<string[]>>
}

function FontSelector(props: FontListProps) {
  const el = useRef() as React.MutableRefObject<HTMLInputElement>;

  function AddedFonts() {
    let items = [];
    
    for (let i in props.addedFont) {
      let item = props.addedFont[Number(i)];

      items.push(
        <p>{item}</p>
      );
    }

    return (
      <div className="added-fonts" ref={el}>{items}</div>
    );
  }

  function updateAddedFontList(item: string) {
    let addedFontCopy = props.addedFont;
    addedFontCopy.push(item);
    props.setAddedfont(addedFontCopy);

    let items = [];
    
    for (let i in addedFontCopy) {
      let item = addedFontCopy[Number(i)];

      items.push(`<p>${item}</p>`);
    }

    el.current.innerHTML = items.join('');
  }

  function FontList(props: { lang: string }) {
    let fontJson;

    if (props.lang === 'eng') {
      fontJson = fontListJson.eng;
    }
    else if (props.lang === 'jpn') {
      fontJson = fontListJson.jpn;
    }

    let items = [];

    for (let i in fontJson) {
      let item = fontJson[Number(i)];

      items.push(
        <div className="font-item">
          <p>{item}</p>
          <Button
            onClick={() => updateAddedFontList(item)}
          >
            +
          </Button>
        </div>
      );
    }

    return (
      <div className={props.lang + '-font'}>{items}</div>
    );
  }

  return (
    <div className="font-selector">
      <Tabs>
        <TabList>
          <Tab>English</Tab>
          <Tab>Japanese</Tab>
          <Tab>Added</Tab>
        </TabList>

        <SimpleBar style={{ height: "95vh" }}>
          <TabPanels>
            <TabPanel><FontList lang="eng" /></TabPanel>
            <TabPanel><FontList lang="jpn" /></TabPanel>
            <TabPanel><AddedFonts /></TabPanel>
          </TabPanels>
        </SimpleBar>
      </Tabs>
    </div>
  );
}

export default FontSelector;
