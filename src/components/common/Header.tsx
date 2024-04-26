'use client'
import React from 'react'
import Link from 'next/link'
import { FiChevronDown, FiMenu, FiSearch, FiShoppingCart, FiUser, FiX } from 'react-icons/fi'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '../ui/dropdown-menu'

export default function Header() {
    const [navActive, setNavActive] = React.useState(false)
    return (
        <>
            <header className='shadow-lg'>
                <nav className='flex justify-between items-center p-4 md:px-8 md:shadow-lg'>
                    <div className="flex justify-center items-center">
                        <div className="md:hidden">

                            {!navActive ? <FiMenu className='text-3xl me-6' onClick={() => setNavActive(!navActive)} /> :
                                <FiX className='text-3xl me-6' onClick={() => setNavActive(!navActive)} />}

                        </div>
                        <Link href={'/'} className="flex justify-center items-center gap-3 cursor-pointer">
                            <img src="/logo.jpeg" alt="logo" className='h-12 w-12' />
                            <h2 className='font-bold uppercase'>hb plus</h2>
                        </Link>
                        <ul className='mx-5 hidden  md:flex justify-center items-center gap-5 capitalize text-sm font-medium'>
                            <li><Link href={'#'}>home</Link></li>

                            <DropdownMenu>
                                <DropdownMenuTrigger className=' outline-none'>
                                    <div className='flex justify-center items-center peer-[shop]: cursor-pointer'>shop <FiChevronDown /></div>

                                </DropdownMenuTrigger>
                                <DropdownMenuContent className='h-[300px] overflow-auto'>
                                    {[1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2,].map((item: any, i: any) =>
                                        <DropdownMenuItem key={i}><Link href={'#' + i}>Profile hhfytftyt {i + 1}</Link></DropdownMenuItem>
                                    )}
                                </DropdownMenuContent>
                            </DropdownMenu>
                            <li><Link href={'#'}>about us</Link></li>
                            <li><Link href={'#'}>contact us</Link></li>
                            <li><Link href={'#'}>social media</Link></li>
                        </ul>
                    </div>
                    <div className="flex justify-center items-center gap-6 capitalize text-lg">
                        <div className="flex justify-center items-center gap-3 cursor-pointer md:border-b border-black">
                            <FiSearch className='text-xl' />
                            <p className='hidden md:block'>search</p>
                        </div>

                        <div className="flex justify-center items-center gap-2 cursor-pointer">
                            <p className='hidden md:block'>login</p>
                            <FiUser className='text-xl' />
                        </div>

                        <div className="flex justify-center items-center gap-2 cursor-pointer">
                            <p className='hidden md:block'>cart</p>
                            <FiShoppingCart className='text-xl' />
                        </div>
                    </div>
                </nav>
                <div className={`${!navActive ? " h-0" : "h-fit"} `}  >
                    <ul className={`${!navActive ? "-translate-y-[1000%] h-0" : "translate-y-[0] h-fit"} px-4 pb-6 flex flex-col gap-2 text-lg font-medium uppercase`}>
                        <li className='hover:text-slate-900 transition-all duration-200 ease-linear'><Link href={'#'}>home</Link></li>
                        <li className='hover:text-slate-900 transition-all duration-200 ease-linear'><Link href={'#'}>shop</Link></li>
                        <li className='hover:text-slate-900 transition-all duration-200 ease-linear'><Link href={'#'}>about us</Link></li>
                        <li className='hover:text-slate-900 transition-all duration-200 ease-linear'><Link href={'#'}>social media</Link></li>
                    </ul>
                </div>
            </header>
        </>

    )
}