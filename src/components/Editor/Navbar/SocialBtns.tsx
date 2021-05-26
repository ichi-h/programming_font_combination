import React from "react";
import {
  Button,
  Portal,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverBody,
  PopoverArrow,
} from "@chakra-ui/react";

import ShareBtn from "./ShareBtn";

function SocialBtns() {
  const handleGitHubBtn = () => {
    window.open("https://github.com/ippee/programming_fonts_combination");
  };

  return (
    <div className="social-buttons">
      <Popover placement="bottom-start">
        <PopoverTrigger>
          <Button className="share-button" variant="link">
            <i className="icon-share" />
          </Button>
        </PopoverTrigger>
        <Portal>
          <PopoverContent>
            <PopoverArrow />
            <PopoverBody>
              <div className="share-popver-body">
                <ShareBtn media="Twitter" />
                <ShareBtn media="Facebook" />
                <ShareBtn media="Pocket" />
              </div>
            </PopoverBody>
          </PopoverContent>
        </Portal>
      </Popover>
      <Button
        className="github-button"
        variant="link"
        onClick={handleGitHubBtn}
      >
        <i className="icon-github-circled" />
      </Button>
    </div>
  );
}

export default SocialBtns;
