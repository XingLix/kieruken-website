import Image from 'next/image';
import {
  MenuIcon,
  XIcon,
  HomeIcon,
  UserCircleIcon,
  MailIcon,
  DesktopComputerIcon,
} from '@heroicons/react/solid';
import { Popover } from '@headlessui/react';
import Link from 'next/link';

export default function Header() {
  return (
    <div id='top'>
      <nav className='relative flex justify-between w-full mt-5'>
        <div className='ml-5 dark:invert'>
          <a href='/#'>
            <Image
              src='/images/logo.png'
              alt='Kieruken Logo'
              width={200}
              height={60}
            />
          </a>
        </div>
        <div className='mt-4 mr-5 sm:mr-10 sm:hidden'>
          <Popover className=''>
            {({ open }) => (
              <>
                <Popover.Button className=''>
                  <MenuIcon className='w-6 h-6' aria-hidden='true' />
                </Popover.Button>
                <Popover.Overlay className='fixed inset-0 bg-black opacity-10' />
                {open && (
                  <div className=''>
                    <Popover.Panel
                      static
                      className='fixed z-10 w-full px-4 ml-0 -mt-12 transform -translate-x-1/2 bg-white rounded-md dark:bg-black min-h-72 first-line:px-0 left-1/2'
                    >
                      {({ close }) => (
                        <div className=''>
                          <div className='flex justify-between'>
                            <div className='dark:invert'>
                              <Image
                                src='/images/logo.png'
                                alt='Kieruken Logo'
                                width={200}
                                height={60}
                              />
                            </div>
                            <button
                              className=''
                              onClick={async () => {
                                close();
                              }}
                            >
                              <XIcon className='w-6 h-6' aria-hidden='true' />
                            </button>
                          </div>
                          <ul className='w-full text-lg font-medium text-center'>
                            <li className=''>
                              <Link href='/'>
                                <a
                                  href='#'
                                  className='flex justify-center py-1 my-4 rounded-md shadow-md shadow-blue-500 hover:animate-pulse'
                                >
                                  <HomeIcon className='w-5 h-5 mt-1' />
                                  <span className='ml-2'>Home</span>
                                </a>
                              </Link>
                              <Link href='/projects'>
                                <a
                                  href='#'
                                  className='flex justify-center py-1 my-4 rounded-md shadow-md shadow-blue-500 hover:animate-pulse'
                                >
                                  <DesktopComputerIcon className='w-5 h-5 mt-1' />
                                  <span className='ml-2'>Projects</span>
                                </a>
                              </Link>
                              <Link href='/users/kieruken'>
                                <a
                                  href='#'
                                  className='flex justify-center py-1 my-4 rounded-md shadow-md shadow-blue-500 hover:animate-pulse'
                                >
                                  <UserCircleIcon className='w-5 h-5 mt-1' />
                                  <span className='ml-2'>About Me</span>
                                </a>
                              </Link>
                              <Link href='/contact'>
                                <a
                                  href='#'
                                  className='flex justify-center py-1 my-4 rounded-md shadow-md shadow-blue-500 hover:animate-pulse'
                                >
                                  <MailIcon className='w-5 h-5 mt-1' />
                                  <span className='ml-2'>Contact Me</span>
                                </a>
                              </Link>
                            </li>
                          </ul>
                        </div>
                      )}
                    </Popover.Panel>
                  </div>
                )}
              </>
            )}
          </Popover>
        </div>
        <div className='hidden mr-10 sm:inline'>
          <ul className='justify-center text-lg font-medium sm:flex'>
            <li className=''>
              <Link href='/'>
                <a
                  href='#'
                  className='flex justify-center px-4 py-1 my-4 rounded-md hover:border-b hover:border-blue-500 hover:animate-pulse'
                >
                  <HomeIcon className='w-5 h-5 mt-1' />
                  <span className='ml-2'>Home</span>
                </a>
              </Link>
            </li>
            <li className=''>
              <Link href='/projects'>
                <a
                  href='#'
                  className='flex justify-center px-4 py-1 my-4 rounded-md hover:border-b hover:border-blue-500 hover:animate-pulse'
                >
                  <DesktopComputerIcon className='w-5 h-5 mt-1' />
                  <span className='ml-2'>Projects</span>
                </a>
              </Link>
            </li>
            <li className=''>
              <Link href='/users/kieruken'>
                <a
                  href='#'
                  className='flex justify-center px-4 py-1 my-4 rounded-md hover:border-b hover:border-blue-500 hover:animate-pulse'
                >
                  <UserCircleIcon className='w-5 h-5 mt-1' />
                  <span className='ml-2'>About Me</span>
                </a>
              </Link>
            </li>
            <li className=''>
              <Link href='/contact'>
                <a
                  href='#'
                  className='flex justify-center px-4 py-1 my-4 rounded-md hover:border-b hover:border-blue-500 hover:animate-pulse'
                >
                  <MailIcon className='w-5 h-5 mt-1' />
                  <span className='ml-2'>Contact Me</span>
                </a>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}
