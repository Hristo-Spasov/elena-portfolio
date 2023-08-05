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
  description: string[];
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
    title: "Harmonies of Creation",
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
    description: [
      `In this art project, I represent the human body in various bright colors.
      My initial inspiration came from colors - clean and bright, intertwining with each other and creating a colorful, patterned swirl that tries to form a shape, an image or even an emotion.
      I was determined to use this love of color to create my artworks.`,

      `I decided this project to be about the upper part of the human body. I wanted to portray the beautiful facial features, captivating eyes that can tell you a story; the gentle, light movement of the hands and the beautiful shape they take at a certain moment.`,

      `The face and the skin are the main part in the artworks. Most of them are covered with all kinds of delicate and vibrant colors.
      In places, only a thin line of color is used to hint at the shape of the body and/or the garment.
      The blank, unfinished parts are provocation to the viewer and his imagination. The purpose of these unfinished sections is for the painting to come to life in the mind of the person who looks at it, and he, himself, to finish and fill these empty spots.`,

      `The same thing I wanted to achieve with the absence of a background. Without time and context, I wanted to give the viewers the opportunity to create their own story with the artworks.
      Therefore, I used soft, pastel colors for the background, which do not engage the eye much and do not create a prerequisite for certain emotions.`,
    ],

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
    title: "Harmonies of Creation",
    description: [
      `Step into a world of boundless imagination and creativity with the mesmerizing art collection titled "Harmonies of Creation." This captivating collection brings together a diverse array of artworks that transcend boundaries and ignite the senses. As you explore each masterpiece, you'll embark on a journey that celebrates the limitless expressions of human ingenuity.`,

      ` From vibrant canvases that burst with color to sculptures that invite touch and contemplation, "Harmonies of Creation" offers an immersive experience that speaks to the heart of artistic exploration. This collection showcases the remarkable diversity of mediums, styles, and techniques that artists wield to communicate their visions, all in the same size - 30x24cm.`,

      `Each piece carries a unique voice, a testament to the artists' ability to channel emotions, thoughts and experiences onto their chosen canvas.
      In the future, im dedicated to keep creating artworks for this collection that will continue to inspire, provoke, and ignite the imagination.`,
    ],
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
    description: [
      `This collection invites you on a captivating journey through an eclectic assembly of paintings, each a distinct universe of emotions, stories, and inspirations. In this gallery, there are no predetermined themes to constrain my visions - instead, you'll discover a rich tapestry of diverse styles, subjects, and techniques that stand independently yet collectively represent the kaleidoscope of human creativity.`,
    ],
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
    description: [
      `Welcome to a captivating journey through the diverse and mesmerizing world of my life as an artist. This art portfolio is a symphony of individual expressions, where each painting stands as a testament to the artist's unique vision, style, and inspiration. As you go through this portfolio, you'll be transported to a realm where artistic exploration knows no boundaries, you'll encounter a myriad of emotions, colors, and moods that resonate with the human experience
`,
      `My portfolio is a testament to my artistic journey—a journey marked by evolution, experimentation, and an unwavering commitment to authentic expression. An exploration of the ever-shifting landscape of creativity, where each canvas unveils a different facet of my artistic journey. From bold abstract compositions that challenge the limits of perception to serene landscapes that capture the essence of tranquility.`,
    ],
    paintings: [
      {
        id: 1,
        image: Cats,
        size: "Commission 50x60cm",
      },
      {
        id: 2,
        image: NakedGirl,
        size: "Graphics 50x70cm",
      },
      {
        id: 3,
        image: Books,
        size: "Commission 60x40cm",
      },
      {
        id: 4,
        image: StillLife2,
        size: " Still life 70x50cm",
      },
      {
        id: 5,
        image: House,
        size: "Commission 50x60cm",
      },
      {
        id: 6,
        image: Girl,
        size: "Graphics 70x50cm",
      },
      {
        id: 7,
        image: StillLife,
        size: " Still life 55x45cm",
      },
      {
        id: 8,
        image: Couple,
        size: "Commission 40x50cm/50x40cm",
      },
      {
        id: 9,
        image: Witches,
        size: "Digital Illustration",
      },
      {
        id: 10,
        image: AbstractPainting,
        size: "Abstract art 45x55cm",
      },
    ],
  },
];
