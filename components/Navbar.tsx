"use client";
import React, { useState } from 'react'
import { Nunito_Sans, Tektur } from 'next/font/google';
import Logo from "@/assets/logo.jpg"
import Link from 'next/link';
import Image from 'next/image';
import FadeIn from './FadeIn';

const tektur = Tektur({
    subsets: ['latin'],
    weight: ['400', '500', '600', '700'],
});

const nunitoSans = Nunito_Sans({
    subsets: ['latin'],
    weight: ['200', '300', '400', '500', '600', '700'],
});

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className=' fixed z-50 w-screen h-[80px]'>
            <FadeIn>
                <div className=' w-full h-[80px] flex items-center justify-between px-[10px] bg-green-500/10 backdrop-blur-sm'>
                    {/* Left Container */}
                    <div className=' w-[30%]'>
                        <div className={nunitoSans.className}>
                            <div className=' flex items-center justify-start'>
                                <Image
                                    src={Logo}
                                    alt='Apexium Logo'
                                    className=' w-[50px] h-[50px] rounded-full'
                                />
                                <h1 className=' uppercase font-semibold text-xl lg:text-2xl ml-3 hidden lg:block'>Apexium</h1>
                            </div>
                        </div>
                    </div>

                    {/* Middle Container */}
                    <div className=' w-[30%] hidden lg:flex items-center justify-center'>
                        <div className={nunitoSans.className}>
                            <div className={'flex items-center justify-center'}>
                                <nav className="space-x-4">
                                    <Link
                                        href="/#home"
                                        className="relative group"
                                    >
                                        Home
                                        <span className="absolute left-1/2 bottom-0 w-0 h-[1px] bg-green-500 transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
                                    </Link>
                                    <Link
                                        href="/#about"
                                        className="relative group"
                                    >
                                        About
                                        <span className="absolute left-1/2 bottom-0 w-0 h-[1px] bg-green-500 transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
                                    </Link>
                                    <Link
                                        href="/#services"
                                        className="relative group"
                                    >
                                        Services
                                        <span className="absolute left-1/2 bottom-0 w-0 h-[1px] bg-green-500 transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
                                    </Link>
                                </nav>

                            </div>
                        </div>
                    </div>

                    {/* Right Container */}
                    <div className=' lg:w-[30%] flex items-center justify-end'>
                        <div className={tektur.className}>
                            <div className=' flex items-center justify-center'>
                                {/* <div className=' text-right mr-2'>
                                <h1>
                                    The people's memecoin <br />
                                    <span className=' text-green-700'>To the moon we go 🚀</span>
                                </h1>
                            </div> */}

                                <Link target='blank' href={"https://t.me/ApexiumWorkforce"} className=' text-sm lg:text-lg mx-2 p-2 border border-green-500 rounded-2xl flex items-center justify-center font-extrabold bg-white/10 backdrop-blur-lg hover:bg-white/0 duration-700'>
                                    <Image
                                        src={Logo}
                                        alt='Apexium Logo'
                                        className=' w-[20px] h-[20px] lg:h-[30px] lg:w-[30px] rounded-full border border-[#ffffff1a] lg:mr-4 mr-2'
                                    />
                                    Join Telegram
                                </Link>
                            </div>
                        </div>
                    </div>

                    <button
                        aria-label="Open menu"
                        className="relative w-12 h-12 flex items-center justify-center cursor-pointer lg:hidden"
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        {/* Top Line */}
                        <div
                            className={`absolute w-6 h-0.5 bg-current transition-transform duration-300 ${isOpen ? "rotate-45" : "-translate-y-1.5"
                                }`}
                        ></div>

                        {/* Bottom Line */}
                        <div
                            className={`absolute w-6 h-0.5 bg-current transition-transform duration-300 ${isOpen ? "-rotate-45" : "translate-y-1.5"
                                }`}
                        ></div>
                    </button>
                </div>
            </FadeIn>
        </div>
    )
}

export default Navbar
