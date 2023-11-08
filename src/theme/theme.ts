import { spacing } from "./spacing";
import { colors } from "./colors";

export const theme = {
  spacing: { ...spacing },
  colors: { ...colors }
};

export type Theme = typeof theme;
