import Image from 'next/image';

export default function Footer() {
  return (
    <footer className='mx-10'>
      <div className='flex justify-center p-8 border-t border-solid border-[#eaeaea] items-center flex-1'>
        <a
          href='https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app'
          target='_blank'
          rel='noopener noreferrer'
        >
          Powered by{' '}
          <span className='h-4 ml-2 dark:invert'>
            <Image
              src='/svg/vercel.svg'
              alt='Vercel Logo'
              width={72}
              height={16}
            />
          </span>
        </a>
      </div>
    </footer>
  );
}
