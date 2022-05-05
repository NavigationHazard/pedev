import React from "react"
import { TileBackground, TileContent, TileWrapper, TileTool } from "./tiletool"
import { ToolBackground, ToolContainer, ToolLeft, ToolLink, ToolRight } from "./tool"
import Image from "next/image"


const Tools = () => (
    
    <TileWrapper numOfPages={1}>
        <TileBackground numOfPages={0}><ToolBackground/></TileBackground>
            <TileContent numOfPages={0}>
            <TileTool page={0}
            renderContent={({ progress }) => (
                <ToolContainer href={""}>
                    <ToolLeft progress={progress} > 
               
                        <div className="justify-center w-fdivl items-center flex  flex-nowrap pb-5 ">
                        <Image src={`/assets/tools/cpp.svg`} alt="cpp" width={100} height={90}/> 
                        <span className="px-5"></span>
                        <Image src={`/assets/tools/llvm.png`} alt="llvm"   width={100} height={90}/></div>                   
                        <div className="justify-center w-fdivl items-center flex flex-nowrap pb-5">
                        <Image src={`/assets/tools/java.svg`} alt="java" width={90} height={90}/>  
                        <span className="px-5"></span>
                        <Image src={`/assets/tools/mysql.svg`} alt="mysql" width={150} height={90}/></div>
                        <div className="justify-center w-fdivl items-center flex flex-nowrap pb-5">
                        <Image src={`/assets/tools/git.png`} alt="git" width={200} height={90}/>
                        <span className="px-5"></span>
                        <Image src={`/assets/tools/linux.svg`} alt="linux"   width={90} height={90}/></div>
                        <div className="justify-center w-fdivl items-center flex flex-nowrap ">
                        <Image src={`/assets/tools/nextjs.svg`} alt="nextjs" width={90} height={90}/>
                        <span className="px-5"></span>
                        <Image src={`/assets/tools/tailwind.svg`} alt="tailwind"   width={150} height={90}/></div>
                  </ToolLeft>
                   <ToolRight progress={progress} >
                    
                    <span className="lg:text-5xl text-xl font-medium text-white/95 trailing-tight leading-tight " >
                    <span>
                    `&quot;`You never done learning!`&quot;`  This true not only for CS but for everything else in life.  The tools that I use most frequently help me to optimize my workflow.</span>              
                    </span>
                    </ToolRight>  
                    

                    </ToolContainer>
            )}></TileTool>
         
           
        
        </TileContent>
    
    </TileWrapper>
)


export default Tools