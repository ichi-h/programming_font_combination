import SimpleBar from 'simplebar-react';
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";
import { Button } from "@chakra-ui/react"

import 'simplebar/dist/simplebar.min.css';
import fontListJson from '../../assets/json/fontlist.json';

interface FontSelectorProps {
  currentFont: number[],
  setCurrentFont: React.Dispatch<React.SetStateAction<number[]>>
}

function FontSelector(props: FontSelectorProps) {
  function updateCurrentFont(item: number[]) {
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
          <Button
            variant="link"
            onClick={() => { updateCurrentFont([0, 0]) }}
          >
            {item}
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
