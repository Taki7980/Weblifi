"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import MaxWidthWraper from "@/components/MaxWidthWrapper";
import { buttonVariants } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const FirstSection = () => {
    return (
        <section
            className="md:py-20 py-20 space-y-10 h-full
    bg-[#E5E4E2]">
            <div className="mt-5 flex flex-col items-center justify-center text-center">
                <h1 className="max-w-4xl text-5xl font-bold md:text-6xl lg:text-7xl">
                    With <span className="bg-gradient-to-t from-yellow-400 to-black bg-clip-text text-transparent">Weblifi</span> You can make your Dream a Reality
                </h1>
                <p className="mt-5 max-w-prose text-zinc-700 sm:text-lg">
                    In this modern era everyone needs a great website to boost their sales or any business they're having with web you can easily get a marvellous website which can help you grow
                </p>
                <Link href={"/contact"} className={buttonVariants({
                    size: 'lg',
                    className: 'bg-[#000] text-md rounded-sm mt-5'
                })} target="_blank">
                    Contact Us! <ArrowRight className="h-5 w-5" />
                </Link>
            </div>

            <div className=" md:pt-10 items-center space-y-10 px-10  md:flex  justify-center md:mx-auto md:space-x-10">
                <motion.div
                    initial={{ y: 100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}



                    className="px-10 md:px-0">
                    <Image
                        src="/images/messi.jpg"
                        alt="Picture of the author"
                        width={500}
                        height={500}
                        className="rounded-lg"
                    />

                </motion.div>

                <motion.div
                    initial={{ y: 100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}


                    className="px-10 md:px-0">
                    <Image
                        src="/images/messi.jpg"
                        alt="Picture of the author"
                        width={500}
                        height={500}
                        className="rounded-lg"
                    />

                </motion.div>

                <motion.div
                    initial={{ y: 100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}



                    className="px-10 md:px-0  ">
                    <Image
                        src="/images/messi.jpg"
                        alt="Picture of the author"
                        width={500}
                        height={500}
                        className="rounded-lg"
                    />
                </motion.div>
            </div>
        </section>
    );
};

export default FirstSection;
