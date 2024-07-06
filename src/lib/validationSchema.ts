import { z } from "zod";

const contactMeSchema = z.object({
  name: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  subject: z.string(),
  email: z
    .string()
    .min(2, {
      message: "Username must be at least 2 characters.",
    })
    .email(),
  message: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
});

export default contactMeSchema;

export type ContactMeSchemaType = z.infer<typeof contactMeSchema>;
