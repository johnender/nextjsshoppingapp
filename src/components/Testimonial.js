import React from 'react'
import Testimony from './Testimony'
import Coupon from './Coupon'

const Testimonial = () => {
  return (
    <div>
      <div className='container mx-auto py-16 grid-cols-2'>
        <h2 className='font-medium text-2xl pb-2'>
          Testimonails
        </h2>
        <div className='grid lg:grid-cols-[300px_minmax(900px,_1fr)_100px] gap-4'>
          <div className='border border-gray-300 rounded-2xl grip place-items-center p-6 lg:p-0'>
            <Testimony 
            img='./user.jpg' 
            name='Elsa Doe' 
            description='CEO & Founder Invision' 
            quotes='./quotes.svg'
            message='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam tristique imperdiet dui, dictum vestibulum justo sagittis ac.' />
          </div>
          <div className=''>
            <Coupon
              discount = '25%'
              title = 'Summer Collection'
              text = 'Starting @ $20'
              cta = 'SHOP NOW'
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Testimonial