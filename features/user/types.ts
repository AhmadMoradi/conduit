export type LoginPayload = {
  email: string;
  password: string;
};

export interface User {
  email: string;
  username: string;
  bio: null | string;
  image: string;
  token: string;
}
