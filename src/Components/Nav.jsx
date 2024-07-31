import React from 'react'
import '../App.css'
import './Nav.css'

const Nav = () => {
  return (
    <div className='bg-slate-400 flex nav-h  justify-center' >
        <div className='w-3/5 flex justify-between my-auto font-bold text-xl '>
            <div className='w-1/4 '>Logo</div>
            <ul className='flex justify-between w-2/4 nav-icon'>
                <li>Main</li>
                <li>Category</li>
                <li>About</li>
            </ul>
        </div>
    </div>
  )
}

export default Nav