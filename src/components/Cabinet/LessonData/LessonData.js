import React from "react"
import style from "./LessonData.module.css"

export const renderLessonData=()=>{
    return(
        <div className={style.wrapper}>
            <div className={style.number}>1</div>
            <div className={style.lessonName}>Урок 1</div>
            <div className={style.exerciceCount}>100</div>
            <div className={style.exerciceComplted}>90</div>
            <div className={style.error}>19</div>
            <div className={style.warning}>33</div>
            <div className={style.times}>100мин</div>
            <div className={style.earned}>1000</div>

        </div>
    )
}