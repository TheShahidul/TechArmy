/// <reference types="vite/client" />

declare module '*.css' {
  const content: { [className: string]: string };
  export default content;
}

declare module 'swiper/css' {
  const content: undefined;
  export default content;
}

declare module 'swiper/css/navigation' {
  const content: undefined;
  export default content;
}

declare module 'swiper/css/pagination' {
  const content: undefined;
  export default content;
}

declare module 'swiper/css/scrollbar' {
  const content: undefined;
  export default content;
}
