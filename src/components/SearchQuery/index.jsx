import React, {useState} from 'react'
import s from './SearchQuery.module.css'
import {fetchFilms} from "../../redux/filmsSlice"
import {useDispatch} from "react-redux"
import expand from './../../icons/expand.png'

export const SearchQuery = () => {

    const searchParams = [
        {id: 2, text: 'Action'},
        {id: 3, text: 'Adventure'},
        {id: 4, text: 'Animation'},
        {id: 5, text: 'Biography'},
        {id: 6, text: 'Comedy'},
        {id: 7, text: 'Crime'},
        {id: 8, text: 'Documentary'},
        {id: 9, text: 'Drama'},
        {id: 10, text: 'Family'},
        {id: 11, text: 'Fantasy'},
        {id: 12, text: 'Film-Noir'},
        {id: 13, text: 'Game-Show'},
        {id: 14, text: 'History'},
        {id: 15, text: 'Horror'},
        {id: 16, text: 'Music'},
        {id: 17, text: 'Musical'},
        {id: 18, text: 'Mystery'},
        {id: 19, text: 'News'},
        {id: 20, text: 'Reality-TV'},
        {id: 21, text: 'Romance'},
        {id: 22, text: 'Sci-Fi'},
        {id: 23, text: 'Sport'},
        {id: 24, text: 'Talk-Show'},
        {id: 25, text: 'Thriller'},
        {id: 26, text: 'War'},
        {id: 27, text: 'Western'},
    ]

    const dispatch = useDispatch()

    const [visibleParams, setVisibleParams] = useState(true)

    return (

        <div style={visibleParams ? {maxHeight: 'none'} : {maxHeight: '145px'}} className={s.wrapper}>
            <div
                className={s.name}
                onClick={() => {dispatch(fetchFilms(''))}}
            >
                ReactMovies
            </div>
            <div
                className={s.expand}
                onClick={() => {setVisibleParams(!visibleParams)}}
            >
                <img src={expand} alt="expand" className={visibleParams ? s.expand : s.expandImgActive}/>
            </div>

            <div className={visibleParams ? s.parametersWrapper : s.parametersWrapperActive}>
            {
                searchParams &&
                searchParams.map((param, index) => {
                    return (
                        <div
                            key={param.id+param.text}
                            className={s.parameters}
                            onClick={() => {dispatch(fetchFilms(`${param.text}`))}}
                        >
                            {param.text}
                        </div>
                    )
                })
            }
            </div>
        </div>
    )
}
