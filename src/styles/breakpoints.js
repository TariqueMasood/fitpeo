export const Breakpoints = {
  xs: 360,
  sm: 576,
  md: 768,
  lg: 1025,
  xl: 1200,
};

const createMatcher = (size) => {
  return `(min-width: ${Breakpoints[size]}px)`;
};

export const matchBreakpoint = (size) => {
  if (typeof matchMedia !== "function") return false;
  return matchMedia(createMatcher(size)).matches;
};

export const mq = (size) => `@media ${createMatcher(size)}`;
