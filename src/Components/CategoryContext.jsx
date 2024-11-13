import React, { createContext, useState, useEffect } from 'react';
export const CategoryContext = createContext();
export const CategoryProvider = ({ children }) => {
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);
  useEffect(() => {
    async function fetchCategories() {
      const categoryData = await new Promise(resolve =>
        setTimeout(() => resolve(['Electronics', 'Clothing', 'Accessories', 'Home Appliances']), 1000)
      );
      setCategories(categoryData);
    }
    fetchCategories();
  }, []);
  return (
    <CategoryContext.Provider value={{ categories, selectedCategory, setSelectedCategory }}>
      {children}
    </CategoryContext.Provider>
  );
};