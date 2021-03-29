import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { data } from './data'
import './styles.scss'

function Menu() {
  const [isOpen, setToggle] = useState(false)
  return (
    <header className={`header`}>
      <button className={`menu-toggle ${isOpen ? `active` : null}`} onClick={(e) => setToggle(!isOpen)}>
        {isOpen ? `hide menu` : 'show menu'}
      </button>
      <nav className={`menu ${isOpen ? `active` : null}`}>
        <ul className={`menu-list`}>
          {data.map(({ title, link }) => {
            return (
              <li className={`menu-item`} key={Math.random()}>
                <Link to={link} className={'menu-link'} onClick={(e) => setToggle(!isOpen)}>
                  {title}
                </Link>
              </li>
            )
          })}
        </ul>
      </nav>
    </header >
  )
}

export default Menu;