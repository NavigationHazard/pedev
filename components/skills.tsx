import React, { useRef, useContext, useCallback } from 'react'
import s from '../styles/skills.module.css'
import { ScrollContext } from "../utils/scroll-observer"
let commits = 12
const opacityForBlock = (sectionProgress: number, blockNo: number) => {
    const progress = sectionProgress - blockNo
    if (progress >= 0 && progress < 1) return 1
    return 0.2
}
const Skills: React.FC = () => {
    const { scrollY } = useContext(ScrollContext)
    const refContainer = useRef<HTMLDivElement>(null)
    const numOfPages = 3
    let progress = 0
    const { current: elContainer } = refContainer
    if (elContainer) {
        const { clientHeight, offsetTop } = elContainer
        const screenH = window.innerHeight
        const halfH = screenH / 2
        const percentY = Math.min(clientHeight + halfH,
            Math.max(-screenH, scrollY - offsetTop) + halfH) / clientHeight
        progress = Math.min(numOfPages - 0.5, Math.max(0.5, percentY * numOfPages))
    }

    return <div ref={refContainer} className=" bg-orange-50  text-stone-600/50">
        <div className="min-h-screen max-w-5xl mx-auto lg:px-20 px-10 lg:py-36 md:py-28 pt-24 flex flex-col justify-center items-center lg:text-7xl md:text-6xl text-4xl  tracking-tight font-semibold">
            <div className="leading-[1.15]">
                <div className={s.skillText} style={{
                    opacity: opacityForBlock(progress, 0)
                }}>Learning new tools and techniques daily.</div>
                <span className={`${s.skillText}  text-stone-400/75 inline-block after:content-['_']`} style={{
                    opacity: opacityForBlock(progress, 1)
                }}>Until now, I&apos;ve contributed {commits} commits to various open source projects. </span>
                <span className={`${s.skillText} text-emerald-700/25 inline-block`} style={{
                    opacity: opacityForBlock(progress, 2)
                }}>Studying <strong>Computer Science</strong> next to my job helps to gain additional fundamental knowlege in the field. </span>
            </div>
        </div>
    </div>



}
export default Skills