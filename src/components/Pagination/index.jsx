import React from 'react'
import s from "./Pagination.module.css"
import {useDispatch, useSelector} from "react-redux"
import {changeCurPage, fetchFilms} from "../../redux/filmsSlice"

export const Pagination = () => {

    const dispatch = useDispatch()
    const {genre} = useSelector(state => state.films)
    let {currentPage} = useSelector(state => state.films)
    const {filmsCount} = useSelector(state => state.films)
    const pagesCount = Math.ceil(filmsCount/10)


    const plusPage = () => {
        if (currentPage < pagesCount) {
            dispatch(changeCurPage(currentPage++))
            dispatch(fetchFilms(genre, currentPage++))
        } else {

        }
    }

    const minusPage = () => {
        if (currentPage === 1) {
            dispatch(changeCurPage(currentPage))
            dispatch(fetchFilms(genre, currentPage))
        } else {
            dispatch(changeCurPage(currentPage--))
            dispatch(fetchFilms(genre, currentPage--))
        }
    }


    return (
        <>
            <button
                className={s.paginationButton}
                onClick={minusPage}
            >
                🠔
            </button>

            <button
                className={s.paginationButton}
                onClick={plusPage}
            >
                🠖
            </button>
        </>
    )
}