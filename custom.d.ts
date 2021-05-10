import { Theme as MUITheme } from "@material-ui/core";

declare module "*.svg" {
  const content: string;
  export default content;
}

declare module "*.png" {
  const content: string;
  export default content;
}

declare module "*.pdf" {
  const content: string;
  export default content;
}

declare module "@emotion/react" {
  export interface Theme extends MUITheme {}
}
