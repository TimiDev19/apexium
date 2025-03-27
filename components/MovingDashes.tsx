"use client";

import { motion } from "framer-motion";

export default function MovingDashes() {
    return (
        <div className="flex items-center justify-center h-fit w-[95%] lg:w-fit mx-auto bg-transparent uppercase">
            {/* Container */}
            <div className="flex space-x-4 items-center relative">
                {/* Div A */}
                <div className=" w-[65px] h-[65px] lg:w-20 lg:h-20 bg-gradient-to-tr from-green-700 to-green-300 flex items-center justify-center text-black text-center font-bold rounded-full text-sm">
                    web3 project
                </div>

                {/* Dashes Container */}
                <div className="relative w-40 h-1 overflow-hidden bg-transparent">
                    <motion.div
                        className="absolute w-60 flex space-x-2"
                        animate={{ x: ["-100%", "0%"] }}
                        transition={{
                            repeat: Infinity,
                            duration: 2,
                            ease: "linear",
                            repeatType: "loop",
                        }}
                    >
                        {/* Dashes */}
                        {Array(10)
                            .fill("")
                            .map((_, i) => (
                                <div key={i} className="w-4 h-1 bg-green-500" />
                            ))}
                    </motion.div>
                </div>

                {/* Div B */}
                <div className="w-[65px] h-[65px] lg:w-20 lg:h-20 bg-gradient-to-tr from-green-700 to-green-300 flex items-center justify-center text-black text-center font-bold rounded-full text-sm">
                    work force
                </div>
            </div>
        </div>
    );
}
