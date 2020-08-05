import React, { useContext, useState } from 'react';
import PortfolioContext from '../../context/context';

const Menu = () => {
  // const [scroll, setScroll] = useState(0);
  // const [darkMode, setDarkMode] = useState(false);
  const { menu } = useContext(PortfolioContext);
  const { logo } = menu;

  // onscroll = () => {
  //   setScroll(window.pageYOffset);
  // };

  // const handleDark = () => {
  //   setDarkMode(!darkMode);
  // };

  return (
    <div id="menu__top">
      <h1 className="logo">{logo}</h1>
      {/* Darkmode TBC
      <div className="items">
        <button id="drkModeBtn" onClick={handleDark}>
          <i className={`fa fa-lightbulb fa-outline`} />
        </button>
      </div> */}
    </div>
  );
};

export default Menu;
