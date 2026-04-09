export type UserRow = {
  id: number;
  username: string;
  visibility: "private" | "public";
  profile_image: string | null;
  bio: string;
  display_name: string | null;
  email: string;
  phone: string;
  birthdate: string;
  password: string;
  created_at: Date;
  updated_at: Date | null;
};
