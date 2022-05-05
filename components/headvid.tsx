
import React, {useRef, useContext} from 'react'
import { ScrollContext } from '../utils/scroll-observer'
import ScrollObserver from '../utils/scroll-observer'
import Image from 'next/image'





const Headvid: React.FC = () => {
  
    const refContainer = useRef<HTMLDivElement>(null)
    const {scrollY} = useContext(ScrollContext)
    let progress = 0
    const { current: elContainer } = refContainer
    if(elContainer) {
        progress = Math.min(1, scrollY / elContainer.clientHeight)
    }
  
    return (
        <div ref={refContainer}
             style={{transform: `translateY(-${progress*20}vh)` }}
        className="min-h-screen flex flex-col items-center justify-center sticky top-0 -z-10 ">
                   
                <video autoPlay loop muted playsInline className="absolute w-full h-full object-cover " >
                <source src="/assets/video-bg4.mp4" type="video/mp4" /> 
            </video> 
                <div className={`flex-grow-0  pt-10 transition-opacity duration-1000 `} >
                    <Image src="/assets/logo_up.svg" width={328/3} height={314 / 3} alt="logo" />
                </div>
            <div  className={`p-12 font-bold z-10 text-white drop-shadow-[0_1px_3px_rgba(0,0,0,0.2)] text-center flex-1 flex items-center justify-center flex-col`} >
               
                <h1 className="mb-6 text-4xl xl:text-5xl transition-opacity"  >Philipp Eiselt</h1>
                <h2 className="mb-2 text-2xl xl:text-3xl tracking-tight"><span>The Journey in Computer Science</span> <br></br><br></br><span className='text-xl font-light'>Readers sarcasm is advised</span></h2>
            </div>
            <div className={`flex-grow-0 pb-40 md:pb-50 transition-all duration-1000 ` }>
            <Image src="/assets/down.svg" width={125/3} height={125 / 3} alt="logo" />

                </div>
           </div>
    )
}
export default Headvid