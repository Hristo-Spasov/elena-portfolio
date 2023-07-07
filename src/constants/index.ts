import NonFinito from "../assets/paintings/non_finito.jpg";
import David from "../assets/paintings/david.jpg";
import BlueEye from "../assets/paintings/blue_eye.jpg";
import Cats from "../assets/portfolio/cats.jpg";

interface Collection {
  id: number;
  title: string;
  description: string;
  image: string;
}

export const collections: Collection[] = [
  {
    id: 1,
    title: "Non Finito",
    description: `An abstract art project that represents the human body in various colors.With bold abstract moments and blank, unfinished parts, Non Finito is a provocation for the mind and the imagination`,
    image: NonFinito,
  },
  {
    id: 2,
    title: "30x24",
    description: `Landscaped, still lifes, abstracts and more. A collection that at first sight has nothing in common, except for one thing - the size of the canvas`,
    image: David,
  },
  {
    id: 3,
    title: "Other",
    description: `Here, you can find single artworks of various types.`,
    image: BlueEye,
  },
  {
    id: 4,
    title: "Portfolio",
    description: `This is a small part of my artworks and orders i have done through the years.`,
    image: Cats,
  },
];
