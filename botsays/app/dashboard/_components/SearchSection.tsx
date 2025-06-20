import { Search } from 'lucide-react';
import React from 'react';

function SearchSection({onSearchInput}:any) {


  

  return (
    <div className='py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-purple-500 via-purple-700 to-blue-600 text-white'>
      <div className='max-w-7xl mx-auto text-center'>
        <h2 className='text-3xl sm:text-4xl md:text-5xl font-bold mb-6'>
          Browse All Templates
        </h2>
        <p className='text-lg sm:text-xl md:text-2xl opacity-90 max-w-3xl mx-auto mb-8'>
          Discover professionally designed templates for every need
        </p>
        <div className='relative max-w-2xl mx-auto'>
            
          <input
            type='text'
            placeholder='Search templates...'
            onChange={(event)=>onSearchInput(event.target.value)}
            className='w-full py-4 px-6 rounded-lg bg-white/10 backdrop-blur-sm border border-white/20 focus:outline-none focus:ring-2 focus:ring-white/50 text-white placeholder-white/70'
          />
          <button className='absolute right-2 top-1/2 -translate-y-1/2 bg-white text-purple-600 hover:bg-gray-100 px-4 py-2 rounded-md font-medium transition-colors'>
          
            Search
          </button>
        </div>
      </div>
    </div>
  );
}

export default SearchSection;