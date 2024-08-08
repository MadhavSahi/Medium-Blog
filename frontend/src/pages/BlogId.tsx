import { useParams } from "react-router-dom";
import useSingleBlog from "../hooks/useSingleBlog";
import SingleBlog from "../components/SingleBlog";

const BlogId = () => {
  const { id } = useParams();
  const { loading, singleblog } = useSingleBlog({ id: id || "" });
  const shimmerStyles = {
    width: "100%",
    height: "20px",
    backgroundColor: "#f0f0f0", // Shimmer background color
    animation: "shimmer 1s infinite linear", // Shimmer animation
  };
  if (loading) {
    return (
      <>
        <div>
          {/* Shimmer effect for loading state */}
          {!singleblog && (
            <>
              <div style={shimmerStyles}></div>
              <div style={{ ...shimmerStyles, width: "80%" }}></div>
              <div style={{ ...shimmerStyles, width: "60%" }}></div>
            </>
          )}
        </div>
      </>
    );
  }
  return (
    
      <div>
        <SingleBlog singleblog={singleblog} />
      </div>
    
  );
};

export default BlogId;
