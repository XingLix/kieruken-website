import type { NextPage } from 'next';
import Head from 'next/head';
import Header from '../../components/home/Header';
import Footer from '../../components/home/Footer';
import projects from '../../data/projects.json';
import { ProjectsContainer } from '../../components/projectsContainer';

const Projects: NextPage = () => {
  return (
    <div className='h-screen scrollbar-thin scrollbar-thumb-rounded-md scrollbar-thumb-blue-600 dark:scrollbar-track-gray-900'>
      <Head>
        <title>Kieruken | Projects</title>
        <meta name='description' content='About me' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Header />
      <main className='m-8'>
        <div className='text-center text-3xl my-10'>
          Projects I Have Worked On
        </div>
        <div className='w-full mx-auto flex justify-center'>
          <div className='flex justify-between flex-col md:grid md:grid-cols-2 gap-6 lg:gap-x-20 lg:grid-cols-3 2xl:grid-cols-4 2xl:gap-x-32'>
            {projects.map((project) => (
              <ProjectsContainer
                key={project.id}
                title={project.title}
                description={project.description}
                image={project.image}
                github={project.github}
                website={project.website}
                youtube={project.youtube}
                discord={project.discord}
                botInvite={project.botInvite}
              />
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Projects;
