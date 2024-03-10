// BlogCard.tsx
import { Link } from "react-router-dom";
import Avatar from "./Avatar";

interface BlogCardProps {
  id: string;
  authorName: string;
  publishedDate: string;
  title: string;
  content: string;
}

const BlogCard = ({ id, authorName, publishedDate, title, content }: BlogCardProps) => {
  return (
    <div className="border bg-white p-4 mb-4 rounded-lg shadow-md">
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center space-x-2">
          <Avatar initial={authorName[0]} />
          <p className="text-lg font-semibold">{authorName}</p>
        </div>
        <p className="text-sm text-gray-500">{publishedDate}</p>
      </div>
      <Link to={`/blog/${id}`}>
        <p className="text-xl font-medium mb-2 hover:text-blue-500">{title}</p>
      </Link>
      <p className="text-md text-gray-700 mb-2">{content.slice(0, 250) + "...."}</p>
      <p className="text-md text-gray-600">{Math.ceil(content.length / 100) + " mins read"}</p>
    </div>
  );
};

export default BlogCard;
