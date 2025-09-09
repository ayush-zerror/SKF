import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <nav id='navbar'>
      <Link id='logo' href="/">SKF</Link>
      <div className='nav_links'>
        <Link href='/movies'>movies</Link>
        <Link href='/about'>about</Link>
        <Link href='/highlights'>highlights</Link>
        <Link href='/contact'>contact</Link>
      </div>
    </nav>
  )
}

export default Navbar