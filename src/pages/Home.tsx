import classes from "./Home.module.css";
import hero from "../assets/paintings/hero.jpg";

const Home = () => {
  return (
    <>
      <section className={classes.hero}>
        <img src={hero} alt="" />
        <h2>ELLENA</h2>
      </section>
    </>
  );
};

export default Home;
