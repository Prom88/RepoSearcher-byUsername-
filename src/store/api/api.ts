import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { TRepos } from '../../types/Repo'

export const githubApi = createApi({
	reducerPath: 'githubApi',
	baseQuery: fetchBaseQuery({ baseUrl: 'https://api.github.com' }),
	endpoints: (builder) => ({
		searchRepositories: builder.query<TRepos, string>({
			query: (searchTerm) => `/search/repositories?q=${searchTerm}`,
		}),
	}),
})

export const { useSearchRepositoriesQuery } = githubApi
