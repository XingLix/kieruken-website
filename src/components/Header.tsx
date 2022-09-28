import Image from 'next/image';
import { MenuIcon } from '@heroicons/react/outline';

export default function Header() {
  return (
    <nav className='absolute flex justify-between w-full mt-5'>
      <div className='dark:invert ml-5'>
        <Image
          src='/images/logo.png'
          alt='Kieruken Logo'
          width={200}
          height={60}
        />
      </div>
      <div className='mt-4 mr-5 sm:mr-10'>
        <MenuIcon className='w-6 h-6' aria-hidden='true' />
      </div>
    </nav>
  );
}
