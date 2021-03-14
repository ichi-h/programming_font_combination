import SimpleBar from 'simplebar-react';
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react';

import FontList, { FontSelectorProps } from './FontList';

import 'simplebar/dist/simplebar.min.css';

function FontSelector(props: FontSelectorProps) {
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
