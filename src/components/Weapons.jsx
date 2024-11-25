import { List, ListItem, ListItemButton, ListItemText } from '@mui/material'
import Grid from '@mui/material/Grid2'
import { Link } from 'react-router'
import weaponInfo from '../data/weapons/vintar'

const Weapons = () => {
	return (
		<Grid size={6}>
			<List>
				<ListItem disablePadding>
					<Link to={weaponInfo.url} style={{ width: '100%' }}>
						<ListItemButton>
							<ListItemText primary={weaponInfo.name} />
						</ListItemButton>
					</Link>
				</ListItem>
				<ListItem disablePadding>
					<ListItemButton>
						<ListItemText primary="Drafts" />
					</ListItemButton>
				</ListItem>
				<ListItem disablePadding>
					<ListItemButton>
						<ListItemText primary="Drafts" />
					</ListItemButton>
				</ListItem>
			</List>
		</Grid>
	)
}

export default Weapons
