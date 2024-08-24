import React from "react";
import Styles from "./Profileinfo.module.css";


const ProfileInfo = () => {
  return (
    <div>
      <div>
        <img src="https://i.pinimg.com/originals/49/ee/34/49ee3447eef36b7a2989a080be5222b7.jpg" />
      </div>
      <div className={Styles.descriptionBlock}>ava+description</div>
    </div>
  );
};

export default ProfileInfo;
