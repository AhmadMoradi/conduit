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
