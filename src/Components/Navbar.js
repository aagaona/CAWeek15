import React from 'react'

function Navbar() {
  return (
    <div className='navigation-bar'>
      <span>
        🎴 Power Play Gamez 
      </span>
      <span>
        <button className='btn btn-dark nav-btn'>
          Home
        </button>
        <button className='btn btn-dark nav-btn'>
          Decks
        </button>
        <button className='btn btn-dark nav-btn'>
          Store
        </button>
        <button className='btn btn-dark nav-btn'>
          Account
        </button>
      </span>
    </div>
  )
}

export default Navbar