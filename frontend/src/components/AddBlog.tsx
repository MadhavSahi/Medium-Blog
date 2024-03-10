import axios from "axios";
import { BACKEND_URL } from "../config";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const AddBlog = () => {
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  const handleContent = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setContent(e.target.value);
  };

  const handleSubmit = async () => {
    try {
      const response = await axios.post(
        `${BACKEND_URL}/api/v1/blog`,
        {
          title: title,
          content: content,
        },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("JWT_TOKEN")}`,
          },
        }
      );

      navigate(`/blog/${response.data.id}`);
    } catch (error) {
      console.error("Error submitting the blog:", error);
    }
  };

  return (
    <div className="max-w-md mx-auto mt-8 p-4 bg-white rounded-md shadow-md">
      <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="title">
        Title:
      </label>
      <input
        className="w-full border border-gray-300 rounded-md py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
        id="title"
        type="text"
        placeholder="Enter title"
        onChange={handleTitle}
      />

      <label className="block text-gray-700 text-sm font-bold mt-4 mb-2" htmlFor="content">
        Content:
      </label>
      <textarea
        className="w-full border border-gray-300 rounded-md py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
        id="content"
        placeholder="Enter content"
        onChange={handleContent}
      ></textarea>

      <button
        onClick={handleSubmit}
        className="mt-6 bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-full focus:outline-none"
      >
        Submit
      </button>
    </div>
  );
};

export default AddBlog;
