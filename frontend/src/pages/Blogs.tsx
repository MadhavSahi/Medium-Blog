import BlogCard from "../components/BlogCard";
import Button from "../components/Button";
import useBlogs from "../hooks/useBlogs";

const Blogs = () => {
  const { loading, blogs } = useBlogs();

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div className="container mx-auto my-8">
      <Button />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogs.map((each_blog) => (
          <BlogCard
            key={each_blog.id}
            authorName={each_blog.author.username}
            publishedDate={each_blog.publishedDate}
            title={each_blog.title}
            content={each_blog.content}
            id={each_blog.id}
          />
        ))}
      </div>
    </div>
  );
};

export default Blogs;
