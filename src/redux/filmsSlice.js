import {createSlice} from "@reduxjs/toolkit"
import axios from "axios"

const filmsSlice = createSlice({
    name: "films",
    initialState: {
        films: [],
        film: [],
        suggestionFilms: [],
        filmsCount: 1,
        currentPage: 1,
        limit: 1,
        suggestionsLoading: 'pending',
        loading: 'pending',
        genre: ''
    },
    reducers: {
        filmsLoading(state, action) {
            if (state.loading === 'idle') {
                state.loading = 'pending'
            }
        },
        filmLoading(state, action) {
            if (state.loading === 'idle') {
                state.loading = 'pending'
            }
        },
        filmReceived(state, action) {
            if (state.loading === 'pending') {
                state.loading = 'idle'
                state.film = action.payload
            }
        },
        suggestionsLoading(state, action) {
            if (state.suggestionsLoading === 'idle') {
                state.suggestionsLoading = 'pending'
            }
        },
        suggestionsReceived(state, action) {
            if (state.suggestionsLoading === 'pending') {
                state.suggestionsLoading = 'idle'
                state.suggestionFilms = action.payload
            }
        },
        filmsReceived(state, action) {
            if (state.loading === 'pending') {
                state.loading = 'idle'
                state.films = action.payload
            }
        },
        filmsCountReceived(state, action) {
                state.filmsCount = action.payload
        },
        currentFilmsPageReceived(state, action) {
                state.currentPage = action.payload
        },
        currentFilmsLimitReceived(state, action) {
                state.limit = action.payload
        },
        setGenre(state, action) {
                state.genre = action.payload
        },
        changeCurPage(state, action) {
                state.currentPage = action.payload
        },
    }
})

export default filmsSlice.reducer
export const {suggestionsLoading, suggestionsReceived, filmsLoading, filmLoading, filmReceived, setGenre, changeCurPage, filmsReceived, filmsCountReceived, currentFilmsPageReceived, currentFilmsLimitReceived} = filmsSlice.actions

export const fetchFilms = (genre, page = 1) => async (dispatch) => {
    dispatch(filmsLoading())
    dispatch(setGenre(genre))
    const response = await axios.get(`${process.env.REACT_APP_API}/list_movies.json?page=${page}&limit=15${genre ? `&genre=${genre}` : ``}`)
    dispatch(filmsReceived(response.data.data.movies))
    dispatch(filmsCountReceived(response.data.data.movie_count))
    dispatch(currentFilmsPageReceived(response.data.data.page_number))
    dispatch(currentFilmsLimitReceived(response.data.data.limit))
    dispatch(changeCurPage(page))
}

export const fetchFilm = (id = 1) => async (dispatch) => {
    dispatch(filmLoading())
    const response = await axios.get(`${process.env.REACT_APP_API}/movie_details.json?movie_id=${id}`)
    dispatch(filmReceived(response.data.data.movie))
}


export const fetchSuggestions = (id = 1) => async (dispatch) => {
    dispatch(suggestionsLoading())
    const response = await axios.get(`${process.env.REACT_APP_API}/movie_suggestions.json?movie_id=${id}`)
    dispatch(suggestionsReceived(response.data.data.movies))
}