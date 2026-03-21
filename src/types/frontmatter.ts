interface Frontmatter {
  date: string;
  title: string;
  slug?: string;
  category: string;
  template: string;
  draft?: boolean;
  unlisted?: boolean;
  description?: string;
  tags?: Array<string>;
  socialImage?: { publicURL: string };
}

export { type Frontmatter };
