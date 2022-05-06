// Scrolls amount of pages inside a sicky container - see tools/ tile for more

import React, { Children } from "react"
import Link from "next/link"

interface Props {
    children?: React.ReactNode;
    progress: number
}

// Container - see tiles for further logic
export const WorkContainer: React.FC<LinkProps> = ({children}) => (
    <div className="grid lg:grid-cols-2 gird-cols-1 w-full min-h-screen pb-10">
        {children}
    </div>
)

// Double div for faded emerald colors 
export const WorkBackground: React.FC = () => (
    <div className="grid sticky lg:grid-cols-2 gird-cols-1 w-full min-h-screen top-0">
        <div className="bg-orange-50 h-[30vh] lg:h-auto"></div>
        <div className="bg-emerald-200/25 h-[70vh] lg:min-h-screen"></div>
    </div>
)

// Left side of the works pane

export const WorkLeft: React.FC<Props> = ( { children, progress}) => {
    let translateY = Math.max(0, 200 - progress * 3 * 50)
    if( progress > 0.85) translateY = Math.max(-50, -(progress -0.85) * 2 * 50)
    return(
         <div className="flex flex-col items-center justify-center duration-1000 lg:text-3xl text-3xl  lg:h-auto h-[30vh]" 
            style={{transform: `translateY(${translateY})px` }}>
            <div className="leading-10 p-10"> {children}</div>
        </div>
    )
}

// Right side of the Works pane
export const WorkRight: React.FC<Props> = ( { children, progress}) => {
    
    let translateY = Math.max(-50, -(progress - 0.5) * 50)
    
    return(
         <div className="flex flex-1  justify-center lg:items-center  lg:max-h-screen max-h-[50vh]" 
            style={{transform: `translateY(${translateY})px` }}>
             <div className="w-full max-w-md lg:pt-10 pt-0 px-10 md:px-0"> 
                {children}
             </div>
        </div>
    )
}

interface LinkProps {
    href: string
    children?: React.ReactNode;
}

export const WorkLink: React.FC<LinkProps> = ( {href , children}) => (
    <Link href={href}>
        <a target="_blank"  className="underline underline-offset-8 decoration-3"> 
        {children}</a>
    </Link>
)
