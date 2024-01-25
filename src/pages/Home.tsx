import classes from "./Home.module.css";
import hero from "../assets/hero-min.webp";
import About from "../components/About";
import Collections from "../components/Collections";

const Home = (): JSX.Element => {
  return (
    <div className={classes.home} id="home">
      <section className={classes.hero}>
        <img src={hero} alt="hero image" loading="eager" />
        <h1>ELLENA</h1>
      </section>
      <section className={classes.about__wrapper}>
        <About />
      </section>
      <section className={classes.collections__wrapper}>
        <Collections />
      </section>
    </div>
  );
};

export default Home;
