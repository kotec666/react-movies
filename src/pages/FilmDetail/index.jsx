import React, {useEffect} from 'react'
import s from './FilmDetail.module.css'
import {FilmCard} from "../../components/FilmCard/FilmCard"
import {Link} from "react-router-dom"
import { useParams } from "react-router-dom"
import {fetchFilm, fetchSuggestions} from "../../redux/filmsSlice"
import {useDispatch, useSelector} from "react-redux"
import {FilmLoader} from "../../components/FilmLoader"
import {FilmDetailImgLoader} from "../../components/FilmLoader/FilmDetailImgLoader"
import {FilmDetailInfoLoader} from "../../components/FilmLoader/FilmDetailInfoLoader"

export const FilmDetail = () => {

    const dispatch = useDispatch()
    const { id } = useParams()
    const {film} = useSelector(state => state.films)
    const {loading} = useSelector(state => state.films)
    const {suggestionFilms} = useSelector(state => state.films)
    const {suggestionsLoading} = useSelector(state => state.films)

    useEffect(() => {
            dispatch(fetchFilm(id))
            dispatch(fetchSuggestions(id))

            // eslint-disable-next-line
    }, [id])

    return (
        <>
            <div className={s.wrapper}>
                            <Link to="/" className={s.backButton}>🠔</Link>
                            <div className={s.contentWrapper}>
                 {  loading === 'pending' ? <FilmDetailImgLoader /> :
                                <div className={s.imgWrapper}>
                                    <img src={film?.large_cover_image} alt="filmLogo"/>
                                </div>
                 }

                                <div className={s.filmInfoWrapper}>
                 {  loading === 'pending' ? <FilmDetailInfoLoader /> :
                 <>
                                    <span>{film?.title_long}</span>
                                    <span>{film?.description_full}</span>
                                    <span>Language: {film?.language}</span>
                                    <span>Likes: {film?.like_count}</span>
                                    <span>Downloads: {film?.download_count}</span>
                                    <span>Rating: {film?.rating}</span>
                                    <span>Runtime: {film?.runtime}min</span>
                                    <span>Genres: {film.genres && film?.genres.map((genre) => {
                                        return genre + ' '
                                    })}</span>
                  </>
                 }
                                </div>
                            </div>
            </div>

            <section className={s.downloadsWrapper}>
                {
                    film?.torrents &&
                    film?.torrents.map((torrent) => {
                        return (
                            <div key={torrent?.hash} className={s.downloadWrapper}>
                                <span>Quality: {torrent?.quality}</span>
                                <span>Seeds: {torrent?.seeds}</span>
                                <span>Peers: {torrent?.peers}</span>
                                <span>Size: {torrent?.size}</span>
                                <a href={torrent?.url} rel="noreferrer" target="_blank" className={s.downloadBtn}>Download</a>
                            </div>
                        )
                    })
                }

            </section>
            <section className={s.suggestionsWrapper}>
                <span className={s.suggestions}>Suggestions:</span>
                <div className={s.filmsWrapper}>
                    {
                        suggestionsLoading === 'pending'
                            ? Array(4)
                                .fill(0)
                                .map((_, index) => <FilmLoader key={index} />)
                            : suggestionFilms && suggestionFilms.map(film => {
                            return <FilmCard key={film.id} id={film.id} title={film.title} year={film.year} rating={film.rating} runtime={film.runtime} genres={film.genres} image={film.medium_cover_image}  />
                        })
                    }
                </div>
            </section>
        </>
    )
}

