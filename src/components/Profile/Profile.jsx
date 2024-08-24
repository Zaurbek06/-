import React from "react";
import Styles from "./Profile.module.css";
import Myposts from "./Myposts/Myposts";
import ProfileInfo from "./Profileinfo/Profileinfo";
import { addPost } from "../Redux/state";

const Profile = (props) => {

  


  return (
    <div >
      <ProfileInfo />
      <Myposts posts={props.profilePage.posts} 
               newPostText={props.profilePage.newPostText}
               
               dispatch={props.dispatch} />
    </div>
  );
};

export default Profile;
