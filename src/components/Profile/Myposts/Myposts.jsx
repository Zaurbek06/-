import React from "react";
import Styles from "../Myposts/Myposts.module.css";
import Post from "./post/Post";
import { addPostActionCreator, onPostChangeActionCreator } from "../../Redux/state";
import { type } from "@testing-library/user-event/dist/type";

const Myposts = (props) => {

  let postsElements = props.posts.map ( posts => <Post message={posts.message} likesCount={posts.likesCount} />)

  let newPostElement = React.createRef();

  





  let addPost = () => {
    // props.addPost();
    props.dispatch( addPostActionCreator() );
  }
  let onPostChange = () => {
    let text = newPostElement.current.value
    // props.updateNewPostText(text)
    let action = onPostChangeActionCreator(text)
    props.dispatch(action);
  }

  return (
    <div className={Styles.postsBlock}>
      <h3>My posts</h3>
      <div>
        <div>
          <textarea onChange={ onPostChange } ref={newPostElement} value={props.newPostText}/>
        </div>
        <div>
          <button onClick={addPost}>Add post</button>
        </div>
      </div>
      <div className={Styles.posts}>
        {postsElements}
      </div>
    </div>
  );
};

export default Myposts;
