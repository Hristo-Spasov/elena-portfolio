import { useLocation } from "react-router-dom";

import classes from "./Contacts.module.css";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import MailOutlineIcon from "@mui/icons-material/MailOutline";

const Contacts = (): JSX.Element => {
  const { pathname } = useLocation();
  const isHomePage = pathname === "/";

  const contactsContainerClass = isHomePage
    ? classes.contacts__container
    : classes.contacts__container__alt;

  const linksContainerClass = isHomePage
    ? classes.links__container
    : classes.links__container__alt;

  return (
    <section id="contacts" className={contactsContainerClass}>
      <h2>Contacts</h2>
      <hr />
      <div className={classes.contacts_inner__container}>
        <div className={classes.contacts__info__wrapper}>
          <div
            className={
              isHomePage
                ? classes.contacts__info__container
                : classes.contacts__info__container__alt
            }
          >
            <p>Every artwork here is available for purchase.</p>
            <p>
              You can also place an order for a painting of any kind, made
              specially for you.
            </p>
            <p>
              For general enquiries, available artworks, and a price list,
              contact me on my social media profiles or my email.
            </p>
          </div>
        </div>
        <div className={classes.links__container__wrapper}>
          <div className={linksContainerClass}>
            <a
              href="https://www.instagram.com/ellena.artistry/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <InstagramIcon /> www.instagram.com/ellena.artistry
            </a>
            <a href="mailto:ellena.encheva@gmail.com">
              <MailOutlineIcon /> ellena.encheva@gmail.com
            </a>
            <a
              href="https://www.facebook.com/elena.encheva.9"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FacebookIcon /> www.facebook.com/elena.encheva.9
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contacts;
