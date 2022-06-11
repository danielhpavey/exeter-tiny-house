import Link from 'next/link';

export default function Layout({ children }) {
  return (
    <div className='flex flex-col min-h-screen font-sans text-gray-700'>
      <menu className="sticky top-0">
	  	<div className="w-full bg-tiny text-right text-lg">
	  		<span className="inline-block "><Link href='/'><a className="tiny-menu">Home</a></Link></span>
	  		<span className="inline-block "><Link href='/about'><a className="tiny-menu">About</a></Link></span>
	  		<span className="inline-block "><Link href='/vision'><a className="tiny-menu">Vision</a></Link></span>
	  		<span className="inline-block "><Link href='/contact'><a className="tiny-menu">Contact</a></Link></span>
	  		<span className="inline-block "><Link href='/faq'><a className="tiny-menu">FAQ</a></Link></span>
	  	</div>
      </menu>
      <header className='mb-4 bg-tiny py-4 p-4 bg-tree bg-left-bottom bg-contain bg-no-repeat h-72 flex items-end'>
          <Link href='/'>
        <div className='w-full'>
          <span className='block text-6xl md:text-8xl font-display text-right'>Exeter Tiny</span>
           <span className='block text-6xl md:text-8xl font-display text-right'>House Community</span>
        </div>
          </Link>
      </header>
      <main className='container mx-auto flex-1 p-4 text-xl max-w-screen-lg'>{children}</main>
      <footer className='bg-tiny mt-8 py-4 bg-tree bg-no-repeat h-72 flip'>
        <div className='container mx-auto flex justify-center'>
        </div>
      </footer>
    </div>
  );
}
