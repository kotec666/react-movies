import React from 'react'
import s from "./FilmCard.module.css"
import {Link, useHistory} from "react-router-dom"

export const FilmCard = ({id, title, year, rating, runtime, genres, image}) => {

    const history = useHistory()

    const location = () => {
        history.push('/')
    }

    return (
        <div className={s.cardWrapper}>
            <div className={s.filmCard}>
                                <span className={s.filmName}>
                                    {
                                      title && title.length <= 16 ? title && title : title && title.substring(0, 13) + '...'
                                    }
                                </span>
                <div className={s.imgWrapper}>
                    <img src={image} loading="lazy" alt="filmLogo"/>
                </div>
                <span className={s.filmYear}>{year}</span>
            </div>
            <div className={s.filmCardGenreWrapper}>
                {
                  genres && genres.map((genre, index) => {
                        return (
                            <span key={genre+index+id} className={s.genreName}>
                                {genre}
                            </span>
                        )
                    })
                }
            </div>
            <div className={s.detailCard}>
                <svg width="100" height="91" viewBox="0 0 100 91" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M45.4095 3.63284C47.1469 -0.391398 52.8531 -0.391403 54.5905 3.63283L64.525 26.6442C65.2649 28.3578 66.8975 29.5166 68.7592 29.6496L94.3841 31.4802C98.9141 31.8039 100.701 37.5118 97.1648 40.3611L77.9563 55.8368C76.43 57.0665 75.763 59.0745 76.2501 60.973L82.2822 84.4813C83.3872 88.7876 78.7434 92.2864 74.9089 90.0366L52.5303 76.9065C50.9679 75.9899 49.0321 75.9899 47.4698 76.9065L25.0911 90.0366C21.2566 92.2864 16.6128 88.7876 17.7178 84.4813L23.7499 60.973C24.237 59.0745 23.57 57.0665 22.0437 55.8368L2.83524 40.3611C-0.701325 37.5118 1.08585 31.8039 5.61588 31.4802L31.2408 29.6496C33.1025 29.5166 34.7351 28.3578 35.4749 26.6442L45.4095 3.63284Z" fill="#549A3C"/>
                </svg>
                <span className={s.rating}>{rating}/10</span>
                <span className={s.runtime}>Runtime:{runtime}min</span>
                <Link onClick={() => location()} to={`movies/${id}`} className={s.viewDetailsButton}>View Details</Link>
            </div>
        </div>
    )
}

