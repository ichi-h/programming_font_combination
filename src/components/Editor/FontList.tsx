import { useState, useContext, useRef } from 'react';
import { Radio, RadioGroup } from '@chakra-ui/react';
import { Button } from '@chakra-ui/react';
import { Tooltip } from '@chakra-ui/react';

import { CurrentFontContext, CurrentFontState } from '../Editor';
import fontListJson, { FontInfo } from '../../assets/json/fontlist.json';

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

function updateCurrentFont(fontName: string, currentFont: CurrentFontState) {
  let currentFontCopy = currentFont.value;

  let fontTitles = [];
  for (let font of fontListJson.eng) {
    fontTitles.push(font.name);
  }

  let index = fontTitles.indexOf(fontName);

  if (index !== -1) {
    currentFontCopy['eng'] = fontName;
  }
  else {
    currentFontCopy['jpn'] = fontName;
  }

  currentFont.setValue(currentFontCopy);

  let elem = document.getElementsByClassName("CodeMirror") as HTMLCollectionOf<HTMLElement>;
  elem[0].style.fontFamily = `"${currentFontCopy['eng']}", "${currentFontCopy['jpn']}"`;
}

function sortItems
(
  favValue: boolean[],
  ref: React.MutableRefObject<HTMLInputElement>,
  lang: string
)
{
  let liked = [];
  let unliked = [];

  for (let i=0; i < favValue.length; i++) {
    let elem = 
      ref.current.getElementsByClassName(
        lang + '-font-item-' + i
      )[0];

    if (favValue[i]) {
      liked.push(elem);
    }
    else {
      unliked.push(elem);
    }
  }

  let sortedItems = liked.concat(unliked);
  ref.current.innerHTML = '';

  for (let item of sortedItems) {
    ref.current.appendChild(item);
  }
}

function FontList(props: { lang: string }) {
  const currentFont = useContext(CurrentFontContext);

  let fontItemsRef = useRef() as React.MutableRefObject<HTMLInputElement>;

  let fontJson: FontInfo[] = [];

  if (props.lang === 'eng') {
    fontJson = fontListJson.eng;
  }
  else if (props.lang === 'jpn') {
    fontJson = fontListJson.jpn;
  }
  else {
    throw new Error(`Incorrect value for variable 'lang': ${props.lang}`);
  }

  const favArray = Array(fontJson.length).fill(false)
  const [favValue, setfavValue] = useState(favArray);

  let iter = makeIter(favValue, fontJson.length);

  return (
    <div className={props.lang + '-font'}>
      <RadioGroup
        defaultValue={currentFont.value[props.lang]}
        onChange={(e) => updateCurrentFont(String(e), currentFont)}
        ref={fontItemsRef}
      >
      {
        iter.map(i => { return (
          <div className={props.lang + '-font-item-' + i} key={i}>

            <div className="font-info">
              <div className="font-name">
                <Radio
                  value={fontJson[i].name}
                  name={props.lang + '-radio'}
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
                <label htmlFor={props.lang + '-fav-' + i}>
                  <input
                    className="fav-button"
                    id={props.lang + '-fav-' + i}
                    type="checkbox"
                    name="favrite"
                    defaultChecked={favValue[i]}
                    onChange={() => {
                      let favValueCopy = favValue;
                      favValueCopy[i] = !favValueCopy[i];
                      setfavValue(favValueCopy);

                      sortItems(
                        favValue,
                        fontItemsRef,
                        props.lang
                      );
                    }}
                  />
                  <i id={props.lang + 'fav-icon-' + i} className="icon-heart" />
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
