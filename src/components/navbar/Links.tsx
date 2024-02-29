import React from 'react'
import NavbarLink from './navbarLink/NavbarLink'
import { NavLink } from '@/interfaces/NavLink'

export const Links = () => {
  const links: NavLink[] = [
    { title: 'Home', path: '/' },
    { title: 'About', path: '/about' },
    { title: 'Contact', path: '/contact' },
    { title: 'Blog', path: '/blog' }
  ]

  const session = true
  const isAdmin = true

  return (
    <div className='flex gap-5 text-sm text-white '>
      {links.map((link) => (
        <NavbarLink key={link.title} item={link} />
      ))}
      {session ? (
        <>
          {isAdmin && <NavbarLink item={{ title: 'Admin', path: '/admin' }} />}
          <button type='button' className='px-3 py-1 bg-white text-blue-600'>
            Logout
          </button>
        </>
      ) : (
        <NavbarLink item={{ title: 'Login', path: '/login' }} />
      )}
    </div>
  )
}
