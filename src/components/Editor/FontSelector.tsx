import SimpleBar from 'simplebar-react';
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react';

import FontList from './FontList';

import 'simplebar/dist/simplebar.min.css';

export type Lang = 'eng' | 'jpn';

function FontSelector() {
  const eng: Lang = 'eng';
  const jpn: Lang = 'jpn';

  return (
    <div className="font-selector">
      <Tabs>
        <TabList>
          <Tab>English</Tab>
          <Tab>Japanese</Tab>
        </TabList>

        <SimpleBar style={{ height: '95vh' }}>
          <TabPanels>
            <TabPanel>
              <FontList lang={eng} />
            </TabPanel>
            <TabPanel>
              <FontList lang={jpn} />
            </TabPanel>
          </TabPanels>
        </SimpleBar>
      </Tabs>
    </div>
  );
}

export default FontSelector;
