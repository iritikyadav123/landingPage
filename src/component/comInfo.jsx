import { FaCaretRight } from "react-icons/fa";
export default function ComInfo() {
    return (
        <div className="bg-indigo-950/90 text-white flex items-center sm:justify-around justify-center w-[97%] mt-20 rounded-lg p-10 flex-col sm:flex-row">
            <div className="w-[120%]  sm:w-[50%] flex items-center justify-center " >
              <div className="bg-[url('/bg.webp')] h-[15rem] sm:h-[18rem] sm:w-[70%] rounded-lg w-[100%] bg-center bg-cover flex items-center justify-center">
                    <div className="h-16 w-16 flex items-center justify-center border-4 rounded-full bg-indigo-950 border-indigo-600 animate-ping hover:animate-none">
                        <FaCaretRight  className="h-8 w-8"/>
                    </div>
              </div>

            </div>
            <div className="sm:w-[40%] mt-8 w-[115%]  flex flex-col items-center justify-center gap-5 sm:gap-8">
                <div className="text-3xl sm:text-5xl font-semibold">What Do You Get With Offer18</div>
                <div className="sm:text-lg">
                Your Award-Winning performance marketing solution is designed to track performance advertising with user activity data. Track and manage all the affiliate campaigns, the clicks, conversions, app installations, and the number of generated leads
                </div>
                <div className="sm:text-lg">
                With advanced features like Anti-Fraud, Offer Automation, Link Tester, Smart Offer, and Powerful Offer Sync API, Offer18 ensures you won't receive fake conversions, spam clicks, and malicious activities during the affiliate campaign. Stay on top of the growing affiliate marketing trends, and use Offer18 as your main partner marketing software.
                </div>
            </div>
        </div>
    )
}