import { useParams } from "react-router-dom";
import Carousel from "../components/Carousel";
import classes from "./Collection.module.css";
import { collection } from "../constants";
import { useEffect, useState } from "react";
import DescriptionParagraph from "../components/DescriptionParagraph";
import Button from "../components/Button";

type CollectionParam = {
  title: string;
};

const Collection = (): JSX.Element => {
  const { title } = useParams<CollectionParam>();
  const [isExpanded, setIsExpanded] = useState<boolean>(false);

  const selectedItem = collection.find((item) => item.title === title)!;

  // Rendering text styles based on the length of the textt
  const longerText = selectedItem.description.some(
    (paragraph) => paragraph.length > 200
  );
  const textFormat = longerText ? classes.normal__text : classes.center__text;

  const handleClick = () => {
    setIsExpanded((prev) => !prev);
  };

  // Resetting state after navigating away from the current path effectivly hiding the Read less button when it's not needed
  useEffect(() => {
    setIsExpanded(false);
  }, [title]);

  return (
    <>
      <section key={selectedItem.id} className={classes.section__wrapper}>
        <div className={classes.content__container}>
          <h2>{selectedItem.title}</h2>
          <hr />
          {selectedItem.description.map((paragraph, index) => (
            <div className={textFormat} key={index}>
              <DescriptionParagraph
                paragraph={paragraph}
                index={index}
                isExpanded={isExpanded}
                selectedItem={selectedItem}
                onClick={handleClick}
              />
            </div>
          ))}

          {/* Checks if paragraph is longer then 200 characters and adds a button */}

          {longerText && !isExpanded && (
            <Button onClick={handleClick}>Read More</Button>
          )}

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
