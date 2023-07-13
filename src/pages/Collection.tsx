import Carousel from "../components/Carousel";
import classes from "./Collection.module.css";

const Collection = (): JSX.Element => {
  return (
    <section className={classes.section__wrapper}>
      <div className={classes.content__container}>
        <h2>Non finito</h2>
        <hr />
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Totam,
          reprehenderit suscipit deleniti numquam esse eos? Necessitatibus,
          officiis beatae repellat maiores deleniti eveniet sapiente maxime nisi
          asperiores, explicabo eius. Recusandae, porro? Lorem ipsum dolor sit
          amet, consectetur adipisicing elit. Vel consequuntur tempore illo
          tempora id adipisci dolor blanditiis placeat. Laborum dolore eligendi
          dolor corrupti! Blanditiis iusto quam, quidem fuga illum at.
        </p>
        {/* Carousel */}
        <div className={classes.carousel__wrapper}>
          <div className={classes.carousel__container}>
            <Carousel></Carousel>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Collection;
