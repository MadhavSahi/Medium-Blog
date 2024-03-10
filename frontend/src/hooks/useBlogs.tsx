import axios from "axios";
import { useEffect, useState } from "react";
import { BACKEND_URL } from "../config";
interface BlogCardProps {
  author: {
    username: string;
  };
  title: string;
  content: string;
  publishedDate: string;
  id: string;
}
const useBlogs = () => {
  const [loading, setLoading] = useState<boolean>(true);
  const [blogs, setBlogs] = useState<BlogCardProps[]>([]);
  const fetchBlogs = async () => {
    try {
      const result = await axios.get(`${BACKEND_URL}/api/v1/blog/bulk`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("JWT_TOKEN")}`,
        },
      });
      setBlogs(result.data.blogs);
      setLoading(false);
    } catch (error) {
      alert(error);
    }
  };

  useEffect(() => {
    fetchBlogs();
  }, []);

  return {
    loading,
    blogs,
  };
};

export default useBlogs;
