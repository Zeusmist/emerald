import React, { PureComponent } from "react";
import Spinner from "../Spinner";
import { getParameterByName } from "../../utils/urls";
import { connect } from "react-redux";
import { toast } from "react-toastify";
import { baseUrl } from "../../config";

Date.prototype.addDays = function (days) {
  var date = new Date(this.valueOf());
  date.setDate(date.getDate() + days);
  return date;
};

class InvestmentHistory extends PureComponent {
  state = { investments: [] };

  componentDidMount() {
    const userId = getParameterByName("id");
    this.setState({ userId, isFetchingInvestments: true }, async () => {
      if (userId) {
        await fetch(
          `${baseUrl}/api/v1/users/getAllInvestments?_owner=${userId}`,
          {
            method: "GET",
            headers: {
              Authorization: `Bearer ${this.props.token}`,
              "Content-Type": "application/json",
            },
          }
        )
          .then((res) => res.json())
          .then(async (data) => {
            console.log("Get investments data", data);
            if (data?.code == 200) {
              this.setState({
                investments: data?.data,
              });
            } else {
              toast.error(data?.message);
            }
          })
          .catch((e) => console.log(e));
        this.setState({ isFetchingInvestments: false });
      }
    });
  }

  render() {
    const { isFetchingInvestments, investments } = this.state;

    return (
      <div className="dashboard col-md-12" style={{ height: "100%" }}>
        <div className="farmtitle">
          <h4 style={{ color: "#191D38" }}>Investment History</h4>
        </div>

        <div className="farmList isLong mt-4 p-4">
          <div
            class="table-responsive"
            style={{ overflow: investments.length < 1 ? "hidden" : "auto" }}
          >
            <table class="table farmTable isLong">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Title</th>
                  <th scope="col">
                    Price <small>/unit</small>
                  </th>
                  <th scope="col">Start Date</th>
                  <th scope="col">End Date</th>
                  <th scope="col">Units</th>
                  <th scope="col">Interest%</th>
                  <th scope="col">Maturity Date</th>
                  <th scope="col">Status</th>
                  {/* <th scope="col">Actions</th> */}
                </tr>
              </thead>
              {investments.length > 0 && (
                <tbody>
                  {investments.map((investment, i) => (
                    <tr key={i} className="tr">
                      <th scope="row">{i + 1}</th>
                      <td>{investment?.farm?.name}</td>
                      <td>
                        ₦
                        {Number(
                          investment?.farm?.cost_per_unit["$numberDecimal"]
                        )
                          .toFixed(2)
                          .replace(/\d(?=(\d{3})+\.)/g, "$&,")}
                      </td>
                      <td>{new Date(investment?.start_date).toDateString()}</td>
                      <td>{new Date(investment?.start_date).toDateString()}</td>
                      <td>{investment?.no_of_units}</td>
                      <td>{investment?.farm?.return["$numberDecimal"]}%</td>
                      <td>
                        {new Date(
                          investment?.farm?.closing_date
                        ).toDateString()}
                      </td>
                      <td>{investment?.status}</td>
                      {/* <td>
                        <button className="moreBut">More</button>
                      </td> */}
                    </tr>
                  ))}
                </tbody>
              )}
            </table>
            {investments.length == 0 && (
              <div style={{ textAlign: "center", padding: "10px" }}>
                {isFetchingInvestments ? (
                  <Spinner size="lg" />
                ) : (
                  <div className="emptyList">No investments active</div>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default connect((state) => ({ token: state.auth?.token }))(
  InvestmentHistory
);
