'use client';

import { Image } from 'react-bootstrap';

const TopMenu = () => (
  <div className="container">
    <nav className="navbar navbar-expand-sm navbar-light bg-white px-5" style={{ height: '100px' }}>
      <div className="container-fluid">
        <ul
          className="navbar-nav d-flex justify-content-start justify-content-md-center align-items-center text-center"
        >
          <li className="nav-item">
            <Image
              className="img-fluid rounded mx-auto d-block py-1"
              src="miro_logo.png"
              alt="Miro Logo"
              width={200}
              height={100}
            />
          </li>
        </ul>
        <ul
          className="navbar-nav d-flex justify-content-start justify-content-md-center align-items-center text-center"
        >
          <div className="nav-item dropdown px-3">
            <div
              className="dropdown-toggle"
              id="navbarDropdown"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
              style={{ fontSize: '0.7rem' }}
            >
              <span>MENUS</span>
            </div>
            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
              <li><a className="dropdown-item" href="#home" style={{ fontSize: '0.7rem' }}>Breakfast</a></li>
              <li><a className="dropdown-item" href="#home" style={{ fontSize: '0.7rem' }}>Dinner</a></li>
            </ul>
          </div>
          <li className="nav-item px-3" style={{ fontSize: '0.7rem' }}>ABOUT</li>
          <li className="nav-item px-3" style={{ fontSize: '0.7rem' }}>PRIVATE CATERING</li>
          <li className="nav-item px-3" style={{ fontSize: '0.7rem' }}>RESERVATION</li>
        </ul>
      </div>
    </nav>
  </div>
);

export default TopMenu;
