'use client'
import Link from 'next/link'
import { NavLink } from '@/interfaces/NavLink'
import { usePathname } from 'next/navigation'
import clsx from 'clsx'

export default function NavbarLink({ item }: { item: NavLink }) {
  const pathName = usePathname()
  return (
    <Link
      href={item.path}
      className={clsx('font-medium px-3 py-1  hover:text-blue-600 ', {
        'rounded-xl  bg-white text-blue-600': pathName === item.path
      })}
    >
      {item.title}
    </Link>
  )
}
