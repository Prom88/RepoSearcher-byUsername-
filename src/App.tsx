import RepoDetails from './components/RepoDetails'
import SearchBar from './components/SearchBar'
import SearchResults from './components/SearchResults'
import './styles/app.scss'

function App() {
	return (
		<>
			<div className='app'>
				<SearchBar />
				<div className='results'>
					<SearchResults />
					<RepoDetails />
				</div>
			</div>
		</>
	)
}

export default App
