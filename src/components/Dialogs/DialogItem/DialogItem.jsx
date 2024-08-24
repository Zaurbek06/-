import React from "react";
import Styles from "./../Dialogs.module.css";
import { NavLink } from "react-router-dom";

const DialogItem = (props) => {
  let path = "/dialogs/" + props.id;

  return (
    <div className={Styles.dialog}>
      <NavLink to={path}>{props.name}</NavLink>
    </div>
  );
};


export default DialogItem;
