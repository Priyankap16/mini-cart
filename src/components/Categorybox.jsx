import { useNavigate } from "react-router-dom";
import "./Categories.css";

export default function CategoryBoxes() {
  const navigate = useNavigate();

  const handleCategoryBox = (categoryId) => {
    navigate(`/category/${categoryId}`);
  };

  return (
    <div className="category-grid">
      <div
        className="category-card"
        onClick={() => handleCategoryBox("men")}
      >
        Men's Clothing
      </div>

      <div
        className="category-card"
        onClick={() => handleCategoryBox("women")}
      >
        Women's Clothing
      </div>

      <div
        className="category-card"
        onClick={() => handleCategoryBox("jewelery")}
      >
        Jewelry
      </div>

      <div
        className="category-card"
        onClick={() => handleCategoryBox("electronics")}
      >
        Electronics
      </div>
    </div>
  );
}
