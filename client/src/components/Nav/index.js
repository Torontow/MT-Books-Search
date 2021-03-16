import React from 'react'
import { Link } from "react-router-dom"

function Nav() {
    return (
        <nav className="nav flex-columnn justify-content-end">
        <li className="nav-item">
          <Link
            className="nav-link"
            to="/search"
          >
            Search
          </Link>
        </li>
        <li className="nav-item">
          <Link
            className="nav-link"
            to="/saved"
          >
            Saved Books
          </Link>
        </li>
      </nav>
      )
}

export default Nav
