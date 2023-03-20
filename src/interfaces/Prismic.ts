export type PrismicDocument<T> = {
  id: string;
  first_publication_date: Date | string | null;
  last_publication_date: Date | string | null;
  href: string;
  type: string;
  uid?: string;
  tags: string[];
  slugs: string[];
  data: T;
};

export type PrismicImage = {
  url: string;
  alt?: string;
  dimensions: {
    width: number;
    height: number;
  };
};

export type PrismicLink = {
  url: string;
  link_type: string;
};
