import classes from "./Paintings.module.css";

type PaintingsProps = {
  title?: string;
  image: string;
  size?: string;
};

const Paintings = ({ title, image, size }: PaintingsProps): JSX.Element => {
  return (
    <div className={classes.card__wrapper}>
      <div className={classes.card__container}>
        <img src={image} alt={title} />
        {title && <h2>{title}</h2>}
        {size && <p>{size}</p>}
      </div>
    </div>
  );
};

export default Paintings;
