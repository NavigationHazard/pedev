import React, {useCallback, useEffect, useState} from 'react'


// ScrollObserver observes the entire page an applies the resize calcualted to the current frame size,
// and scrollValue. Returns this as ScrollContext which then is used for animations

interface ScrollValue {
    scrollY: number
    children?: React.ReactNode;
}

export const ScrollContext = React.createContext<ScrollValue>({
    scrollY: 0
})

// Makes sure the page size stays contant while the animation can resize
const ScrollObserver: React.FC<ScrollValue> = ({children}) => {
    const [scrollY, setScrollY] = useState(0)
    const handleScroll = useCallback(() => {
        setScrollY(window.scrollY)
    }, [])

// apply the resizing effect
    useEffect(() => {
        document.addEventListener('scroll', handleScroll, {passive: true})
        return ()  => document.removeEventListener('scroll' , handleScroll)},
        [handleScroll])

// Return a frame in which scroll observer watches for scrolling to happen
        return (
            <ScrollContext.Provider value={{scrollY}}>
                {children}
            </ScrollContext.Provider>
        )
}
export default ScrollObserver
