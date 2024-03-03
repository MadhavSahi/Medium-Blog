//ZOD VALIDATIONS....we are keeping those in common as we will write validations in backend but we will also need to them in frontend...hence we will extract the type of it and hence use it...we will also deploy it as a npm package soon.

import z from "zod";

//these will be used in backend for zod validations and will be deployed on npm
export const signupInput = z.object({
  email: z.string().email(),
  username: z.string(),
  password: z.string().min(6),
});

export const signinInput = z.object({
  email: z.string().email(),
  username: z.string(),
  password: z.string().min(6),
});

export const createblogInput = z.object({
  title: z.string(),
  content: z.string(),
});

export const editblogInput = z.object({
  title: z.string(),
  content: z.string(),
  id: z.string(),
});


//type inference
//these all will be used in frontend code.
export type SignUpInput = z.infer<typeof signupInput>;
export type SignInInput = z.infer<typeof signinInput>;
export type CreateBlogInput = z.infer<typeof createblogInput>;
export type EditBlogInput = z.infer<typeof editblogInput>;
