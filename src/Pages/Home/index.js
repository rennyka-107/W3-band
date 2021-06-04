import { findIndex, isEqual } from "lodash";
import React, { useEffect, useState } from "react";
import img1 from "./../../assets/images/chicago.jpg";
import img2 from "./../../assets/images/la.jpg";
import img3 from "./../../assets/images/ny.jpg";
import img4 from "./../../assets/images/bandmember.jpg";
import img5 from "./../../assets/images/newyork.jpg";
import img6 from "./../../assets/images/paris.jpg";
import img7 from "./../../assets/images/sanfran.jpg";
import Button1 from "../../Components/Button1";

const imgSlides = [
  {
    title: "Chicago",
    description: "Chicago no.1",
    src: img1,
  },
  {
    title: "Lost Angeles",
    description: "Angeles no.2",
    src: img2,
  },
  {
    title: "New York",
    description: "New York no.3",
    src: img3,
  },
];

const tourList = [
  {
    title: "New York",
    date: "Fri 27 Nov 2016",
    description: "Praesent tincidunt sed tellus ut rutrum sed vitae justo.",
    src: img5,
  },
  {
    title: "Paris",
    date: "Sat 28 Nov 2016",
    description: "Praesent tincidunt sed tellus ut rutrum sed vitae justo.",
    src: img6,
  },
  {
    title: "San Francisco",
    date: "Sun 29 Nov 2016",
    description: "Praesent tincidunt sed tellus ut rutrum sed vitae justo.",
    src: img7,
  },
];

const Home = () => {
  const [selectedImg, setSelectedImg] = useState(imgSlides[0]);

  useEffect(() => {
    setTimeout(() => {
      const index = findIndex(imgSlides, (img) => isEqual(img, selectedImg));
      if (index === imgSlides.length - 1) {
        setSelectedImg(imgSlides[0]);
      } else setSelectedImg(imgSlides[index + 1]);
    }, 2000);
  }, [selectedImg]);

  return (
    <div className="home-container">
      <div className="slide-image">
        <img src={selectedImg.src} alt="alt" />
        <p>{selectedImg.title}</p>
        <p>{selectedImg.description}</p>
      </div>
      <div className="middle-content" id="middle-content">
        <p>THE BAND</p>
        <p>We love music</p>
        <p>
          We have created a fictional band website. Lorem ipsum dolor sit amet,
          consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
          labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
          exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
          dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
          proident, sunt in culpa qui officia deserunt mollit anim id est
          laborum consectetur adipiscing elit, sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
          nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
          consequat.
        </p>
        <div className="list-items">
          {[1, 2, 3].map((el, idx) => (
            <div key={idx} className="item">
              Name
              <img src={img4} alt="alt4" />
            </div>
          ))}
        </div>
      </div>
      <div className="tour-list-container" id="tour-list-container">
        <div className="tour-list">
          <p>TOUR DATES</p>
          <p>Remember to book your tickets!</p>
          <br />
          <ul>
            <li>
              September <span className="sold-out">Sold out</span>
            </li>
            <li>
              October <span className="sold-out">Sold out</span>
            </li>
            <li>
              November <span className="have-stock">3</span>
            </li>
          </ul>
          <div className="tours">
            {tourList.map((t, index) => (
              <div key={index} className="tour-item">
                <img src={t.src} alt="asx" />
                <div className="tour-item-content">
                  <p>{t.title}</p>
                  <p>{t.date}</p>
                  <p>{t.description}</p>
                  <Button1
                    title="Buy Tickets"
                    additionClass="buy-ticket-tour-button"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
