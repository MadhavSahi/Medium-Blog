import { Hono } from "hono";
import { PrismaClient } from "@prisma/client/edge";
import { withAccelerate } from "@prisma/extension-accelerate";
//official steps to generate a client when using Prisma...(in mongoose it came along, but in prsima we need to geenrate alag se)

// const app = new Hono();
const app = new Hono<{
  Bindings: {
    DATABASE_URL: string;
  };
}>();
//when using env variables(wrangler.toml), we need to do like this...this is the official way

//signup API
app.post("/api/v1/signup", async (c) => {
  //this is the prsima client as directed in documents.
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate());
  const body = await c.req.json();
  await prisma.user.create({
    data: {
      email: body.email,
      username: body.username, 
      password: body.password,
    },
  });
  return c.text("Hellooo Hono!");
});

//signin API
app.post("/api/v1/signin", (c) => {
  return c.text("Hellooo Hono!");
});

//add a new BLOG
app.post("/api/v1/blog", (c) => {
  return c.text("Hellooo Hono!");
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
