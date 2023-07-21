export type LoginPayload = {
  email: string;
  password: string;
};

export interface User {
  email: string;
  username: string;
  bio: string;
  image: string;
  token: string;
}

export interface Settings extends Partial<Omit<User, "token">> {
  password?: string;
}

export interface NewArticleForm {
  title: string;
  description: string;
  body: string;
  tagListStr?: string;
  tagList?: string[];
  errors?: null | Record<string, string[]>;
}
