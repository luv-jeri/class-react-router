import React from 'react';
import style from './Nav.module.css';
import { Link, useNavigate } from 'react-router-dom';

function Nav() {
  const navigate = useNavigate();
  return (
    <nav>
      <div className={style.nav_container}>
        <div
          className={style.nav_title_wrapper}
          onClick={() => {
            navigate('/');
          }}
        >
          <img
            className={style.logo}
            src='https://cdn-icons-png.flaticon.com/512/2721/2721658.png'
            alt='logo'
          />
          <h4>Coding Master</h4>
        </div>
        <div className={style.nav_details}>
          <button>
            <Link to='/courses'>'COURSES'</Link>
          </button>
          <button>{'Light'}</button>
        </div>
      </div>
    </nav>
  );
}

export default Nav;

//  <img
//    alt='cart-icon'
//    src='https://cdn-icons-png.flaticon.com/512/4903/4903482.png'
//    className={`${style.cart_icon} ${style.icon} `}
//  />;
