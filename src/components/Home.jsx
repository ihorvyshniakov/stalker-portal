import { Box, Typography } from '@mui/material'
import Grid from '@mui/material/Grid2'
import { Link } from 'react-router'

const BigLink = ({ to, children }) => (
	<Link to={to} className="homeLink">
		<Box
			sx={{
				height: 250,
				borderRadius: 1,
				bgcolor: 'primary.main',
				'&:hover': {
					bgcolor: 'primary.dark',
				},
			}}
		>
			<Typography variant="h2" component="h2">
				{children}
			</Typography>
		</Box>
	</Link>
)

const Home = () => {
	return (
		<>
			<Grid size={6}>
				<BigLink to="/weapons">Зброя</BigLink>
			</Grid>
			<Grid size={6}>
				<BigLink to="/artifacts">Артефакти</BigLink>
			</Grid>
			<Grid size={6}>
				<BigLink to="/characters">Персонажі</BigLink>
			</Grid>
			<Grid size={6}>
				<BigLink to="/locations">Локації</BigLink>
			</Grid>
		</>
	)
}

export default Home
