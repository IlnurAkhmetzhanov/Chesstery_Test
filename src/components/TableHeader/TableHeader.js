import React from "react"
import style from "./TableHeader.module.css"
 export const renderTableHeader=()=>{
    return(
        <div className={style.wrapper}>
            <div className={style.number}>№</div>
            <div className={style.lessonName}>Название урока</div>
            <div className={style.exerciceCount}>Упражнений в уроке</div>
            <div className={style.exerciceComplted}>Упражнений выполнено</div>
            <div className={style.error}>Ошибок</div>
            <div className={style.warning}>Неточности</div>
            <div className={style.times}>Потраченное время</div>
            <div className={style.earned}>Заработано террикоинов</div>

        </div>
    )
}
