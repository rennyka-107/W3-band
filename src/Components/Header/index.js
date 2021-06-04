import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Input1 from "../Input1";

const Header = () => {
  const [renderMenu, setRenderMenu] = useState("none-display");

  useEffect(() => {
    const icon = document.getElementById("menu");
    if (icon) {
      icon.style.transform =
        renderMenu === "display" ? "rotate(90deg)" : "rotate(0deg)";
    }
  }, [renderMenu]);

  const onClickMenu = () => {
    setRenderMenu(renderMenu === "display" ? "none-display" : "display");
  };

  const menu = () => (
    <div className="menu">
      <Link to="/">HOME</Link>
      <button type="button" onClick={onClickMenu}>
        <i className="fa fa-bars" id="menu" />
      </button>
    </div>
  );

  const dropdownMore = () => (
    <div className={`dropdown-more ${renderMenu}`}>
      <Link to="/">
        MORE<i className="fa fa-caret-down"></i>
      </Link>
      <div className="dropdown-part">
        <Link to="/">Merchandise</Link>
        <Link to="/">Extras</Link>
        <Link to="/">Media</Link>
      </div>
    </div>
  );

  const searchContainer = () => (
    <div className={`search-container ${renderMenu}`}>
      <Input1 placeholder="Search..." additionClassName="header-search-input" />
      <button type="submit">
        <i className="fa fa-search" />
      </button>
    </div>
  );

  const scrollView = (id) => {
    const target = document.getElementById(id);
    if(target) {
      target.scrollIntoView();
    }
  }

  return (
    <div className="header">
      {menu()}
      <Link className={renderMenu} to="/" onClick={()=> scrollView("middle-content")}>
        BAND
      </Link>
      <Link className={renderMenu} to="/"  onClick={()=> scrollView("tour-list-container")}>
        TOUR
      </Link>
      <Link className={renderMenu} to="/"  onClick={()=> scrollView("contact")}>
        CONTACT
      </Link>
      {dropdownMore()}
      {searchContainer()}
    </div>
  );
};

export default Header;
