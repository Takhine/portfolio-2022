import MainLayout from 'components/layouts/MainLayout'
import FeaturedProject from 'components/templates/Home/FeaturedProject'
import MainDetails from 'components/templates/Home/MainDetails/MainDetails'
import WelcomeHeader from 'components/templates/Home/WelcomeHeader'
import type { NextPage } from 'next'
import Head from 'next/head'

const Home: NextPage = () => {
  return (
    <MainLayout>
      <Head>
        <title>Portfolio 2022</title>
        <meta name="description" content="Aniketh Nair" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="mt-8 md:mt-12 lg:mt-24 grid gap-9 lg:gap-24 grid-rows-3	grid-cols-3">
        <MainDetails />
        <WelcomeHeader />
        <FeaturedProject />
      </main>
    </MainLayout>
  )
}

export default Home
