import Card from "./Card";
import classes from "./Collections.module.css";
import { collections } from "../constants";

const Collections = (): JSX.Element => {
  return (
    <section className={classes.collection_container}>
      <div className={classes.card__wrapper}>
        {collections.map((collection, index) => (
          <Card
            key={collection.id}
            title={collection.title}
            description={collection.description}
            image={collection.image}
            isOdd={index % 2 === 1}
          />
        ))}
      </div>
    </section>
  );
};

export default Collections;
