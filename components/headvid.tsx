import React, {useRef, useContext} from 'react'
import ScrollObserver, { ScrollContext } from '../utils/scroll-observer'
import Image from 'next/image'

// Displays a video intron on page load
const Headvid: React.FC = () => {

// Load the refcontainer and set the current value for scrollY to scroll context,
// this wil be updated constant from the scroll observer
    const refContainer = useRef<HTMLDivElement>(null)
    const {scrollY} = useContext(ScrollContext)

// needs to be initialzed before andit can calculate the container height when scrolling down
    let progress = 0
    const { current: elContainer } = refContainer
    if(elContainer) {
        progress = Math.min(1, scrollY / elContainer.clientHeight)
    }

// Content
    return (
        <div ref={refContainer} style={{transform: `translateY(-${progress*20}vh)` }}
        className="min-h-screen flex flex-col items-center justify-center sticky top-0 -z-10 ">

{/* Intro video */}

            <video autoPlay loop muted playsInline className="absolute w-full h-full object-cover " >
                <source src="/assets/video-bg4.mp4" type="video/mp4" />
            </video>

{/* Logo */}

            <div className={`flex-grow-0  pt-10 transition-opacity duration-1000 `} >
                <Image src="/assets/logo.svg" width={328/3} height={314 /3} alt="logo" />
            </div>
            
{/* Text */}

            <div className={`p-12 font-bold z-10 text-white drop-shadow-[0_1px_3px_rgba(0,0,0,0.2)] text-center flex-1 flex items-center justify-center flex-col`} >
                <h1 className="mb-6 text-4xl xl:text-5xl transition-opacity"  >Philipp Eiselt</h1>
                <h2 className="mb-2 text-2xl xl:text-3xl tracking-tight"><span>The Journey in Computer Science</span> <br></br><br></br>
                <span className='text-xl font-light'>Readers sarcasm is advised</span></h2>
            </div>

{/* Points down */}

            <div className={`flex-grow-0 pb-40 md:pb-50 transition-all duration-1000 ` }>
            <Image src="/assets/down.svg" width={125/3} height={125 / 3} alt="logo" />
            </div>

{/* End of content */}
        </div>
    )
}
export default Headvid
