import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <nav className='w-full h-14 flex bg-white justify-between text-black px-10 items-center'>
      <h1 className='text-3xl font-bold text-gray-700 hover:text-gray-900 cursor-pointer  transition-colors '>iCount</h1>
      <ul>
        <li><Link href="/history">History</Link></li>
      </ul>
      
    </nav>
  )
}

export default Navbar
