import Image from "next/image";

import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";

import { ArrowRight } from "lucide-react";

const FifthSection = () => {
    return (
        <div className="  md:flex md:space-x-20 py-20 space-y-10 items-center justify-center bg-[#28282B] ">

            <div className=" space-y-6 flex flex-col text-gray-200 md:w-1/3 px-10 ">
                <div className=" text-xl ">STREAMLINE YOUR WORK AND PROCESSES</div>
                <div className="text-4xl ">Delivering the Highest Quality</div>
                <div className="text-xl ">
                    Connect what needs to get done, who is responsible, and how to get
                    it done.
                </div>

                <Accordion type="single" collapsible>
                    <AccordionItem value="item-2">
                        <AccordionTrigger
                            className="text-blue-400"
                        >Efficient Workflow</AccordionTrigger>
                        <AccordionContent
                            className="border-b border-blue-500">
                            user can easily update the Data shown in the web app without having to shut the website.

                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-3">
                        <AccordionTrigger
                            className="text-yellow-300"


                        >Web Vitals enhancement</AccordionTrigger>
                        <AccordionContent
                            className="border-b border-yellow-300"
                        >
                            Get the lowest value from the webVitals to get a faster performance


                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-4">
                        <AccordionTrigger
                            className="text-green-400">
                            Control Over everything
                        </AccordionTrigger>
                        <AccordionContent>
                            the Client has the Power to control or customize any content or component show to the customer
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-5">
                        <AccordionTrigger
                            className="text-red-400">
                            Connect with your custom Database
                        </AccordionTrigger>
                        <AccordionContent>
                            Using custom Database is common these days. by using modern ORM we can connect you with your database
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>
            </div>

            <Image src="/images/messi.jpg" alt="Image" width={700} height={700} className="p-10 rounded-lg" />

        </div>
    );
};

export default FifthSection;
