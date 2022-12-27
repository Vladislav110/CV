import React from "react";
import style from "./Work.module.css";

type WorkPropsType = {
    title: string
    description: string
}

export const Work = (props: WorkPropsType) => {
    return (
        <div className={style.project}>
            <div className={style.imageContainer}>
                <button className={style.button}>Open</button>
            </div>
                <div className={style.title}>{props.title}</div>
                <div className={style.description}>{props.description}</div>
        </div>
    )
}


// <a className={style.image} href={"dsd"}> <img src={props.image} alt="Image"/></a>