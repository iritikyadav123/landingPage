import { FaQuoteLeft } from "react-icons/fa";
import { IoStar } from "react-icons/io5";
export default function TextCard() {
    return (
        <div className="h-full w-full flex flex-col items-center justify-center gap-4">
                 <FaQuoteLeft className="h-8 w-8"/>
                    <div className="text-gray-900 font-semibold text-xl w-[90%] text-center ">
                        Migrating to Offer18 helped Trance Media to Improve Employee Management
                    </div>
                    <div className="text-sm text-gray-600 w-[90%] item center">
                        Trance Media is an all-in experoenced team. it boad of emprowing its client with customized advertising solution and developmenty based on its customers' vision Recently, we had
                    </div>
                    <div className="flex items-center justify-center gap-2 ">
                        <IoStar className="h-6 w-6 text-orange-300 "/>
                        <IoStar className="h-6 w-6 text-orange-300 "/>
                        <IoStar className="h-6 w-6 text-orange-300 "/>
                        <IoStar className="h-6 w-6 text-orange-300 "/>
                    </div>
                    <button className="border border-gray-900 text-gray-900 hover:text-white text-sm hover:bg-gray-900 rounded-xl p-1">Case Study</button>
        </div>
    )
}