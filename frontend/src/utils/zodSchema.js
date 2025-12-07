import z from "zod";

export const signUpSchema = z.object({
  name: z.string().min(5),
  email: z.string().email(),
  password: z.string().min(5),
});

export const signInSchema = signUpSchema.omit({ name: true });

export const createCourseSchema = z.object({
  name: z.string({ required_error: "name is required" }).min(5),
  categoryId: z.string().min(5, { message: "Please Select a Category" }),
  tagline: z.string({ required_error: "tagline is required" }).min(5),
  description: z.string({ required_error: "description is required" }).min(10),
  thumbnail: z
    .any()
    .refine((file) => file?.name, { message: "thumbnail is required" }),
});

export const updateCourseSchema = createCourseSchema.partial({
  thumbnail: true,
});

export const mutateContentSchema = z
  .object({
    title: z.string({ required_error: "title is required" }).min(5),
    type: z.string().min(3, { message: "Type is Required" }),
    youtubeId: z.string().optional(),
    text: z.string().optional(),
  })
  .superRefine((val, ctx) => {
    const parseYoutubeId = z.string().min(4).safeParse(val.youtubeId);
    const parseText = z.string().min(4).safeParse(val.text);

    if (val.type === "video") {
      if (!parseYoutubeId.success) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message: "Youtube ID is Required",
          path: ["youtubeId"],
        });
      }
    }

    if (val.type === "text") {
      if (!parseText.success) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message: "Content Text is Required is Required",
          path: ["text"],
        });
      }
    }
  });

export const createStudentSchema = z.object({
  name: z.string().min(5, { message: "Name is Required" }),
  email: z.string().email({ message: "Email is Required" }),
  password: z.string().min(5, { message: "Password is Required" }),
  photo: z.any().refine((file) => file?.name, { message: "photo is required" }),
});

export const updateStudentSchema = createStudentSchema.omit({
  password: true,
  photo: true,
});

export const addStudentCourseSchema = z.object({
  studentId: z.string().min(5),
});
