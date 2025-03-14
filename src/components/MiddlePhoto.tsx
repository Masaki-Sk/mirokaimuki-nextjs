'use client';

import { Image } from 'react-bootstrap';

const MiddleMenu = () => (
  <div className="notificationsection">
    <div className="tempnotification">
      <div className="text-block">
        <strong className="bold-text-2">
          ALOHA
          <br />
          <br />
          <br />
          We are open for dinner service nightly by reservation:
          <br />
          Wednesday through Sunday - 5PM to 9PM.
          <br />
          <br />
          Thank you so much for your continued support. Mahalo!
          <br />
        </strong>
        <br />
      </div>
    </div>
    <div className="div-block-6">
      <Image
        src="photo_1.jpeg"
        alt="photo 1"
        width={200}
        height={100}
      />
    </div>
  </div>
);

export default MiddleMenu;
