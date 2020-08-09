import '../styles/globals.css'

// import Header from '../components/Header'
// Or,
// Works due to configuring our webpack in next.config.js
import Header from 'components/Header'

function MyApp({ Component, pageProps }) {
  return (
  	<>
  		<Header/>
  		<Component {...pageProps} />
  	</>
  )
}

export default MyApp
