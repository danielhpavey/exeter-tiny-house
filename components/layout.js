import Link from 'next/link';

export default function Layout({ children }) {
  return (
    <div className='flex flex-col min-h-screen font-sans text-gray-700'>
      <menu className="pb-sm">
	  	<div className="w-full bg-green-400 text-right text-lg">
	  		<span className="inline-block "><Link href='/'><a className="block hover:bg-green-500 transition hover:text-white p-3 duration-500">Home</a></Link></span>
	  		<span className="inline-block "><Link href='/vision'><a className="block hover:bg-green-500 transition hover:text-white p-3 duration-500">Vision</a></Link></span>
	  		<span className="inline-block "><Link href='/contact'><a className="block hover:bg-green-500 transition hover:text-white p-3 duration-500">Contact</a></Link></span>
	  		<span className="inline-block "><Link href='/faq'><a className="block hover:bg-green-500 transition hover:text-white p-3 duration-500">FAQ</a></Link></span>
	  	</div>
      </menu>
      <header className='bg-green-300 py-4 p-4 bg-tree bg-contain bg-no-repeat h-72 flex items-end'>
        <div className='w-full'>
          <span className='block text-6xl md:text-8xl font-display text-right'>Exeter Tiny</span>
           <span className='block text-6xl md:text-8xl font-display text-right'>House Community</span>
        </div>
      </header>
      <main className='container mx-auto flex-1 p-4 text-xl max-w-screen-xl'>{children}</main>
      <footer className='bg-green-300 mt-8 py-4 bg-tree bg-no-repeat h-72 flip'>
        <div className='container mx-auto flex justify-center'>
        </div>
      </footer>
    </div>
  );
}
