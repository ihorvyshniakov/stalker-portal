import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router'
import CssBaseline from '@mui/material/CssBaseline'

import App from './App.jsx'

createRoot(document.getElementById('root')).render(
	<StrictMode>
		<CssBaseline />
		<BrowserRouter basename="/stalker-portal">
			<App />
		</BrowserRouter>
	</StrictMode>
)
