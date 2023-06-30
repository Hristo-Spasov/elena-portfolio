import classes from "./About.module.css";

const About = () => {
  return (
    <div className={classes.about__container}>
      <div className={classes.about_me}>
        <h3>I was created to create.</h3>
        <hr />
        <p>
          I’m Elena and I’m an artist based in Plovdiv, Bulgaria, who has been
          honing in art for more than 10 years now.
          <br />
          Still finding my type of art, I enjoy experiencing with colors,
          techniques and styles, so I can improve with every artwork.
          <br /> Colorful, vibrant portraits, picturesque landscapes and
          abstract works are all brought to life with contrasting and harmonious
          colors and bold compositions.
          <br /> I work mostly with acrylic paint on different sized canvases.{" "}
          <br />I work part-time as an artist in a gallery and as an art
          teacher. I teach 16-18-year-olds and I help them foster the same
          enthusiasm in art that I have.
        </p>
      </div>
    </div>
  );
};

export default About;
