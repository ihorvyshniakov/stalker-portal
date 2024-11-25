import { Box, Card, CardContent, Container } from '@mui/material'
import Grid from '@mui/material/Grid2'
import { Route, Routes } from 'react-router'

import Path from './Path'
import WeaponPage from './WeaponPage'
import Weapons from './Weapons'
import Home from './Home'

const Content = () => {
	return (
		<Box
			sx={{ bgcolor: '#cfe8fc', pb: 10, minHeight: 'calc(100vh - 64px)' }}
		>
			<Container maxWidth="lg">
				<Path />
				<Card raised>
					<CardContent>
						<Grid
							container
							spacing={2}
							sx={{ justifyContent: 'center' }}
						>
							<Routes>
								<Route index element={<Home />} />
								<Route path="weapons" element={<Weapons />} />
								<Route
									path="weapons/vintar"
									element={<WeaponPage />}
								/>
							</Routes>
						</Grid>
					</CardContent>
				</Card>
			</Container>
		</Box>
	)
}

export default Content
