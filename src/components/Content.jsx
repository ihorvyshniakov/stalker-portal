import { Box, Container } from '@mui/material'

import Path from './Path'
import WeaponPage from './WeaponPage'

const Content = () => {
	return (
		<Box sx={{ bgcolor: '#cfe8fc', pb: 10 }}>
			<Container maxWidth="lg">
				<Path />
				<WeaponPage />
			</Container>
		</Box>
	)
}

export default Content
