import z from "zod";

export const userSchema = z.strictObject({
  id: z.number(),
  name: z.string("idk"),
  email: z.email(),
  username: z.string({
    error: "invalid username",
  }),
  address: z.strictObject({
    street: z.string(),
    suite: z.string(),
    city: z.string(),
    zipcode: z.string(),
    geo: z.strictObject({
      lat: z.string(),
      lng: z.string(),
    }),
  }),
  phone: z.string(),
  website: z.string(),
  company: z.strictObject({
    name: z.string().optional(),
    catchPhrase: z.string().optional(),
    bs: z.string().optional(),
  }),
});

export type User = z.infer<typeof userSchema>;
