import { Box, Container } from '@mui/material'

import Path from './Path'

const Wrapper = ({ children }) => {
	return (
		<Box sx={{ bgcolor: '#cfe8fc', pb: 10, minHeight: '100vmin' }}>
			<Container maxWidth="md">{children}</Container>
		</Box>
	)
}

const Content = () => {
	return (
		<Wrapper>
			<Path />
		</Wrapper>
	)
}

export default Content
