import '../styles/normalize.css'
import '../styles/globals.css'

import { ThemeProvider } from 'emotion-theming'

const theme = {
	colors: {
		primary: '#ff0000'
	}
}

// import Header from '../components/Header'
// Or,
// Works due to configuring our webpack in next.config.js
import Header from 'components/MainHeader/Header/Header'

function MyApp({ Component, pageProps }) {
  return (
  	<>
  		<ThemeProvider theme={theme}>
  			<Header/>
  			<Component {...pageProps} />
  		</ThemeProvider>		
  	</>
  )
}

export default MyApp
