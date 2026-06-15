import z from "zod";

export const loginSchema = z.object({
  phoneNumber: z
    .string()
    .regex(/^[0-9]{10}$/, "Phone number must be exactly 10 digits")
});

export type LoginSchema = z.infer<typeof loginSchema>;
