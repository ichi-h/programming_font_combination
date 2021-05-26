import React from "react";
import { Button } from "@chakra-ui/react";

type Media = "Twitter" | "Facebook" | "Pocket";

function ShareBtn(props: { media: Media }): JSX.Element {
  let Icon: JSX.Element;
  let shareURL: string;
  const title = document.title;
  const pageURL = window.location.href;

  switch (props.media) {
    case "Twitter":
      Icon = <i className="icon-twitter" />;
      shareURL = `https://twitter.com/share?url=${pageURL}&text=${title}`;
      break;
    case "Facebook":
      Icon = <i className="icon-facebook-official" />;
      shareURL = `http://www.facebook.com/sharer.php?u=${pageURL}&t=${title}`;
      break;
    case "Pocket":
      Icon = <i className="icon-get-pocket" />;
      shareURL = `http://getpocket.com/edit?url=${pageURL}&title=${title}`;
      break;
  }

  const handleClick = () => window.open(shareURL);

  return (
    <Button variant="link" onClick={handleClick} width="3rem">
      {Icon}
    </Button>
  );
}

export default ShareBtn;
