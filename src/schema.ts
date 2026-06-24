import z from "zod";

export const userSchema = z.object({
  email: z.email(),
  password: z
    .string()
    .regex(/[A-Z]/, "Password must contain alteast one Uppercase")
    .regex(/[a-z]/, "Password must contain at least one lower case")
    .regex(/[0-9]/, "Password must contain at least one digit")
    .regex(
      /[^A-Za-z0-9]/,
      "Password must contain at least one special character",
    ),
});

export type UserSchema = z.infer<typeof userSchema>;
