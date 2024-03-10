# Medium Clone Full Stack Project 🚀

Welcome to the Medium Clone Full Stack Project! This project replicates core features of the Medium platform, allowing users to sign in, sign up, publish blog posts, and explore a curated list of blogs. The project is divided into two main components: the frontend and backend.

## Live Deployment 👉

- **Frontend:** The frontend is live and accessible at [https://madhavsahi-medium-hono-react-ts.netlify.app/](https://madhavsahi-medium-hono-react-ts.netlify.app/). Explore the application to experience the Medium-like interface.

- **Backend:** The backend is deployed on [Cloudflare Workers](https://backend.medium-hono-madhavsahi.workers.dev "Backend link"), providing serverless architecture for scalability and performance.

## Tech Stack 💻

### Frontend

- **React:** Declarative and component-based UI development.
- **Vite:** Fast build times and an optimized development server.
- **Tailwind CSS:** Utility-first CSS framework for a consistent design.
- **Axios:** Handling HTTP requests for data communication.
- **React Router:** Dynamic routing for a seamless user experience.

### Backend

- **Cloudflare Workers:** Serverless platform for scalable and performant backend.
- **JavaScript (Node.js):** Language for building serverless functions.
- **JWT (JSON Web Tokens):** Secure authentication between frontend and backend.

## Project Structure 📁

### Frontend

The frontend is organized as follows:

- **`public/`:** Contains the HTML file and other public assets.
- **`src/`:**
  - **`components/`:** Reusable React components.
  - **`pages/`:** Individual pages of the application.
  - **`hooks/`:** Custom React hooks for data fetching.
  - **`styles/`:** Stylesheets, particularly Tailwind CSS configuration.
  - **`config.tsx`:** Configuration file with constants like the backend URL.
  - **`main.tsx`:** Entry point for the React application.

### Backend

The backend consists of serverless functions deployed on Cloudflare Workers:

- **`workers/`:**
  - **`src/`:**
    - **`routes/`:** Contains route handlers for different API endpoints.
    - **`middlewares/`:** Middlewares for authentication, error handling, etc.
    - **`utils/`:** Utility functions.
    - **`index.js`:** Entry point for the Cloudflare Worker script.

## Backend Setup 🔧

1. **Prerequisites:**

   - Sign up for a [Cloudflare account](https://www.cloudflare.com/).
   - Install the [Wrangler CLI](https://developers.cloudflare.com/workers/cli-wrangler/install).

2. **Cloudflare Workers Configuration:**

   - Log in to Cloudflare using `wrangler login`.
   - Copy the `wrangler.example.toml` file to `wrangler.toml` and replace the placeholder values with your Cloudflare account details.

3. **Environment Variables:**

   - Create a `.env` file in the `workers/` directory.
   - Add the following variables:
     ```env
     SECRET_KEY=<your_secret_key>
     ```

4. **Deploy the Backend:**
   - Navigate to the `workers/` directory.
   - Run `wrangler publish` to deploy the backend to Cloudflare Workers.

## Frontend Setup 🔧

1. **Prerequisites:**

   - Ensure Node.js, TypeScript and npm are installed on your system.

2. **Frontend Setup:**
   - Clone the repository and navigate to the `frontend` directory.
   - Install dependencies: `npm install`.
   - Start the development server: `npm run dev`.

## Building and Deployment 🚀

1. **Frontend:**

   - Build the frontend project: `npm run build`.

2. **Backend:**
   - Deploy any changes to the backend using `wrangler publish`.

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
