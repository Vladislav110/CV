import React from "react";
import style from "./Work.module.scss";



type WorkPropsType = {
    style: any
    title: string
    description: string
}

export const Work = (props: WorkPropsType) => {
    return (
        <div className={style.project}>
            <div style = {props.style} className={style.imageContainer}>
                <button className={style.button}>Open</button>
            </div>
            <div className={style.projectInfo}>
                <h3 className={style.title}>{props.title}</h3>
                <span  className={style.description}>{props.description}</span>
            </div>
        </div>
    )
}