import React, { PureComponent } from "react";
import Table from "./Table";

const headers = ["Amount", "Date", "Method"];

const ItemComponent = ({ item }) => {
  return (
    <>
      <td scope="row">
        ₦{(item?.amount).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, "$&,")}
      </td>
      <td>{item?.date_completed}</td>
      <td>{item?.from}</td>
    </>
  );
};

class Deposits extends PureComponent {
  render() {
    return (
      <Table headers={headers} ItemComponent={ItemComponent} type="deposits" />
    );
  }
}

export default Deposits;
