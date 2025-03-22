import React from 'react'

const Testimony = ({img, name, description, quotes, message}) => {
  return (
    <div className='text-center flex flex-col items-center gap-1 py-2 '>
      <img 
      className='rounded-full inline-block'
      src={img}
      width={80}
      height={80}
      alt='Profile picture'
      />
      <h2 className='text-gray-500 font-black text-[20px]'>{name}</h2>
      <p>{description}</p>
      <img className='inline-block py-2'
        src={quotes}
        width={30}
        height={30}
        alt='Profile picture'
      />
      <p className='max-w-[200px] text-gray-600'>{message}</p>
    </div>
  )
}

export default Testimony