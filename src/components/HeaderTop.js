import React from 'react'
import { BsFacebook, BsTwitterX, BsInstagram, BsLinkedin } from 'react-icons/bs'

const HeaderTop = () => {
  return (
    <div className='border-b border-gray-200 hidden sm:block'>
      <div className='container py-4 mx-auto'>
        <div className='flex justify-between items-center w-full'>
          {/* Icons section */}
          <div className='hidden lg:flex gap-1'>
            {/* using React Icons https://react-icons.github.io/react-icons/ */}
            <div  className='header_top_icon_wrapper'>
              <BsTwitterX/>
            </div>
            <div className= 'header_top_icon_wrapper'>
              <BsInstagram/>
            </div>
            <div className= 'header_top_icon_wrapper'>
              <BsLinkedin/>
            </div>
            <div className= 'header_top_icon_wrapper'>
              <BsFacebook />
            </div>
          </div>

          {/* Offer banner */}
          <div className='text-gray-500 text-[12px]'>
            <strong>FREE SHIPPING</strong> This week orders over - $99.99
          </div>

          {/* dropdowns section */}
          <div className='flex gap-4 '>
            <select name='currency' id='currency' className='text-gray-500 text-[0.8rem]'>
              <option value="USD $">USD $</option>
              <option value="EUR €">EUR €</option>
              <option value="CRC ₡">CRC ₡</option>
            </select>
            <select name='language' id='Language' className='text-gray-500 text-[0.8rem]'>
              <option value="English">English</option>
              <option value="French">French</option>
              <option value="Spanish">Spanish</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeaderTop