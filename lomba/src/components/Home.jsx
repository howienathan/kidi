import React from 'react'
import cover from '../assets/jdm.png'

const Home = () => {
  return (
    
    <section className='h-screen text-white rounded-b-md'
    style={{ backgroundImage: `url(${cover})`}}>
      <div className='absolute inset-x-0 bottom-0 h-[5rem] bg-gradient-to-t from-white to-transparent blur-lg'></div>

<div className='bg-black bg-opacity-60 h-full flex flex-col justify-center items-center text-center p-6'>
<h2 className='text-5xl font-bold mb-4'>Nathan <b>SigmaSkibidi</b></h2>
<p className='text-2xl mb-8 '>View My Project Here</p>
<a href="" className='bg-fuchsia-400 hover:bg-fuchsia-500 text-white font-semibold py-2 px-6 rounded-md duration-300'>My Project</a>
</div>

    </section>
  )
}

export default Home