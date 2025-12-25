import React, { useState } from "react";
import SearchProduct from "./SearchProdct";
import ProductList from "./ProductList";
import CategoryBoxes from "./Categorybox";
import AdBanner from "./AdBanner";

export default function ParentCompo() {
  const [searchItem, setSearchItem] = useState("");
  const [showProducts, setShowProducts] = useState(false);

  const handleSearch = (value) => {
    setSearchItem(value);
    setShowProducts(true);
  };

  return (
    <>
      <SearchProduct setSearchItem={handleSearch} />

      {!showProducts && (
        <>
          <AdBanner />
          <CategoryBoxes />
        </>
      )}

      {showProducts && <ProductList searchItem={searchItem} />}
    </>
  );
}
