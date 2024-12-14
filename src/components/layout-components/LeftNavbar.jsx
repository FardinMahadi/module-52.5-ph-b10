import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

const LeftNavbar = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("https://openapi.programming-hero.com/api/news/categories")
      .then((res) => res.json())
      .then((data) => {
        setCategories(data.data.news_category);
      });
  }, []);

  return (
    <div>
      <h2 className="text-xl font-semibold mb-3">All Caterogy</h2>
      <div className="flex flex-col bg-gray-200 rounded-md max-w-60 overflow-hidden">
        {categories.map((category) => (
          <NavLink
            to={`/category/${category.category_id}`}
            key={category.category_id}
            className="btn bg-transparent text-black border-none shadow-none hover:text-white transition px-5 py-2 rounded-none"
          >
            {category.category_name}
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default LeftNavbar;
