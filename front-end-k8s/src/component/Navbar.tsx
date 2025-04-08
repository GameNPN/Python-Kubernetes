import React from 'react'
import Link from 'next/link';

export default function Navbar() {
    const city = ["American", "British", "Canadian", "Italian", "French", "Japanese", "Thailand",]
    return (
        <div className="drawer sticky top-0 z-50">
            <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col w-full">
                <div className="w-full navbar bg-[#5F6F52]">
                    <div className="flex-none lg:hidden">
                        <label htmlFor="my-drawer-3" aria-label="open sidebar" className="btn btn-square btn-ghost">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                            </svg>
                        </label>
                    </div>
                    <div className="flex-1 mx-2 gap-4">
                        <Link href="/" className="btn btn-ghost text-3xl text-[#FEFAE0]">Eating_Kan</Link>
                    </div>

                    <div className="flex-none hidden lg:block">
                        <ul className="menu menu-horizontal gap-2">
                            {city.map((contry) => (
                                <Link key={contry} href={contry} className="btn btn-outline btn-[#555843] text-[#FEFAE0]">
                                    {contry}
                                </Link>
                            ))}
                            RandomFood
                        </ul>
                    </div>
                </div>
            </div>
            <div className="drawer-side">
                <label htmlFor="my-drawer-3" aria-label="close sidebar" className="drawer-overlay"></label>
                <ul className="menu p-4 w-80 min-h-screen bg-[#5F6F52] gap-2">
                    RandomFood
                </ul>
            </div>
        </div>
    )
}
