import FeatureSection from '../components/FeatureSection'
import Head from '../common/sharedComponents/MetaHead'
import Hero from '../components/Hero'
import JoinSection from '../components/JoinSection'
import QuoteSection from '../components/QuoteSection'

function Home() {
  return (
    <>
      <Head />
      <main id="app">
        <div className="site-content bg-white overflow-hidden">
          <Hero />
          <FeatureSection />
          <QuoteSection />
          <JoinSection />
        </div>
      </main>
    </>
  )
}

export default Home
