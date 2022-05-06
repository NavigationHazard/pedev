import Image from "next/image"
import React from "react"

// Define Props
interface Props {
    id: string
    name: string
    socialId: string
    link: string
}

// Display Member Image with given link, socialid, memberid and the name given.
const Member: React.FC<Props> = ({ id, name, socialId, link}) => (
    <div className="drop-shadow-[0_0px_7px_rgba(0,0,0,0.2)] lg:max-w-7xl sm:max-hxl mt-10 grid grid-cols-1 lg:gap-20 gap-6">
         
        <Image objectFit="contain"src={`/assets/me/me_13.png`} alt={name} width={400} height={300}  /> 
        <div className="xl:text-2xl text-xl">{name}</div>
    
    </div>
)
export default Member