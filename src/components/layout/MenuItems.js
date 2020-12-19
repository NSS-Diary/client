import React from 'react';
import { useState } from 'react';
import { FcMenu, FcCollapse } from 'react-icons/fc';
const MenuItems = ({ title, user }) => {
  const [menuStyle, setStyle] = useState('menu-hide');
  const [iconShape, setIcon] = useState('closed');
  const studentMenuItems = [
    {
      title: 'Activities',
      url: '#',
      cname: 'nav-links',
    },
    {
      title: 'Enrolled',
      url: '#',
      cname: 'nav-links',
    },
    {
      title: 'Completed',
      url: '#',
      cname: 'nav-links',
    },
    {
      title: 'FAQ',
      url: '#',
      cname: 'nav-links',
    },
    {
      title: 'Logout',
      url: '#',
      cname: 'nav-links',
    },
  ];
  const adminMenuItems = [
    {
      title: 'Classrooms',
      url: '#',
      cname: 'nav-links',
    },
    {
      title: 'Activities',
      url: '#',
      cname: 'nav-links',
    },
    {
      title: 'Add Activity',
      url: '#',
      cname: 'nav-links',
    },
    {
      title: 'Notifications',
      url: '#',
      cname: 'nav-links',
    },
    {
      title: 'Logout',
      url: '#',
      cname: 'nav-links',
    },
  ];
  const loginMenu = [
    {
      title: 'Register',
      url: '#',
      cname: 'nav-links',
    },
    {
      title: 'About Us',
      url: '#',
      cname: 'nav-links',
    },
    {
      title: 'FAQ',
      url: '#',
      cname: 'nav-links',
    },
  ];
  const registerMenu = [
    {
      title: 'Login',
      url: '#',
      cname: 'nav-links',
    },
    {
      title: 'About Us',
      url: '#',
      cname: 'nav-links',
    },
    {
      title: 'FAQ',
      url: '#',
      cname: 'nav-links',
    },
  ];
  let finalMenu;
  if (user === 'Student' && title === 'Home') {
    finalMenu = studentMenuItems;
  } else if (user === 'Admin' && title === 'Home') {
    finalMenu = adminMenuItems;
  } else if (title === 'Login') {
    finalMenu = loginMenu;
  } else if (title === 'Register') {
    finalMenu = registerMenu;
  }
  const handleClick = () => {
    if (menuStyle === 'menu-hide') {
      setStyle('menu-open');
      setIcon('open');
    } else if (menuStyle === 'menu-open') {
      setStyle('menu-hide');
      setIcon('closed');
    }
    console.log(menuStyle);
  };
  return (
    <>
      <div className="normal-menu">
        <ul className="links">
          {finalMenu.map((item) => {
            return (
              <li className="list-item pass" key={item.title}>
                <a href={item.url}>{item.title}</a>
              </li>
            );
          })}
        </ul>
      </div>
      <div className="hamburger-menu">
        {iconShape === 'closed' ? (
          <FcMenu className="menu" size={30} onClick={handleClick} />
        ) : (
          <FcCollapse className="menu close-menu" size={30} onClick={handleClick} />
        )}
      </div>
      <div className={menuStyle}>
        <ul className="links-vertical">
          {finalMenu.map((item) => {
            return (
              <li className="list-vertical pass" key={item.title}>
                <a href={item.url}>{item.title}</a>
              </li>
            );
          })}
        </ul>
        <div className="wave-container-menu">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path
              fill="#12232e"
              fillOpacity="1"
              d="M0,64L48,74.7C96,85,192,107,288,101.3C384,96,480,64,576,53.3C672,43,768,53,864,64C960,75,1056,85,1152,90.7C1248,96,1344,96,1392,96L1440,96L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
            ></path>
          </svg>
        </div>
      </div>
    </>
  );
};

export default MenuItems;
