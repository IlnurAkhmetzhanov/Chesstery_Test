import React, {component} from "react";
import style from "./Cabinet.module.css";
import {renderAddButton} from "./AddButton/AddButton.jsx";
import {renderCreateGroupButton} from "./CreateGroupButton/CreateGroupButton";
import {renderUserPage} from "./UserPage/UserPage";
import {renderSelectUser} from "./SelectUser/SelectUser.jsx";
import {renderTableHeader} from "../TableHeader/TableHeader";
import {renderLessonData} from "./LessonData/LessonData";

export const renderCabinet = () => {
    return (
        <div className={style.wrapper}>
            <div className={style.topBlock}>
                <div className={style.sectionName}>
                    <h3>Мои ученики</h3>
                </div>
                <div className={style.topHeading}>
                    <h5>Ученики</h5>
                    <h5>Группы</h5>
                </div>
                <div className={style.control}>
                    <div className={style.bottoms}>{renderAddButton()}
                <br/>

                     {renderCreateGroupButton()}</div>
                    <div className={style.UsersList}>{renderUserPage()}</div>
                </div>
            </div>
            <div className={style.bottomBlock}>
                <div className={style.bottomHeading}>
                   <div className={style.leftHeading}>
                       <div><h4>Расписание</h4></div>
                       <div><h4>Успеваемость</h4></div>
                   </div>


                <div className={style.rightHeading}>{renderSelectUser()}</div>
                </div>
            </div>
            <div className={style.tableHeader}> {renderTableHeader()}</div>
            <div className={style.LessonData}>{renderLessonData()}</div>
        </div>)
}
