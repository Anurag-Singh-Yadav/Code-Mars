import React from 'react'

function ProblemsNavBar({showTags , setShowTags}) {

    const toggleTags = () => {
        setShowTags(!showTags)
    }

  return (
    <div className='flex justify-center gap-4 pt-4 items-center'>
        <p className='text-[#ff4545] font-[650]'>We recommend hiding tags before for questions!</p>

        {
            showTags ? (
                <p onClick={toggleTags} className='bg-[#3b71fc] text-white font-[600] px-3 py-1 rounded-lg hover:bg-[#445b96] hover:cursor-pointer'>Hide tags</p>
            ) : (
                <p onClick={toggleTags} className='bg-[#3b71fc] text-white font-[600] px-3 py-1 rounded-lg hover:bg-[#445b96] hover:cursor-pointer'>Show tags</p>
            )
        }

    </div>
  )
}

export default ProblemsNavBar