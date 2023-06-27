import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Contacts from "../components/Contacts";

const Root = () => {
  return (
    <div>
      <Navbar />
      <Outlet />
      <Contacts />
    </div>
  );
};

export default Root;
