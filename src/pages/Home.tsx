import classes from "./Home.module.css";
import hero from "../assets/hero-min.png";
import About from "../components/About";

const Home = () => {
  return (
    <div className={classes.home}>
      <section className={classes.hero}>
        <img src={hero} alt="" />
        <h2>ELLENA</h2>
      </section>
      <section className={classes.about__wrapper}>
        <About />
      </section>
    </div>
  );
};

export default Home;
