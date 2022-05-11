import Link from 'next/link';

export default function Layout({ children }) {
  return (
    <div className='flex flex-col min-h-screen font-sans text-gray-700'>
      <header className='bg-green-300 py-4 p-4 bg-tree bg-contain bg-no-repeat h-72 flex items-end border-b-8 border-white'>
        <div className='w-full'>
          <span className='block text-6xl md:text-8xl font-display text-right'>Exeter Tiny</span>
           <span className='block text-6xl md:text-8xl font-display text-right'>House Community</span>
        </div>
      </header>
      <menu className="border-b-8 border-green-300 pb-sm">
	  	<div className="inline-flex w-full bg-green-300 text-center text-xl">
	  		<span className="flex-1"><Link href='/'><a className="block hover:bg-green-500 transition hover:text-white p-4 duration-500">Home</a></Link></span>
	  		<span className="flex-1"><Link href='/vision'><a className="block hover:bg-green-500 transition hover:text-white p-4 duration-500">Vision</a></Link></span>
	  		<span className="flex-1"><Link href='/contact'><a className="block hover:bg-green-500 transition hover:text-white p-4 duration-500">Contact</a></Link></span>
	  		<span className="flex-1"><Link href='/faq'><a className="block hover:bg-green-500 transition hover:text-white p-4 duration-500">FAQ</a></Link></span>
	  	</div>
      </menu>
      <main className='container mx-auto flex-1 p-4 text-xl'>{children}</main>
      <footer className='bg-green-300 mt-8 py-4'>
        <div className='container mx-auto flex justify-center'>
        </div>
      </footer>
    </div>
  );
}
