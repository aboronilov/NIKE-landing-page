import Image from 'next/image';
import React from 'react'

import { StaticImageData } from "next/image"

type Props = {
    label: string;
    img?: StaticImageData;
    backgroundColor?: string;
    textColor?: string;
    borderColor?: string;
    fullWidth?: boolean;
}

const Button = ({ label, img, backgroundColor, textColor, borderColor, fullWidth}: Props) => {
    return (
        <button 
            className={
                `
                    flex 
                    items-center 
                    justify-center 
                    gap-2 px-7 py-4 
                    border border-coral-red
                    font-montserrat 
                    text-lg
                    leading-none
                    rounded-full
                    hover:shadow-md
                    hover:opacity-80
                    transition
                    duration-300 
                    ease-in-out
                    ${
                        backgroundColor ? 
                        `${backgroundColor} ${textColor} ${borderColor}`
                            : 
                        "bg-coral-red text-white border-coral-red"}
                    ${fullWidth && "w-full"}
                `
            }

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