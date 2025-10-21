import React from 'react'
import Link from 'next/link'

const Navbar = () => {
    return (
        <nav className='bg-emerald-600 text-white'>
            <div className='flex justify-between items-center p-4'>
                <Link href={"/"}><h1 className='font-bold'>BitLinks</h1></Link>
                <ul className='flex justify-between gap-7 items-center px-5'>
                    <Link href={"/"}><li>Home</li></Link>
                    <Link href={"/shorten"}><li>Shorten</li></Link>
                    <Link href={"/linkedin"}><li>About</li></Link>
                    <Link href={"/linkedin"}><li>Contact</li></Link>
                </ul>
                <div>
                    <Link href={"/generate"}><button className='font-bold bg-emerald-400 rounded-lg p-1 px-2 shadow-xl mr-3'>Try Now</button></Link>
                    <Link href={"/github"}><button className='font-bold bg-emerald-400 rounded-lg p-1 px-2 shadow-xl mr-3'>Github</button></Link>
                </div>
            </div>
        </nav>
    )
}

export default Navbar