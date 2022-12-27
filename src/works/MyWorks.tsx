import React from "react";
import style from "./MyWorks.module.css";
import {Work} from "./work/Work";


export const MyWorks = () => {
    return (
        <div className={style.worksBlock}>
            <div className={style.container}>
                <h2 className={style.title}>My projects</h2>
                <div className={style.work}>
                    <Work title={"TodoLists"} description={"My cool project"}/>
                    <Work title={"Social NetWork"} description={"This is a creation of God"}/>
                    <Work title={"Counter"} description={"My biggest mistake in life"}/>
                </div>
            </div>
        </div>
    )
}