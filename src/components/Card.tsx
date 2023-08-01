import classes from "./Card.module.css";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

interface CardProps {
  title: string;
  description: string;
  image: string;
  isEven: boolean;
}

const Card = ({
  title,
  isEven,
  description,
  image,
}: CardProps): JSX.Element => {
  const [isMobile, setIsMobile] = useState(false);

  //  handle the breakpoint to render img
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 980);
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  //* Styling conditions
  const collectionWrapper = isEven
    ? classes.collection_information_wrapper
    : classes.collection_information_wrapper_inverted;

  const collectionInformation = isEven
    ? classes.collection_information
    : classes.collection_information_inverted;

  const innerInformation = isEven
    ? classes.inner__information
    : classes.inner__information_inverted;

  const cardButton = isEven ? classes.base_button : classes.inverted_button;

  return (
    <div className={classes.collections__container}>
      <div className={classes.card_container}>
        {/* Render image on the left */}
        {isEven && <img src={image} alt={title} />}
        {/* Rendering img based on the width size */}
        {isMobile && !isEven && <img src={image} alt={title} />}
        {/* Main component */}
        <div className={collectionWrapper}>
          <div className={collectionInformation}>
            <div className={innerInformation}>
              <h2>{title}</h2>
              <hr />
              <p>{description}</p>
              <Link to={`collection/${title}`} className={cardButton}>
                See more
              </Link>
            </div>
          </div>
        </div>

        {/* Render image on the right */}
        {!isMobile && !isEven && <img src={image} alt={title} />}
      </div>
    </div>
  );
};

export default Card;
