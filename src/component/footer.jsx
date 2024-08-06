import Logo from "./Logo";
import { FaLinkedinIn } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { FaInstagram } from "react-icons/fa";

export default function Footer() {
    return (
        <div className="w-full flex flex-col items-center justify-center bg-zinc-950/90 text-gray-50">
            <div className="grid grid-cols-10 mt-[5rem] justify-evenly w-[90%]  pb-8">
                <div className="col-span-5 lg:col-span-2 mt-[5rem]">
                     <div className="font-semibold text-lg sm:text-xl  mb-[1rem] text-white">Company</div>
                     <div>About</div>
                     <div className="pt-2">Pricing</div>
                     <div className="pt-2">Blogs & Jornals</div>
                     <div className="pt-2">Contact</div>
                </div>
                <div className="col-span-5 lg:col-span-2 mt-[5rem]">
                     <div className="font-semibold text-lg sm:text-xl  mb-[1rem] text-white">Product</div>
                     <div>Tracking & Analytic</div>
                     <div className="pt-2">Automation</div>
                     <div className="pt-2">Anti-Found</div>
                     <div className="pt-2">Personalized</div>
                </div>
                <div className="col-span-5 lg:col-span-2 mt-[5rem]">
                     <div className="font-semibold text-lg sm:text-xl  mb-[1rem] text-white">Services</div>
                     <div>On Boarding</div>
                     <div className="pt-2">Customer support</div>
                     <div className="pt-2">Migration</div>
                     <div className="pt-2">Integration</div>
                </div>
                <div className="col-span-5 lg:col-span-2 mt-[5rem]">
                     <div className="font-semibold text-lg sm:text-xl  mb-[1rem] text-white">Compare</div>
                     <div>Affise vs Offer18</div>
                     <div className="pt-2">Cake vs Offer 18</div>
                     <div className="pt-2">HasOffer vs Offer18</div>
                     <div className="pt-2">Volumn vs Offer18</div>
                </div>
                <div className="col-span-5 lg:col-span-2 mt-[5rem]">
                     <div className="font-semibold text-lg sm:text-xl  mb-[1rem] text-white">Recource</div>
                     <div>Case studies</div>
                     <div className="pt-2">Knowlede base</div>
                     <div className="pt-2">API Documantation</div>
                     <div className="pt-2">Abuse Report</div>
                </div>

            </div>
            <div className="flex flex-col sm:flex-row items-center justify-start w-full border-b border-gray-100 pb-8">
                 <div className="w-[40%] ml-8">
                    <img src="/offer18.svg" className="h-32 w-32"/>
                 </div>
                 <div className=" flex items-center justify-center ml-8">
                    <FaInstagram className="h-8 w-8"/>
                    <FaFacebookSquare className="h-8 w-8 ml-5"/>
                    <BsTwitterX className="h-8 w-8 ml-5"/>
                    <FaLinkedinIn className="h-8 w-8 ml-5"/>
                 </div>
            </div>
            <div className="grid grid-cols-12 w-full ml-20 mt-[2rem]">
                 <div className="col-span-3 sm:col-span-1 mt-[1rem]">English</div>
                 <div className="col-span-3 sm:col-span-1 mt-[1rem]">中国人</div>
                 <div className="col-span-3 sm:col-span-1 mt-[1rem]">русский</div>
                 <div className="col-span-3 sm:col-span-1 mt-[1rem]">عربي</div>
                 <div className="col-span-3 sm:col-span-1 mt-[1rem]">Deutsch</div>
                 <div className="col-span-3 sm:col-span-1 mt-[1rem]">español</div>
            </div>
            <div className="w-[90%] flex flex-col md:flex-row items-center justify-between mt-[2rem] mb-[2rem]">
                <div className="w-[30%]">© 2024 Offer18 All Rights Reserved.</div>
                <div className="text-gray-400 flex items-center justify-evenly w-[70%]">
                    <div>Terms and Conditions</div>
                    <div>Privacy Policy</div>
                    <div>Cookie Policy</div>
                    <div>User Agreement</div>
                    <div>GDPR</div>
                    <div>CCPA</div>
                </div>
            </div>
        </div>
    )
}