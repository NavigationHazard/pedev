import Image from "next/image"
import React from "react"
import Member from '../components/member'


const Aboutme: React.FC = () => {
    return (

        <section className={`flex flex-col bg-orange-50 py-20 text-3xl md:text-4xl text-stone-600`}>
            <div className="container mx-auto px-11">

{/* Text */}

                <p className=" max-w-6xl mx-auto lg:text-4xl text-4xl tracking-tight " >
                    <strong className="letterspacing-far">Not shipping any of your apps on time, never.</strong> Me, the one man team of one non-graduated engineer has yet to create great user experience or memory safe code in 
                    software or contributions to open source projects. </p>

                <br></br>
                <p className=" max-w-6xl mx-auto lg:text-4xl text-4xl tracking-tight" >
                    To change this, i will share my journey to become a reliable developer and teamplayer.</p>


{/* Image Row as Member */}

                </div>
                    <div className="container mx-auto text-center mt-12 px-11">
                    <Member id="" name=""  socialId="GitHub - NavigationHazard" 
                    link="https://github.com/navigationhazard/"/>
               </div>
        </section>
    )
}
export default Aboutme
