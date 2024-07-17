import React from "react";
import Styles from './Dialogs.module.css';
import { NavLink } from "react-router-dom";


const Dialogs = () => {
    return (
        <div className={Styles.dialogs}>
            <div className={Styles.dialogsItems}>
                <div className={Styles.dialog}>
                       <NavLink to="/dialogs/1">Dima</NavLink> 
                </div>
                <div className={Styles.dialog}>
                       <NavLink to="/dialogs/2">Andrey</NavLink>
                </div>
                <div className={Styles.dialog}>
                       <NavLink to="/dialogs/3">Sveta</NavLink> 
                </div>
                <div className={Styles.dialog}>
                       <NavLink to="/dialogs/4">Sasha</NavLink> 
                </div>
                <div className={Styles.dialog}>
                       <NavLink to="/dialogs/5">Viktor</NavLink> 
                </div>
                <div className={Styles.dialog}>
                       <NavLink to="/dialogs/6">Valera</NavLink> 
                </div>
            </div>
            <div className={Styles.messages}>
               <div className={Styles.message}>hey</div>
               <div className={Styles.message}>hay are you Valer</div>
               <div className={Styles.message}>Brom</div> 
            </div>
        </div>
    )
}

export default Dialogs;