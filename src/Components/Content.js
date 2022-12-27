import React, { useEffect, useState } from "react";
import db from "../firebase";
import CreatePost from "./reuseable/CreatePost";
import Menu from "./reuseable/Menu";
import Post from "./reuseable/Post";
import StatusList from "./reuseable/StatusList";
import { getDocs, collection } from "firebase/firestore";

function Content() {
  const [posts, setPosts] = useState([]);

  const fetchPost = async () => {
    const querSnapshat = await getDocs(collection(db, "post"));
    let temp = [];
    querSnapshat.forEach((doc) => {
      temp.push({ id: doc.id, ...doc.data() });
    });
    temp = temp.sort(function (x, y) {
      return y.timestamp - x.timestamp;
    });
    setPosts(temp);
  };
  useEffect(() => {
    fetchPost();
  }, []);
  return (
    <div className="  content d-flex pt-4 ">
      <Menu />
      <div className="container s p-4">
        <StatusList />
        <CreatePost fetchPost={fetchPost} />
        {posts.map((post) => (
          <Post {...post} />
        ))}
      </div>
    </div>
  );
}

export default Content;
