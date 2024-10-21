import { Header } from '../Header/Header'
import Footer from '../Footer/Footer'

const Layout = ({ children }) => (
  <>
    <Header />
    {children}
    <Footer />
  </>
)

export default Layout
