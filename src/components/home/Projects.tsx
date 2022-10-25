import { ProjectsContainer } from '../projectsContainer';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, {
  Autoplay,
  EffectFade,
  Navigation,
  Pagination,
} from 'swiper';
import 'swiper/swiper-bundle.min.css';
import 'swiper/swiper.min.css';
import Link from 'next/link';
import projects from '../../data/projects.json';

SwiperCore.use([Navigation, Pagination, Autoplay, EffectFade]);

export default function Projects() {
  return (
    <div className='mx-10 mt-10 fit-max border-t h-fit'>
      <div className='py-10 px-5'>
        <div className='text-3xl xl:text-5xl font-serif'>Projects</div>
        <div className='text-md sm:text-2xl mb-10 mt-2'>
          Projects I have worked on:
        </div>
        <div className='mx-auto'>
          <Swiper
            effect={'coverflow'}
            grabCursor={true}
            centeredSlides={false}
            coverflowEffect={{
              rotate: 50,
              stretch: 0,
              depth: 100,
              modifier: 1,
              slideShadows: true,
            }}
            slidesPerView='auto'
            loop={true}
            pagination={true}
            className='mySwiper'
            breakpoints={{
              0: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
              640: {
                slidesPerView: 2,
                spaceBetween: 40,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 50,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 50,
              },
              1440: {
                slidesPerView: 4,
                spaceBetween: 50,
              },
              2560: {
                slidesPerView: 5,
                spaceBetween: 50,
              },
            }}
          >
            {projects.slice(0, 3).map((project, i) => (
              <SwiperSlide>
                <ProjectsContainer
                  key={i}
                  title={project.title}
                  description={project.description}
                  image={project.image}
                  github={project.github}
                  website={project.website}
                  youtube={project.youtube}
                  discord={project.discord}
                  botInvite={project.botInvite}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className='text-xl text-center text-blue-600 mt-3'>
          <Link href='/projects/kieruken'>More Projects...</Link>
        </div>
      </div>
    </div>
  );
}
