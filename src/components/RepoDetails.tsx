import StarIcon from '@mui/icons-material/Star'
import { useAppSelector } from '../hook'
import styles from '../styles/repoDetails.module.scss'

function RepoDetails() {
	const repo = useAppSelector((state) => state.pickRepo)

	if (repo.id) {
		return (
			<div className={styles.container}>
				<h2 className={styles.name}>{repo.full_name}</h2>
				<div className={styles.info}>
					{repo.language ? (
						<div className={styles.language}>{repo.language}</div>
					) : (
						''
					)}

					<div className={styles.stars}>
						{<StarIcon color='warning' />}
						<h3>{repo.stargazers_count} </h3>
					</div>
				</div>
				<div className={styles.topics}>
					{repo.topics.map((topic, index) => {
						return (
							<div key={index} className={styles.topic}>
								{topic}
							</div>
						)
					})}
				</div>

				<h4>{repo.license ? repo.license.name : ''}</h4>

				<a href={repo.html_url}>ссылка на github</a>
			</div>
		)
	}
}
export default RepoDetails
