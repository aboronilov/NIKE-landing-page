import Image from 'next/image';
import React from 'react'

import { StaticImageData } from "next/image"

type Props = {
    label: string;
    img?: StaticImageData;
}

const Button = ({ label, img }: Props) => {
    return (
        <button 
            className='
                flex 
                items-center 
                justify-center 
                gap-2 px-7 py-4 
                border border-coral-red
                font-montserrat 
                text-lg
                leading-none
                bg-coral-red
                rounded-full
                text-white
                hover:shadow-md
                hover:opacity-80
                transition
                duration-300 
                ease-in-out
            '
        >
            {label}
            {
                img ?
                    <Image
                        width={20}
                        height={20}
                        src={img}
                        alt="image"
                        className='ml-2 rounded-full'
                    /> 
                    : 
                null
            }
        </button>
    )
}

export default Button