import type { NextPage } from 'next';
import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Home: NextPage = () => {
  return (
    <div className=''>
      <Head>
        <title>Kieruken - Home</title>
        <meta name='description' content='Website developed by Kieruken' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Header />
      <main className='min-h-screen flex-1 flex py-16 flex-col items-center justify-center text-center'>
        <div className='text-5xl leading-[4rem]'>
          Website currently in development.{' '}
        </div>
        <div className='text-blue-700 text-3xl'>Come back later ヾ(≧▽≦*)o</div>
      </main>
      <Footer />
    </div>
  );
};

export default Home;
