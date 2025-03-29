import React from 'react'
import Logo from "@/assets/logo.jpg"
import Image from 'next/image'
import Link from 'next/link'
import XIcon from '@mui/icons-material/X';
import TelegramIcon from '@mui/icons-material/Telegram';

const Contact = () => {
    return (
        <div
            id="contact"
            className=' w-full lg:h-[60vh] flex flex-col lg:flex-row items-center justify-center border-t-green-500 border-t-2 text-black'
        >
            <div className=' h-[600px] w-[600px] lg:w-[50vh] lg:h-full bg-black relative'>
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
            <div className=' flex flex-col items-center justify-center pr-5'>
                <span className=' mb-4 flex items-center justify-center uppercase font-bold text-black text-2xl lg:text-6xl p-2 bg-gradient-to-tr from-green-700 to-green-300 w-fit rounded-xl mx-auto'>
                    <Image
                        src={Logo}
                        alt="Apexium Logo"
                        className=' w-[50px] h-[50px] rounded-full mr-3'
                    />
                    Contact Apexium Agency
                </span>
                <div className=' w-full flex items-center justify-center'>
                    <Link
                        target='blank'
                        href={"https://x.com/ApexiumAgency"}
                        className=' text-green-500 text-2xl mx-2 lg:text-6xl p-2 border-2 border-green-500 rounded-full flex items-center justify-center bg-white/10 backdrop-blur-lg hover:bg-white/0 duration-700'
                    >
                        <XIcon />
                    </Link>
                    <Link
                        target='blank'
                        href={"https://t.me/ApexiumWorkforce"}
                        className=' text-green-500 text-2xl mx-2 lg:text-6xl p-2 border-2 border-green-500 rounded-full flex items-center justify-center bg-white/10 backdrop-blur-lg hover:bg-white/0 duration-700'
                    >
                        <TelegramIcon />
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Contact