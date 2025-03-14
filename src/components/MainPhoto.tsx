'use client';

import { Image } from 'react-bootstrap';

const MainPhoto = () => (
  <div className="row justify-content-center position-relative">
    <Image
      className="base-image"
      src="https://cdn.prod.website-files.com/5d79a842a637b31790b37d02/5e430028592101f99894f463_vineyard.png"
      alt="background"
      width={100}
      height={350}
    />
    <Image
      className="overlay-image"
      src="main_logo.png"
      alt="logo"
      width={150}
      height={150}
    />
  </div>
);

export default MainPhoto;
