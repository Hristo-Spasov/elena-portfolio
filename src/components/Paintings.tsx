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
        <div className={classes.info__container}>
          {title && <h2 className={classes.card__title}>{title}</h2>}
          {size && <p className={classes.size}>{size}</p>}
        </div>
      </div>
    </div>
  );
};

export default Paintings;
