import { Component } from "react";
import { products } from "../data/data.js";
class FilterData extends Component {
  render() {
    const filteredData = products.filter((item) => {
      return item.quantity <= 2 ? item : "";
    });
    console.log(filteredData);
    return (
      <div>
        <table border={1}>
          <tr>
            <th>Name of Item</th>
            <th>Price of Item</th>
            <th>Quantity </th>
          </tr>
          {filteredData.map((item) => {
            return (
              <tr>
                <td>{item.title}</td>
                <td>{item.price}</td>
                <td>{item.quantity}</td>
              </tr>
            );
          })}
        </table>
      </div>
    );
  }
}
export default FilterData;
