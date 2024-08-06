import Adv1 from "./component/adv1";
import ComInfo from "./component/comInfo";
import HoverCom from "./component/HoverCom";
import MarketComponent from "./component/marketComponent";
import Navbar from "./component/Navbar";
import { FaCaretRight } from "react-icons/fa";
import { BiNetworkChart } from "react-icons/bi";
import { TfiShoppingCart } from "react-icons/tfi";
import { BsBuildingUp } from "react-icons/bs";
import Teximonal from "./component/Teximonal";
import Footer from "./component/footer";
import Question from "./component/Question";
import { FaCheck } from "react-icons/fa";

const data1 = [
   {
      id : 1,
      Logo : BiNetworkChart,
      title: "Affiliate Networks",
      description: "Tracking and measuring business performance and taking the affiliate network process to the next level with one platform."

   },
   {
      id : 1,
      Logo : BsBuildingUp,
      title: "Agencies",
      description: "Our platform makes it easy to collaborate with direct publishers & the Rapid integration format helps agencies to integrate entirely with their advertisers."

   },
   {
      id : 2,
      Logo : TfiShoppingCart,
      title: "Ecommerce",
      description: "Gather and analyze data from all areas that affect your online store performance and use it to discover consumer behavior to Improve sales outcomes."

   }
]

export default function App() {
  return (
    <div className="flex flex-col items-center justify-center bg-gray-100">
      <Navbar />
       <div className="flex  flex-col sm:flex-row items-center justify-center h-auto sm:w-[90%]">
       <Adv1 />
          <div className="w-full sm:w-[50%] flex flex-col items-start gap-7 ml-5">
              <div className="bg-yellow-500 rounded-xl xl:max-w-[50%] font-semibold mt-5 p-1">Unify Your Affiliate Activities with Offer18’s</div>
              <div className="text-4xl  sm:text-7xl font-bold w-[80%]">
              Performance Marketing Platform
              </div>
              <div className="text-gray-700 text-md w-[80%]">
              Designed to help affiliates, advertisers, and ad networks better track, optimize, and measure the performance of their networks. Our affiliate performance marketing software provides the ultimate tools for success.
              </div>
              <div className="flex flex-col xl:flex-row gap-5 xl:gap-1 items-center justify-start w-full">
                  <button className="bg-indigo-950 border-4 w-[90%]  border-indigo-700 rounded-lg text-white p-3 pl-8 pr-8 hover:-translate-y-1 hover:shadow-xl shadow-gray-400">Plans & Pricing</button>
                  <button className="flex mr-5 w-[90%] items-center justify-center border-2 border-indigo-950 hover:bg-indigo-950 rounded-xl p-3 pl-8 pr-8 ml-5 hover:text-white"><FaCaretRight className="h-8 w-8 font-semibold hover:text-white"/> Watch Demo</button>
              </div>
              <div className="flex items-center justify-evenly w-[85%] gap-2">
                 <img className="h-24 w-24" src="prz1.svg"/>
                 <img className="h-24 w-24" src="prz2.svg"/>
                 <img className="h-24 w-24" src="prz3.svg"/>
                 <img className="h-24 w-24" src="prz1.svg"/>
              </div>
          </div>
       </div>
       <div className="h-auto w-[95%]">
        <div>Trusted by 800+ Companies worldwide</div>
          <div className="flex items-center justify-evenly mt-5">
             
                    <img className="h-24 w-24" src="/off1.webp" />
                    <img className="h-24 w-24" src="/off.webp" />
                    <img className="h-24 w-24" src="/off2.webp" />
                    <img className="h-24 w-24" src="/off1.webp" />
                    <img className="hidden xl:block h-24 w-24" src="/off2.webp" />
                    <img className="hidden xl:block h-24 w-24" src="/off1.webp" />
                    <img className="hidden xl:block h-24 w-24" src="/off2.webp" />
                    <img className="hidden xl:block h-24 w-24" src="/off.webp" />
                    <img className="hidden xl:block h-24 w-24" src="/off1.webp" />
                    <img className="hidden xl:block h-24 w-24" src="/off2.webp" />
                    <img className="hidden xl:block h-24 w-24" src="/off.webp" />
                    <img className="hidden xl:block h-24 w-24" src="/off1.webp" />
             <div>
             </div>
          </div>

       </div>
       <ComInfo />
       <HoverCom />
       
           <div className="w-[70%] sm:w-[60%] sm:text-5xl text-2xl text-gray-900 font-semibold text-center mt-[5rem]">Performance Marketing Solutions
           for All Businesses</div>
           <div className="w-[80%] sm:w-[55%] sm:text-lg text-md text-gray-800 text-center mt-[3rem]">
           As performance marketing management software, Offer18 covers various industries that benefit most from this approach. From affiliate networks to agencies and independent businesses, leveraging Offer18 ensures consistent results and ongoing growth for:
           </div>
           <div className="flex flex-col sm:flex-row items-center justify-cente w-[90%] mb-5 mt-5">
                { data1.map((item,index) => (
                    <div key={index} className="m-5 shadow-xl shadow-gray-300 bg-gray-200 flex items-center justify-center flex-col p-5 gap-5 rounded-xl sm:w-[33%] h-72">
                          <div className="flex items-center justify-evenly w-[80%] text-gray-900 mb-5">
                             <item.Logo  className="h-8 w-9 "/>
                             <div className="text-2xl font-semibold">{item.title}</div>
                        </div>
                        <div className="w-[80%] text-gray-700 font-semibold">
                             {item.description}
                            </div>
                        </div>
                 ))}
            </div>
           <MarketComponent />
          <Teximonal />
          
          <div className="relative w-full h-80 ">
          <Question />
          <div className="bg-gray-100 w-[90%] h-60 rounded-xl absolute mt-[-40%] sm:mt-[-20%] md:mt-[-14%] lg:mt-[-12%] left-[5%] flex items-center flex-col sm:flex-row ">
            <div className="flex items-center justify-start sm:w-[60%] flex-col gap-5">
                 <div className="md:text-4xl text-2xl font-semibold text-gray-900 ">Start your 10 days free trial</div>
                 <div className="flex items-start justify-center flex-col  gap-4 sm:ml-5 mb-5">
                    <div className="text-gray-500 flex items-center justify-center gap-2 font-semibold"> <div className="h-4 w-4 rounded-full border-2 flex items-center justify-center border-gray-400"><FaCheck className="h-2 w-2"/></div>Trusted by 800+ Companies</div>
                    <div className="text-gray-500 flex items-center justify-center gap-2 font-semibold"> <div className="h-4 w-4 rounded-full border-2 flex items-center justify-center border-gray-400"><FaCheck className="h-2 w-2"/></div>No credit card required</div>
                    <div className="text-gray-500 flex items-center justify-center gap-2 font-semibold"> <div className="h-4 w-4 rounded-full border-2 flex items-center justify-center border-gray-400"><FaCheck className="h-2 w-2"/></div>Support 24/7</div>
                 </div>
                 
            </div>
            <button className="bg-indigo-950 border-4 w-[70%] sm:w-[40%] lg:w-[20%] md:w-[30%]  border-indigo-700 rounded-lg text-white p-3 pl-8 pr-8 hover:-translate-y-1 hover:shadow-xl shadow-gray-400">Plans & Pricing</button>
          </div>
          <Footer />
          </div>
          
    </div>
  )
}