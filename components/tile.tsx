// This is the Same Logic as for works

// TODO: This section is now unused, needs to be removed at somepoint as i changed the 
// dynamic content to a static one for the tools page 
// all tools pages can therefore be removed. 

import React, { useRef, useContext } from "react"
import { ScrollContext } from "../utils/scroll-observer"
// Need Props - number of pages
interface WrapperProps {
    numOfPages: number,
    children?: React.ReactNode;
}

interface TileContextValue {
    numOfPages: number
    currentPage: number
    children?: React.ReactNode;
}

// Init currentPage
let currentPage = 0

// export current tile context - how far scrolled / moved
export const TileContext = React.createContext<TileContextValue>({
    numOfPages: 0,
    currentPage: 0,
})

interface Props {
    page: number
    renderContent: (props: { progress: number }) => any
}

/*  Export a tile (similar to skills - offset by scroll percent, and the number of pages)
    and return the current state of scroll state inside the tile.
    e.g. observers the tile content like the scrollobserver and lets the inside scroll
    while the tile it self does not move. */
export const Tile: React.FC<Props> = ({ renderContent , page }) => {
    const { currentPage, numOfPages } = useContext(TileContext)
    const progress = Math.max(0, currentPage - page)
    const refContainer = useRef<HTMLDivElement>(null)
    let opacity = Math.min(1, Math.max(0, progress * 4))

    if (progress > 0.85 && page < numOfPages - 1) {
        opacity = Math.max(0,(1.0-progress)*4 )
    }
 // Return the tile - eg. scrollobserver   
    return (     
        <div ref={refContainer} className="absolute top-0 w-full" 
            style={{pointerEvents: progress <=0 || progress >= 1? 'none' : undefined, opacity}}>
            {renderContent({progress})}
        </div>
    )
}

// display / scale in the currentpage at currentScrolly - Progress inside the tile
export const TileWrapper: React.FC<WrapperProps> = ({children , numOfPages} ) => {
    const { scrollY } = useContext(ScrollContext)
    const refContainer = useRef<HTMLDivElement>(null)
    const { current: elContainer } = refContainer

    if (elContainer) {
        const { clientHeight, offsetTop } = elContainer
        const screenH = window.innerHeight
        const halfH = screenH / 2
        const percentY = Math.min(clientHeight + halfH, Math.max(-screenH, scrollY - offsetTop) + halfH) / clientHeight
        currentPage = percentY * numOfPages
    }
// Return the wrapper with the height adjusted by the amount of pages defined
    return (
        <TileContext.Provider value={{ numOfPages, currentPage }}>
            <div ref={refContainer} className='relative bg-black text-amber-200' 
                style={{height: numOfPages * 100 + 'vh'}}>
                {children}
            </div>
        </TileContext.Provider>
    )
}
// need background that can wrap
export const TileBackground: React.FC<WrapperProps> = ({ children }) => (
    <div className="absolute h-full w-full">{children}</div>
)

// needs to be sticky to stick
export const TileContent: React.FC<WrapperProps> = ({ children }) => (
    <div className="sticky top-0 h-screen overflow-hidden ">                       
    {children}</div>
    
)


