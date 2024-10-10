import { categories } from "../App";

export default function ExpenseList({ data, setDelete }) {
  if (data.length == 0) return null;
  return (
    <table>
      <thead>
        <tr>
          <th>Description</th>
          <th>Amount</th>
          <th>Category</th>
          <th></th>
        </tr>
      </thead>

      <tbody>
        {data.map((item, i) => {
          return (
            <tr key={i}>
              <td>{item.description}</td>
              <td>₹{item.amount}</td>
              <td>{item.category}</td>

              <td>
                <button className="dlt-btn" onClick={() => setDelete(item.id)}>
                  Delete
                </button>
              </td>
            </tr>
          );
        })}
      </tbody>
      <tfoot>
        <tr>
          <th>Total</th>
          <td>₹{data.reduce((acc, e) => parseInt(e.amount) + acc, 0)}</td>
          <td></td>
          <td></td>
        </tr>
      </tfoot>
    </table>
  );
}
