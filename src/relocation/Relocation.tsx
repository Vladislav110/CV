import React from "react";
import style from "./Relocation.module.css";

export const Relocation = () => {
    return (
        <div className={style.relocate}>
            <div className={style.container}>
                <h3 className={style.title}>Ready for relocation</h3>
                <span className={style.description}>
                    I am considering working in another city or country.
                <p>P.S. There are all documents for legal employment in the Republic of Poland</p>
                    </span>
                <button className={style.button}>Hire me</button>
            </div>
        </div>
    )
}