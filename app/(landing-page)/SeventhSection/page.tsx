import { ArrowRight } from "lucide-react";
import Image from "next/image";

const SeventhSection = () => {
    return (
        <div className="flex flex-col md:py-20 md:p-40 p-10 bg-[#E5E4E2]  ">
            <div className=" space-y-6 flex flex-col md:px-20 pb-10 ">
                <div className=" text-xl ">Get started easily</div>
                <div className="text-4xl ">Contact us to get your work done!</div>

            </div>
            <div className="md:flex md:px-20 md:space-x-10 space-y-10 md:space-y-0 ">
                <div className="rounded-lg bg-white p-8">
                    <div className="text-xl py-2">Step-1</div>
                    <Image
                        src="/images/messi.jpg"
                        alt="Picture of the author"
                        width={400}
                        height={400}
                        className="rounded-lg w-96"
                    />
                    <div className="text-3xl pt-8">Start with Sending us the Order</div>
                </div>

                <div className="rounded-lg bg-white p-8">
                    <div className="text-xl py-2">Step-2</div>
                    <Image
                        src="/images/messi.jpg"
                        alt="Picture of the author"
                        width={400}
                        height={400}
                        className="rounded-lg w-96"
                    />
                    <div className="text-3xl pt-8">Sign the Contract</div>
                </div>

                <div className="rounded-lg bg-white p-8">
                    <div className="text-xl py-2">Step-3</div>
                    <Image
                        src="/images/messi.jpg"
                        alt="Picture of the author"
                        width={400}
                        height={400}
                        className="rounded-lg w-96"
                    />
                    <div className="text-3xl pt-8">Get Your Product</div>
                </div>
            </div>
        </div>
    );
};

export default SeventhSection;
