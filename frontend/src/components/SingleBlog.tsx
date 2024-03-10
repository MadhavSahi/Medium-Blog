interface singleBlog {
  id: string;
  title: string;
  content: string;
  author: {
    username: string;
  };
}

interface SingleBlogProps {
  singleblog: singleBlog | undefined;
}

const SingleBlog = ({ singleblog }: SingleBlogProps) => {
  return (
    <div className="container mx-auto my-8">
      {singleblog && (
        <div className="flex flex-col items-center justify-center">
          <div className="max-w-2xl w-full bg-white p-6 rounded-md shadow-lg">
            <h1 className="text-3xl font-bold mb-4">{singleblog.title}</h1>
            <p className="text-gray-600 mb-4">{singleblog.content}</p>
            <div className="flex items-center justify-between">
              <p className="text-sm text-gray-500">
                Author: {singleblog.author.username}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SingleBlog;
