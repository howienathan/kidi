import React from 'react';
import profile from '../assets/ambalabu.jpg'
const About = () => {
  return (
    <section className="p-8">
      <div className="flex flex-col items-center">
        <img
          src={profile} // atau gunakan require('../assets/profile.jpg') jika file ada di src/assets
          alt="Profile"
          className="w-32 h-32 rounded-full object-cover mb-4"
        />
        <p className="text-lg text-center">
          Hello! I’m a student
        </p>
      </div>

       
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
            <div className='bg-white p-6 rounded-lg shadow-lg hover:bg-gray-50 transition-colors duration-300'>
                <h3 className='text-2xl font-bold mb-4 text-rose-700'>IoT</h3>
                <p className='text-gray-700 mb-4'>
                    i Learn About React
                </p>
            </div>
            <div className='bg-white p-6 rounded-lg shadow-lg hover:bg-gray-50 transition-colors duration-300'>
                <h3 className='text-2xl font-bold mb-4 text-rose-700'>IoT</h3>
                <p className='text-gray-700 mb-4'>
                    i Learn About React
                </p>
            </div>
            <div className='bg-white p-6 rounded-lg shadow-lg hover:bg-gray-50 transition-colors duration-300'>
                <h3 className='text-2xl font-bold mb-4 text-rose-700'>IoT</h3>
                <p className='text-gray-700 mb-4'>
                    i Learn About React
                </p>
            </div>
        </div>
        <div>
            <p className='text-lg text-gray-600 mt-8'>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Architecto, fuga enim. Delectus iste quibusdam nam quam officia sed facilis placeat consequuntur nobis mollitia rem ut ea, laudantium quo asperiores ab!
            </p>
        </div>

    </section>
  );
};

export default About;