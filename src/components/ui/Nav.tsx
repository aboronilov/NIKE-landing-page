import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

import { headerLogo } from "@/assets/images"
import { hamburger } from "@/assets/icons"
import { navLinks } from '@/constants'

type Props = {}

const Nav = (props: Props) => {
    return (
        <header className='padding-x py-8 absolute z-10 w-full'>
            <nav className='flex justify-between items-center max-container'>
                <Link href="/">
                    <div className="relative w-[130px] h-[29px]">
                        <Image
                            src={headerLogo}
                            alt="logo"
                        />
                    </div>
                </Link>
                <div className="flex flex-1 items-center justify-between max-lg:hidden">
                    <ul className='flex flex-1 justify-center items-center gap-16 '>
                        {navLinks.map((item) => (
                            <Link 
                                key={item.label} 
                                href={item.href} 
                                className='font-montserrat leading-normal text-lg text-slate-gray on-hover cursor-pointer'
                            >
                                {item.label}
                            </Link>
                        ))}
                    </ul>
                    <h1 className='font-montserrat leading-relaxed text-xl on-hover cursor-pointer'>Login</h1>
                </div>
                <div className="relative w-6 h-6 lg:hidden">
                    <Image 
                        alt="hamburger"
                        src={hamburger}
                    />
                </div>
            </nav>
        </header>
    )
}

export default Nav