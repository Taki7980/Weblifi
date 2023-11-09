import { buttonVariants } from "@/components/ui/button";

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTrigger
} from "@/components/ui/sheet";
import { AlignJustify, ArrowRight, Globe } from "lucide-react";
import Link from "next/link";

const ActionButtons = () => {
  return (
    <div>
      <div className="md:hidden">
        <Sheet>
          <SheetTrigger>
            <AlignJustify />
          </SheetTrigger>
          <SheetContent>
            <SheetHeader>
              <SheetDescription>
                <div className="flex flex-col space-y-4 items-start w-full  text-lg text-black mt-10">
                  <Link href="/" className="">
                    Products
                  </Link>
                  <Link href="/contact" className="">
                    Contact Us
                  </Link>
                  <Link href="/" className="">
                    About
                  </Link>
                </div>
              </SheetDescription>
            </SheetHeader>
          </SheetContent>
        </Sheet>
      </div>

      <div
        className="hidden md:flex md:space-x-4 items-center">
        <div className="border-r border-black">
          <div className="mr-4">
            <Globe className="h-6 w-6 text-gray-700" />
          </div>
        </div>
        <Link href={"/"} className={buttonVariants({
          size: 'lg',
          className: 'bg-[#000] text-md rounded-sm '
        })}>
          Back to home <ArrowRight className=" pl-2 h-5 w-5" />
        </Link>

        <div></div>
      </div>
    </div>
  );
};

export default ActionButtons;
