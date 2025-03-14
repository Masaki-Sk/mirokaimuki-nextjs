'use client';

import { Image } from 'react-bootstrap';

const MenuPhoto = () => (
  <div>
    <div className="collection-item">
      <Image
        src="photo_2.jpg"
        alt="photo 2"
        width={200}
        height={200}
      />
      <Image
        src="photo_3.jpg"
        alt="photo 3"
        width={200}
        height={200}
      />
      <Image
        src="photo_4.jpg"
        alt="photo 4"
        width={200}
        height={200}
      />
      <Image
        src="photo_5.jpg"
        alt="photo 5"
        width={200}
        height={200}
      />
      <Image
        src="photo_6.jpg"
        alt="photo 6"
        width={200}
        height={200}
      />
      <Image
        src="photo_7.jpg"
        alt="photo 7"
        width={200}
        height={200}
      />
    </div>
    <div className="info-container">
      <div className="seasonal-menu">
        <Image
          className="foreground-image"
          src="photo_8.png"
          alt="logo"
          width={200}
          height={200}
        />
      </div>

      <div className="info-block">
        <h2 className="heading-2">Miro Kaimuki</h2>
        <div className="text-block">
          3446 Waialae Ave,
          <br />
          Honolulu, HI 96816
          <br />
          <br />
          (808)&nbsp;379-0124
          <br />
          <br />
          <a
            href="mailto:info@mirokaimuki.com?subject=Web%20Inquiry%20(mirokaimuki.com)"
            className="link"
          >
            info@mirokaimuki.com
          </a>
          <br />
          <br />
          <strong>
            PARKING
          </strong>
          : Available in the former Hawaiian National Bank Parking lot.
          <br />
          The lot is off of 9th Street behind the restaurant.
          <br />
          <br />
          Parties of 5 or more will be subject to a 20% service charge.
          <br />
          <br />
          If cancelling within 24 hours of your reservation time, you will be subject to a $50 per person fee.
          <br />
          <br />
          * We are no longer accommodating strict allergies or vegans - vegetarians and pescatarians are welcome *
        </div>
      </div>
    </div>
  </div>
);

export default MenuPhoto;
