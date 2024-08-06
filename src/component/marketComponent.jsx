import { GiShakingHands } from "react-icons/gi";
import { BiSolidMessageAltDots } from "react-icons/bi";
import { LuSettings } from "react-icons/lu";
import { BiSolidDirections } from "react-icons/bi";




  
 const data = [
    {
        id: 1,
        title: "Instant Migration",
        logo : BiSolidDirections,
        description: "You have access to many tools and featuewa whith us to make the migration process as smooth and hassel-free as possible."
    },{
        id: 2,
        title: "Integration",
        logo : LuSettings,
        description: "We collaborate with new partners and devleop integrations continuously. It supports mutual clients'success."
    },{
        id:3,
        title: "Customer support",
        logo : BiSolidMessageAltDots,
        description: "Many organizations recongnize Offer18 as a leader in customer support services."
    },{
        id:4,
        title: "on-Boarding",
        logo : GiShakingHands,
        description: "it is critcal to review technology, improve processes, and train team members during onboarding"
    }
 ]

export default function MarketComponent() {
    return (
        <div className="bg-slate-900/90 text-white flex flex-col items-center justify-center mt-[5rem] w-[95%] rounded-lg">
            <div className="w-[70%] sm:w-[60%] sm:text-5xl text-2xl  font-semibold text-center mt-[5rem] ">Performance Marketing Solutions
                for All Businesses</div>
            <div className="w-[80%] sm:w-[55%] sm:text-lg text-md  text-center mt-[2rem]  mb-[5rem]">
                As performance marketing management software, Offer18 covers various industries that benefit most from this approach. From affiliate networks to agencies and independent businesses, leveraging Offer18 ensures consistent results and ongoing growth for:
            </div>
           
            <div className="w-full grid grid-cols-12 mb-[5rem]">
            {
                data.map((item,index) => (
                    <div key={index} className="col-span-12 sm:col-span-6 flex flex-col items-center justify-center gap-2 mb-[2rem]">
                       <item.logo  className="h-10 w-10"/>
                       <div className="text-xl">{item.title}</div>
                       <div className="w-[85%] sm:w-[50%] text-center">{item.description}</div>
                    </div>
                ))
             }
            </div>
        </div>
    )
}