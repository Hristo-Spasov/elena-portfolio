import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Contacts from "../components/Contacts";

const Root = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <Contacts />
    </>
  );
};

export default Root;
