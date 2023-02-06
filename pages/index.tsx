import { useRouter } from 'next/router'

import FeatureSection from '../components/FeatureSection'
import Head from '../common/sharedComponents/MetaHead'
import Hero from '../components/Hero'
import JoinSection from '../components/JoinSection'
import QuoteSection from '../components/QuoteSection'

function Home() {
  const { locale, locales } = useRouter()

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

export async function getStaticProps({ locale }: { locale: string}) {
  return {
    props: {
      // You can get the messages from anywhere you like. The recommended
      // pattern is to put them in JSON files separated by language and read
      // the desired one based on the `locale` received from Next.js.
      messages: (await import(`../common/locales/${locale}.json`)).default
    }
  };
}

export default Home
