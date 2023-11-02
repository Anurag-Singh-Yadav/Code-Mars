import React from 'react'

function FormDataComp({type,heading,name,value,handleChange,placeholder}) {
  return (
    <div className='grid grid-cols-5 gap-x-1'>
      <label htmlFor={name} className='min-w-[40px] text-start flex items-center col-span-1'>{heading} </label>
      <input className='shadow-[rgba(50,50,93,0.25)_0px_6px_12px_-2px,_rgba(0,0,0,0.3)_0px_3px_7px_-3px] text-black appearance-none border rounded py-2 px-3 leading-tight focus:outline-none focus:shadow-outline col-span-4'
        type={type}
        id={name}
        name={name}
        value={value}
        onChange={handleChange}
        placeholder={placeholder}
      ></input>
    </div>
  )
}

export default FormDataComp
