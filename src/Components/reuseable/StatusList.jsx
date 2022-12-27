import React from "react";
import { ImageList } from "../../utils";
import Status from "./Status";

function StatusList() {
  return (
    <div className="statuses d-flex content-status">
      <Status
        img={ImageList[0].url}
        profile={ImageList[0].profileUrl}
        name={ImageList[0].author}
      />
      <Status
        img={ImageList[1].url}
        profile={ImageList[1].profileUrl}
        name={ImageList[1].author}
      />
      <Status
        img={ImageList[2].url}
        profile={ImageList[2].profileUrl}
        name={ImageList[2].author}
      />
      <Status
        img={ImageList[3].url}
        profile={ImageList[3].profileUrl}
        name={ImageList[3].author}
      />
      <Status
        img={ImageList[4].url}
        profile={ImageList[4].profileUrl}
        name={ImageList[4].author}
      />
    </div>
  );
}

export default StatusList;
