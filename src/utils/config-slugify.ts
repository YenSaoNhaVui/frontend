import slugify from "slugify";

export const configSlugify = (text: string) => {
  return slugify(text, {
    replacement: "-",
    lower: true,
    locale: "vi",
    trim: true,
  });
};
