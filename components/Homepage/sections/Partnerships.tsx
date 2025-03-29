import partner1 from "@/public/images/img1.png"
import partner2 from "@/public/images/img2.png"
import partner3 from "@/public/images/img3.png"
import partner4 from "@/public/images/img4.png"
import ImageSlider from '@/components/ImageSlider'
import InfiniteCarousel from '@/components/InfiniteCarousel'
import { ArrowBigRightDash, LinkIcon } from 'lucide-react'
import Image from 'next/image'
import React from 'react'
import Logo from "@/assets/logo.jpg"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import { Nunito_Sans, Open_Sans, Tektur } from 'next/font/google';
import Link from 'next/link'

const openSans = Open_Sans({
    subsets: ['latin'],
    weight: ['300', '400', '500', '600', '700'],
});


const Partnerships = () => {
    return (
        <div id="partnerships" className=' w-full min-h-[100vh] pt-[90px] flex flex-col items-center justify-center'>
            <div className=' w-[95%] mx-auto flex items-center justify-center mb-[20px]'>
                <h1 className=' z-[3] flex items-center justify-center uppercase font-bold text-black text-lg lg:text-4xl p-2 bg-gradient-to-tr from-green-700 to-green-300 w-full mx-auto lg:mx-0 lg:w-fit rounded-xl box-shadow'>
                    <Image
                        src={Logo}
                        alt="Apexium Logo"
                        className=' w-[50px] h-[50px] rounded-full mr-3'
                    />
                    Apexium Partners
                </h1>
                <InfiniteCarousel />
            </div>
            <div className=' min-h-[80vh] w-full flex items-center justify-center'>
                <Carousel className=' w-[70%] lg:w-[80%]'>
                    <CarouselContent className=' w-fit'>
                        <CarouselItem className=' w-fit'>
                            <div className=' bg-gradient-to-tr from-green-800 to-green-300 text-white border border-green-500 p-2 w-[60vw] mx-4 h-[60vh] flex flex-col items-center justify-center'>
                                <div className=" flex items-center justify-center">
                                    <h1 className={` ${openSans.className} h-[50px] flex flex-col lg:flex-row items-center justify-center w-full mb-4 text-center lg:text-5xl font-extrabold text-white`} >
                                        <Image
                                            src={partner1}
                                            alt=""
                                            className=" w-[50px] h-[50px] rounded-full mx-3 border-2 border-black"
                                        />
                                        Act I : The AI Prophecy
                                    </h1>
                                </div>
                                <Link target='blank' href={"https://x.com/ACTICOMMUNITY?t=lzNHNBnbt1P7ESQ0bf9Cyg&s=09"} className=' mt-[20px] focus:outline-none text-sm lg:text-lg mx-2 p-2 border border-black rounded-2xl flex items-center justify-center font-extrabold bg-black/10 backdrop-blur-lg hover:bg-black/0 duration-700'>
                                    <Image
                                        src={partner1}
                                        alt='Apexium Logo'
                                        className=' w-[20px] h-[20px] lg:h-[30px] lg:w-[30px] rounded-full border border-[#ffffff1a] lg:mr-4 mr-2'
                                    />
                                    Visit Site
                                </Link>
                            </div>
                        </CarouselItem>
                        <CarouselItem className=' w-fit'>
                            <div className=' bg-gradient-to-tr from-green-800 to-green-300 text-white border border-green-500 p-2 w-[60vw] mx-4 h-[60vh] flex flex-col items-center justify-center'>
                                <div className=" flex items-center justify-center">
                                    <h1 className={` ${openSans.className} h-[50px] flex flex-col lg:flex-row items-center justify-center w-full mb-4 text-center lg:text-5xl font-extrabold text-white`} >
                                        <Image
                                            src={partner2}
                                            alt=""
                                            className=" w-[50px] h-[50px] rounded-full mx-3 border-2 border-black"
                                        />
                                        Open Loot
                                    </h1>
                                </div>
                                <Link target='blank' href={"https://x.com/OpenLoot?t=gNdgM0YDm9k52SGBQS2WeQ&s=09"} className=' mt-[20px] focus:outline-none text-sm lg:text-lg mx-2 p-2 border border-black rounded-2xl flex items-center justify-center font-extrabold bg-black/10 backdrop-blur-lg hover:bg-black/0 duration-700'>
                                    <Image
                                        src={partner2}
                                        alt='Apexium Logo'
                                        className=' w-[20px] h-[20px] lg:h-[30px] lg:w-[30px] rounded-full border border-[#ffffff1a] lg:mr-4 mr-2'
                                    />
                                    Visit Site
                                </Link>
                            </div>
                        </CarouselItem>
                        <CarouselItem className=' w-fit'>
                            <div className=' bg-gradient-to-tr from-green-800 to-green-300 text-white border border-green-500 p-2 w-[60vw] mx-4 h-[60vh] flex flex-col items-center justify-center'>
                                <div className=" flex items-center justify-center">
                                    <h1 className={` ${openSans.className} h-[50px] flex flex-col lg:flex-row items-center justify-center w-full mb-4 text-center lg:text-5xl font-extrabold text-white`} >
                                        <Image
                                            src={partner3}
                                            alt=""
                                            className=" w-[50px] h-[50px] rounded-full mx-3 border-2 border-black"
                                        />
                                        B3X.AI
                                    </h1>
                                </div>
                                <Link target='blank' href={"https://x.com/b3xai?t=gNdgM0YDm9k52SGBQS2WeQ&s=09"} className=' mt-[20px] focus:outline-none text-sm lg:text-lg mx-2 p-2 border border-black rounded-2xl flex items-center justify-center font-extrabold bg-black/10 backdrop-blur-lg hover:bg-black/0 duration-700'>
                                    <Image
                                        src={partner3}
                                        alt='Apexium Logo'
                                        className=' w-[20px] h-[20px] lg:h-[30px] lg:w-[30px] rounded-full border border-[#ffffff1a] lg:mr-4 mr-2'
                                    />
                                    Visit Site
                                </Link>
                            </div>
                        </CarouselItem>
                        <CarouselItem className=' w-fit'>
                            <div className=' bg-gradient-to-tr from-green-800 to-green-300 text-white border border-green-500 p-2 w-[60vw] mx-4 h-[60vh] flex flex-col items-center justify-center'>
                                <div className=" flex items-center justify-center">
                                    <h1 className={` ${openSans.className} h-[50px] flex flex-col lg:flex-row items-center justify-center w-full mb-4 text-center lg:text-5xl font-extrabold text-white`} >
                                        <Image
                                            src={partner4}
                                            alt=""
                                            className=" w-[50px] h-[50px] rounded-full mx-3 border-2 border-black"
                                        />
                                        ZOTH
                                    </h1>
                                </div>
                                <Link target='blank' href={"https://x.com/zothdotio?t=gNdgM0YDm9k52SGBQS2WeQ&s=09"} className=' mt-[20px] focus:outline-none text-sm lg:text-lg mx-2 p-2 border border-black rounded-2xl flex items-center justify-center font-extrabold bg-black/10 backdrop-blur-lg hover:bg-black/0 duration-700'>
                                    <Image
                                        src={partner4}
                                        alt='Apexium Logo'
                                        className=' w-[20px] h-[20px] lg:h-[30px] lg:w-[30px] rounded-full border border-[#ffffff1a] lg:mr-4 mr-2'
                                    />
                                    Visit Site
                                </Link>
                            </div>
                        </CarouselItem>
                    </CarouselContent>
                    <CarouselPrevious className=' cursor-pointer' />
                    <CarouselNext className=' cursor-pointer' />
                </Carousel>
            </div>

        </div>
    )
}

export default Partnerships