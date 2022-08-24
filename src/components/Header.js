import React from 'react'
import logo from '../images/to-do-list.png'

const Header = () => {
  return (
    <>
        <header className='non-bootstrap-container header'>
            <img src={logo} alt="" className='logo'/>
            <h1>TODO APP</h1>
        </header>
        <div className='header-bottom'></div>
    </>
  )
}

export default Header