import React from 'react'
import { SearchBar } from './SearchBar'

export const SearchContainer = () => {
  return (
    <div className='col-start-2 row-start-2'>
      <h1 className='font-bold text-center p-1 text-3xl'>Search.</h1>
      <h2 className='text-center p-1 pb-3 text-sm'>Search high-resolution images from Unplash</h2>
      <SearchBar></SearchBar>
    </div>
  )
}
