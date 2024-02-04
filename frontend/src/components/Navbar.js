import React from 'react';
import NavItem from '@/components/NavItem';

export default function Navbar() {
  return (
    <header className='flex w-full items-center bg-white'>
      <div className='w-full container mx-auto'>
        <div className='relative -mx-4 flex items-center justify-between'>
          <div className='flex w-full items-center justify-between px-4'>
            <div>
              <nav className='absolute right-4 top-full w-full max-w-[250px] rounded-lg bg-white px-6 py-5 shadow lg:static lg:block lg:w-full lg:max-w-full lg:shadow-none'>
                <ul className='block lg:flex'>
                  <NavItem NavLink='/#'>Home</NavItem>
                  <NavItem NavLink='/#'>Payment</NavItem>
                  <NavItem NavLink='/#'>About</NavItem>
                  <NavItem NavLink='/#'>Blog</NavItem>
                </ul>
              </nav>
            </div>

            <div className='hidden justify-end pr-16 sm:flex lg:pr-0'>
              <a
                href='/#'
                className='px-7 py-3 text-base font-medium text-dark'
              >
                Sign in
              </a>

              <a
                href='/#'
                className='px-7 py-3 text-base font-medium text-dark'
              >
                Sign Up
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
