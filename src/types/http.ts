export type RegisterRequest = {
  username: string;
  visibility?: "private" | "public";
  profile_image?: string;
  bio?: string;
  display_name: string;
  email: string;
  phone: string;
  birthdate: string;
  password: string;
};

export type LoginRequest = {
  username: string;
  password: string;
};
