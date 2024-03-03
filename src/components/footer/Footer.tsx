import React from 'react';

export const Footer = () => {
  return (
    <footer className='py-6 px-10 flex items-center top-0 w-full justify-between bg-inherit text-white'>
      <h3>
        Develop with love by{' '}
        <a
          href='https://github.com/aguirrefab'
          className='text-orange-200 hover:underline'
        >
          @aguirrefab
        </a>
      </h3>
      <div>
        Inspired by{' '}
        <a href='https://www.youtube.com/@LamaDev' className=' hover:underline'>
          @LamaDev
        </a>
      </div>
    </footer>
  );
};
