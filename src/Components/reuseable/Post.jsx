import React from "react";
import {
  ChatLeftFill,
  HandThumbsUpFill,
  ShareFill,
} from "react-bootstrap-icons";

function Post(props) {
  return (
    <div key={props.id} className="post background-white br-10 mb-3 px-3 ">
      <div className="d-flex">
        <img
          src={props.profileUrl}
          width={45}
          height={50}
          className="profile-post me-2 br-30"
          alt="profile"
        />
        <div>
          <div>{props.username}</div>
          <div>{new Date(props.date?.toDate()).toLocaleString()}</div>
        </div>
      </div>
      <p className="ps-3 pt-3">{props.message}</p>
      {props.image && (
        <img
          src={props.image}
          alt="userProfile"
          width={"100%"}
          height={500}
          className="post-image px-2 pb-3 br-20"
        />
      )}
      <div className="d-flex  color-gray justify-content-evenly">
        <div className="d-flex fs-3 mt-3 mb-3 align-items-center">
          <HandThumbsUpFill className="me-2" />
          Like
        </div>
        <div className="d-flex  fs-3 align-items-center">
          <ChatLeftFill className="me-2" />
          Comment
        </div>
        <div className="d-flex fs-3 align-items-center">
          <ShareFill className="me-2" />
          Share
        </div>
      </div>
    </div>
  );
}

export default Post;
