import { Hono } from "hono";
import { PrismaClient } from "@prisma/client/edge";
import { withAccelerate } from "@prisma/extension-accelerate";
import { sign } from "hono/jwt";
import { signinInput, signupInput } from "@madhavsahi/medium-common-hono";

export const userRouter = new Hono<{
  Bindings: {
    DATABASE_URL: string;
  };
  Variables: {
    userId: string;
  };
}>();

//signup API
userRouter.post("/signup", async (c) => {
  //this is the prsima client as directed in documents.
  const body = await c.req.json();
  const { success } = signupInput.safeParse(body);
  if (!success) {
    c.status(411);
    return c.json({
      message: "Incorrect Inputs",
    });
  }
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL, //this is wrangler one.
  }).$extends(withAccelerate());
  try {
    const user = await prisma.user.create({
      data: {
        email: body.email,
        username: body.username,
        password: body.password,
      },
    });
    const jwt_token = await sign({ id: user.id }, "mysecretkey123");
    return c.json({ jwt_token: jwt_token });
  } catch (e) {
    c.status(403);
    return c.json({ error: "Error while Signing UP" });
  }
});

//signin API
//it will be almost similar to signup API....don;t confuse it with Protected Route concept...(JWT Verify)
userRouter.post("/signin", async (c) => {
  // return c.text("Hellooo Hono!");
  const body = await c.req.json();
  const { success } = signinInput.safeParse(body);
  if (!success) {
    c.status(411);
    return c.json({
      message: "Incorrect Inputs",
    });
  }
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate());
  try {
    const user = await prisma.user.findUnique({
      where: {
        email: body.email,
        username: body.username,
        password: body.password,
      },
    });
    if (!user) {
      c.status(403);
      return c.json({ error: "user not found" });
    }
    const jwt_token = await sign({ id: user.id }, "mysecretkey123");
    return c.json({ jwt_token: jwt_token });
  } catch (e) {
    c.status(403);
    return c.json({ error: "Error while Signing IN" });
  }
});
