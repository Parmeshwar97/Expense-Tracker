import React from "react";
import { categories } from "../App";
import { useForm } from "react-hook-form";
export default function ExpenseForm({ onSubmit }) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  return (
    <form onSubmit={handleSubmit(data=>{onSubmit(data);reset()})} className="form-data">
      <div className="inputs">
        <label htmlFor="">Description</label>
        <input
          {...register("description", { required: true, minLength: 3 })}
          type="text"
          name="description"
        />
        {errors.description?.type === "required" && (
          <p className="err-para">Please enter at least 3 characters!</p>
        )}
      </div>

      <div className="inputs">
        <label htmlFor="">Amount</label>
        <input
          {...register("amount", { required: true })}
          type="number"
          name="amount"
        />
        {errors.amount?.type === "required" && (
          <p className="err-para">Amount is Required!</p>
        )}
      </div>

      <div className="inputs">
        <label htmlFor="category">Category</label>
        <select
          {...register("category", { required: true })}
          name="category"
          className="categories"
        >
          <option value="">Select category</option>
          {categories.map((cat) => (
            <option key={cat} value={cat}>
              {cat}
            </option>
          ))}
        </select>
        {errors.category?.type === "required" && (
          <p className="err-para">Category is Required!</p>
        )}
      </div>
      <button className="submit-btn" type="submit">
        Submit
      </button>
    </form>
  );
}
