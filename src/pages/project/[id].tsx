import type { NextPage } from 'next';
import Head from 'next/head';
import Header from '../../components/home/Header';
import Footer from '../../components/home/Footer';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import projects from '../../data/projects.json';
import { profile } from 'console';

const Project: NextPage = () => {
  const [project, setProject]: any = useState();
  const router = useRouter();
  const { id }: any = router.query;

  useEffect(() => {
    const fetch_projects = async () => {
      const res: any = projects.find((v) => v.id === id);
      setProject(res);
    };
    fetch_projects();
  }, [id]);

  return (
    <div className='h-screen scrollbar-thin scrollbar-thumb-rounded-md scrollbar-thumb-blue-600 dark:scrollbar-track-gray-900'>
      <Head>
        <title>Kieruken | {project?.title} </title>
        <meta name='description' content='About me' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Header />
      <main>{project?.title}</main>
      <Footer />
    </div>
  );
};

export default Project;
