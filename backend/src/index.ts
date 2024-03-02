import { Hono } from "hono";
import { PrismaClient } from "@prisma/client/edge";
import { withAccelerate } from "@prisma/extension-accelerate";
import { sign, verify } from "hono/jwt";
//official steps to generate a client when using Prisma...(in mongoose it came along, but in prsima we need to geenrate alag se)

// const app = new Hono();
const app = new Hono<{
  Bindings: {
    DATABASE_URL: string;
  };
  Variables: {
    userId: string;
  };
}>();
//when using env variables(wrangler.toml), we need to do like this...this is the official way

//Middlewares
app.use("/api/v1/blog/*", async (c, next) => {
  const jwt_token = c.req.header("Authorization");
  const jwt_token_extracted = jwt_token?.split(" ")[1];
  if (!jwt_token_extracted) {
    c.status(403);
    return c.json({
      error: "Un-Authorized",
    });
  }
  try {
    const response = await verify(jwt_token_extracted, "mysecretkey123");
    if (response.id) {
      c.set('userId', response.id);
      await next();
    } else {
      c.status(403);
      return c.json({
        error: "Un-Authorized",
      });
    }
  } catch (error: any) {
    console.error("JWT verification error:", error);
    c.status(500);
    return c.json({
      error: "Internal Server Error",
      details: error.message,
    });
  }
});

//signup API
app.post("/api/v1/signup", async (c) => {
  //this is the prsima client as directed in documents.
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate());
  const body = await c.req.json();
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
app.post("/api/v1/signin", async (c) => {
  // return c.text("Hellooo Hono!");
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate());
  const body = await c.req.json();
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

//add a new BLOG
app.post("/api/v1/blog", (c) => {
  // return c.text("Hellooo Hono!");
  console.log(c.get('userId'));
	return c.text('signin route')
});

//edit he BLOG
app.put("/api/v1/blog", (c) => {
  return c.text("Hellooo Hono!");
});

//Fetch a specific BLOG
app.get("/api/v1/blog:id", (c) => {
  return c.text("Hellooo Hono!");
});

//fetch ALL BLOGS
app.get("/api/v1/blog/bulk", (c) => {
  return c.text("Hellooo Hono!");
});
export default app;
//postgresql://madhavsahi16:dO5eH4ZxIkAB@ep-hidden-hill-a5ij22gy.us-east-2.aws.neon.tech/postgres_db_madhav?sslmode=require
//DATABASE_URL="prisma://accelerate.prisma-data.net/?api_key=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcGlfa2V5IjoiMzMwNzI2ZWQtNTM4ZS00ZmI1LWE2NTMtYWQzY2MzNTQ4YTVkIiwidGVuYW50X2lkIjoiMTNkOTFiMjBlNTJmMTk1MDA2ODI3NzYxNjZmNjFhNzdkMzY2ZmEwY2JhYmMxZWNjZmRmZTRlYzU4YTRlYzUyMSIsImludGVybmFsX3NlY3JldCI6IjVhMTViZmY1LWRjODctNDFhOC05YTUxLWY4YjIwYzliODIzNCJ9.J5dSHrPZIgjxyA9dSy9RX8aXbErAZ_yy6mOroAAvnH0"
