import { Link, Typography, Breadcrumbs } from '@mui/material'

const Path = () => {
	return (
		<Breadcrumbs aria-label="breadcrumb" sx={{ p: 2 }}>
			<Link underline="hover" color="inherit" href="">
				Путівник
			</Link>
			<Link underline="hover" color="inherit" href="">
				Зброя
			</Link>
			<Typography sx={{ color: 'text.primary' }}>Гвинтар</Typography>
		</Breadcrumbs>
	)
}

export default Path
