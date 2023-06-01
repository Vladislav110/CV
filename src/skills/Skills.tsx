import React from "react";
import style from "./Skills.module.css"
import styleContainer from "./../common/styles/Container.module.css"
import {Skill} from "./skill/Skill";
import {Title} from "../common/components/title/Title";


export const Skills = () => {
    return <div className={style.skillsBlock}>
        <div className={`${styleContainer.container} ${style.skillsContainer}`}>
            <Title title={"Skills"}/>
            <div className={style.skills}>
                <Skill title={"TS"} description={" Hello everybody, how are you?"}/>
                <Skill title={"CSS"} description={" La-La-La"}/>
                <Skill title={"React"} description={" Ho-Ho-Ho"}/>
                <Skill title={"HTML"} description={" Be-Be-Be"}/>
            </div>
        </div>
    </div>
}