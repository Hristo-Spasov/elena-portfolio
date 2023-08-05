import classes from "./About.module.css";

const About = () => {
  return (
    <div className={classes.about__container}>
      <div className={classes.about_me}>
        <h3>I was created to create.</h3>
        <hr />
        <p>
          I’m Elena and I’m an artist based in Plovdiv, Bulgaria, who has been
          honing in art for more than 10 years now. Still finding my type of
          art, I enjoy experiencing with colors, techniques and styles, so I can
          improve with every artwork.
        </p>
        <p>
          My art is an assembly of emotions, each stroke capturing a moment of
          introspection, a burst of joy, or a whisper of nostalgia. My mastery
          lies not only in my technical prowess but also in my ability to
          breathe life into my creations, inviting viewers to immerse themselves
          in a realm of both beauty and vulnerability.
        </p>
        <p>
          My passion radiates through my pieces, each canvas telling a story,
          sharing a piece of my soul. My art is an invitation to connect, to
          delve into the layers of colors and textures and find a mirror to
          one's own emotions. With every stroke, I captures the essence of what
          it means to be human—a blend of light and shadow, joy and sorrow, and
          the infinite shades in between.
        </p>
      </div>
    </div>
  );
};

export default About;
