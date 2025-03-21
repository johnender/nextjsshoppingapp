import React from 'react'
import { BsSearch } from 'react-icons/bs'
import { HiOutlineShoppingBag } from 'react-icons/hi'
import { FiHeart } from 'react-icons/fi'
import { IoMenuOutline } from 'react-icons/io5'
import { AiOutlineHome, AiOutlineAppstore } from 'react-icons/ai'

const MobNavBar = () => {
  return (
    <div className='lg:hidden fixed bottom-0 w-full bg-white left-[50%] -translate-x-[50%] max-w-[500px] px-8'>
      <div className='flex justify-between text-[28px] py-2'>
        <IoMenuOutline />
        <div className='relative'>
          <HiOutlineShoppingBag />
          <div className='header_main_icons'>0</div>
        </div>

        <AiOutlineHome />

        <div className='relative'>
          <FiHeart />
          <div className='header_main_icons'>0</div>
        </div>

        <AiOutlineAppstore />
      </div>
    </div>
  )
}

export default MobNavBar