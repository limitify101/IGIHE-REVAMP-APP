import { z } from "zod";

export const registerSchema = z.object({
  title: z.string().min(3, { message: "Title should not be that short!" }),
  authorId: z.string().min(7, { message: "Provide a valid author ID" }).max(7),
  author: z.string().min(1, { message: "Please provide the author's name" }),
  description: z
    .string()
    .min(5, { message: "Please provide more description!" })
    .max(300),
  content_text: z
    .string()
    .min(30, { message: "Article must contain more than (30) characters" }),
  content_type: z.string(),
  thumbnail: z
    .instanceof(File)
    .refine((file) => file.size !== 0, "Please upload a thumbnail"),
  // images:z.instanceof(File).refine((file) => file.size !== 0, "Please upload an image"),
});
