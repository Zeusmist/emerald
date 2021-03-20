import React, { PureComponent } from "react";
import Table from "./Table";

const headers = [
  "Payout amount",
  "Investment type",
  "Date",
  "Category",
  "Status",
];

const ItemComponent = ({ item }) => {
  return (
    <>
      <td></td>
    </>
  );
};

class Payouts extends PureComponent {
  render() {
    return (
      <Table headers={headers} ItemComponent={ItemComponent} type="payouts" />
    );
  }
}

export default Payouts;
