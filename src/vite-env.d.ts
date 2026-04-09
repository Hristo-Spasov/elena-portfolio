/// <reference types="vite/client" />
/// <reference types="vite-plugin-svgr/client" />
declare module '*.css' {
  const content: { [className: string]: string };
  export default content;
}

declare module 'swiper/css' {
  const content: string;
  export default content;
}

