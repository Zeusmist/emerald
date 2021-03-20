import React, { PureComponent, useRef, useState } from "react";
import { connect } from "react-redux";
import { toast } from "react-toastify";
import { baseUrl } from "../../config";
import Spinner from "../Spinner";
import useRootClose from "react-overlays/useRootClose";
import ConfirmationModal from "./ConfirmationModal";
import { useHistory } from "react-router";

const ActionButton = ({
  id,
  token,
  isOpen,
  onOpen,
  options,
  onClose,
  getUsers,
}) => {
  const [confirmationModalOpen, setConfirmationModalOpen] = useState(false);

  const history = useHistory();
  const ref = useRef();
  useRootClose(ref, onClose, {
    disabled: !isOpen,
  });

  const handleOptionClick = (i) => {
    if (i == 0) {
      //Navigate to user page
      history.replace(`/userprofile?id=${id}`);
    }
    if (i == 1) {
      // Delete user
      setConfirmationModalOpen({
        i,
        message: "Are you sure you want to Delete this User",
      });
    }
  };

  const handleConfirm = async () => {
    let headers = {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    };

    if (confirmationModalOpen?.i == 1) {
      await fetch(`${baseUrl}/api/v1/admin/users/${id}`, {
        method: "DELETE",
        headers,
      })
        .then((res) => res.json())
        .then((data) => {
          console.log("Data after delete", data);
          if (data?.code == 200) {
            toast.success(data?.message);
            getUsers();
            setConfirmationModalOpen(false);
          } else {
            toast.error(data?.message);
          }
        })
        .catch((e) => console.log(e));
    }
  };

  return (
    <td className="editButton">
      <button className="actionBut" onClick={onOpen}>
        Edit
      </button>
      {isOpen && (
        <div ref={ref} className="editButtonModal">
          {options.map((option, i) => (
            <div key={i} onClick={() => handleOptionClick(i)}>
              {option.name}
            </div>
          ))}
        </div>
      )}
      <ConfirmationModal
        isOpen={!!confirmationModalOpen}
        closeModal={() => setConfirmationModalOpen(false)}
        message={confirmationModalOpen?.message}
        handleConfirm={handleConfirm}
      />
    </td>
  );
};

class Users extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      isFetchingUsers: true,
      users: [],
      options: [
        { name: "View Profile" },
        { name: "Delete User" },
        // { name: "Help book a farm" },
      ],
    };
  }

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
            users.push(...data?.data);
          } else {
            toast.error(data?.message);
          }
        })
        .catch((e) => {
          console.log(e);
        });
    }
    this.setState({ users, isFetchingUsers: false });
  };

  async componentDidMount() {
    await this.getUsers();
  }

  handleEditButton = (id) => {
    this.setState({ editModalIsOpen: id });
  };

  render() {
    const { activeUserRole, token } = this.props;
    const { options, users, isFetchingUsers, editModalIsOpen } = this.state;
    const isSuperAdmin = activeUserRole == "superadmin";
    return (
      <div className="dashboard col-md-12" style={{ height: "100%" }}>
        <div className="farmtitle">
          <h4 style={{ color: "#191D38" }}>Users</h4>
        </div>

        <div className="farmList mt-4 p-4">
          <div
            class="table-responsive"
            style={{ overflow: users.length < 1 ? "hidden" : "auto" }}
          >
            <table class="table farmTable">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Name</th>
                  <th scope="col">Email</th>
                  <th scope="col">Status</th>
                  <th scope="col">Action</th>
                </tr>
              </thead>
              {users.length > 0 && (
                <tbody>
                  {users.map((user, i) => (
                    <tr key={i} className="tr">
                      <th scope="row">{i + 1}</th>
                      <td>{user.firstName + " " + user.lastName}</td>
                      <td>{user.email}</td>
                      <td> {user?.active ? "Verified" : "Not Verified"} </td>
                      {isSuperAdmin && (
                        <ActionButton
                          id={user._id}
                          token={token}
                          onOpen={() => this.handleEditButton(user._id)}
                          onClose={() =>
                            this.setState({ editModalIsOpen: null })
                          }
                          isOpen={editModalIsOpen == user._id}
                          options={options}
                          getUsers={this.getUsers}
                        />
                      )}
                    </tr>
                  ))}
                </tbody>
              )}
            </table>
            {users.length == 0 && (
              <div style={{ textAlign: "center", padding: "10px" }}>
                {isFetchingUsers ? (
                  <Spinner size="lg" />
                ) : (
                  // <div className="emptyList" style={{ fontSize: "20px", fontWeight: "bold" }}>
                  <div className="emptyList">No users active</div>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }
}

const mapState = (state) => {
  return { token: state.auth?.token, activeUserRole: state.auth?.role };
};

export default connect(mapState)(Users);
