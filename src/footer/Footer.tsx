import React from "react";
import style from "./Footer.module.css"

export const Footer = () => {
    return (
        <div className={style.footer}>
            <div className={style.container}>
                <h3 className={style.title}>Matsuk Vlad</h3>
                <div className={style.icons}>
                    <a className={style.icon} href="https://..."> <img src="dssds" alt=""/></a>
                    <a className={style.icon} href="https://..."> <img src="dssds" alt=""/></a>
                    <a className={style.icon} href="https://..."> <img src="dssds" alt=""/></a>
                    <a className={style.icon} href="https://..."> <img src="dssds" alt=""/></a>
                </div>
                <h5 className={style.rights}> &#169; 2022 All rights reserved. </h5>
            </div>
        </div>
    )
}