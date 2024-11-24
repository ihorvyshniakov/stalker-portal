import { Typography, Breadcrumbs } from '@mui/material'
import { Link } from 'react-router'

const Path = () => {
	return (
		<Breadcrumbs aria-label="breadcrumb" sx={{ p: 2 }}>
			<Link to="/">Путівник</Link>
			<Link to="/weapons">Зброя</Link>
			<Typography sx={{ color: 'text.primary' }}>Гвинтар</Typography>
		</Breadcrumbs>
	)
}

export default Path
