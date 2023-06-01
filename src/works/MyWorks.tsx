import React from "react";
import style from "./MyWorks.module.scss";
import {Work} from "./work/Work";
import {Title} from "../common/components/title/Title";
import TodoImage from "../assets/images/blog2.jpg";
import SocialNetWork from "../assets/images/socialNetwork.jpg"
import CounterProject from "../assets/images/Counter-app.png"


export const MyWorks = () => {
    const todoListProjectStyle = {
        backgroundImage: `url("${TodoImage}")`
    }

    const socialNetWorkProjectStyle = {
        backgroundImage: `url(${SocialNetWork})`
    }

    const counterProjectStyle = {
        backgroundImage: `url(${CounterProject})`
    }

    return (
        <div className={style.worksBlock}>
            <div className={style.container}>
                <Title title={"My Projects"}/>
                <div className={style.work}>
                    <Work style={todoListProjectStyle} title={"TodoLists"}
                          description={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad deserunt eum expedita facere fugiat id ipsa ipsum libero magni maxime minima nesciunt nihil, perferendis sit tempore ut vel. Facere, quidem?"}/>
                    <Work style={socialNetWorkProjectStyle} title={"Social NetWork"}
                          description={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet commodi eligendi enim esse nisi repellat vel. Blanditiis culpa inventore modi!"}/>
                    <Work style={counterProjectStyle} title={"Counter"}
                          description={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci fugit inventore placeat quaerat ratione! Cupiditate deleniti laboriosam maiores numquam porro quasi repellat saepe sequi, tempora unde. Aperiam corporis minima sit."}/>
                </div>
            </div>
        </div>
    )
}