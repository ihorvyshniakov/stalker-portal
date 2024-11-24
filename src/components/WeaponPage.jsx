import logoSrc from '/weapon/vs-vintar.png'
import weaponInfo from '../data/weapons/vintar'

import {
	Alert,
	Card,
	CardContent,
	LinearProgress,
	Paper,
	Table,
	TableBody,
	TableCell,
	TableContainer,
	TableHead,
	TableRow,
	Typography,
} from '@mui/material'
import Grid from '@mui/material/Grid2'

const WeaponPage = () => {
	return (
		<Card raised>
			<CardContent>
				<Grid container spacing={2}>
					<Grid size={12} sx={{ textAlign: 'center' }}>
						<img
							src={logoSrc}
							alt={`Фото зброї - ${weaponInfo.name}`}
							loading="lazy"
							style={{ verticalAlign: 'middle' }}
						/>
					</Grid>
					<Grid size={12}>
						<Typography variant="h5" align="center">
							{weaponInfo.name}
						</Typography>
					</Grid>
					<Grid size={12}>
						<Alert severity="info" color="success">
							<b>Як знайти {weaponInfo.name}?</b> Невдовзі додамо
							цю інформацію 😉
						</Alert>
					</Grid>
					<Grid size={6}>
						<TableContainer component={Paper}>
							<Table
								sx={{ minWidth: 400 }}
								aria-label="simple table"
							>
								<TableHead>
									<TableRow>
										<TableCell align="center" colSpan={3}>
											Характеристики зброї
										</TableCell>
									</TableRow>
								</TableHead>
								<TableBody>
									{weaponInfo.stats.map((row) => (
										<TableRow
											key={row.statName}
											sx={{
												'&:last-child td, &:last-child th':
													{ border: 0 },
											}}
										>
											<TableCell
												component="th"
												scope="row"
												sx={{ width: '20%' }}
											>
												{row.statName}
											</TableCell>
											<TableCell sx={{ width: '10%' }}>
												{row.statValue}
											</TableCell>
											<TableCell>
												<LinearProgress
													variant="determinate"
													value={Math.round(
														(100 / 5) *
															row.statValue
													)}
												/>
											</TableCell>
										</TableRow>
									))}
								</TableBody>
							</Table>
						</TableContainer>
					</Grid>
					<Grid size={6}>
						<TableContainer component={Paper}>
							<Table
								sx={{ minWidth: 400 }}
								aria-label="simple table"
							>
								<TableHead>
									<TableRow>
										<TableCell align="center" colSpan={3}>
											Загальна інформація
										</TableCell>
									</TableRow>
								</TableHead>
								<TableBody>
									{weaponInfo.info.map((row) => (
										<TableRow
											key={row.statName}
											sx={{
												'&:last-child td, &:last-child th':
													{ border: 0 },
											}}
										>
											<TableCell
												component="th"
												scope="row"
												sx={{ width: '30%' }}
											>
												{row.statName}
											</TableCell>
											<TableCell sx={{ width: '70%' }}>
												{row.statValue}
											</TableCell>
										</TableRow>
									))}
								</TableBody>
							</Table>
						</TableContainer>
					</Grid>
				</Grid>
			</CardContent>
		</Card>
	)
}

export default WeaponPage
