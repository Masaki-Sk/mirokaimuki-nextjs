'use client';

import { Image } from 'react-bootstrap';
import { Facebook, Instagram } from 'react-bootstrap-icons';

const FooterMenu = () => (
  <div className="footer">
    <div className="container">
      <div className="row mx-0 justify-content-center pt-4">
        <div className="col">
          <Image
            src="miro_logo.png"
            alt="logo"
            width={200}
            height={200}
          />
        </div>
        <div className="col">
          <ul className="footer_col">
            <li>©2019 Miro Kaimuki | All rights reserved.</li>
            <li>3446 Waialae Ave, Honolulu, HI 96816</li>
            <li>(808) 379-0124</li>
            <li>Wed–Sun 5pm–9pm</li>
            <li>Website by Middle Management</li>
          </ul>
        </div>
        <div className="col">
          <ul className="footer-item">
            <li className="footer-item"><Facebook /></li>
            <li className="footer-item"><Instagram /></li>
          </ul>
        </div>
      </div>
    </div>
  </div>
);

export default FooterMenu;
