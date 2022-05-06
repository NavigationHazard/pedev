
import React from 'react';
import Image from 'next/image';

const Footer: React.FC = () => {
    const year = new Date().getFullYear()
    return (
        <section className={`bg-black text-xl md:text-xl text-orange-50/75`}>

{/* Text */}

            <div className=" mx-auto text-center bg-emerald-200/25 justify-center items-center flex flex-col-2 space-x-4 p-10">
                <a href="https://github.com/NavigationHazard/" target='_blank' rel="noreferrer" >
                  <Image src='/assets/GitHub-Mark-Light-64px.png' alt='github' height={64} width={64} />
                </a>
            </div>
            <div className=" mx-auto text-center bg-emerald-200/25 justify-center items-center flex   space-x-4 pb-10   border-black">
                <p className="text-slate-200 text-[0.5em] tracking-tight font-mono">&copy; Copyright {year}, NavigationHazard</p>
            </div>

        </section>
    )
}
export default Footer
