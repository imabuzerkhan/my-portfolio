"use client";

import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from "next/legacy/image";
import { FaGithub } from 'react-icons/fa'; 
import navigation from '@/data';

const Navbar = () => {
    const [state, setState] = useState(false);

   

    useEffect(() => {
        document.onclick = (e) => {
            const target = e.target;
            if (!target.closest(".menu-btn")) setState(false);
        };
    }, []);

    return (
        <nav className={` shadow-md sticky top-0 z-[999] bg-[#1A202C] pb-2 md:text-sm ${state ? "  mx-2   md:mx-2 md:mt-0" : ""}`}>
            <div className="gap-x-14 items-center max-w-screen-xl mx-auto px-4 md:flex md:px-8">
                <div className="flex items-center justify-between py-5 md:block">
                    <Link href="/">
                       <h1 className=' sm:text-5xl text-3xl font-bold ' ><i>Ab<span className='text-[#4FD1C5]' >u</span>ze<span className='text-[#4FD1C5]'>r</span> </i></h1>
                    </Link>
                    <div className="md:hidden">
                        <button className="menu-btn text-white hover:text-gray-400"
                            onClick={() => setState(!state)}
                        >
                            {
                                state ? (
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
                                        <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                                    </svg>
                                ) : (
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                                    </svg>
                                )
                            }
                        </button>
                    </div>
                </div>
                <div className={`flex-1 items-center mt-8 md:mt-0 md:flex ${state ? 'block' : 'hidden'} `}>
                    <ul className="justify-center items-center space-y-6 md:flex md:space-x-6 md:space-y-0">
                        {
                            navigation.map((item, idx) => {
                                return (
                                    <li key={idx} className="text-white hover:text-gray-400">
                                        <Link href={item.path} className="block">
                                            {item.title}
                                        </Link>
                                    </li>
                                );
                            })
                        }
                    </ul>
                    <div className="flex-1 gap-x-6 items-center justify-end mt-6 space-y-6 md:flex md:space-y-0 md:mt-0">
                        <Link href="/" className="block text-white hover:text-gray-400">
                            View Resume
                        </Link>
                        <Link href="https://github.com/imabuzerkhan" className="flex items-center justify-center gap-x-1 py-2 px-4 text-white font-medium bg-gray-800 hover:bg-gray-700 active:bg-gray-900 rounded-full md:inline-flex">
                            GitHub
                            <FaGithub className="w-5 h-5" />
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
