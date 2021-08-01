import React from "react"
import style from "./UserPage.module.css"
export const renderUserPage=()=>{
    return (
        <div className={style.wrapper}>
            <div className={style.icon}><img src={require("./assets/icon.svg").default}/></div>
            <div className={style.name}>Усманов Азат</div>
        </div>
    )
}