import MainLayout from "components/layouts/MainLayout";
import FeaturedProject from "components/templates/Home/FeaturedProject";
import MainDetails from "components/templates/Home/MainDetails/MainDetails";
import WelcomeHeader from "components/templates/Home/WelcomeHeader";
import type { NextPage } from "next";
import Head from "next/head";

const Home: NextPage = () => {
  return (
    <MainLayout hasContainer={false}>
      <Head>
        <title>Aniketh Nair | Portfolio</title>
        <meta name="description" content="Welcome to my portfolio (2022)" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="absolute dark:bg-gradient-to-b dark:from-portfolioBlack dark:to-black bg-gradient-to-r from-indigo-500 to-sky-400 top-0 h-screen w-full"
      style={{
        backgroundSize: "300% 300%",
        transform: 'skew(0deg, -10deg)',
        padding: '200px 0',
        marginTop: '-200px'
      }}
      />
      <main className="mt-8 relative z-10 container md:mt-12 lg:mt-20 grid gap-9 lg:gap-x-24 lg:gap-y-6 grid-rows-2 grid-cols-3	lg:grid-cols-7">
        <MainDetails />
        <WelcomeHeader />
        <FeaturedProject />
      </main>
    </MainLayout>
  );
};

export default Home;
