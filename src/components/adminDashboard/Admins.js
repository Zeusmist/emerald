import React, { PureComponent, useRef, useState } from "react";
import { connect } from "react-redux";
import { toast } from "react-toastify";
import { baseUrl } from "../../config";
import Spinner from "../Spinner";
import useRootClose from "react-overlays/useRootClose";
import AddAdminModal from "./AddAdminModal";
import ConfirmationModal from "./ConfirmationModal";

const ActionButton = ({
  id,
  token,
  isOpen,
  onOpen,
  options,
  onClose,
  getAdmins,
}) => {
  const [confirmationModalOpen, setConfirmationModalOpen] = useState(false);

  const ref = useRef();
  useRootClose(ref, onClose, {
    disabled: !isOpen,
  });

  const handleOptionClick = (i) => {
    if (i == 0)
      setConfirmationModalOpen({
        i,
        message: "Are you sure you want to make this Admin a Super Admin?",
      });
    if (i == 1)
      setConfirmationModalOpen({
        i,
        message: "Are you sure you want to delete this Admin?",
      });
  };

  const handleConfirm = async () => {
    let req = null;
    let headers = {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    };

    if (confirmationModalOpen?.i == 0) {
      await fetch(`${baseUrl}/api/v1/admin/users/${id}`, {
        method: "PATCH",
        headers,
        body: JSON.stringify({ role: "superadmin" }),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log("Data after update", data);
          if (data?.code == 200) {
            toast.success(data?.message);
            getAdmins();
          } else {
            toast.error(data?.message);
          }
        });
    } else {
      await fetch(`${baseUrl}/api/v1/admin/users/${id}`, {
        method: "DELETE",
        headers,
      })
        .then((res) => res.json())
        .then((data) => {
          console.log("Data after delete", data);
          if (data?.code == 200) {
            toast.success(data?.message);
            getAdmins();
          } else {
            toast.error(data?.message);
          }
        });
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

class Admins extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      isFetchingAdmins: true,
      admins: [],
      options: [{ name: "Make super admin" }, { name: "Delete admin" }],
    };
  }

  getAdmins = async () => {
    let admins = [];
    let adminTypes = ["superadmin", "admin"];
    for (const i in adminTypes) {
      const admin = adminTypes[i];
      await fetch(`${baseUrl}/api/v1/admin/users?role=${admin}`, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${this.props.token}`,
          "Content-Type": "application/json",
        },
      })
        .then((res) => res.json())
        .then((data) => {
          console.log("Get admins data", data);
          if (data?.code == 200) {
            admins.push(...data?.data);
          } else {
            toast.error(data?.message);
          }
        })
        .catch((e) => {
          console.log(e);
        });
    }
    this.setState({ admins, isFetchingAdmins: false });
  };

  async componentDidMount() {
    await this.getAdmins();
  }

  handleEditButton = (id) => {
    this.setState({ editModalIsOpen: id });
  };

  render() {
    const { activeUserRole, token } = this.props;
    const {
      options,
      admins,
      isFetchingAdmins,
      editModalIsOpen,
      addingNewAdmin,
    } = this.state;
    const isSuperAdmin = activeUserRole == "superadmin";
    return (
      <div className="dashboard col-md-12" style={{ height: "100%" }}>
        <div className="farmtitle">
          <h4 style={{ color: "#191D38" }}>Admins</h4>
          <button
            type="button"
            className="cusBut"
            onClick={() => this.setState({ addingNewAdmin: true })}
          >
            Add new Admin
          </button>
        </div>

        <div className="farmList mt-4 p-4">
          <div
            class="table-responsive"
            style={{ overflow: admins.length < 1 ? "hidden" : "auto" }}
          >
            <table class="table farmTable">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Name</th>
                  <th scope="col">Email</th>
                  <th scope="col">Role</th>
                  {isSuperAdmin && <th scope="col">Action</th>}
                </tr>
              </thead>
              {admins.length > 0 && (
                <tbody>
                  {admins.map((admin, i) => (
                    <tr key={i} className="tr">
                      <th scope="row">{i + 1}</th>
                      <td>{admin.firstName + " " + admin.lastName}</td>
                      <td>{admin.email}</td>
                      <td>
                        {admin.role == "superadmin" ? "Super Admin" : "Admin"}
                      </td>
                      {isSuperAdmin &&
                        (admin.role == "superadmin" ? (
                          <div></div>
                        ) : (
                          <ActionButton
                            id={admin._id}
                            token={token}
                            onOpen={() => this.handleEditButton(admin._id)}
                            onClose={() =>
                              this.setState({ editModalIsOpen: null })
                            }
                            isOpen={editModalIsOpen == admin._id}
                            options={options}
                            getAdmins={this.getAdmins}
                          />
                        ))}
                    </tr>
                  ))}
                </tbody>
              )}
            </table>
            {admins.length == 0 && (
              <div style={{ textAlign: "center", padding: "10px" }}>
                {isFetchingAdmins ? (
                  <Spinner size="lg" />
                ) : (
                  // <div className="emptyList" style={{ fontSize: "20px", fontWeight: "bold" }}>
                  <div className="emptyList">No admins active</div>
                )}
              </div>
            )}
          </div>
        </div>

        <AddAdminModal
          isOpen={addingNewAdmin}
          closeModal={() => this.setState({ addingNewAdmin: false })}
          getAdmins={this.getAdmins}
        />
      </div>
    );
  }
}

const mapState = (state) => {
  return { token: state.auth?.token, activeUserRole: state.auth?.role };
};

export default connect(mapState)(Admins);
