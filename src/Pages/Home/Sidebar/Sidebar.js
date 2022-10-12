import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/news-category")
      .then((res) => res.json())
      .then((data) => setCategories(data.data.news_category));
  }, []);
  return (
    <div>
      <h4>All Category</h4>
      <div class="flex flex-column">
        {categories?.map((category) => {
          return (
            <div class=" mb-3">
              <Link to={`/${category.category_id}`}>
                {category.category_name}
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Sidebar;
