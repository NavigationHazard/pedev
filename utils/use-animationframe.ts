import { useCallback, useRef, useEffect} from "react"

// Creates a Frame , request the frame to animate and returns the callback
const useAnimationFrame = (enabled: boolean, callback: () => void) => {

// define return requestRef and return a animation frame
    const requestRef = useRef<ReturnType<typeof requestAnimationFrame>>()

// animate the callback
    const animate = useCallback(() => {
        callback()

// request the current state of the frame
        requestRef.current = requestAnimationFrame(animate)
    }, [callback])

// apply the effect to the current frame in the current state
    useEffect(() => {
        if(enabled) {
            requestRef.current = requestAnimationFrame(animate)
            return() => {
                if (requestRef.current) {
                    return cancelAnimationFrame(requestRef.current)
                }
            }
        }
    }, [enabled, animate])

}
export default useAnimationFrame
