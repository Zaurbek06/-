import React from "react";
import Styles from "./Post.module.css";

const Post = (props) => {
  return (
    
 
    <div className={Styles.item}>
      <img src="https://i.playground.ru/p/tRXuCJPpLW_bZJ1IdfZknw.jpeg" />
      { props.message }
      <div>
      <span> { props.likesCount } </span>
      </div>
      </div>
  )
};

export default Post;
