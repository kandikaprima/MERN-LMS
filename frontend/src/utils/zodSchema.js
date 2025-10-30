import z from 'zod'

export const signUpSchema = z.object({
    name: z.string().min(5),
    email: z.string().email(),
    password: z.string().min(5),
})

export const signInSchema = signUpSchema.omit({name: true})

export const createCourseSchema = z.object({
    name: z.string({ required_error: "name is required" }).min(5),
    categoryId: z.string().min(5, {message: 'Please Select a Category'}),
    tagline: z.string({ required_error: "tagline is required" }).min(5),
    description: z.string({ required_error: "description is required" }).min(10),
    thumbnail: z.any().refine((file) => file?.name, {message: 'thumbnail is required'})
})

export const updateCourseSchema = createCourseSchema.partial({
    thumbnail: true
})