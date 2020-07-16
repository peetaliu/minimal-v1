import React, { useContext, useState, useEffect } from 'react';
import PortfolioContext from '../../context/context';

const Menu = () => {
  const [scroll, setScroll] = useState(0);
  const { menu } = useContext(PortfolioContext);
  const { logo, items } = menu;

  onscroll = () => {
    setScroll(window.pageYOffset);
    console.log(scroll);
  };

  return (
    <div id={scroll > 50 ? 'menu__scrolled' : 'menu__top'}>
      <h1 className="logo">{logo}</h1>
      {items ? (
        <ul className="items">
          {items.map((i) => (
            <li key={i.id}>
              <i className={`fa fa-${i.name} fa-outline`} />
            </li>
          ))}
        </ul>
      ) : (
        ''
      )}
    </div>
  );
};

export default Menu;
