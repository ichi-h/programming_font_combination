import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react"

function ENGFonts() {
  return (
    <div className="eng-font">Eng</div>
  );
}

function JPNFonts() {
  return (
    <div className="jpn-font">Jpn</div>
  );
}

function Added() {
  return (
    <div className="Added">Added</div>
  );
}

function FontList() {
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
