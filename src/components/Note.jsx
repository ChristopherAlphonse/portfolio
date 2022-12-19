import React from 'react';

export const Note = () => {
  return (
    <div className='containerr -50 flex h-[100vh]  items-center overflow-hidden bg-zinc-900 py-32 dark:bg-zinc-50 '>
      <div className='container mx-auto h-full '>
        <div className='font-mono grid min-h-screen place-items-center'>
          <div className='rounded-md  shadow-lg '>
            <div className='max-w-4xl bg-zinc-800 px-4 leading-none md:flex'>
              <div className='flex-none '>
                <img
                  src='https://creativereview.imgix.net/content/uploads/2019/12/joker_full.jpg?auto=compress,format&q=60&w=1012&h=1500'
                  alt='pic'
                  className=' h-72 w-56 -translate-y-4 transform rounded-md shadow-2xl '
                />
              </div>

              <div className=' flex-col text-gray-300'>
                <p className='flex justify-center py-2.5 text-2xl font-bold'>Joker (2020)</p>
                <hr className='hr-text' data-content='' />
                <div className='text-md my-2 flex justify-between px-4'>
                  <span className='font-bold'>2h 2min | Crime, Drama, Thriller</span>
                  <span className='font-bold'></span>
                </div>
                <p className='my-4 hidden px-4 text-left text-sm md:block'>
                  In Gotham City, mentally troubled comedian Arthur Fleck is disregarded and
                  mistreated by society. He then embarks on a downward spiral of revolution and
                  bloody crime. This path brings him face-to-face with his alter-ego: the Joker.{' '}
                </p>

                <p className='text-md my-2 flex px-4'>
                  Rating: 9.0/10
                  <span className='px-2 font-bold'>|</span>
                  Mood: Dark
                </p>

                <div className='text-xs'>
                  <button
                    type='button'
                    className='ease focus:shadow-outline m-2 select-none rounded-md border border-gray-400 px-4 py-2 text-gray-400 transition duration-500 hover:bg-gray-900 focus:outline-none'
                  >
                    TRAILER
                  </button>

                  <button
                    type='button'
                    className='ease focus:shadow-outline m-2 select-none rounded-md border border-gray-400 px-4 py-2 text-gray-400 transition duration-500 hover:bg-gray-900 focus:outline-none'
                  >
                    IMDB
                  </button>

                  <button
                    type='button'
                    className='ease focus:shadow-outline m-2 select-none rounded-md border border-gray-400 px-4 py-2 text-gray-400 transition duration-500 hover:bg-gray-900 focus:outline-none'
                  >
                    AMAZON
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
