import type { NextPage } from 'next';
import Head from 'next/head';
import Header from '../components/home/Header';
import Footer from '../components/home/Footer';
import About from '../components/home/About';
import ShootingStars from '../components/ShootingStars';

const Home: NextPage = () => {
  return (
    <div className='h-screen scrollbar-thin scrollbar-thumb-rounded-md scrollbar-thumb-blue-600 dark:scrollbar-track-gray-900'>
      <Head>
        <title>Kieruken | Home</title>
        <meta name='description' content='Website developed by Kieruken' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <Header />
      <main className='flex flex-col items-center justify-center flex-1 min-h-screen py-16 text-center'>
        <div className='text-5xl leading-[4rem]'>
          Hello, Welcome to my website!
        </div>
        <div className='text-3xl text-blue-700'>Come back later</div>
        <div className='text-3xl text-blue-700'>ヾ(≧▽≦*)o</div>
      </main>
      <ShootingStars />
      <About />
      <Footer />
    </div>
  );
};

export default Home;
