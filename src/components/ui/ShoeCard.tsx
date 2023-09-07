"use client"

import React from 'react'
import Image, { StaticImageData } from "next/image"

type Props = {
    changeBigShoeImage: (imgURL: StaticImageData) => void;
    imgURL: any;
    bigShoeImg: StaticImageData;
}

const ShoeCard = ({changeBigShoeImage, imgURL, bigShoeImg}: Props) => {
    const handleClick = () => {
        if (bigShoeImg !== imgURL.bigShoe) {
            changeBigShoeImage(imgURL.bigShoe)
        }
    }
    
  return (
    <div 
        className={`
            border-2 
            rounded-xl
            ${bigShoeImg === imgURL.bigShoe ? 'border-coral-red' : 'border-transparent'}
            cursor-pointer
            max-sm:flex-1
        `}
        onClick={handleClick}
    >
        <div 
            className="
                relative 
                h-[103px] w-[127px] 
                flex justify-center items-center 
                bg-card bg-center bg-cover 
                sm:w-40 sm:h-40
                rounded-xl
                max-sm:p-4
            "
        >
            <Image 
                src={imgURL.thumbnail}
                alt="shoe"
                className='object-contain'
            />
        </div>
    </div>
  )
}

export default ShoeCard