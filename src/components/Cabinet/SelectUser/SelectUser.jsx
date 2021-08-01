import React from "react"
import style from "../UserPage/UserPage.module.css";

export const renderSelectUser=()=>{
    return(
        <div className={style.wrapper}>
            <div className={style.icon}><img src={require("./assets/icon.svg").default}/></div>
            <div className={style.name}>Усманов Азат</div>
        </div>
    )
}