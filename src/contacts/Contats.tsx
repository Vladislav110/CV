import React from "react";
import style from "./Contacts.module.css";

export const Contacts = ()=> {
    return (
        <div className={style.contacts}>
            <div className={style.container}>
                <h3 className={style.title}>Contacts</h3>
                <form className={style.form}>
                    <input className={style.textPlace} type = {"text"} placeholder={"Name"} />
                    <input className={style.textPlace} type = {"text"} placeholder={"Email"}/>
                    <textarea className={style.textArea} placeholder={"Message"}></textarea>
                </form>
                <button className={style.button}>Send</button>
            </div>
        </div>
    )
}