declare interface Article {
  slug: string;
  title: string;
  description: string;
  body: string;
  tagList: string[];
  createdAt: string;
  updatedAt: string;
  favorited: boolean;
  favoritesCount: number;
  author: {
    username: string;
    bio: null | string;
    image: string;
    following: boolean;
  };
}

declare interface User {
  email: string;
  username: string;
  bio: null | string;
  image: string;
  token: string;
}
