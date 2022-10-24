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

SwiperCore.use([Navigation, Pagination, Autoplay, EffectFade]);

export default function Projects() {
  return (
    <div className='m-10 fit-max border-t h-fit'>
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
              slideShadows: false,
            }}
            pagination={true}
            className='mySwiper'
            breakpoints={{
              480: {
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
            }}
          >
            <SwiperSlide>
              <ProjectsContainer
                title='Kieruken'
                description='A website for my portfolio.'
                github='https://github.com/XoutDragon/kieruken-website'
                website='https://kieruken.dev'
                invert={true}
                image='/../images/k.png'
              />
            </SwiperSlide>
            <SwiperSlide>
              <ProjectsContainer
                title='Discord Bot'
                description='Temp Info'
                github='e'
                discord='e'
                botInvite='e'
                image='https://cdn.discordapp.com/avatars/938594706353434714/5ddf9cfc9954465b034230d2372a59f6.png?size=1024'
              />
            </SwiperSlide>
            <SwiperSlide>
              <ProjectsContainer
                title='XoutDragon'
                description='Gamer'
                youtube='e'
                discord='e'
                image='https://cdn.discordapp.com/attachments/913270003887898674/1012436407765176350/9059BE79-85C8-4CC4-9CA0-EB06CADCD0FA.jpg'
              />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
}
