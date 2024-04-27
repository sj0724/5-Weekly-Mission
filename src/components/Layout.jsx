import { Outlet } from 'react-router-dom';
import Footer from './Footer/Footer';
import Nav from './Nav/Nav';
import { useEffect, useState } from 'react';
import { getSampleUser } from '../api/api';

function Layout() {
  const [profile, setProfile] = useState();

  const loadUser = async () => {
    const reuslt = await getSampleUser();
    setProfile(reuslt);
  };

  useEffect(() => {
    loadUser();
  }, []);

  return (
    <>
      <Nav user={profile} position={'top'} />
      <Outlet />
      <Footer />
    </>
  );
}

export default Layout;
