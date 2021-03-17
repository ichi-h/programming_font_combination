import { Radio, RadioGroup } from '@chakra-ui/react';
import { Button } from '@chakra-ui/react';
import { Tooltip } from '@chakra-ui/react';

import useStore from './updateFn';

import './FontList.css';

function makeIter(favValue: boolean[], listLen: number): number[] {
  let likedNum = [];
  let unlikedNum = [];

  for (let i = 0; i < listLen; i++) {
    if (favValue[i]) {
      likedNum.push(i);
    }
    else {
      unlikedNum.push(i);
    }
  }

  let iter = likedNum.concat(unlikedNum);

  return iter;
}

function FontList(props: { lang: string }) {
  const lang = props.lang;

  if (!(lang === 'eng' || lang === 'jpn')) {
    throw new Error(`Incorrect value for variable 'lang': ${lang}`);
  }

  const [currentFont, fontItemsRef, fontJson, favValue, update] = useStore(lang);

  let iter = makeIter(favValue, fontJson.length);

  return (
    <div className={lang + '-font'}>
      <RadioGroup
        defaultValue={currentFont.value[lang]}
        onChange={(e) => update('updateCurrentFont', { fontName: String(e) })}
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
                      update('updateFavValue', { index: i });
                      update('sortItems', {});
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

export default FontList;
