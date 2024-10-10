import "./App.css";

import React, { useState } from "react";
import ExpenseFilter from "./componetns/ExpenseFilter";
import ExpenseList from "./componetns/ExpenseList";
import ExpenseForm from "./componetns/ExpenseForm";

export const categories = ["Entertainment", "Groceries", "Utilities"];

export default function App() {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [data, setData] = useState([
    {
      id: 1,
      description: "hellow heow are uoif",
      amount: 445,
      category: "Utilities",
    },
    {
      id: 2,
      description: "hellow heow are uoif",
      amount: 445,
      category: "Entertainment",
    },
    {
      id: 3,
      description: "hellow heow are uoif",
      amount: 445,
      category: "Groceries",
    },
    {
      id: 4,
      description: "hellow heow are uoif",
      amount: 445,
      category: "Entertainment",
    },
  ]);

  function onSubmit(item) {
    setData([...data, { ...item ,id: data.length + 1}]);
  }
  console.log(data);
  

  function onDelete(id) {
      setData(data.filter((item) => item.id !== id));
  }
  const visualData = !selectedCategory||selectedCategory==='all'
    ? data
    : data.filter((e) => e.category === selectedCategory);
    console.log(selectedCategory);
    
  return (
    <>
      <div className="container">
        <div>
          <ExpenseForm onSubmit={onSubmit} />
        </div>
        <div>
          <ExpenseFilter
            categories={categories}
            onSelect={(category) => setSelectedCategory(category)}
          />
        </div>
        <div>
          <ExpenseList data={visualData} setDelete={onDelete}></ExpenseList>
        </div>
      </div>
    </>
  );
}
