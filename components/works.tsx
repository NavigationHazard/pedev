import React from "react"
import { TileBackground, TileContent, TileWrapper, Tile } from "./tile"
import { WorkBackground, WorkContainer, WorkLeft, WorkLink, WorkRight } from "./work"
import Image from "next/image"

const Works = () => (   
<TileWrapper numOfPages={3}>
    <TileBackground numOfPages={0}><WorkBackground/></TileBackground>
        <TileContent numOfPages={0}>
        <Tile page={0} renderContent={({ progress }) => (
        <WorkContainer href={""}>

            <WorkLeft progress={progress} >
                <div className="text-emerald-700/25">Build this website</div><div className="md:text-5xl pb-10 text-3xl font font-semibold text-emerald-700/50 trailing-tight" >
                    <WorkLink href="https://github.com/NavigationHazard/nav-website">PEDEV.org</WorkLink></div>
                <p className="text-stone-700/50 lg:text-3xl  text-xs leading-tight" > 
                C++ and Computer Architecture is my most favorite field in CS, but my course will also cover web development. For my first training and in order to have a site to present my path I create this website.  </p>
            </WorkLeft>

            <WorkRight progress={progress}>
                <Image src={`/assets/works/phone_1.svg`} alt="first project" layout="responsive" width={440} height={620}/>
            </WorkRight>

        </WorkContainer>
        )}></Tile>
        <Tile page={1} renderContent={({ progress }) => (
        <WorkContainer href={""}>
            <WorkLeft progress={progress}>
                <div className="text-emerald-700/25">Contribution to</div><div className="md:text-5xl pb-10 text-3xl font font-semibold text-emerald-700/50 trailing-tight" >
                    <WorkLink href="https://github.com/NavigationHazard/btop">Open Source</WorkLink></div>
                <p className="text-stone-700/50 lg:text-3xl text-xs leading-tight " > 
                Learning to read legacy code and find a way through projects, is yet the best advice i have recieved for learning more about development and software architecture. </p>
            </WorkLeft>

            <WorkRight progress={progress}>
                <Image src={`/assets/works/phone_2.svg`} alt="first project" layout="responsive" width={440} height={620}/>
            </WorkRight>

        </WorkContainer>
        )}></Tile>

        <Tile page={2} renderContent={({ progress }) => (
        <WorkContainer href={""}>

            <WorkLeft progress={progress}>
                <div className="text-emerald-700/25">Beginning of Study </div><div className="md:text-5xl pb-10 text-3xl font font-semibold text-emerald-700/50 trailing-tight" >
                    <WorkLink href="https://www.iu.de/bachelor/computer-science/" >Computer Science</WorkLink></div>
                <p className="text-stone-700/50 lg:text-3xl text-xs leading-tight " > 
                Being interested in Computers and a thrive to know how things function on a lower level, I decided enlist at IU.org for studying CS in 2021. </p>
            </WorkLeft>

            <WorkRight progress={progress}>
                <Image src={`/assets/works/phone_4.svg`} alt="first project" layout="responsive" width={440} height={620}/>
            </WorkRight>

        </WorkContainer>
        )}></Tile>
    </TileContent>
</TileWrapper>
)
export default Works