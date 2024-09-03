import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { githubApi } from './api/api'
import pickRepoReducer from './reducers/pickRepoSlice'
import searchReducer from './reducers/searchSlice'

const rootReducer = combineReducers({
	[githubApi.reducerPath]: githubApi.reducer,
	search: searchReducer,
	pickRepo: pickRepoReducer,
})

export const store = configureStore({
	reducer: rootReducer,
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware().concat(githubApi.middleware),
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch
