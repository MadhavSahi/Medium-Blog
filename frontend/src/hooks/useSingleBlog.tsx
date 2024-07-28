import axios from "axios";
import { useEffect, useState } from "react";
import { BACKEND_URL } from "../config";
interface BlogCardProps {
  author: {
    username: string;
  };
  title: string;
  content: string;
  id: string;
}
const useSingleBlog = ({id}:{id:string}) => {
  const [loading, setLoading] = useState<boolean>(true);
  const [singleblog, setSingleBlog] = useState<BlogCardProps>();
  const fetchSingleBlog = async () => {
    try {
      //console.log("heyy");

      const result = await axios.get(`${BACKEND_URL}/api/v1/blog/${id}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("JWT_TOKEN")}`,
        },
      });
      //   console.log("heyy2");
      setSingleBlog(result.data.blog);
      //   console.log("heyy3");
      setLoading(false);
    } catch (error) {
      alert(error);
    }
  };

  useEffect(() => {
    fetchSingleBlog();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  return {
    loading,
    singleblog,
  };
};

export default useSingleBlog;
