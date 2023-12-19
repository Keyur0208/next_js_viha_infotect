import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './style/globals.css'
import Script from 'next/script';
import Vertical_navbar from './components/Vertical_navbar/page';
import Horiztal_navbar from './components/Horizontal_navbar/page';
import Footer from './components/Footer/page';


export const metadata = {
  icons: {
    icon: "/logo.svg"
  }
}

export default function RootLayout({ children }) {

  return (
    <html lang="en" >
      <body>
        <header>
          <Vertical_navbar />
          <Horiztal_navbar />
        </header>
        {children}
        <footer>
          <Footer />
        </footer>
        <Script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.8/dist/umd/popper.min.js"></Script>
        <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.min.js"></Script>
      </body>
    </html>
  )
}
