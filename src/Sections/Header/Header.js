import './Header.css'
import React, { useState, useRef, useEffect } from 'react';

import logo01 from '../../assets/images/LOGO-01.png'
import logo02 from '../../assets/images/LOGO-02.png'

const Header = () => {
    const [activeDropdown, setActiveDropdown] = useState(null);

const handleNavItemClick = (index) => {
  setActiveDropdown(index === activeDropdown ? null : index);
};

return (
  <nav className="navbar navbar-expand-lg">
    <div className="container-fluid">
      <div className="navbar-brand">
        <img src={logo01} alt="Enis Logo" />
      </div>
      <div className="navbar-brand">
        <img src={logo02} alt="DGIMA Logo" />
      </div>
      <div className="collapse navbar-collapse">
        <ul className="navbar-nav ms-auto">
          <li
            className={`nav-item dropdown ${activeDropdown === 1 ? 'show' : ''}`}
            onMouseEnter={() => setActiveDropdown(1)}
            onMouseLeave={() => setActiveDropdown(null)}
          >
            <a
              className="nav-link"
              href="#"
              onClick={() => handleNavItemClick(1)}
            >
              DGIMA
            </a>
            <ul
              className={`dropdown-menu ${activeDropdown === 1 ? 'show' : ''}`}
            >
              <li>
                <a className="dropdown-item" href="#">
                  Sublink 1
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Sublink 2
                </a>
              </li>
              <li className="last-dropdown-item">
                <a className="dropdown-item" href="#">
                  Sublink 3
                </a>
              </li>
            </ul>
          </li>
          <li
            className={`nav-item dropdown ${activeDropdown === 2 ? 'show' : ''}`}
            onMouseEnter={() => setActiveDropdown(2)}
            onMouseLeave={() => setActiveDropdown(null)}
          >
            <a
              className="nav-link"
              href="#"
              onClick={() => handleNavItemClick(2)}
            >
              FORMATION
            </a>
            <ul
              className={`dropdown-menu ${activeDropdown === 2 ? 'show' : ''}`}
            >
              <li>
                <a className="dropdown-item" href="#">
                  Sublink 1
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Sublink 2
                </a>
              </li>
              <li className="last-dropdown-item">
                <a className="dropdown-item" href="#">
                  Sublink 3
                </a>
              </li>
            </ul>
          </li>
          <li
            className={`nav-item dropdown ${activeDropdown === 3 ? 'show' : ''}`}
            onMouseEnter={() => setActiveDropdown(3)}
            onMouseLeave={() => setActiveDropdown(null)}
          >
            <a
              className="nav-link"
              href="#"
              onClick={() => handleNavItemClick(3)}
            >
              RECHERCHE
            </a>
            <ul
              className={`dropdown-menu ${activeDropdown === 3 ? 'show' : ''}`}
            >
              <li>
                <a className="dropdown-item" href="#">
                  Sublink 1
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Sublink 2
                </a>
              </li>
              <li className="last-dropdown-item">
                <a className="dropdown-item" href="#">
                  Sublink 3
                </a>
              </li>
            </ul>
          </li>
          <li
            className={`nav-item dropdown ${activeDropdown === 4 ? 'show' : ''}`}
            onMouseEnter={() => setActiveDropdown(4)}
            onMouseLeave={() => setActiveDropdown(null)}
          >
            <a
              className="nav-link"
              href="#"
              onClick={() => handleNavItemClick(4)}
            >
              VIE ESTUDIANTINE
            </a>
            <ul
              className={`dropdown-menu ${activeDropdown === 4 ? 'show' : ''}`}
            >
              <li>
                <a className="dropdown-item" href="#">
                  Sublink 1
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Sublink 2
                </a>
              </li>
              <li className="last-dropdown-item">
                <a className="dropdown-item" href="#">
                  Sublink 3
                </a>
              </li>
            </ul>
          </li>
          <li
            className={`nav-item dropdown ${activeDropdown === 5 ? 'show' : ''}`}
            onMouseEnter={() => setActiveDropdown(5)}
            onMouseLeave={() => setActiveDropdown(null)}
          >
            <a
              className="nav-link"
              href="#"
              onClick={() => handleNavItemClick(5)}
            >
              CONTACT US
            </a>
            <ul
              className={`dropdown-menu ${activeDropdown === 5 ? 'show' : ''}`}
            >
              <li>
                <a className="dropdown-item" href="#">
                  Sublink 1
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Sublink 2
                </a>
              </li>
              <li className="last-dropdown-item">
                <a className="dropdown-item" href="#">
                  Sublink 3
                </a>
              </li>
            </ul>
          </li>
          <li
            className={`nav-item dropdown ${activeDropdown === 6 ? 'show' : ''}`}
            onMouseEnter={() => setActiveDropdown(6)}
            onMouseLeave={() => setActiveDropdown(null)}
          >
            <a
              className="nav-link"
              href="#"
              onClick={() => handleNavItemClick(6)}
            >
              LOGIN
            </a>
            <ul
              className={`dropdown-menu ${activeDropdown === 6 ? 'show' : ''}`}
            >
              <li>
                <a className="dropdown-item" href="#">
                  Sublink 1
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Sublink 2
                </a>
              </li>
              <li className="last-dropdown-item">
                <a className="dropdown-item" href="#">
                  Sublink 3
                </a>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  )
}

export default Header
