import { useState } from 'react';
import SimpleBar from 'simplebar-react';
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";
import { Button } from "@chakra-ui/react"

import 'simplebar/dist/simplebar.min.css';
import fontListJson from '../../assets/json/fontlist.json';

function FontList() {
  let [addedFont, setAddedfont] = useState({list: []});

  function ENGFonts() {
    let EngList = [];
  
    for (let i in fontListJson.eng) {
      EngList.push(
        <div className="font-item">
          <p>{fontListJson.eng[i]}</p>
          <Button>Add!</Button>
        </div>
      );
    }
  
    return (
      <div className="eng-fonts">{EngList}</div>
    );
  }
  
  function JPNFonts() {
    let JpnList = [];
  
    for (let i in fontListJson.jpn) {
      JpnList.push(
        <div className="font-item">
          <p>{fontListJson.jpn[i]}</p>
          <Button>Add!</Button>
        </div>
      );
    }
  
    return (
      <div className="jpn-fonts">{JpnList}</div>
    );
  }
  
  function Added() {
    return (
      <div className="Added">Added</div>
    );
  }

  return (
    <div className="font-list">
      <Tabs>
        <TabList>
          <Tab>English</Tab>
          <Tab>Japanese</Tab>
          <Tab>Added</Tab>
        </TabList>

        <SimpleBar style={{ maxHeight: "95vh" }}>
          <TabPanels>
            <TabPanel><ENGFonts /></TabPanel>
            <TabPanel><JPNFonts /></TabPanel>
            <TabPanel><Added /></TabPanel>
          </TabPanels>
        </SimpleBar>
      </Tabs>
    </div>
  );
}

export default FontList;
