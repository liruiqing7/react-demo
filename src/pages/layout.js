import React from "react";
import { Link, Outlet } from "react-router-dom";

const LayOut = () => {
  return (
    <div>
      this is Layout
      <div>
        <Link className="block" to="/board">
          面板
        </Link>
        <Link to="/article">文章</Link>
        <Link to="/user">用户</Link>
      </div>
      <Outlet />
    </div>
  );
};

export default LayOut;
