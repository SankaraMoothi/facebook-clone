import React from "react";

function Status(props) {
  return (
    <div className="status">
      <img
        src={props.img}
        width={200}
        height={350}
        className="br-20"
        alt="status"
      />
      <img
        src={props.profile}
        height={45}
        width={45}
        className="status-profile"
        alt="profile"
      />
      <div className="name">
        <b>{props.name}</b>
      </div>
    </div>
  );
}

export default Status;
