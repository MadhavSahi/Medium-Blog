# Medium Clone Backend

Welcome to the backend of the Medium Clone project! This backend is built using Hono for serverless functions, Prisma for the ORM, and PostgreSQL as the database.

## 📌 Project Structure

- **Routes:**
  - `userRoute.tsx`: Handles user-related operations like signup and signin.
  - `blogRoute.tsx`: Manages CRUD operations for blog posts.

- **Prisma Schema:**
  - `schema.prisma`: Defines the database schema using Prisma's declarative syntax.

- **Entry Point:**
  - `index.tsx`: Main entry point that configures Hono, defines routes, and handles CORS.

## 📌 Technologies Used

- **Hono:** Serverless backend for efficient and scalable functions deployed using Cloudflare workers.
- **Prisma:** ORM for type-safe database queries and migrations.
- **PostgreSQL:** Database to store user data and blog posts.
- **TypeScript:** Language used for server-side development.

## 📌 Setup Instructions

1. **Prerequisites:**
   - Install Node.js and npm.
   - Set up PostgreSQL and Hono on your system.

2. **Backend Setup:**
   - Clone the repository and navigate to the `backend` directory.
   - Install dependencies using `npm install`.
   - Configure the Prisma schema and update the `DATABASE_URL` in `wrangler.toml`.
   - Start the backend server using `npm run dev`.

3. **Deploying to Hono:**
   - Deploy the backend to Hono using `npm run deploy`.

## 📌 Endpoints

- **User Routes:**
  - `/api/v1/user/signup`: POST - User registration endpoint.
  - `/api/v1/user/signin`: POST - User login endpoint.

- **Blog Routes:**
  - `/api/v1/blog`: POST - Create a new blog.
  - `/api/v1/blog`: PUT - Edit an existing blog.
  - `/api/v1/blog/bulk`: GET - Fetch all blogs with pagination.
  - `/api/v1/blog/:id`: GET - Fetch a specific blog by ID.

## 📌 Tech Stack

![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)
![Postgres](https://img.shields.io/badge/postgres-%23316192.svg?style=for-the-badge&logo=postgresql&logoColor=white)
![Cloudflare](https://img.shields.io/badge/Cloudflare-F38020?style=for-the-badge&logo=Cloudflare&logoColor=white)
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
![Prisma](https://img.shields.io/badge/Prisma-3982CE?style=for-the-badge&logo=Prisma&logoColor=white)
![NPM](https://img.shields.io/badge/NPM-%23CB3837.svg?style=for-the-badge&logo=npm&logoColor=white)

## 📌 Contributors

### Madhav Sahi

- Email : madhavsahi16@gmail.com
- LinkedIn - [Click here](https://www.linkedin.com/in/madhav-sahi-6a2305161/ "LinkedIn Link")
- GitHub - [Click here](https://github.com/MadhavSahi "GitHub Link")

## 📌 License

This project is licensed under the GNU General Public License (GNU GPL). See the [LICENSE](./LICENSE) file for details.

Feel free to contribute, report issues, or provide feedback!

## 📌 Acknowledgements

- Icons used for Tech Stack section :- [shields.io](https://img.shields.io)

## 👉 Backend Link :- 
- [Medium Clone using HONO and POSTGRES](https://backend.medium-hono-madhavsahi.workers.dev "Backend link")
