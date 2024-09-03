import { TextField } from '@mui/material'
import Button from '@mui/material/Button'
import { useState } from 'react'
import { useAppDispatch } from '../hook'
import { setQuery } from '../store/reducers/searchSlice'
import styles from '../styles/searchBar.module.scss'

function SearchBar() {
	const [name, setName] = useState('')
	const dispatch = useAppDispatch()

	return (
		<div className={styles.container}>
			<div className={styles.fieldBox}>
				<TextField
					id='filled-basic'
					label='Введите поисковый запрос'
					variant='outlined'
					fullWidth
					size='small'
					value={name}
					onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
						setName(event.target.value ? event.target.value : '')
					}}
				/>
			</div>
			<div className={styles.buttonBox}>
				<Button variant='contained' onClick={() => dispatch(setQuery(name))}>
					ИСКАТЬ
				</Button>
			</div>
		</div>
	)
}
export default SearchBar
