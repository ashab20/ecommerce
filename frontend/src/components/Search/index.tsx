import React from 'react'

const Search = () => {
  return (
    <div className='fixed z-20 top-12 right-2 mr-5 lg:mr-16  mt-6 w-38 transition-all ease-in-out delay-150'>
        <form action="">
            <input className='p-1 pl-2 pr-2 text-sm font-thin outline-none border-[1px] rounded-md' type="search" placeholder='search...'/>
        </form>
    </div>
  )
}

export default Search