import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { ScrollToTop } from '@/components/layout/ScrollToTop'
import { SEO } from '@/components/layout/SEO'
import { Home } from '@/pages/Home'

function App() {
  return (
    <>
      <SEO />
      <Header />
      <main id="main-content">
        <Home />
      </main>
      <Footer />
      <ScrollToTop />
    </>
  )
}

export default App
