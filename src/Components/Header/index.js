import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header">
      <div className="menu">
        <Link to="/">HOME</Link>
        {/* <div className="icon-menu"> */}
        <button type="button">
          <i className="fa fa-bars" />
        </button>
        {/* </div> */}
      </div>
      <Link to="/">BAND</Link>
      <Link to="/">TOUR</Link>
      <Link to="/">CONTACT</Link>
      <div className="dropdown-more">
        <Link to="/">
          MORE<i class="fa fa-caret-down"></i>
        </Link>
        <div className="dropdown-part">
          <Link to="/">Merchandise</Link>
          <Link to="/">Extras</Link>
          <Link to="/">Media</Link>
        </div>
      </div>
      <div className="search-container">
        <input type="text" placeholder="Search.." name="search" />
        <button type="submit">
          <i className="fa fa-search" />
        </button>
      </div>
    </div>
  );
};

export default Header;
