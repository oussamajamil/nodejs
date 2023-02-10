import { z } from 'zod';

const postShema = z.object({
	id: z.number().min(1).max(100).optional(),
	title: z.string().min(1).max(100),
})

export const userShema = z.object({
	id: z.number().min(1).max(100).optional(),
	name: z.string().min(1).max(100),
	pots: postShema.array().optional(),
});
//create type from zod schema
type User = z.infer<typeof userShema>;
let data = userShema.parse({
	id: 1,
	name: 'John',
	pots: undefined,
});
let check = userShema.safeParse(data);
console.log(check);
