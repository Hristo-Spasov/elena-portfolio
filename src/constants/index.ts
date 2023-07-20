// Non Finito
import NonFinito from "../assets/Non Finito/Non Finito 100x80 cm.webp";
import Sadness from "../assets/Non Finito/Sadness 80x100cm.webp";
import Hide from "../assets/Non Finito/Hide 100x80 cm.webp";
import Pose from "../assets/Non Finito/Pose 80x60 cm.webp";
import TouchOfColor from "../assets/Non Finito/Touch of Color 60x40 cm.webp";
import Vision from "../assets/Non Finito/Vision 40x40 cm.webp";
import Finess from "../assets/Non Finito/Finess 40x40 cm.webp";
import AboveWater from "../assets/Non Finito/Above water 60x40 cm.webp";
// 30x24
import David from "../assets/30x24/David.webp";
import Bird from "../assets/30x24/Bird.webp";
import Blues from "../assets/30x24/Blues.webp";
import Pumpkins from "../assets/30x24/Pumpkins.webp";
import Raven from "../assets/30x24/Raven.webp";
import Sunset from "../assets/30x24/Sunset.webp";
import Vase from "../assets/30x24/Vase.webp";
import Waves from "../assets/30x24/Waves.webp";
// Other
import BlueEye from "../assets/Other/Eye 20x25 cm.webp";
import ColorfulMess from "../assets/Other/Colourful mess 100x80 cm.webp";
import LucidDream from "../assets/Other/Lucid dream 70x50 cm.webp";
//Portfolio
import Cats from "../assets/Portfolio/Order Acrylic paint on canvas 50x60 cm.webp";
import AbstractPainting from "../assets/Portfolio/Abstract art Acrylic paint on paper 46x55 cm.webp";
import Witches from "../assets/Portfolio/Digital Illustration.webp";
import NakedGirl from "../assets/Portfolio/Graphics 50x70 cm.webp";
import Girl from "../assets/Portfolio/Graphics 70x50 cm.webp";
import House from "../assets/Portfolio/house.webp";
import Couple from "../assets/Portfolio/Order Acrylic paint on canvas.webp";
import StillLife from "../assets/Portfolio/Still life Acrylic paint on paper 55x46 cm.webp";
import StillLife2 from "../assets/Portfolio/Still life Acrylic paint on paper 70x50 cm.webp";
import Books from "../assets/Portfolio/books-min.webp";

interface Collections {
  id: number;
  title: string;
  description: string;
  image: string;
}

export interface Collection {
  id: number;
  title: string;
  description: string;
  paintings: Painting[];
}

export interface Painting {
  id: number;
  image: string;
  title?: string;
  size?: string;
}

export const collections: Collections[] = [
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

export const collection: Collection[] = [
  {
    id: 1,
    title: "Non Finito",
    description: `In this art project, I represent the human body in various bright colors. My initial inspiration came from colors - clean and bright, intertwining with each other and creating a colorful, patterned swirl that tries to form a shape, an image or even an emotion. I was determined to use this love of color to create my artworks.
   I decided this project to be about the upper part of the human body. I wanted to portray the beautiful facial features, captivating eyes that can tell you a story; the gentle, light movement of the hands and the beautiful shape they take at a certain moment.
   The face and the skin are the main part in the artworks. Most of them are covered with all kinds of delicate and vibrant colors. In places, only a thin line of color is used to hint at the shape of the body and/or the garment. The blank, unfinished parts are provocation to the viewer and his imagination. The purpose of these unfinished sections is for the painting to come to life in the mind of the person who looks at it, and he, himself, to finish and fill these empty spots.
   The same thing I wanted to achieve with the absence of a background. Without time and context, I wanted to give the viewers the opportunity to create their own story with the artworks. Therefore, I used soft, pastel colors for the background, which do not engage the eye much and do not create a prerequisite for certain emotions.

   `,

    paintings: [
      {
        id: 1,
        title: "Non Finito",
        image: NonFinito,
        size: "100x80cm",
      },
      {
        id: 2,
        title: "Sadness",
        image: Sadness,
        size: "80x60cm",
      },
      {
        id: 3,
        title: "Hide",
        image: Hide,
        size: "100x80cm",
      },
      {
        id: 4,
        title: "Pose",
        image: Pose,
        size: "80x60cm",
      },
      {
        id: 5,
        title: "Touch of Color",
        image: TouchOfColor,
        size: "60x40cm",
      },
      {
        id: 6,
        title: "Above Water",
        image: AboveWater,
        size: "60x40cm",
      },
      {
        id: 7,
        title: "Finess",
        image: Finess,
        size: "40x40cm",
      },
      {
        id: 8,
        title: "Vision",
        image: Vision,
        size: "40x40cm",
      },
    ],
  },
  {
    id: 2,
    title: "30x24",
    description:
      "This collection contains different type of artworks - from landscapes and still lifes to abstract art and more. The thing that connects all this artworks is the size of the canvas - 30x24cm.",
    paintings: [
      {
        id: 1,
        title: "David",
        image: David,
      },
      {
        id: 2,
        title: "Vase",
        image: Vase,
      },
      {
        id: 3,
        title: "Sunset",
        image: Sunset,
      },
      {
        id: 4,
        title: "Pumpkins",
        image: Pumpkins,
      },
      {
        id: 5,
        title: "Raven",
        image: Raven,
      },
      {
        id: 6,
        title: "Bird",
        image: Bird,
      },
      {
        id: 7,
        title: "Blues",
        image: Blues,
      },
      {
        id: 8,
        title: "Waves",
        image: Waves,
      },
    ],
  },
  {
    id: 3,
    title: "Other",
    description: `Here, you can find single artworks of various types.`,
    paintings: [
      {
        id: 1,
        title: "Colourful mess",
        image: ColorfulMess,
        size: "100x80cm",
      },
      {
        id: 2,
        title: "Eye",
        image: BlueEye,
        size: "20x25cm",
      },
      {
        id: 3,
        title: "Lucid dream",
        image: LucidDream,
        size: "70x50cm",
      },
    ],
  },
  {
    id: 4,
    title: "Portfolio",
    description: `This is a small part of my artworks and orders I have done through the years. Here, you can see different types of art, different techniques on different surfaces.
   *they are not for sale.
`,
    paintings: [
      {
        id: 1,
        image: Cats,
        size: "50x60cm",
      },
      {
        id: 2,
        image: NakedGirl,
        size: "50x70cm",
      },
      {
        id: 3,
        image: Books,
        size: "60x40cm",
      },
      {
        id: 4,
        image: StillLife2,
        size: "70x50cm",
      },
      {
        id: 5,
        image: House,
        size: "50x60cm",
      },
      {
        id: 6,
        image: Girl,
        size: "70x50cm",
      },
      {
        id: 7,
        image: StillLife,
        size: "55x45cm",
      },
      {
        id: 8,
        image: Couple,
      },
      {
        id: 9,
        image: Witches,
      },
      {
        id: 10,
        image: AbstractPainting,
        size: "45x55cm",
      },
    ],
  },
];
