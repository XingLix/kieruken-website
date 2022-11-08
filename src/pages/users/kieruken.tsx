import type { NextPage } from 'next';
import Head from 'next/head';
import Header from '../../components/home/Header';
import Footer from '../../components/home/Footer';
import { getAge } from '../../helpers/globalFunctions';
import Link from 'next/link';
import {
  FaDiscord,
  FaGithub,
  FaInstagram,
  FaSnapchat,
  FaLinkedin,
  FaYoutube,
} from 'react-icons/fa';
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

const AboutMe: NextPage = () => {
  return (
    <div className='h-screen scrollbar-thin scrollbar-thumb-rounded-md scrollbar-thumb-blue-600 dark:scrollbar-track-gray-900'>
      <Head>
        <title>Kieruken | About Me</title>
        <meta name='description' content='About me' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Header />
      <div className='mx-5 sm:mx-10'>
        <div className='lg:grid grid-cols-2 py-10 px-2'>
          <div>
            <div className='flex justify-between'>
              <div className='text-3xl xl:text-5xl font-serif'>About Me</div>
              <div>
                <img
                  src='https://cdn.discordapp.com/attachments/913270003887898674/1012436407765176350/9059BE79-85C8-4CC4-9CA0-EB06CADCD0FA.jpg'
                  className='w-20 h-20 rounded-lg lg:hidden -translate-y-5'
                />
              </div>
            </div>
            <div className='text-md sm:text-2xl lg:mt-10'>
              <ul className='leading-10'>
                <li>
                  <span className='font-bold'>Name:</span> Jason Wang (王希铭)
                </li>
                <li>
                  <span className='font-bold'>Age:</span> {getAge()}
                </li>
                <li>
                  <span className='font-bold'>Location:</span> Pennsylvania
                </li>
                <li>
                  <span className='font-bold'>Languages:</span> English,
                  Chinese, Fuzhounese
                </li>
                <li>
                  <span className='font-bold'>Hobbies:</span> Programming,
                  Gaming, Reading, Rubik's Cubing, Soccer, Tennis
                </li>
                <li>
                  <span className='font-bold'>Resume:</span>{' '}
                  <Link href='/resume'>
                    <span className='underline text-blue-600 hover:opacity-100 opacity-80 hover:cursor-pointer'>
                      Click Here
                    </span>
                  </Link>
                </li>
              </ul>
              <div>
                <div className='text-2xl xl:text-3xl font-semibold my-5'>
                  Social Media
                </div>
                <ul className='border-t pt-5 grid-cols-6 grid text-3xl sm:text-6xl'>
                  <li className='opacity-80 hover:opacity-100'>
                    <a href='https://discord.com/users/417490676255817728'>
                      <FaDiscord className='text-blue-700' />
                    </a>
                  </li>
                  <li className='opacity-80 hover:opacity-100'>
                    <a href='https://github.com/XoutDragon'>
                      <FaGithub className='text-gray-700' />
                    </a>
                  </li>
                  <li className='opacity-80 hover:opacity-100'>
                    <a href=''>
                      <FaInstagram className='text-pink-500' />
                    </a>
                  </li>
                  <li className='opacity-80 hover:opacity-100'>
                    <a href=''>
                      <FaSnapchat className='text-yellow-400' />
                    </a>
                  </li>
                  <li className='opacity-80 hover:opacity-100'>
                    <a href=''>
                      <FaLinkedin className='text-blue-500' />
                    </a>
                  </li>
                  <li className='opacity-80 hover:opacity-100'>
                    <a href='https://www.youtube.com/channel/UCoaOyIdpHLbsrItErmxizJQ'>
                      <FaYoutube className='text-red-500' />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div>
            <img
              src='/../images/icons/k.png'
              className='hidden lg:block rounded-3xl'
            />
          </div>
        </div>
        <div className='border-t py-10'>
          <div className='text-3xl xl:text-5xl font-serif'>Programming</div>
          <div className='text-2xl my-5 font-semibold'>Github Stats:</div>
          <div className='md:grid grid-cols-2'>
            <div className='grid grid-rows-2 gap-4'>
              <img src='https://github-readme-stats.vercel.app/api?username=XoutDragon&theme=cobalt&show_icons=true&count_private=true' />
              <img src='https://github-readme-stats.vercel.app/api/wakatime?username=XoutDragon&theme=cobalt&show_icons=true' />
            </div>
            <img
              src='https://github-readme-stats.vercel.app/api/top-langs/?username=XoutDragon&theme=cobalt&show_icons=true&count_private=true'
              className='h-88 w-auto -translate-y-9 sm:translate-y-0'
            />
          </div>
          <div className='text-2xl my-5 font-semibold'>Tools I Use:</div>
          <div className='my-5'>
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
                  slidesPerView: 4,
                  spaceBetween: 40,
                },
                1440: {
                  slidesPerView: 5,
                  spaceBetween: 50,
                },
                2560: {
                  slidesPerView: 6,
                  spaceBetween: 50,
                },
              }}
            >
              <SwiperSlide>
                <img
                  src='https://imgur.com/4ejqAEr.png'
                  className='w-auto h-48 rounded-lg'
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  src='https://imgur.com/NRY3Qfd.png'
                  className='w-auto h-48 rounded-lg'
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  src='https://imgur.com/DOl2xhv.png'
                  className='w-auto h-48 rounded-lg'
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  src='https://imgur.com/ETN4o9O.png'
                  className='w-auto h-48 rounded-lg'
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  src='https://imgur.com/fOIcaAy.png'
                  className='w-auto h-48 rounded-lg'
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  src='https://imgur.com/o7H8JGV.png'
                  className='w-auto h-48 rounded-lg'
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  src='https://imgur.com/1aDJ7cp.png'
                  className='w-auto h-48 rounded-lg'
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  src='https://imgur.com/MLKPCGf.png'
                  className='w-auto h-48 rounded-lg'
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  src='https://imgur.com/l8qm2cb.png'
                  className='w-auto h-48 rounded-lg'
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  src='https://imgur.com/VtfVsZq.png'
                  className='w-auto h-48 rounded-lg'
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  src='https://imgur.com/Yiq7wQP.png'
                  className='w-auto h-48 rounded-lg'
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  src='https://imgur.com/wAq1fI4.png'
                  className='w-auto h-48 rounded-lg'
                />
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default AboutMe;
