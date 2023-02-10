# nodejs

### instalation

##### typeScript

```bash
npm install -g typescript && npx tsc --init &&
```

##### zod

```bash
npm install zod
```

### zod

zod is a TypeScript library for runtime type checking and data validation. It's designed to be a better alternative to JSON Schema and other runtime type checkers.

#### Basic

```ts
import { z } from "zod";

const Post = z.object({
  title: z.string(),
  content: z.string(),
});

const User = z.object({
  name: z.string().min(3).max(100).nonempty(),
  age: z.number().int().positive().optional(),
  email: z.string().email(),
  posts: z.array(Post).optional(),
});

const user = User.parse({
  name: "John",
  age: 30,
  email: "email@email.com",
});

type User = z.infer<typeof User>;
```
