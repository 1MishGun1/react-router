import Styles from './Header.module.css';
import { NavLink } from 'react-router-dom';

const setActive = ({ isActive }) =>
  isActive ? Styles['active-link'] : Styles['link'];

const Header = () => {
  return (
    <>
      <header className={Styles['header']}>
        <NavLink className={setActive} to="/">
          Home
        </NavLink>
        <NavLink className={setActive} to="/about">
          About
        </NavLink>
        <NavLink className={setActive} to="/contact">
          Contact
        </NavLink>
      </header>
    </>
  );
};

export default Header;
