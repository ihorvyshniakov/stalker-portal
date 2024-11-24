import {
	AppBar,
	Box,
	InputBase,
	Link,
	Toolbar,
	Typography,
} from '@mui/material'
import { styled, alpha } from '@mui/material/styles'

import SearchIcon from '@mui/icons-material/Search'

const Search = styled('div')(({ theme }) => ({
	position: 'relative',
	borderRadius: theme.shape.borderRadius,
	backgroundColor: alpha(theme.palette.common.white, 0.15),
	'&:hover': {
		backgroundColor: alpha(theme.palette.common.white, 0.25),
	},
	marginLeft: 0,
	width: '100%',
	[theme.breakpoints.up('sm')]: {
		marginLeft: theme.spacing(1),
		width: 'auto',
	},
}))

const SearchIconWrapper = styled('div')(({ theme }) => ({
	padding: theme.spacing(0, 2),
	height: '100%',
	position: 'absolute',
	pointerEvents: 'none',
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'center',
}))

const StyledInputBase = styled(InputBase)(({ theme }) => ({
	color: 'inherit',
	width: '100%',
	'& .MuiInputBase-input': {
		padding: theme.spacing(1, 1, 1, 0),
		// vertical padding + font size from searchIcon
		paddingLeft: `calc(1em + ${theme.spacing(4)})`,
		transition: theme.transitions.create('width'),
		[theme.breakpoints.up('sm')]: {
			width: '12ch',
			'&:focus': {
				width: '20ch',
			},
		},
	},
}))

const Header = () => {
	return (
		<Box sx={{ flexGrow: 1 }}>
			<AppBar position="static">
				<Toolbar>
					<Typography variant="h5">
						<Link underline="none" color="inherit" href="">
							Путівник Stalker 2
						</Link>
					</Typography>
					<Typography
						variant="h5"
						align="center"
						sx={{ flexGrow: 1 }}
					>
						<Link underline="none" color="inherit" href="">
							Зброя
						</Link>
					</Typography>
					<Search>
						<SearchIconWrapper>
							<SearchIcon />
						</SearchIconWrapper>
						<StyledInputBase
							placeholder="Пошук…"
							inputProps={{ 'aria-label': 'search' }}
						/>
					</Search>
				</Toolbar>
			</AppBar>
		</Box>
	)
}

export default Header
