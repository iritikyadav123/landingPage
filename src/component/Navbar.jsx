import Logo from "./Logo";
import { FaCaretDown } from "react-icons/fa";
import { LuMenu } from "react-icons/lu";



export default function Navbar() {
    return (
        <div className="w-full h-20 flex items-center justify-center sticky z-[100] inset-x-0 top-0 border-b border-gray-200 bg-white/75 backdrop-blur-lg transition-all ">
           <div className="flex items-center justify-between xl:justify-evenly w-[95%] xl:w-full">
                <Logo />
          
           <div className="hidden xl:block w-[50%] h-full">
               <div className="flex items-end justify-center w-full h-full font-semibold gap-6">
                   <div className="cursor-pointer flex items-center justify-center">Product & solutions <FaCaretDown /></div>
                   <div className="cursor-pointer flex items-center justify-center">Services <FaCaretDown /></div>
                   <div className="cursor-pointer flex items-center justify-center">Pricing</div>
                   <div className="cursor-pointer flex items-center justify-center">Resources <FaCaretDown /></div>
                   <div className="cursor-pointer flex items-center justify-center">Contact</div>
               </div>
           </div>
           <div className="hidden xl:block">
              <button className={"pl-5 pr-5 border border-gray-900 text-gray-900 font-medium text-md p-2 rounded-lg hover:bg-gray-900 hover:text-white"}>Request free trial</button>
           </div>
             <LuMenu  className="xl:hidden h-6 w-6"/>
           </div>
        </div>
    )
}