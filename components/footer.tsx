
import React from 'react';




const Footer: React.FC = () => {
    const year = new Date().getFullYear()
    return (
        <section className={'  bg-black text-xl md:text-xl text-orange-50/75'}>
          
            <div className=" mx-auto text-center justify-center items-center flex flex-col-2 space-x-4 p-10">
           
              
            </div>
            <div className=" mx-auto text-center justify-center items-center flex   space-x-4 pb-10   border-black">
                <p className="text-slate-200 text-[0.5em] tracking-tight font-mono">&copy; Copyright {year}, NavigationHazard</p>
            </div>
        </section>
    )
}
export default Footer