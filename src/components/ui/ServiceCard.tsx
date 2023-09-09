import React from 'react'
import Image, { StaticImageData } from "next/image"

type Props = {
    label: string;
    imgURL: StaticImageData;
    subtext: string;
}

const ServiceCard = ({ label, imgURL, subtext }: Props) => {
    return (
        <div className='
            flex-1 
            sm:w-[350px] sm:min-w-[350px] 
            w-full 
            rounded-[20px] 
            shadow-3xl 
            px-10 py-16
            hover:scale-105 transition duration-300 ease-in-out
            cursor-pointer
        '>
            <div className='w-11 h-11 flex justify-center items-center bg-coral-red rounded-full'>
                <Image
                    src={imgURL}
                    alt={label}
                    width={24}
                    height={24}
                />
            </div>
            <h3 className='mt-5 font-palanquin text-3xl leading-normal font-bold'>
                {label}
            </h3>
            <p className='mt-3 break-words font-montserrat text-lg leading-normal text-slate-gray'>
                {subtext}
            </p>
        </div>
    )
}

export default ServiceCard