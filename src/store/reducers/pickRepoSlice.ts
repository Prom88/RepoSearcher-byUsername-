import { createSlice } from '@reduxjs/toolkit'
import type { TRepoDetail } from '../../types/Repo'

const initialState: TRepoDetail = {
	full_name: '',
	language: '',
	id: 0,
	forks_count: 0,
	stargazers_count: 0,
	updated_at: '',
	html_url: '',
	license: {
		name: '',
	},
	topics: [],
}

export const pickRepoSlice = createSlice({
	name: 'pickRepo',
	initialState,
	reducers: {
		pickRepo: (state, action) => {
			state.full_name = action.payload.full_name
			state.language = action.payload.language
			state.id = action.payload.id
			state.forks_count = action.payload.forks_count
			state.stargazers_count = action.payload.stargazers_count
			state.updated_at = action.payload.updated_at
			state.html_url = action.payload.html_url
			state.license = action.payload.license
			state.topics = action.payload.topics
		},
	},
})

export const { pickRepo } = pickRepoSlice.actions
export default pickRepoSlice.reducer
