import Header from '../Header/Header'
import Footer from '../Footer/Footer'

const Layout = ({ children }) => (
  <div className="flex flex-col min-h-screen">
    <Header />
    <main className="flex-grow">
      {children}
    </main>
    <Footer className="sticky bottom-0 w-full bg-gray-100"/>
  </div>
)

export default Layout