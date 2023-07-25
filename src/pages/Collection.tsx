import { useParams } from "react-router-dom";
import Carousel from "../components/Carousel";
import classes from "./Collection.module.css";
import { collection } from "../constants";

type CollectionParam = {
  title: string;
};

const Collection = (): JSX.Element => {
  const { title } = useParams<CollectionParam>();

  const selectedItem = collection.find((item) => item.title === title)!;
  const isNonFinito = title === "Non Finito";
  const textFormat = !isNonFinito ? classes.center__text : classes.normal__text;

  return (
    <>
      <section key={selectedItem.id} className={classes.section__wrapper}>
        <div className={classes.content__container}>
          <h2>{selectedItem.title}</h2>
          <hr />
          <p className={textFormat}>{selectedItem.description}</p>
          {/* Carousel */}
          <div className={classes.carousel__wrapper}>
            <div className={classes.carousel__container}>
              <Carousel onSelectedItem={selectedItem} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Collection;
