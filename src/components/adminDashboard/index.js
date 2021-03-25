import React, { PureComponent, useState, useRef, useEffect } from "react";
import { connect } from "react-redux";
import { toast } from "react-toastify";
import { baseUrl } from "../../config";
import Spinner from "../Spinner";
import useRootClose from "react-overlays/useRootClose";
import InvestmentsChart from "./adminRoutes/InvestmentsChart";

const InvestmentsInfo = ({ onOpen, isOpen, onClose, userId, token }) => {
  const [investmentData, setInvestmentData] = useState([]);
  const [isFetchingInvestments, setIsFetchingInvestments] = useState(true);

  const ref = useRef();
  useRootClose(ref, onClose, {
    disabled: !isOpen,
  });

  useEffect(async () => {
    await fetch(`${baseUrl}/api/v1/users/getAllInvestments?_owner=${userId}`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log({ data });
        if (data?.code == 200) {
          setInvestmentData(data?.data);
        } else toast.error(data?.message);
      });
    setIsFetchingInvestments(false);
  }, []);

  return (
    <td className="editButton">
      <button className="actionBut" onClick={onOpen}>
        View
      </button>
      {isOpen && (
        <div
          ref={ref}
          className="editButtonModal infoModal"
          style={{ top: "50px", minWidth: "320px" }}
        >
          <h6>Farm List Info</h6>
          <div>
            {investmentData.map((investment, i) => (
              <div
                key={i}
                style={{ display: "flex", justifyContent: "space-between" }}
              >
                {investment?.farm?.name ? (
                  <div>{investment?.farm?.name}</div>
                ) : (
                  <div>Farm info missing</div>
                )}
                <div style={{ fontWeight: "bold" }}>
                  ₦
                  {(investment?.amount)
                    .toFixed(2)
                    .replace(/\d(?=(\d{3})+\.)/g, "$&,")}
                </div>
              </div>
            ))}
          </div>
          {isFetchingInvestments ? (
            <Spinner size="lg" />
          ) : investmentData.length == 0 ? (
            <div style={{ fontWeight: "bold" }}>No active investments</div>
          ) : null}
        </div>
      )}
    </td>
  );
};

class AdminDashboard extends PureComponent {
  state = { users: [], investments: [] };

  getUsers = async () => {
    let users = [];
    let userTypes = ["user"];
    for (const i in userTypes) {
      const user = userTypes[i];
      await fetch(`${baseUrl}/api/v1/admin/users?role=${user}`, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${this.props.token}`,
          "Content-Type": "application/json",
        },
      })
        .then((res) => res.json())
        .then((data) => {
          console.log("Get users data", data);
          if (data?.code == 200) {
            [...data?.data].forEach((user) => {
              users.push({ ...user, totalInvestments: 0 });
            });
            // users.push(...data?.data);
          } else {
            toast.error(data?.message);
          }
        })
        .catch((e) => {
          console.log(e);
        });
    }
    this.setState({ users });
  };

  getInvestments = async () => {
    let investments = [];

    await fetch(`${baseUrl}/api/v1/admin/getAllInvestments`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${this.props.token}`,
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("Get all inestments data", data);
        if (data?.code == 200) {
          // get all users, then calculate total investments by going through all investments where owner_id == user_id
          investments.push(...data?.data);
        } else {
          toast.error(data?.message);
        }
      });

    this.setState({ investments });
  };

  componentDidMount() {
    this.setState({ isFetchingInvestors: true }, async () => {
      await this.getUsers();
      await this.getInvestments();
      let { users, investments } = this.state;

      investments.forEach((investment, i) => {
        const thisUserIndex = users.findIndex(
          (user) => user?._id == investment?._owner?._id
        );
        console.log({ thisUserIndex });
        if (thisUserIndex != -1) {
          const updatedUser = {
            ...users[thisUserIndex],
            totalInvestments:
              typeof users[thisUserIndex]?.totalInvestments == "number"
                ? users[thisUserIndex]?.totalInvestments + investment?.amount
                : 0,
          };

          users[thisUserIndex] = { ...updatedUser };

          users = users.sort(
            ({ totalInvestments: a }, { totalInvestments: b }) => b - a
          );
        }
      });

      this.setState({ users, isFetchingInvestors: false });
    });
  }

  render() {
    const { isFetchingInvestors, users, investmentsModalIsOpen } = this.state;

    return (
      <div className="dashboard col-md-12" style={{ height: "100%" }}>
        <div className="farmtitle">
          <h4 style={{ color: "#191D38" }}>Farm Sales Revenue</h4>
        </div>
        <InvestmentsChart token={this.props.token} />

        <div className="farmtitle">
          <h4 style={{ color: "#191D38" }}>Leading Investors</h4>
        </div>

        <div className="farmList mt-4 p-4">
          <div
            class="table-responsive"
            style={{ overflow: users.length < 1 ? "hidden" : "auto" }}
          >
            <table class="table farmTable ">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Name</th>
                  <th scope="col">Email</th>
                  <th scope="col">Farm List</th>
                  <th scope="col">Total Amount Invested</th>
                </tr>
              </thead>
              {users.length > 0 && (
                <tbody>
                  {!isFetchingInvestors &&
                    users.map((user, i) => (
                      <tr key={i} className="tr">
                        <th scope="row">{i + 1}</th>
                        <td>{user?.firstName + " " + user?.lastName}</td>
                        <td>{user?.email}</td>
                        {investmentsModalIsOpen == user?._id ? (
                          <InvestmentsInfo
                            onOpen={() =>
                              this.setState({
                                investmentsModalIsOpen: user?._id,
                              })
                            }
                            isOpen={investmentsModalIsOpen == user?._id}
                            onClose={() =>
                              this.setState({ investmentsModalIsOpen: false })
                            }
                            userId={user?._id}
                            token={this.props.token}
                          />
                        ) : (
                          <td className="editButton">
                            <button
                              className="actionBut"
                              onClick={() =>
                                this.setState({
                                  investmentsModalIsOpen: user?._id,
                                })
                              }
                            >
                              View
                            </button>
                          </td>
                        )}
                        <td style={{ fontWeight: "bold" }}>
                          ₦
                          {(user?.totalInvestments)
                            .toFixed(2)
                            .replace(/\d(?=(\d{3})+\.)/g, "$&,")}
                        </td>
                      </tr>
                    ))}
                </tbody>
              )}
            </table>
            {users.length == 0 && (
              <div style={{ textAlign: "center", padding: "10px" }}>
                {isFetchingInvestors ? (
                  <Spinner size="lg" />
                ) : (
                  <div className="emptyList">No users added</div>
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
  AdminDashboard
);
