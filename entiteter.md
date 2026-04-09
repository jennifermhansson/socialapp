# Entities

- PostgreSQL

## User (must-have)

```typescript
type User = {
  id: number;
  username: string;
  visibility: "private" | "public";
  profile_image: string;
  bio: string;
  display_name: string;
  email: string;
  phone: string;
  birthdate: Date;
  password: string;
  created_at: Date;
  updated_at: Date;
};
```

## Follower-relationship (must-have)

```sql
follower_id INTEGER references users(id)
followee_id INTEGER references users(id)
created_at timestamptz

primary key (follower_id, following_id)
```

## Post (must-have)

```typescript
type Post = {
  id: number; // SERIAL, PK
  status: "active" | "hidden" | "deleted";
  user_id: number;
  image: string; // later on, we will allow a list of images and do a migration for it.
  caption: string | null;
  created_at: Date;
};
```

## Comment (must-have)

### Reply på någons kommentar (could-have)

```typescript
type Comment = {
  id: number;
  status: "active" | "deleted";
  user_id: number;
  post_id: number;
  parent_comment_id: number | null; // could-have
  created_at: Date;
  updated_at: Date | null; // should-have
};
```

## Reaction (must-have)

- Gilla, älska, hata, skratta. Dessa är konstanta saker

```sql
user_id INTEGER references user(id)
post_id INTEGER references post(id)
reaction_type TEXT NOT NULL
created_at timestamptz NOT NULL

PRIMARY KEY (user_id, post_id)
```

## Dela (should-have)

## Message (should-have)

## Stories (could-have)

## Groups (could-have)

## Reel (could-have)
