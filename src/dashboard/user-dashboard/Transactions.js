import React, { PureComponent } from "react";
import Table from "./Table";

const headers = ["Transaction type", "Amount", "Date", "Status"];

const ItemComponent = ({ item }) => {
  return (
    <>
      <td scope="row">{item?.title}</td>
      <td>₦{(item?.amount).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, "$&,")}</td>
      <td>{item?.date_completed}</td>
      <td>{item?.status}</td>
    </>
  );
};

class Transactions extends PureComponent {
  render() {
    return (
      <Table
        headers={headers}
        ItemComponent={ItemComponent}
        type="transactions"
      />
    );
  }
}

export default Transactions;
