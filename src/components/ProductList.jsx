import React, { useEffect, useState } from "react";
import ProductItem from "./ProductItem";
import "./ProductList.css";


export default function ProductList({searchItem}) {
 const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((r) => r.json())
      .then((data) => setProducts(data))
      .finally(() => setLoading(false));
  }, []);

  const filtered = products.filter(p =>
    p.title.toLowerCase().includes(searchItem.toLowerCase())
  );

  if (loading) return <p>Loading...</p>;

  return (
    <div className="product-grid">
      {filtered.map((p) => (
        <ProductItem key={p.id} product={p} />
      ))}
    </div>
  );
}
