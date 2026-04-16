import type { UserRow } from "../types/db";
import type { User } from "../types/http";

export function mapToUser(userRow: UserRow): User {
  return {
    username: userRow.username,
    visibility: userRow.visibility,
    profile_image: userRow.profile_image,
    bio: userRow.bio,
    display_name: userRow.display_name,
    email: userRow.email,
    phone: userRow.phone,
    birthdate: userRow.birthdate,
    created_at: userRow.created_at,
    updated_at: userRow.updated_at,
  };
}
