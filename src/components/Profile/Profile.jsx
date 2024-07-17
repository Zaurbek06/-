import React from "react";
import Styles from "./Profile.module.css";
import Myposts from "./Myposts/Myposts";

const Profile = () => {
  return (
    <div >
      <div>
        <img src="https://i.pinimg.com/originals/49/ee/34/49ee3447eef36b7a2989a080be5222b7.jpg" />
      </div>
      <div>ava+description</div>
      <Myposts />
    </div>
  );
};

export default Profile;
