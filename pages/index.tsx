import MainLayout from 'components/layouts/MainLayout'
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
      <div>Home</div>
    </MainLayout>
  )
}

export default Home
