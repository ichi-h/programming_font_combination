import { Radio, RadioGroup } from '@chakra-ui/react';
import { Button } from '@chakra-ui/react';
import { Tooltip } from '@chakra-ui/react';

import useStore from './updateFn';
import { Lang } from './FontSelector';

import './FontItems.css';

function FontItems(props: { lang: Lang }) {
  const lang = props.lang;

  const [currentFont, fontItemsRef, fontJson, favValue, update] = useStore(lang);

  const iter = [...Array(fontJson.length)].map((_, i) => i);

  return (
    <div className={lang + '-font-items'}>
      <RadioGroup
        defaultValue={currentFont.value[lang]}
        onChange={(e) => {
          update({ action: 'UpdateCurrentFont', fontName: String(e) });
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
                      update({ action: 'UpdateFavValue', itemIndex: i });
                      update({ action: 'SortItems' });
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
