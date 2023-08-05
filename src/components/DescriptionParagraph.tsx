import Button from "./Button";
import { Collection } from "../constants";
import classes from "./DescriptionParagraph.module.css";

type DescriptionProps = {
  paragraph: string;
  isExpanded: boolean;
  index: number;
  selectedItem: Collection;
  onClick: () => void;
};

const DescriptionParagraph = ({
  paragraph,
  isExpanded,
  index,
  selectedItem,
  onClick,
}: DescriptionProps) => {
  return (
    <>
      <p>
        {/* Hiding the paragraphs if they are longer than 200 */}
        {paragraph.length > 200
          ? index === 0 && !isExpanded
            ? `${paragraph.slice(0, 300)}...`
            : isExpanded
            ? paragraph
            : null
          : paragraph}
      </p>
      {/* The Read Less button renders at the last Paragraph so it's sticked to the last last parag. */}
      {index === selectedItem.description.length - 1 && isExpanded && (
        <div className={classes.button_container}>
          <Button onClick={onClick}>Read Less</Button>
        </div>
      )}
    </>
  );
};

export default DescriptionParagraph;
