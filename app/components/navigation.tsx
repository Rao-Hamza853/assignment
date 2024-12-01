import { NavigationProps } from '@/type';
import Link from 'next/link';

export default function Navigation({ className }: NavigationProps) {
  return (
    <nav className={`bg-blue-600 text-white p-4 ${className || ''}`}>
      <div className='container mx-auto flex items-center justify-between'>
        <Link href='/' className='text-xl font-bold text-yellow-300'>
          store
        </Link>
        <div className='space-x-4'>
          <Link href='/' className='hover:text-yellow-300'>
            Home
          </Link>
          <Link href='/about' className='hover:text-yellow-300'>
            About
          </Link>
          <Link href='/products/new' className='hover:text-yellow-300'>
            Add Product
          </Link>
        </div>
      </div>
    </nav>
  );
}
