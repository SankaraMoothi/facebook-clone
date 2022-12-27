import React, { useState } from "react";
import { CameraFill, EmojiSmile, Images, Person } from "react-bootstrap-icons";
import { addDoc, Timestamp, collection } from "firebase/firestore";
import db from "../../firebase";
import { useSelector } from "react-redux";
function CreatePost(props) {
  const user = useSelector((state) => state.user.value);
  const [message, setMessage] = useState("");
  const [image, setImage] = useState("");
  const handleSubmit = () => {
    addDoc(collection(db, "post"), {
      username: user.displayName,
      message,
      image,
      date: Timestamp.fromDate(new Date()),
      profileUrl: user.photoUrl,
    }).then(() => {
      props.fetchPost();
      setImage("");
      setMessage("");
    });
  };
  return (
    <div className=" background-white br-10 my-4">
      <div className=" createPost d-flex align-items-center mx-3">
        <Person className="fs-1 pe-2" />
        <input
          type="search"
          className="search-box"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="create An Post.."
          style={{ flex: 1 }}
        />
        <input
          type="search"
          value={image}
          onChange={(e) => setImage(e.target.value)}
          className="search-box"
          placeholder="Image URL"
        />
        <button className="btn btn-success br-30" onClick={handleSubmit}>
          Post
        </button>
      </div>
      <div className="svg d-flex pt-2 pb-3 justify-content-evenly">
        <div className="d-flex post-icon align-items-center">
          <CameraFill color="red" /> Live Video
        </div>
        <div className="d-flex post-icon align-items-center">
          <Images color="green" />
          Photo/Video
        </div>
        <div className="d-flex post-icon align-items-center">
          <EmojiSmile className="text-warning" />
          Feeling Activity
        </div>
      </div>
    </div>
  );
}

export default CreatePost;
