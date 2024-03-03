import { Hono } from "hono";
import { userRouter } from "./routes/userRoute";
import { blogRouter } from "./routes/blogRoute";
import { verify } from "hono/jwt";
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

//user ROUTES
app.route("/api/v1/user", userRouter);

//blog Routes
app.route("/api/v1/blog", blogRouter);

export default app;
//postgresql://madhavsahi16:dO5eH4ZxIkAB@ep-hidden-hill-a5ij22gy.us-east-2.aws.neon.tech/postgres_db_madhav?sslmode=require
//DATABASE_URL="prisma://accelerate.prisma-data.net/?api_key=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcGlfa2V5IjoiMzMwNzI2ZWQtNTM4ZS00ZmI1LWE2NTMtYWQzY2MzNTQ4YTVkIiwidGVuYW50X2lkIjoiMTNkOTFiMjBlNTJmMTk1MDA2ODI3NzYxNjZmNjFhNzdkMzY2ZmEwY2JhYmMxZWNjZmRmZTRlYzU4YTRlYzUyMSIsImludGVybmFsX3NlY3JldCI6IjVhMTViZmY1LWRjODctNDFhOC05YTUxLWY4YjIwYzliODIzNCJ9.J5dSHrPZIgjxyA9dSy9RX8aXbErAZ_yy6mOroAAvnH0"
