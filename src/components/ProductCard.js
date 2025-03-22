import React from 'react'

import { AiFillStar, AiOutlineStar } from 'react-icons/ai'

const ProductCard = ({data}) => {
  //calling the current currency from the store
  const currency = "$"
  let price = parseInt(data.price);
  if(currency === "₡"){
    price = (price * 500);
  }

  const generateRating = (rating) => {
    let result = []
    let stars = 0;
    while (stars < rating){
      result.push(<AiFillStar key={stars}/>);
      stars++;
    }
    while (stars < 5){
      result.push(<AiOutlineStar key={stars}/>);
      stars++;
    }
    return result;
  }

  return (
    <div className='px-4 border border-gray-200 rounded-xl max-w-[400px]'>
      <div>
        <img className='w-full h-auto'
        src={data.img} width={200} height={300} alt={data.title}/>
      </div>

      <div className='space-y-2 py-2'>
        <h2 className='text-(--accent) font-medium uppercase'>{data.title}</h2>
        <p className='text-gray-500 max-w-[150x]'>{data.desc}</p>
        <div className='flex gap-1 text-[20px] text-[#FF9529]'>
          {generateRating(data.rating)}
        </div>
        <div className='font-bold flex gap-4'>
          {currency}{price}
          <del className='text-gray-500 font-normal'>
            {currency}{price + 50}.00
            </del>
        </div>
      </div>

    </div>
  )
}

export default ProductCard