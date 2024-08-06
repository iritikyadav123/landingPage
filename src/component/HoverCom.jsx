import { useState } from "react";
import FrameComponent from "./FrameComponent";

const compoData = [
    {
        id: 1,
        title: "Tracking & Analytic",
        description : "Track beyond geographical analytic to include multiple partners and language Ensure your affiliate campaign reaches out to the right audience while improving ROL."
    },
        {
            id: 2,
            title: "Anti-fund Mechanism",
            description : "Integrated anti-fraund features detect and prevent malicious traffic and clicks, ensuring you get the most out of your performance advertising Embrance our affiliate marketing sosftware and never let fraud go unnoticed."
        },{
                id: 3,
                title: "Automation",
                description : "offer 18 countinously develops and improves the automated capabilities of the performance marketing software, making it a true partner in your affiliate and performance marketiong managment while maintaing the cost"
            
        },{
            id: 4,
            title: "Whitelable",
            description : "Mange your affiliate network effectively, but also offer a white-label soulution to your parners that matches their ongoing performance marketing efforts."
        }
    
]


export default function HoverCom() {
    const [hoveredId, setHoveredId] = useState(1);
    
    return (
        <div className="bg-gray-200 w-full mt-[5rem] flex flex-col items-center justify-center gap-8 pb-16 sm:pb-24">
              <div className=" flex flex-col items-center justify-center mt-[5rem] gap-5">
                  <div className="w-[70%] sm:w-[60%] sm:text-5xl text-2xl text-gray-900 font-semibold text-center">Achieve Better Results with our Optimized Features</div>
                  <div className="w-[80%] sm:w-[55%] sm:text-lg text-md text-gray-800 text-center">Leverage AI-driven insights to optimize your performance and partner marketing efforts. Maintain a competitive edge with the most up-to-date features in the industry. Streamline your marketing operations with features designed to boost efficiency and effectiveness using an extensive campaign performance dashboard.</div>
              </div>
              <div className="bg-gray-100 w-[95%] flex items-center justify-evenly rounded-xl">
                <div className="flex flex-col items-center justify-center w-[90%] sm:w-[50%]">
                {compoData.map((item, index) => (
                     <div key={index} onMouseEnter={() => setHoveredId(item.id)} className="m-5 cursor-pointer hover:bg-gray-200/40 rounded-xl p-5">
                          <div className="text-2xl font-semibold">{item.title}</div>
                          <div className="text-gray-700">{item.description}</div>
                      </div>
                )) }
                </div>
               
                <div className="w-[50%] hidden sm:block ">
                    <div className="flex items-center justify-center w-full">
                    <FrameComponent pic={hoveredId}/>
                    </div>
                </div>

              </div>

        </div>
    )
}