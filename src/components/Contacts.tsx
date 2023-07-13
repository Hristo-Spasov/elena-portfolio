import { useLocation } from "react-router-dom";

import classes from "./Contacts.module.css";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import MailOutlineIcon from "@mui/icons-material/MailOutline";

const Contacts = (): JSX.Element => {
  const { pathname } = useLocation();
  return (
    <>
      {pathname === "/" ? (
        <section id="contacts" className={classes.contacts__container}>
          <h2>Contacts</h2>
          <hr />
          <div className={classes.contacts_inner__container}>
            <div className={classes.contacts__info__wrapper}>
              <div className={classes.contacts__info__container}>
                <p>
                  Every artwork here is available for purchase.
                  <br /> You can also place order for a painting of any
                  kind,made specially for you.
                  <br />
                  For general enquiries,available artworks,and a price
                  list,contact me on my social media profiles or my email.
                </p>
              </div>
            </div>
            <div className={classes.links__container__wrapper}>
              <div className={classes.links__container}>
                <a
                  href="https://www.instagram.com/ellena.artistry/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <InstagramIcon /> https://www.instagram.com/ellena.artistry/
                </a>
                <a href="" target="_blank" rel="noopener noreferrer">
                  <MailOutlineIcon /> ellena.encheva@gmail.com
                </a>
                <a
                  href="https://www.facebook.com/elena.encheva.9"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FacebookIcon /> https://www.facebook.com/elena.encheva.9
                </a>
              </div>
            </div>
          </div>
        </section>
      ) : (
        <section id="contacts" className={classes.contacts__container__alt}>
          <h2>Contacts</h2>
          <hr />
          <div className={classes.contacts_inner__container}>
            <div className={classes.contacts__info__wrapper}>
              <div className={classes.contacts__info__container__alt}>
                <p>
                  Every artwork here is available for purchase.
                  <br /> You can also place order for a painting of any
                  kind,made specially for you.
                  <br />
                  For general enquiries,available artworks,and a price
                  list,contact me on my social media profiles or my email.
                </p>
              </div>
            </div>
            <div className={classes.links__container__wrapper}>
              <div className={classes.links__container__alt}>
                <a
                  className={classes.links__alt}
                  href="https://www.instagram.com/ellena.artistry/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <InstagramIcon /> https://www.instagram.com/ellena.artistry/
                </a>
                <a
                  className={classes.links__alt}
                  href=""
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MailOutlineIcon /> ellena.encheva@gmail.com
                </a>
                <a
                  className={classes.links__alt}
                  href="https://www.facebook.com/elena.encheva.9"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FacebookIcon /> https://www.facebook.com/elena.encheva.9
                </a>
              </div>
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default Contacts;
