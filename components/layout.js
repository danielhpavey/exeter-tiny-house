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
      <button
          aria-label="Menu"
          className="absolute z-50 right-0 bg-tiny inline-flex p-3 hover:bg-blue-600 md:hidden text-white ml-auto hover:text-white outline-none"
          onClick={handleClick}
              >
          <svg
            className='w-8 h-8'
            fill='none'
            stroke='currentColor'
            viewBox='0 0 24 24'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth={2}
              d='M4 6h16M4 12h16M4 18h16'
            />
          </svg>
      </button>
      <menu className={`${
            active ? '' : 'hidden'
          }   sticky top-0 md:flex`}>
	  	<div className="w-full bg-tiny md:text-right text-lg h-screen md:h-auto flex flex-col text-center text-6xl md:text-xl md:inline-block">
	  		<span className="inline-block border-b-2"><Link href='/'><a className="tiny-menu">Home</a></Link></span>
 	  		<span className="inline-block border-b-2"><Link href='/vision'><a className="tiny-menu">Vision</a></Link></span>
	  		<span className="inline-block border-b-2"><Link href='/contact'><a className="tiny-menu">Contact</a></Link></span>
	  		<span className="inline-block border-b-2"><Link href='/faq'><a className="tiny-menu">FAQ</a></Link></span>
	  	</div>
      </menu>
      <header className='mb-4 bg-tiny py-4 p-4 bg-tree bg-left-bottom bg-contain bg-no-repeat h-72 flex items-end relative'>
          <Link href='/' className="cursor-pointer">
        <div className='w-full'>
          <span className='block text-6xl md:text-6xl font-display text-right cursor-pointer mb-2'>Exeter Tiny</span>
           <span className='block text-6xl md:text-6xl font-display text-right cursor-pointer'>House Community</span>
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
