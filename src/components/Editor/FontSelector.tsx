import React from "react";
import SimpleBar from "simplebar-react";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";

import { Lang } from "./util/typeAliases";

import FontItems from "./FontSelector/FontItems";

import "simplebar/dist/simplebar.min.css";

function FontSelector(): JSX.Element {
  const eng: Lang = "eng";
  const jpn: Lang = "jpn";

  const clientWidth = window.document.documentElement.clientWidth;
  let scrollHeight;

  if (clientWidth <= 1050) {
    scrollHeight = "44vh";
  } else {
    scrollHeight = "94vh";
  }

  return (
    <div className="font-selector">
      <Tabs>
        <TabList>
          <Tab>English</Tab>
          <Tab>Japanese</Tab>
        </TabList>

        <SimpleBar style={{ height: scrollHeight }}>
          <TabPanels>
            <TabPanel>
              <FontItems lang={eng} />
            </TabPanel>
            <TabPanel>
              <FontItems lang={jpn} />
            </TabPanel>
          </TabPanels>
        </SimpleBar>
      </Tabs>
    </div>
  );
}

export default FontSelector;
