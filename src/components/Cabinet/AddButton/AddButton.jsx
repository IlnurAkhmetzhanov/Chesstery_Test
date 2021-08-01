import React from "react"
import style from "./AddButton.module.css";
export const renderAddButton = () => {
    return (
        <div className={style.wrapper}>
            <div className={style.icon}>
                <img src={require("./assets/icon.svg").default}/>
            </div>
            <div className={style.title}>Добавить ученика</div>
        </div>
    )
}
