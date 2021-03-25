import React, { PureComponent } from "react";
import Table from "./Table";

const headers = ["Transaction type", "Amount", "Date", "Status"];

const ItemComponent = ({ item }) => {
  const color =
    item?.status == "successful"
      ? "green"
      : item?.status == "unsuccessful"
      ? "red"
      : "initial";
  return (
    <>
      <td scope="row">{item?.title}</td>
      <td>₦{(item?.amount).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, "$&,")}</td>
      <td>{item?.date_completed}</td>
      <td style={{ color }}>{item?.status}</td>
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
