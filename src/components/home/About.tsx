import { getAge } from '../../helpers/globalFunctions';
import Link from 'next/link';
import { Autocomplete } from '@mantine/core';
import users from '../../data/users.json';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { Tooltip } from '@mantine/core';

export default function About() {
  const router = useRouter();
  const [user, setUser] = useState('');

  function handleSearchUser(e: any) {
    e.preventDefault();
    if (user === '') {
      return alert('Please enter a username');
    }

    if (users.users.includes(user)) {
      router.push(`/users/${user.toLowerCase()}`);
    } else {
      alert('User not found');
    }
  }

  return (
    <div className='m-10 fit-max border-t h-fit'>
      <div className='lg:grid grid-cols-2 py-10 px-5'>
        <div className=''>
          <div className='flex justify-between'>
            <div className='text-3xl xl:text-5xl font-serif'>About Me</div>
            <div>
              <img
                src='https://cdn.discordapp.com/attachments/913270003887898674/1012436407765176350/9059BE79-85C8-4CC4-9CA0-EB06CADCD0FA.jpg'
                className='w-20 h-20 rounded-lg lg:hidden -translate-y-5'
              />
            </div>
          </div>
          <div className='text-md sm:text-2xl lg:mt-20'>
            Hello, my name is Jason Wang,
          </div>
          <div className='text-md sm:text-2xl mt-5 leading-6 md:leading-10 max-w-lg'>
            I am a {getAge()} year old student. I like programming and I am
            currently learning web development. This website will be used as a
            portfolio for mine and my friends projects. I will also store other
            miscellaneous things here.
          </div>
          <div className='text-md sm:text-lg mt-20 sm:mt-32 sm:w-11/12 lg:grid grid-cols-2'>
            <div>
              <Link href='/contact'>
                <button className='bg-blue-700 py-3 px-5 rounded-lg'>
                  Contact Me
                </button>
              </Link>
            </div>
            <form className='grid grid-cols-2 lg:-mx-10 mt-4 lg:mt-0'>
              <Tooltip label='Search for a user'>
                <Autocomplete
                  placeholder='Search for a user'
                  data={users.users}
                  value={user}
                  size='lg'
                  onChange={(value) => setUser(value)}
                />
              </Tooltip>
              <button
                className='bg-blue-700 w-24 mx-2 py-3 px-5 rounded-lg text-center'
                onClick={(e) => handleSearchUser(e)}
              >
                Search
              </button>
            </form>
          </div>
        </div>
        <div>
          <img
            src='https://cdn.discordapp.com/attachments/913270003887898674/1012436407765176350/9059BE79-85C8-4CC4-9CA0-EB06CADCD0FA.jpg'
            className='hidden lg:block rounded-3xl'
          />
        </div>
      </div>
    </div>
  );
}
