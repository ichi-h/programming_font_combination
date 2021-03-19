import SimpleBar from 'simplebar-react';
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react';

import { Lang } from '../TypeAliases';

import FontItems from './FontItems';

import 'simplebar/dist/simplebar.min.css';

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

        <SimpleBar style={{ height: '94vh' }}>
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