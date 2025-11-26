import z from "zod";

export const exampleSchema = z.object({
  name: z.string().min(3),
});

export const signUpSchema = z.object({
  name: z.string().min(5),
  email: z.string().email(),
  password: z.string().min(5),
});

export const signInSchema = signUpSchema.omit({ name: true });

export const mutateCourseSchema = z.object({
  name: z.string({ required_error: "name is required" }).min(5),
  categoryId: z.string({ required_error: "categoryId is required" }),
  tagline: z.string({ required_error: "tagline is required" }).min(5),
  description: z.string({ required_error: "description is required" }).min(10),
});

export const mutateContentSchema = z.object({
  title: z.string({ required_error: "title is required" }).min(5),
  type: z.string({ required_error: "Text/Video is required" }),
  youtubeId: z
    .string({ required_error: "Video youtube id is required" })
    .optional(),
  text: z.string().optional(),
  courseId: z.string().min(5),
});

export const mutateStudentSchema = z.object({
  name: z.string().min(5),
  email: z.string().email(),
  password: z.string().min(5),
});

export const addStudentCourseSchema = z.object({
  studentId: z.string().min(5),
});