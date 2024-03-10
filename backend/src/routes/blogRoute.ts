import { Hono } from "hono";
import { PrismaClient } from "@prisma/client/edge";
import { withAccelerate } from "@prisma/extension-accelerate";
import { verify } from "hono/jwt";
import { createblogInput, editblogInput } from "@madhavsahi/medium-common-hono";

export const blogRouter = new Hono<{
  Bindings: {
    DATABASE_URL: string;
  };
  Variables: {
    userId: string;
    //manually adding some keys to c...so we need to tell the compiler here
  };
}>();

//Middlewares
blogRouter.use("/*", async (c, next) => {
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
      c.set("userId", response.id);
      await next();
      //important
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

//add new blog
blogRouter.post("/", async (c) => {
  const body = await c.req.json();
  const { success } = createblogInput.safeParse(body);
  if (!success) {
    c.status(411);
    return c.json({
      message: "Incorrect Inputs",
    });
  }
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate());
  const authorId = c.get("userId");
  try {
    const blog = await prisma.post.create({
      data: {
        title: body.title,
        content: body.content,
        authorId: authorId,
        //this we will get from middleware
      },
    });
    return c.json({
      id: blog.id,
    });
  } catch (error) {
    c.status(411);
    return c.json({
      message: "Error while Adding this Blog : " + error,
    });
  }
});

//edit he BLOG
blogRouter.put("/", async (c) => {
  //   return c.text("Hellooo Hono!");
  const body = await c.req.json();
  const { success } = editblogInput.safeParse(body);
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
    const blog = await prisma.post.update({
      where: {
        id: body.id,
      },
      data: {
        title: body.title,
        content: body.content,
      },
    });
    return c.json({
      id: blog.id,
    });
  } catch (error) {
    c.status(411);
    return c.json({
      message: "Error while Editing this Blog :  " + error,
    });
  }
});

//fetch ALL BLOGS ....PAGINATION
blogRouter.get("/bulk", async (c) => {
  //   return c.text("Hellooo Hono!");
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate());
  //   const body = await c.req.json();
  try {
    const blogs = await prisma.post.findMany({
      select: {
        id: true,
        title: true,
        content: true,
        author: {
          select: {
            username: true,
          },
        },
      },
    });
    return c.json({
      blogs: blogs,
    });
  } catch (error) {
    c.status(411);
    return c.json({
      message: "Error while Fetching Blogs : " + error,
    });
  }
});

//Fetch a specific BLOG....in get request...use query params
blogRouter.get("/:id", async (c) => {
  const id = c.req.param("id");
  if (!id) {
    c.status(411);
    return c.json({
      message: "Incorrect Blog ID",
    });
  }
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate());
  try {
    const blog = await prisma.post.findFirst({
      where: {
        id: id,
      },
      select: {
        id: true,
        title: true,
        content: true,
        author: {
          select: {
            username: true,
          },
        },
      },
    });
    return c.json({
      blog,
    });
  } catch (error) {
    c.status(411);
    return c.json({
      message: "Error while Fetching this Blog : " + error,
    });
  }
});
