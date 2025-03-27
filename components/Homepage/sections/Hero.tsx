import FadeInFromBottom from '@/components/FadeInFromBottom';
import { Nunito_Sans, Open_Sans } from 'next/font/google';
import React from 'react'


const nunitoSans = Nunito_Sans({
    subsets: ['latin'],
    weight: ['200', '300', '400', '500', '600', '700'],
});

const openSans = Open_Sans({
    subsets: ['latin'],
    weight: ['300', '400', '500', '600', '700'],
});

const Hero = () => {
    return (
        <div
            id='hero'
            className=''
        >
            <div className=' overflow-hidden pt-[90px] h-[100vh] w-screen flex flex-col items-center justify-center lg:flex-row lg:items-center lg:justify-between lg:px-[20px]'>
                <div className=' w-[95%] m-auto lg:w-[50%] h-full z-[3] flex items-center justify-start text-left'>
                    <FadeInFromBottom>
                        <div className={openSans.className}>
                            <h1 className=' uppercase font-bold text-black text-3xl lg:text-6xl p-2 bg-gradient-to-tr from-green-700 to-green-300 w-fit rounded-xl'>Apexium Agency</h1>
                            <h1 className=' font-bold text-white text-xl lg:text-4xl'>Bridging the gap between <span className='text-green-500'>web3 projects</span> and <span className='text-green-500'>quality workforce</span></h1>
                        </div>
                    </FadeInFromBottom>
                </div>

                <div className=' h-[600px] w-[600px] lg:w-[800px] lg:h-[800px] relative'>
                        <video
                            src="/phone.mp4"
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