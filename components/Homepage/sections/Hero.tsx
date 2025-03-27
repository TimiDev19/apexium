import FadeInFromBottom from '@/components/FadeInFromBottom';
import { Nunito_Sans, Open_Sans, Tektur } from 'next/font/google';
import Image from 'next/image';
import React from 'react'
import Logo from "@/assets/logo.jpg"


const nunitoSans = Nunito_Sans({
    subsets: ['latin'],
    weight: ['200', '300', '400', '500', '600', '700'],
});

const openSans = Open_Sans({
    subsets: ['latin'],
    weight: ['300', '400', '500', '600', '700'],
});

const tektur = Tektur({
    subsets: ['latin'],
    weight: ['400', '500', '600', '700'],
});

const Hero = () => {
    return (
        <div
            id='home'
            className=''
        >
            <div className=' overflow-hidden pt-[90px] lg:h-[100vh] w-screen flex flex-col items-center justify-start lg:flex-row lg:items-center lg:justify-between lg:px-[20px]'>
                <div className=' w-[95%] m-auto lg:w-[50%] h-[30%] z-[3] flex items-center justify-start text-left'>
                    <FadeInFromBottom>
                        <div className={openSans.className}>
                            <h1 className=' mb-4 flex items-center justify-center uppercase font-bold text-black text-2xl lg:text-6xl p-2 bg-gradient-to-tr from-green-700 to-green-300 w-fit rounded-xl'>
                                <Image
                                    src={Logo}
                                    alt="Apexium Logo"
                                    className=' w-[50px] h-[50px] rounded-full mr-3'
                                />
                                Apexium Agency
                            </h1>
                            <h1 className=' font-bold text-white text-lg lg:text-4xl mb-3'>
                            <span className={tektur.className}>Welcome To</span> <br /> <span className="font-extrabold">The world's</span> <span className=' text-green-500 font-extrabold'>First</span> <span className="font-extrabold">Web3 HR Service</span>
                            </h1>
                            <div className=' flex items-center justify-start'>
                                <Image
                                    src={Logo}
                                    alt="Apexium Logo"
                                    className=' w-[50px] h-[50px] rounded-full'
                                />
                                <div className=' bg-green-500/20 w-fit py-2 px-4'>
                                    <div className={openSans.className}>
                                        <h1 className=' capitalize font-semibold text-green-500 text-sm lg:text-lg'>
                                            Bridging the gap between <span className='text-white'>web3 projects</span> and <span className='text-white'>quality workforce</span>
                                        </h1>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </FadeInFromBottom>
                </div>

                <div className=' h-[600px] w-[600px] lg:w-[800px] lg:h-[800px] relative'>
                    <video
                        src="/crystal.mp4"
                        className="absolute inset-0 object-cover w-full h-full opacity-50"
                        autoPlay
                        loop
                        playsInline
                        muted
                        controls={false}
                    ></video>
                </div>
            </div>
            <div className=' h-[20vh] lg:h-[60vh] w-screen banner1'></div>
        </div>
    )
}

export default Hero