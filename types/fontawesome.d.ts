// src/types/fontawesome.d.ts
declare module "@fortawesome/vue-fontawesome" {
  import { DefineComponent } from "vue";
  const FontAwesomeIcon: DefineComponent;
  export { FontAwesomeIcon };
}

declare module "@fortawesome/fontawesome-svg-core" {
  export const library: {
    add: (...icons: any[]) => void;
  };
}

declare module "@fortawesome/free-brands-svg-icons" {
  export const faLinkedin: any;
}
