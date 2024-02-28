import Link from 'next/link'
import React from 'react'

export const Links = () => {
  const links = [
    { title: 'Home', path: '/' },
    { title: 'About', path: '/about' },
    { title: 'Contact', path: '/contact' },
    { title: 'Blog', path: '/blog' }
  ]

  return (
    <div>
      {links.map((link) => (
        <Link key={link.title} href={link.path} className="text-amber-600">
          {link.title}
        </Link>
      ))}
    </div>
  )
}
