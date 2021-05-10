import type { Theme } from "@emotion/react";
import type { Breakpoint } from "@material-ui/core";

export const getMqUp = (bp: Breakpoint) => ({ theme }: { theme: Theme }) =>
  theme.breakpoints.up(bp);
