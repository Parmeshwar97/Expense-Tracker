import React from "react";
import { categories } from "../App";
function ExpenseFilter({ onSelect }) {
  return (
    <div>
      <select
        name="categories"
        className="categories"
        onChange={(e) => onSelect(e.target.value)}
      >
        <option value="all">All categories</option>
        {categories.map((cat) => (
          <option key={cat} value={cat}>{cat}</option>
        ))}
      </select>
    </div>
  );
}

export default ExpenseFilter;
