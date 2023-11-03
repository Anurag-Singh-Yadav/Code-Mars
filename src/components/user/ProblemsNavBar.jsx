import React from 'react'

function ProblemsNavBar({showTags , setShowTags}) {

    const toggleTags = () => {
        setShowTags(!showTags)
    }

  return (
    <div className='flex flex-col sm:flex-row justify-center gap-2 sm:gap-4 pt-2 sm:pt-4 items-center'>
        <p className='text-[#ff4545] font-medium text-sm sm:text-lg md:text-xl md:font-[650]'>We recommend hiding tags before for questions!</p>

        {
            showTags ? (
                <p onClick={toggleTags} className='bg-[#3b71fc] text-white text-sm px-1 sm:px-2 md:font-[600] md:px-3 py-1 rounded-lg hover:bg-[#445b96] hover:cursor-pointer'>Hide tags</p>
            ) : (
                <p onClick={toggleTags} className='bg-[#3b71fc] text-white text-sm px-1 sm:px-2 md:font-[600] md:px-3 py-1 rounded-lg hover:bg-[#445b96] hover:cursor-pointer'>Show tags</p>
            )
        }

    </div>
  )
}

export default ProblemsNavBar