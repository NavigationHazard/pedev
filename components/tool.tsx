import React, { Children } from "react"

import Link from "next/link"
interface Props {
    children?: React.ReactNode;
    progress: number
}
export const ToolContainer: React.FC<LinkProps> = ({children}) => (
    <div className="grid  gird-cols-1 w-full min-h-screen py-10">
        {children}
    </div>
)
export const ToolBackground: React.FC = () => (
    <div className="grid  sticky  lg:grid-cols-1 gird-cols-1 w-full min-h-screen  top-0">
        <div className="bg-black/90 first-line:h-screen  lg:h-auto lg:min-h-screen px-10  "></div>
        
    </div>
)

export const ToolLeft: React.FC<Props> = ( { children, progress}) => {
    let translateY = Math.max(0, 200 - progress * 3 * 50)
    if( progress > 0.85) translateY = Math.max(-50, -(progress -0.85) * 2 * 50)
    return(
         <div className="flex flex-col items-center justify-center duration-1000 bg-mb bg-center bg-no-repeat lg:h-auto h-[70vh] " 
         style={{transform: `translateY(${translateY})px` }}>
             <div className="leading-10 lg:scale-100 scale-75  "> {children}</div>
            </div>
    )
}

export const ToolRight: React.FC<Props> = ( { children, progress}) => {
    let translateY = Math.max(-50, -(progress - 0.5) * 50)
    
    return(
         <div className="flex flex-1  justify-center lg:items-center lg:h-auto h-[70%] bottom-10  " 
         style={{transform: `translateY(${translateY})px` }}>
             
             <div className="w-full max-w-[50vh] lg:pt-0  px-10 pt-10"> {children}</div>
          
            </div>
    )
}
interface LinkProps {
    href: string
    children?: React.ReactNode;
}
export const ToolLink: React.FC<LinkProps> = ( {href , children}) => (
    <Link href={href}><a target="_blank"  className="underline decoration-1"> {children}</a></Link>
)
