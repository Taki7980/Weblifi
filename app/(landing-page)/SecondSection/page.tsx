'use client'

import { ArrowRight, CheckCircle2 } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";
import { useRef } from "react";
import { useInView } from "framer-motion";

import { useState } from "react";
import Link from "next/link";



const tabs = [
  {
    name: "Web development",
    title: "Deliver Optimaized web Products",
    feature1: "Responsive Design: Create websites that adapt seamlessly to various screen sizes and devices for an optimal user experience.",
    feature2: "Fast Loading Speed: Optimize website performance to ensure quick loading times, reducing bounce rates and improving SEO.from Next.js 13 to Astro.js,we're 10x faster.",
    feature3: "User-Friendly Navigation: Implement intuitive and efficient navigation systems to help users easily find the information they need.",
    image: "/images/messi.jpg"
  },
  {
    name: "Application development",
    title: "Efficient Application Development",
    feature1: "Responsive Design: Create web apps that adapt seamlessly to various screen sizes and devices for a great user experience.",
    feature2: "Scalability: Build web apps that can easily accommodate increased user loads and data without performance degradation.",
    feature3: "User-Centric UX: Prioritize user interface and experience design to ensure intuitive, engaging, and accessible web applications.",
    image: "/images/messi.jpg"
  },

  {
    name: "E-commerce",
    title: `Ready to supercharge your business's radiance? Look no further! With my E-commerce website`,
    feature1: 'User-Friendly Navigation: Intuitive and easy-to-use interface for seamless shopping and browsing.',
    feature2: 'Secure Payment Processing: Robust payment gateways and SSL encryption for safe transactions.',
    feature3: 'Responsive Design: Mobile-friendly layout for a consistent experience across devices.',
    image: "/images/messi.jpg"
  },
  {
    name: 'Management',
    title: 'managing your application top to bottom',
    feature1: 'Track work and see progress in real time',
    feature2: 'Adding new features or data to your application',
    feature3: 'Setting up for upmost public retention',
    image: "/images/messi.jpg"



  },

];


const SecondSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });


  const [activeTab, setActiveTab] = useState(tabs[0]);





  return (
    <div ref={ref}

      className="flex flex-col justify-center items-center md:py-20 p-10 w-full">
      <div className="flex justify-center items-center w-full">
        <div
          style={{
            transform: `translateY(${isInView ? 0 : 100}px)`,
            opacity: isInView ? 1 : 0,
            transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
          }}


          className="md:flex md:space-x-20 border-b md:py-10 w-full justify-center">
          <div className="space-y-10">
            <div className="text-3xl">
              We create Your Dream a Reality
            </div>
            <div className="flex items-center space-x-8 hover:text-blue-500 text-xl">
              With the help of Modern Web Technologies!
              <ArrowRight className="h-6 w-6 ml-4" />
            </div>
          </div>



          <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}


            className="flex items-center justify-between py-10 ">
            <Link
              href="/">
              <span className='bg-gradient-to-t font-bold text-2xl from-slate-300 to-black bg-clip-text text-transparent'>Weblifi</span>{' '}
            </Link>
          </motion.div>
        </div>
      </div>
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}

        className="text-4xl  md:text-6xl pt-10 py-20 hidden md:block">See how teams use Bird
      </motion.div>
      <div>

      </div>

      <div className="hidden md:flex  items-center justify-center ">



        {tabs.map((tab) => (
          <div
            key={tab.name}
            className={`
        flex 
        justify-center 
        items-center 
        space-x-10
        w-60
        ${activeTab === tab ? "border-b-4 pt-2 border-gray-500 text-gray-800" : "text-muted-foreground"}
        
        `}


            onClick={() => setActiveTab(tab)}
            style={{ cursor: 'pointer' }}

          >
            <div className="flex text-3xl text-center items-center h-20 w-20 justify-center">


              <div className="
                ">{tab.name}</div>


            </div>


          </div>
        ))}

      </div>

      {/* Display content based on the active tab */}
      <div className="pt-10 hidden md:block w-full">
        {activeTab && (
          <div className="flex   justify-center">

            <div
              style={{ height: '525px', width: '700px' }}


              className="flex-col bg-gray-200 p-10 rounded-md">


              <p className="text-4xl py-10 border-b underline ">{activeTab.title}</p>
              <div className="space-y-10 items-center justify-center">

                <ul className="flex space-x-4">
                  <CheckCircle2 className="h-6 w-6 text-gray-500" />

                  <li>{activeTab.feature1}</li>

                </ul>
                <ul className="flex space-x-4">
                  <CheckCircle2 className="h-6 w-6 text-gray-500" />

                  <li>{activeTab.feature2}</li>

                </ul>
                <ul className="flex space-x-4">
                  <CheckCircle2 className="h-6 w-6 text-gray-500" />

                  <li>{activeTab.feature3}</li>

                </ul>
              </div>
            </div>

            <div
              style={{ height: '525px', width: '700px' }}

              className="
          bg-gradient-to-r from-gray-400 to-gray-100
          items-center justify-center
          rounded-md
          flex

     
      
          
          
          ">


              <Image
                src={activeTab.image}
                width={530}
                height={500}


                alt="logo"
                className="
              rounded-md
              
          

          

              
              "

              />

            </div>


          </div>
        )}

      </div>





    </div>
  );
};

export default SecondSection;
