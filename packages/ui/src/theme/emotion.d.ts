// emotion.d.ts
import "@emotion/react";
import { Theme as CustomTheme } from "./theme.ts";

declare module "@emotion/react" {
  export interface Theme extends CustomTheme {}
}