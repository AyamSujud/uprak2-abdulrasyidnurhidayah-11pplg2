import React from "react";
import { Link } from 'react-router-dom';
import { useEffect, useState } from "react";

const Card = () => {
  const [post, setPost] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts?_limit=6")
      .then((respon) => respon.json())
      .then((data) => setPost(data))
  }, []);

  return (
    <div className="grid grid-cols-3 gap-6">
      {post.map((post) => (
        <div key={post.id}className="p-4">
          <div>
            <Link to="/MaintenancePage" className="w-full block text-center text-white py-20 px-4 rounded-md bg-gray-400"></Link>
            <h2 className="text-xl font-semibold mb-2">{post.title}</h2>
            <p className="text-gray-600 mb-4">{post.body}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Card;
