import { DataGrid, GridColDef } from '@mui/x-data-grid'
import { useAppDispatch, useAppSelector } from '../hook'
import { githubApi } from '../store/api/api'
import { pickRepo } from '../store/reducers/pickRepoSlice'
import styles from '../styles/searchResults.module.scss'

const columns: GridColDef[] = [
	{
		field: 'name',
		headerName: 'Название',
		width: 182,
		disableColumnMenu: true,
		resizable: false,
	},
	{
		field: 'language',
		headerName: 'Язык',
		width: 182,
		disableColumnMenu: true,
		resizable: false,
	},

	{
		field: 'forks_count',
		headerName: 'Число форков',
		type: 'number',
		width: 182,
		disableColumnMenu: true,
		resizable: false,
	},
	{
		field: 'stargazers_count',
		headerName: 'Число звезд',
		type: 'number',
		width: 182,
		disableColumnMenu: true,
		resizable: false,
	},
	{
		field: 'updated_at',
		headerName: 'Дата обновления',
		width: 182,
		disableColumnMenu: true,
		resizable: false,
	},
]

function SearchResults() {
	const dispatch = useAppDispatch()
	const query: string = useAppSelector((state) => state.search.query)
	const { data } = githubApi.useSearchRepositoriesQuery(query)

	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	const handleClick = (row: any) => {
		console.log(row)
		dispatch(pickRepo(row.row))
	}

	console.log(useAppSelector((state) => state.pickRepo))

	if (!data) {
		return (
			<div className={styles.welcome}>
				<h1>Добро пожаловать!</h1>
			</div>
		)
	} else {
		const rows = data.items
		return (
			<div className={styles.container}>
				<h3>Результаты поиска</h3>

				<div>
					<DataGrid
						columns={columns}
						rows={rows}
						getRowId={(row) => row.id}
						onRowClick={handleClick}
					/>
				</div>
			</div>
		)
	}
}
export default SearchResults
