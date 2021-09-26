import {combineReducers, configureStore } from '@reduxjs/toolkit'
import filmsSlice from "./filmsSlice"

const rootReducer = combineReducers({
  films: filmsSlice
})

export const store = configureStore({
  reducer: rootReducer,
})