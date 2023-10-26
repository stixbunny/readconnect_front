'use client';
import react from 'react';
import Link from 'next/link';
import { useSelectedLayoutSegment } from 'next/navigation';

const Navbar = () => {
  const selectedLayout = useSelectedLayoutSegment();
  return (
    <div
      className={`sticky z-30 w-full border-neutral-300 bg-amber-50 text-orange-950`}
    >
      <div className="flex h-[50px] items-center justify-center">
        <div className="flex max-w-[1200px] h-[50px] w-full justify-between px-4">
          <div className="flex items-center text-3xl tracking-tighter">
            <Link href="/" className="flex items-center h-full">
              <span className="font-thin">read</span>
              <span className="font-normal">connect</span>
            </Link>
          </div>
          <div className="flex items-center">
            <Link href={'/books'} className="flex items-center h-full px-4 hover:bg-amber-950 hover:text-amber-50">
              Books
            </Link>
            <Link href={'/'} className="flex items-center h-full px-4 hover:bg-amber-950 hover:text-amber-50">
              Profile
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
