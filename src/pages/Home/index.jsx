import React, {useEffect, useState} from 'react'
import {SearchQuery} from "../../components/SearchQuery"
import s from './Home.module.css'
import {FilmCard} from "../../components/FilmCard/FilmCard"
import {Pagination} from "../../components/Pagination"
import {FilmLoader} from "../../components/FilmLoader"
import {useDispatch, useSelector} from "react-redux"
import {fetchFilms} from "../../redux/filmsSlice"

export const Home = () => {

    const dispatch = useDispatch()
    const {films} = useSelector(state => state.films)
    const {loading} = useSelector(state => state.films)
    const [inputValue, setInputValue] = useState('')
    const [isOpen, setIsOpen] = useState(true)

    useEffect( () => {
        dispatch(fetchFilms(''))

        // eslint-disable-next-line
    }, [])

    const filtredFilms = films.filter(film => {
        return film.title.toLowerCase().includes(inputValue.toLowerCase())
    })

    const itemClickHandler = (e) => {
        setInputValue(e.target.textContent)
        setIsOpen(!isOpen)
    }

    const inputClickHandler = () => {
        setIsOpen(true)
    }

    const deleteInputValue = () => {
        setInputValue('')
    }

    return (
        <>
            <div className={s.contentWrapper}>
                <SearchQuery />
                <div className={s.searchWrapper}>
                    <div className={s.searchItemsWrapper}>
                        <input
                            type="text"
                            className={s.homeInput}
                            onChange={(e) => {setInputValue(e.target.value)}}
                            value={inputValue}
                            onClick={inputClickHandler}
                            placeholder="Search on this page..."
                        />

                        {
                            inputValue ?
                                <div
                                    className={s.deleteValue}
                                    onClick={deleteInputValue}
                                >
                                    X
                                </div> : null
                        }

                        <div className={s.searchTextWrapper}>
                            {
                                inputValue && isOpen ?
                                    filtredFilms && filtredFilms.map(film => {
                                    return (
                                        <div
                                            key={film.id}
                                            className={s.searchText}
                                            onClick={itemClickHandler}
                                        >
                                            {film.title}
                                        </div>
                                    )
                                }) : null
                            }
                        </div>
                    </div>
                    <div className={s.filmsWrapper}>
                        {
                            loading === 'pending'
                             ? Array(6)
                                    .fill(0)
                                    .map((_, index) => <FilmLoader key={index} />)
                             : filtredFilms && filtredFilms.map(film => {
                               return <FilmCard key={film.id} id={film.id} title={film.title} year={film.year} rating={film.rating} runtime={film.runtime} genres={film.genres} image={film.large_cover_image}  />
                            })
                        }
                    </div>
                    <div className={s.paginationWrapper}>
                        <Pagination />
                    </div>
                </div>
            </div>
        </>
    )
}
