export type TRepo = {
	id: number
	name: string
	owner: {
		login: string
		id: number
		url: string
	}
	language: string
	forks_count: number
	stargazers_count: number
	updated_at: string
}

export type TRepos = TRepo[]

export type TRepoDetail = {
	id: number
	full_name: string
	html_url: string
	license?: {
		name?: string
	}
	topics: string[]
	language: string
	forks_count: number
	stargazers_count: number
	updated_at: string
}
