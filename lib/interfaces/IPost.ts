import type IAuthor from "./IAuthor";

type IPostType = {
  slug: string;
  title: string;
  date: string;
  coverImage: string;
  author: IAuthor;
  excerpt: string;
  ogImage: {
    url: string;
  };
  content: string;
};

export default IPostType;
