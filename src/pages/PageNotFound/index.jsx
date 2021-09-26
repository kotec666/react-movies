import React from 'react'
import s from './PageNotFound.module.css'
import {Link} from "react-router-dom"

export const PageNotFound = () => {
    return (
        <div className={s.wrapper}>
            <div className={s.text}>
                Page not found
            </div>
            <Link to="/" className={s.btn}>
                🠔 Return to home page
            </Link>
        </div>
    )
}