import { Outlet, ScrollRestoration } from "react-router-dom";
import Navbar from "../components/Navbar";
import Contacts from "../components/Contacts";

const Root = () => {
  return (
    <main id="home">
      <ScrollRestoration />
      <Navbar />
      <Outlet />
      <Contacts />
    </main>
  );
};

export default Root;
