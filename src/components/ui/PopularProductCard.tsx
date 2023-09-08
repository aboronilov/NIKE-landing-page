import React from 'react'
import Image, { StaticImageData } from "next/image"
import { star } from '@/assets/icons';

type Props = {
    imgURL: StaticImageData;
    price: string;
    name: string;
    rating: number;
}

const PopularProductCard = ({imgURL, price, name, rating}: Props) => {
  return (
    <div className='
        flex flex-1 flex-col 
        w-full 
        hover:scale-105
        transition duration-300 ease-in-out 
        cursor-pointer'
    >
        <Image
            src={imgURL}
            alt={name}
            width={280}
            height={280}
        />
        <div className="flex flex-col justify-start gap-2 mt-8">
            <div className="flex items-center gap-2">
                <Image 
                    src={star}
                    alt="star"
                    width={24}
                    height={24}
                />
                <p className='font-montserrat text-xl leading-normal text-slate-gray'>{rating}</p>
            </div>
            <h3 className='mt-2 text-2xl leading-normal font-semibold font-palanquin'>{name}</h3>
            <p className='mt-2 font-semibold font-montserrat text-coral-red text-2xl leading-normal'>{price}</p>
        </div>
    </div>
  )
}

export default PopularProductCard