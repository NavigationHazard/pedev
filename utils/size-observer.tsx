
import React, {useCallback, useEffect, useState} from 'react'

// SizeObserver observes the entire page an applies the resize calcualted to the current frame size,
// and ScrollContext. Returns this as SizeContext which then is used for animations

interface ScrollValue{
    innerWidth: number
}

// Return / Export used by animations
export const SizeContext = React.createContext<ScrollValue>({
    innerWidth: 0
})

interface Props{
    children?: React.ReactNode;
}

// Makes sure the page size stays contant while the animation can resize
const SizeObserver: React.FC<Props> = ({children}) => {
    const [innerWidth, setInnerWidth] = useState(0)
    const handleResize = useCallback(() => {
        setInnerWidth(window.innerWidth)
    }, [])
    
// apply the resizing effect
    useEffect(() => {
        handleResize()
        window.addEventListener('resize', handleResize, {passive: true} )
        return() => window.removeEventListener('resize' , handleResize)
    }, [handleResize])

// Return a frame in which sizeobserver watches for resizing to happen
    return (
        <SizeContext.Provider  value={{innerWidth}}>
            {children}
        </SizeContext.Provider>
    )
}

export default SizeObserver
