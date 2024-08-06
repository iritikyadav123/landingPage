

export default function FrameComponent({pic}) {
    return (
        <div className="bg-orange-400 rounded-xl h-[20rem] w-[55%] flex items-end justify-center">
            <img src={`/hover${pic}.webp` }className="w-[100%] h-[140%]"/>
        </div>
    )
}