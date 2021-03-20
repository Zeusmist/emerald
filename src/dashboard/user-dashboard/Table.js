import React, { PureComponent } from "react";
import "../navbar/navStyle.css";
import Spinner from "../../components/Spinner";
import { baseUrl } from "../../config";
import { connect } from "react-redux";
import { toast } from "react-toastify";

class Table extends PureComponent {
  state = {
    data: [],
  };

  fetchTransactions = (type) => {
    const { user_id, token } = this.props;
    this.setState({ isFetchingData: true }, async () => {
      await fetch(
        `${baseUrl}/api/v1/users/getTransactions?_owner=${user_id}${
          type ? `&type=${type}` : ""
        }&sort=-createdAt&limit=30&page=1`,
        {
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }
      )
        .then((res) => res.json())
        .then((data) => {
          console.log("fetch transactions data", data);
          if (data?.code == 200) {
            const reversedData = data?.data.reverse();
            this.setState({ data: reversedData });
          } else {
            toast.error(data?.message);
          }
        })
        .catch((e) => {
          console.log(e);
          toast.error(e?.response?.data?.message);
        });
      this.setState({ isFetchingData: false });
    });
  };

  fetchInvestments = () => {
    console.log(this.props.investments);
    this.setState({ data: this.props.investments });
  };

  fetchPayouts = () => this.fetchTransactions("payout");
  fetchDeposits = () => this.fetchTransactions("deposit");

  async componentDidMount() {
    switch (this.props.type) {
      case "transactions":
        this.fetchTransactions();
        return;
      case "investments":
        await this.fetchInvestments();
        return;
      case "payouts":
        await this.fetchPayouts();
        return;
      case "deposits":
        await this.fetchDeposits();
        return;
      default:
        return null;
    }
  }

  render() {
    const { headers, ItemComponent, type } = this.props;
    const { isFetchingData, data } = this.state;
    return (
      <div className="farmList mt-4 p-4">
        <div
          class="table-responsive"
          style={{ overflow: data.length < 1 ? "hidden" : "auto" }}
        >
          <table class="table">
            <thead>
              <tr>
                {headers.map((header, i) => (
                  <th key={i} scope="col">
                    {header}
                  </th>
                ))}
              </tr>
            </thead>
            {data.length > 0 && (
              <tbody>
                {data.map((item, i) => (
                  <tr key={i} className="dashboardTable">
                    <ItemComponent item={item} />
                  </tr>
                ))}
              </tbody>
            )}
          </table>
          {data.length < 1 && (
            <div style={{ textAlign: "center", padding: "10px" }}>
              {isFetchingData ? (
                <Spinner size="" />
              ) : (
                // <div className="emptyList" style={{ fontSize: "20px", fontWeight: "bold" }}>
                <div className="emptyList">
                  You have not made any {type} yet
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    );
  }
}

const mapState = (state) => {
  return {
    user_id: state.auth?.id,
    token: state.auth?.token,
    investments: state.investments,
  };
};

export default connect(mapState)(Table);
