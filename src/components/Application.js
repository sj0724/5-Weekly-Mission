import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Nav from "./Nav";
import { useEffect, useState } from "react";
import { getUser } from "../api/api";

function Application() {
  const [profile, setProfile] = useState();

  const userLoad = async () => {
    const reuslt = await getUser();
    setProfile(reuslt);
  };

  useEffect(() => {
    userLoad();
  }, []);

  return (
    <>
      <Nav user={profile} position={"top"} />
      <Outlet />
      <Footer />
    </>
  );
}

export default Application;
