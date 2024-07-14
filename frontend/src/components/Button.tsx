// Button.tsx
import { Link } from "react-router-dom";

const Button = () => {
  return (
    <Link to="/publish">
      <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full my-6">
        Add New Blog !
      </button>
    </Link>
  );
};

export default Button;
