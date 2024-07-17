import React from "react";
import Styles from "../Myposts/Myposts.module.css";
import Post from "./post/Post";

const Myposts = () => {
  return (
    <div>
      My posts
      <div>
        <textarea></textarea>
        <button>Add post</button>
      </div>
      <div className={Styles.posts}>
        <Post message="hey okey" />
        <Post message="what is you day today" />
        <Post />
        <Post />
      </div>
    </div>
  );
};

export default Myposts;
