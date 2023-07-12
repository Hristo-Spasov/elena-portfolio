import classes from "./Card.module.css";
import Button from "./Button";

interface CardProps {
  title: string;
  description: string;
  image: string;
  isOdd: boolean;
}

const Card = ({ title, isOdd, description, image }: CardProps): JSX.Element => {
  return (
    <div className={classes.collections__container}>
      {isOdd ? (
        <div className={classes.card_container}>
          <img src={image} alt={title} />
          <div className={classes.collection_information_wrapper}>
            <div className={classes.collection_information}>
              <div className={classes.inner__information}>
                <h2>{title}</h2>
                <hr />
                <p>{description}</p>
                <Button>SEE MORE</Button>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className={classes.card_container}>
          <div className={classes.collection_information_wrapper_inverted}>
            <div className={classes.collection_information_inverted}>
              <div className={classes.inner__information_inverted}>
                <h2>{title}</h2>
                <hr />
                <p>{description}</p>
                <Button className={classes.inverted_button}>See more</Button>
              </div>
            </div>
          </div>
          <img src={image} alt={title} />
        </div>
      )}
    </div>
  );
};

export default Card;
