import React from 'react'
import { NavLink } from 'react-router-dom'
import './Nav.scss'

export const Nav = () => {
  return (
    <div className="Nav">
      <ul className="Nav__nav">
        <NavLink className="Nav__nav-link" to="/">
          Home
        </NavLink>
        <NavLink className="Nav__nav-link" to="/prop-drilling-example">
          Prop Drilling Example
        </NavLink>
        <NavLink className="Nav__nav-link" to="/event-handling-example">
          Event Handling Example
        </NavLink>
      </ul>
    </div>
  )
}
