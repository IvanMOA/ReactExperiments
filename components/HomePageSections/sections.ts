export interface Section {
  name: string;
  path: string;
}

const buildSections = <T extends Record<string, Section>>(t: T) => t;

export const Sections = buildSections({
  Home: {
    name: "Home",
    path: "/",
  },
});
