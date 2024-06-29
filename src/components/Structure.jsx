import { Outlet } from 'react-router-dom';
import Header from './UI/Header/Header';
import Footer from './UI/Footer/Footer';

export const Structure = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};
