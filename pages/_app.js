import '../sass/App.scss'
import AuthContext from '../context/AuthContext'

function MyApp({ Component, pageProps }) {
  return <AuthContext>
    <Component {...pageProps} />
  </AuthContext> 
}

export default MyApp
