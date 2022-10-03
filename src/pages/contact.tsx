import type { NextPage } from 'next';
import Head from 'next/head';
import Header from '../components/home/Header';
import Footer from '../components/home/Footer';

const ContactMe: NextPage = () => {
  return (
    <div className='h-screen scrollbar-thin scrollbar-thumb-rounded-md scrollbar-thumb-blue-600 dark:scrollbar-track-gray-900'>
      <Head>
        <title>Kieruken | Contact Me</title>
        <meta name='description' content='Contact me' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Header />
      <main></main>
      <Footer />
    </div>
  );
};

export default ContactMe;
