import { Typography, Breadcrumbs as MaterialBreadcrumbs } from '@mui/material'
import { Link, useLocation } from 'react-router'

import { urlTranslations } from '../routes/urlTranslations'

const Breadcrumbs = () => {
	let { pathname } = useLocation()
	const linksArray = pathname.slice(1).split('/')

	return (
		<MaterialBreadcrumbs aria-label="breadcrumb" sx={{ p: 2 }}>
			<Link to="/">Путівник</Link>
			{linksArray.map((pageName, id) => {
				const isLastLink = id === linksArray.length - 1

				if (isLastLink) {
					return pageName ? (
						<Typography
							key={pageName}
							sx={{ color: 'text.primary' }}
						>
							{urlTranslations[`${pageName}`]}
						</Typography>
					) : null
				}

				return (
					<Link key={pageName} to={`/${pageName}`}>
						{urlTranslations[`${pageName}`]}
					</Link>
				)
			})}
		</MaterialBreadcrumbs>
	)
}

export default Breadcrumbs
