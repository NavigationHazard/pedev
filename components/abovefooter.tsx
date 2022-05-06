import React from "react"

const AboveFooter: React.FC = () => {
    return (
        <section className={`flex flex-col bg-orange-50 pb-10 text-3xl md:text-4xl text-stone-600`}>
        <div className="min-h-screen max-w-5xl mx-auto lg:px-20 px-10 lg:py-36   flex flex-col justify-center items-center lg:text-7xl md:text-6xl text-4xl  tracking-tight font-semibold">

{/* Text */}

            <span className="text-stone-600/95 trailing-tight leading-tight " >
            &quot;You never done learning!&quot;  This true not only for CS but for everything else in life.  The tools that I use most frequently help me to optimize my workflow.</span>

        </div>
        </section>
    )
}
export default AboveFooter
