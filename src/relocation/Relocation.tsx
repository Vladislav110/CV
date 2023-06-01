import React from "react";
import style from "./Relocation.module.css";
import {Title} from "../common/components/title/Title";

export const Relocation = () => {
    return (
        <div className={style.relocate}>
            <div className={style.container}>
               <Title title={"Ready for relocation"}/>
                <span className={style.description}>
                    I am considering working in another city or country.
                <p>P.S. There are all documents for legal employment in the Republic of Poland</p>
                    </span>
                <button className={style.button}>Hire me</button>
            </div>
        </div>
    )
}