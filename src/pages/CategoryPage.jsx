import React from "react";
import { useParams } from "react-router-dom";
import ProductsByCategory from "../components/ProductByCategory";

export default function CategoryPage() {
  const { category } = useParams();
  return <ProductsByCategory category={category} />;
}
