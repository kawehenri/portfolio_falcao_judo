import { Header } from '@/components/layout/Header'
import { MexicoCampaignBanner } from '@/components/layout/MexicoCampaignBanner'
import { Footer } from '@/components/layout/Footer'
import { ScrollToTop } from '@/components/layout/ScrollToTop'
import { SEO } from '@/components/layout/SEO'
import { Home } from '@/pages/Home'

function App() {
  return (
    <>
      <SEO />
      <Header />
      <div className="pt-16">
        <MexicoCampaignBanner />
        <main id="main-content">
          <Home />
        </main>
      </div>
      <Footer />
      <ScrollToTop />
    </>
  )
}

export default App
