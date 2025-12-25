import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import ProductItem from "./ProductItem";
import "./ProductList.css";

const categoryMap = {
  men: "men's clothing",
  women: "women's clothing",
  jewelery: "jewelery",
  electronics: "electronics",
};

export default function CategoryPage() {
  const { categoryId } = useParams();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const apiCategory = categoryMap[categoryId];

    if (!apiCategory) return;

    fetch(`https://fakestoreapi.com/products/category/${apiCategory}`)
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, [categoryId]);

  return (
    <div className="product-grid">
      {products.map((p) => (
        <ProductItem key={p.id} product={p} />
      ))}
    </div>
  );
}
