import React from "react";
import { Link } from "react-router-dom";
import Avatar from "./Avatar";

interface HeaderProps {
  isLoggedIn: boolean;
  username?: string;
}

const Header: React.FC<HeaderProps> = ({ isLoggedIn, username }) => {
  return (
    <div className="bg-gray-900 text-white p-4">
      <div className="container mx-auto flex items-center justify-between">
        <Link to="/" className="text-2xl font-bold">
          Medium
        </Link>
        {isLoggedIn ? (
          <div className="flex items-center">
            <p className="mr-4">{username}</p>
            <Avatar initial={username ? username[0] : "U"} />
          </div>
        ) : (
          <Link to="/signin" className="text-white">
            Sign In
          </Link>
        )}
      </div>
    </div>
  );
};

export default Header;
