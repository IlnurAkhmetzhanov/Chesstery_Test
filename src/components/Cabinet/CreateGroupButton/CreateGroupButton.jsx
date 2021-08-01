import React from "react"
import style from "./CreateGroupButton.module.css";
export const renderCreateGroupButton = () => {
    return (
        <div className={style.wrapper}>
            <div className={style.icon}>
                <img src={require("./assets/icon.svg").default}/>
            </div>
            <div className={style.title}>Создать группу</div>
        </div>
    )
}
