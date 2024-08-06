import { useState } from "react";
import { FaChevronDown } from "react-icons/fa";
  const data =  [
    {
        id : 1,
        que : "What is partner marketing software?",
        ans : "Partner marketing software facilitates collaboration between businesses and their partners or affiliates. It helps manage and optimize marketing campaigns, track performance, and streamline partnerships."
    },
    {
        id : 2,
        que : "Why do I need Offer18 for my business?",
        ans : "Offer18 provides a comprehensive platform for managing partner marketing campaigns. It helps you optimize your affiliate programs, track performance, and maximize ROI. With features like real-time reporting and analytics, it empowers businesses to make informed decisions and boost their marketing efforts."
    },
    {
        id : 3,
        que : "Can I integrate Offer18 with my business domain?",
        ans : "Yes, Offer18 offers integration capabilities, allowing seamless integration with your business domain. This ensures a cohesive brand experience for your users and partners."
    },
    {
        id : 4,
        que : "Can I migrate to Offer18 without losing my data?",
        ans : "Offer18 understands the importance of data migration. You can transition to Offer18 without losing your valuable data. The platform likely provides support and guidance throughout the migration process to ensure a smooth transition."
    },
    {
        id : 5,
        que : "Is my data safe with Offer18?",
        ans : "Offer18 prioritizes the security of your data. We likely employ industry-standard security measures, such as encryption and secure protocols, to safeguard your information. You can trust that your data is handled with care and confidentiality."
    },
    {
        id : 6,
        que : "Is performance marketing similar to digital marketing?",
        ans : "Performance marketing is a subset of digital marketing focused on campaigns where advertisers pay based on specific actions, such as clicks, leads, or sales. Unlike general digital marketing, which may include broader strategies like brand awareness, performance marketing aims directly at measurable outcomes, ensuring precise ROI tracking and optimization."
    },
    {
        id : 7,
        que : "What are performance marketing management tools?",
        ans : "Performance marketing management tools are software solutions designed to help advertisers, affiliates, and ad networks track, analyze, and optimize their marketing campaigns. These tools offer features such as real-time analytics, conversion tracking, fraud detection, and campaign optimization, enabling users to maximize their return on investment and improve campaign performance."
    },
    {
        id : 8,
        que : "Are affiliate marketing and performance marketing the same?",
        ans : "Affiliate marketing is a type of performance marketing where affiliates earn commissions by promoting a company's products or services and driving specific actions, like sales or leads. While affiliate marketing focuses specifically on partnerships with individual marketers, performance marketing encompasses a broader range of strategies and channels aimed at achieving measurable results."
    },
    {
        id : 9,
        que : "How does performance marketing work?",
        ans : "Performance marketing works by setting clear, measurable goals, such as clicks, leads, or sales, and paying for these specific actions. Advertisers create targeted campaigns, and performance is tracked in real time using sophisticated tracking tools. This data-driven approach allows for continuous optimization, ensuring that marketing efforts yield the highest possible return on investment."
    }
  ]

export default function Question() {
    const [show, setShow] = useState(0);
    return (
        <div className="w-full bg-gray-200 flex flex-col items-center justify-between pb-[15rem]">
             <div className="w-[80%] text-4xl font-bold text-gray-900 mt-[5rem] mb-[3rem]">Frequently Asked Questions</div>
             
                 {
                    data.map((item,index) => (
                        <div onMouseEnter={()=>{setShow(index)}} className="w-[80%] flex items-center justify-between  hover:bg-gray-100 rounded-lg p-4">
                            <div key={index} className="w-[80%]">
                            <div className="font-bold text-gray-900 text-xl cursor-pointer">{item.que}</div>
                             {
                               (index == show) && <div className=" ">{item.ans}</div>
                                 }
                             
                            </div>
                            <FaChevronDown className="h-6 w-6 hover:animate-spin"/>
                        </div>
                    ))
                 }
             
        </div>
    )
}