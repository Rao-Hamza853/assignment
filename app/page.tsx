export default function Home() {
  return (
    <main className='flex flex-col items-center justify-center min-h-screen py-8 px-4'>
      <header className='mb-8 text-center'>
        <h1 className=' mb-4'>Welcome </h1>
        <p className='text-base sm:text-lg'>Explore our products</p>
      </header>
      <section className='w-full max-w-4xl grid grid-cols-1 sm:grid-cols-2 gap-6'>
        <article className='flex flex-col items-start p-6 border rounded-lg shadow-lg'>
          <h2 className=''>Featured Products</h2>
          <p className='text-sm sm:text-base'>Discover the latest product.</p>
        </article>
        <article className='flex flex-col items-start p-6 border rounded-lg shadow-lg'>
          <h2 className=''>Latest Updates</h2>
          <p className='text-sm sm:text-base'>
            Keep up-to-date with our newest updates and features.
          </p>
        </article>
      </section>
    </main>
  );
}
