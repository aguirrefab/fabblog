'use client';
import Link from 'next/link';
import { NavLink } from '@/interfaces/NavLink';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';

export default function NavbarLink({ item }: { item: NavLink }) {
  const pathName = usePathname();
  return (
    <Link
      href={item.path}
      className={clsx('font-medium px-3 py-1  hover:text-orange-500 ', {
        'rounded-xl  bg-white text-blue-900': pathName === item.path
      })}
    >
      {item.title}
    </Link>
  );
}
