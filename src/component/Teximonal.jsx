
import TextCard from "./TeximonialCard";

export default function Teximonal() {
    return (
        <div className="w-full flex flex-col items-center justify-center mt-[5rem]">
             <div className="w-[70%] sm:w-[60%] sm:text-5xl text-2xl text-gray-900 font-semibold text-center mt-[5rem]">Testimonials</div>
           <div className="w-[80%] sm:w-[55%] sm:text-lg text-md text-gray-800 text-center mt-[2rem]">
           Organizations keep migrating to Offer18 and state why they looked into other alternatives.
           </div>

            <div className="snap-x mx-auto snap-mandatory h-[30rem] flex  overflow-x-scroll justify-evenly gap-4 w-screen  ml-5 lg:ml-2 no-scrollbar mb-[5rem] mt-[5rem] ">
                  <div className="snap-start   w-80  flex-shrink-0 h-full rounded-xl  text-8xl   border-2  ">
                    <TextCard />
                     
                  </div>
                  <div className="snap-start   w-80  flex-shrink-0 h-full rounded-xl  text-8xl   border-2  ">
                    <TextCard />
                     
                  </div>
                  <div className="snap-start   w-80  flex-shrink-0 h-full rounded-xl  text-8xl   border-2  ">
                    <TextCard />
                     
                  </div>
                  <div className="snap-start   w-80  flex-shrink-0 h-full rounded-xl  text-8xl   border-2  ">
                    <TextCard />
                     
                  </div>
                  <div className="snap-start   w-80  flex-shrink-0 h-full rounded-xl  text-8xl   border-2  ">
                    <TextCard />
                     
                  </div>
                  <div className="snap-start   w-80  flex-shrink-0 h-full rounded-xl  text-8xl   border-2  ">
                    <TextCard />
                     
                  </div>
                  
            </div>
        </div>
    )
}