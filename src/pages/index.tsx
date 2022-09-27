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
      <main className='flex flex-col items-center justify-center flex-1 min-h-screen py-16 text-center'>
        <div className='text-5xl leading-[4rem]'>
          Website currently in development.{' '}
        </div>
        <div className='text-3xl text-blue-700'>Come back later</div>
        <div className='text-3xl text-blue-700'>ヾ(≧▽≦*)o</div>
      </main>
      <Footer />
    </div>
  );
};

export default Home;
