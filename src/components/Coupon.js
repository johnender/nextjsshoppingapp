import React from 'react'

const Coupon = ({discount, title, text, cta}) => {
  return (
    <div className='bg-[#ffffffab] min-w-[270px] sm:min-w-[300px] md:min-w-[500px] rounded-xl py-8 sm:px-8 px-2 grid place-items-center gap-3'>
      <button className='bg-(--blackish) text-white p-2 rounded-md'>
        {discount}
      </button>
      <h2 className='font-extrabold text-2xl text-[#272727]'>
        {title}
      </h2>
      <p className='text-gray-500 text-[20px]'>{text} <strong>{cta}</strong></p>
    </div>
  )
}

export default Coupon