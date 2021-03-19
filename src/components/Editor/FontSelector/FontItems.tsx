import { Radio, RadioGroup } from '@chakra-ui/react';
import { Button } from '@chakra-ui/react';
import { Tooltip } from '@chakra-ui/react';

import useFontItemsModel from './useFontItemsModel';
import { Lang } from '../TypeAliases';

import './FontItems.css';

function FontItems(props: { lang: Lang }) {
  const lang = props.lang;

  const [currentFontValue, fontItemsRef, fontJson, favValue, updateFontItems] = useFontItemsModel(lang);

  const iter = [...Array(fontJson.length)].map((_, i) => i);

  return (
    <div className={lang + '-font-items'}>
      <RadioGroup
        defaultValue={currentFontValue}
        onChange={(e) => {
          updateFontItems({ message: 'UpdateCurrentFont', fontName: String(e) });
        }}
        ref={fontItemsRef}
      >
      {
        iter.map(i => { return (
          <div className={lang + '-font-item-' + i} key={i}>

            <div className="font-info">
              <div className="font-name">
                <Radio
                  value={fontJson[i].name}
                  name={lang + '-radio'}
                >
                  <span style={{ fontFamily: `'${fontJson[i].name}'`}}>
                    {fontJson[i].name}
                  </span>
                </Radio>
              </div>

              <p className="author">by {fontJson[i].author}</p>
            </div>

            <div className="buttons">
              <Tooltip label={fontJson[i].license} placement="top">
                <Button
                  className="font-license"
                  variant="link"
                  onClick={() => { window.open(fontJson[i].license_link) }}
                >
                  <i className="icon-id-card-o" />
                </Button>
              </Tooltip>

              <Tooltip label={fontJson[i].website} placement="top">
                <Button
                  className="font-link"
                  variant="link"
                  onClick={() => { window.open(fontJson[i].website) }}
                >
                  <i className="icon-link" />
                </Button>
              </Tooltip>

              <Tooltip label="Favorite!" placement="top">
                <label htmlFor={lang + '-fav-' + i}>
                  <input
                    className="fav-button"
                    id={lang + '-fav-' + i}
                    type="checkbox"
                    name="favrite"
                    defaultChecked={favValue[i]}
                    onChange={() => {
                      updateFontItems({ message: 'UpdateFavValue', itemIndex: i });
                      updateFontItems({ message: 'SortItems' });
                    }}
                  />
                  <i id={lang + 'fav-icon-' + i} className="icon-heart" />
                </label>
              </Tooltip>
            </div>

          </div>
        );})
      }
      </RadioGroup>
    </div>
  );
}

export default FontItems;
