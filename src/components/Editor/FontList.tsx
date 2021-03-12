import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react"

import fontListJson from '../../assets/json/fontlist.json';

function FontList() {
  function ENGFonts() {
    let list = [];
  
    for (let i in fontListJson.eng) {
      list.push(<p>{fontListJson.eng[i]}</p>);
    }
  
    return (
      <div className="eng-font">{list}</div>
    );
  }
  
  function JPNFonts() {
    let list = [];
  
    for (let i in fontListJson.jpn) {
      list.push(<p>{fontListJson.jpn[i]}</p>);
    }
  
    return (
      <div className="jpn-font">{list}</div>
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

        <TabPanels>
          <TabPanel><ENGFonts /></TabPanel>
          <TabPanel><JPNFonts /></TabPanel>
          <TabPanel><Added /></TabPanel>
        </TabPanels>
      </Tabs>
    </div>
  );
}

export default FontList;
