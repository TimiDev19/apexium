import MovingDashes from '@/components/MovingDashes'
import React from 'react'
import Image from "next/image";
import Logo from "@/assets/logo.jpg"
import Link from 'next/link';
import { Book, BookOpenText } from "lucide-react";

const Services = () => {
    return (
        <div id="services" className=' min-h-screen w-screen pt-[90px]'>
            <MovingDashes />
            <span className=' mt-4 mb-4 mx-auto max-w-[95%] flex items-center justify-center uppercase font-bold text-black text-2xl lg:text-6xl p-2 bg-gradient-to-tr from-green-700 to-green-300 w-fit rounded-xl'>
                <Image
                    src={Logo}
                    alt="Apexium Logo"
                    className=' w-[50px] h-[50px] rounded-full mr-3'
                />
                Services Apexium Offers
            </span>
            <p className=' max-w-[95%] mx-auto lg:w-[65%] text-xl font-medium mb-4'>
                Apexium Agency specializes in a comprehensive suite of services tailored to the unique needs of Web3 projects: <br /> <br />

                <b>Talent Acquisition</b>: They actively recruit skilled professionals to meet the demands of their clients, ensuring a perfect match between talent and project requirements. <br /> <br />

                <b>Marketing Campaigns</b>: The agency designs and executes targeted marketing strategies to enhance project visibility and engagement within the Web3 community. <br /> <br />

                <b>Influencer Partnerships</b>: Recognizing the power of influencer marketing, Apexium collaborates with micro-influencers to expand the reach of their clients' projects. <br /> <br />
                <Link
                    target="blank"
                    href={"https://x.com/ApexiumAgency"}
                    className=" flex items-center justify-center w-fit text-sm mt-4 lg:text-lg p-2 border border-green-500 rounded-2xl font-extrabold bg-white/10 backdrop-blur-lg hover:bg-white/0 duration-700'"
                >
                    <BookOpenText className=" mr-2" /> Learn More
                </Link>
            </p>
        </div>
    )
}

export default Services