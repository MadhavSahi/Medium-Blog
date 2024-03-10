// import React from 'react'

import { BrowserRouter, Route, Routes } from "react-router-dom";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Blogs from "./pages/Blogs";
import Error from "./pages/Error";
// import Home from "./pages/Home";
import BlogId from "./pages/BlogId";
import PublishBlog from "./pages/PublishBlog";
import Header from "./components/Header";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Header isLoggedIn={true} username={"username"} />
        <Routes>
          <Route path="/" element={<SignUp />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/blog/:id" element={<BlogId />} />
          <Route path="/publish" element={<PublishBlog />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
