import Link from 'next/link';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';


export default function Layout({ children }) {
    const router = useRouter();
    const [active, setActive] = useState(false);
    const handleClick = () => {
        setActive(!active);
    };

    const closeMenu = () => {
        setActive(false)
    }
    useEffect(() => {
        router.events.on('routeChangeStart', closeMenu);

        return () => router.events.off('routeChangeStart', closeMenu);
    }, [router.events]);
  return (
    <div className='flex flex-col min-h-screen font-sans text-gray-700'>
      <header className='mb-4 bg-tiny py-4 p-4 bg-tree bg-left-bottom bg-contain bg-no-repeat h-72 flex items-end'>
          <Link href='/'>
        <div className='w-full'>
          <span className='block text-6xl md:text-8xl font-display text-right'>Exeter Tiny</span>
           <span className='block text-6xl md:text-8xl font-display text-right'>House Community</span>
        </div>
          </Link>
      </header>
      <main className='container mx-auto flex-1 p-4 text-xl max-w-screen-lg'>{children}</main>
      <footer className='bg-tiny bg-left-bottom mt-8 py-4 bg-tree bg-no-repeat h-72 flip'>
        <div className='container mx-auto flex justify-center'>
        </div>
      </footer>
    </div>
  );
}
