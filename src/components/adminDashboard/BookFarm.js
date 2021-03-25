import React, { PureComponent, useState, useRef } from "react";
import { connect } from "react-redux";
import { toast } from "react-toastify";
import { baseUrl } from "../../config";
import Spinner from "../Spinner";
import ConfirmationModal from "./ConfirmationModal";
import useRootClose from "react-overlays/useRootClose";
import AddFarmModal from "./AddFarmModal";

const DateInFoButton = ({ startDate, endDate, onOpen, isOpen, onClose }) => {
  const ref = useRef();
  useRootClose(ref, onClose, {
    disabled: !isOpen,
  });

  return (
    <td className="editButton">
      <button
        className="actionBut"
        onClick={onOpen}
        style={{ backgroundColor: "#41EC7B" }}
      >
        View
      </button>
      {isOpen && (
        <div ref={ref} className="editButtonModal infoModal">
          {[startDate, endDate].map((date, i) => (
            <div
              key={i}
              style={{ textAlign: "left", marginBottom: i == 0 ? "5px" : "0" }}
            >
              <h6 style={{ marginBottom: "0px" }}>
                {i == 0 ? "Start Date" : "End Date"}
              </h6>
              <small>{new Date(date).toLocaleDateString()}</small>
            </div>
          ))}
        </div>
      )}
    </td>
  );
};

const ActionButton = ({
  id,
  token,
  isOpen,
  onOpen,
  options,
  onClose,
  setFarms,
  onEditFarm,
}) => {
  const [confirmationModalOpen, setConfirmationModalOpen] = useState(false);

  const ref = useRef();
  useRootClose(ref, onClose, {
    disabled: !isOpen,
  });

  const handleOptionClick = (i) => {
    if (i == 0) {
      onEditFarm();
    }
    if (i == 1)
      setConfirmationModalOpen({
        i,
        message: "Are you sure you want to delete this Farm?",
      });
  };

  const handleConfirm = async () => {
    let req = null;
    let headers = {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    };

    if (confirmationModalOpen?.i == 1) {
      await fetch(`${baseUrl}/api/v1/admin/deleteFarm/${id}`, {
        method: "DELETE",
        headers,
      })
        .then((res) => res.json())
        .then((data) => {
          console.log("Data after delete", data);
          if (data?.code == 200) {
            toast.success(data?.message);
            setConfirmationModalOpen(false);
            setFarms();
          } else {
            toast.error(data?.message);
          }
        });
    }
  };

  return (
    <td className="editButton">
      <button
        className="actionBut"
        onClick={onOpen}
        style={{ backgroundColor: "#B2A0FD" }}
      >
        More
      </button>
      {isOpen && (
        <div ref={ref} className="editButtonModal">
          {options.map((option, i) => (
            <div
              key={i}
              onClick={() => handleOptionClick(i)}
              style={{ textAlign: "left" }}
            >
              {option?.icon && (
                <i class={`fa fa-${option?.icon} mr-2`} aria-hidden="true"></i>
              )}
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
class BookFarm extends PureComponent {
  state = {
    farms: [],
    options: [
      { icon: "pencil", name: "Edit farm" },
      { icon: "trash", name: "Delete farm" },
    ],
    updatingValues: false,
  };

  setFarms = async () => {
    await fetch(`${baseUrl}/api/v1/farms`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${this.props.token}`,
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then(async (data) => {
        console.log("Get farms data", data);
        if (data?.code == 200) {
          const reversedData = data?.data.reverse();
          this.setState({
            farms: reversedData,
          });
        } else {
          toast.error(data?.message);
        }
      })
      .catch((e) => console.log(e));
    this.setState({ isFetchingFarms: false });
  };

  componentDidMount() {
    this.setState({ isFetchingFarms: true }, this.setFarms);
  }

  render() {
    const {
      farms,
      isFetchingFarms,
      dateInfoModalIsOpen,
      options,
      addingNewFarm,
      updatingValues,
    } = this.state;

    const { token } = this.props;

    return (
      <div className="dashboard col-md-12" style={{ height: "100%" }}>
        <div className="farmtitle">
          <h4 style={{ color: "#191D38" }}>Farm List</h4>
          <button
            type="button"
            className="cusBut"
            onClick={() => this.setState({ addingNewFarm: true })}
          >
            Add new farm
          </button>
        </div>

        <div className="farmList isLong mt-4 p-4">
          <div
            class="table-responsive"
            style={{ overflow: farms.length < 1 ? "hidden" : "auto" }}
          >
            <table class="table farmTable isLong">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Image</th>
                  <th scope="col">Name</th>
                  <th scope="col">
                    Price <small>/unit</small>
                  </th>
                  <th scope="col">Date Info</th>
                  <th scope="col">Units</th>
                  <th scope="col">Interest %</th>
                  <th scope="col">Maturity Date</th>
                  <th scope="col">Status</th>
                  <th scope="col">Actions</th>
                </tr>
              </thead>
              {farms.length > 0 && (
                <tbody>
                  {farms.map((farm, i) => (
                    <tr key={i} className="tr">
                      <th scope="row">{i + 1}</th>
                      <th>
                        <div
                          style={{
                            width: 40,
                            height: 40,
                            borderRadius: 100,
                            backgroundImage: `url(${farm?.imageUrl})`,
                            backgroundPosition: "center",
                            backgroundSize: "cover",
                            backgroundRepeat: "no-repeat",
                          }}
                        ></div>
                      </th>
                      <td>{farm?.name}</td>
                      <td>
                        ₦
                        {(farm?.cost_per_unit)
                          .toFixed(2)
                          .replace(/\d(?=(\d{3})+\.)/g, "$&,")}
                      </td>
                      <DateInFoButton
                        onOpen={() =>
                          this.setState({ dateInfoModalIsOpen: farm?._id })
                        }
                        isOpen={dateInfoModalIsOpen == farm?._id}
                        onClose={() =>
                          this.setState({ dateInfoModalIsOpen: false })
                        }
                        startDate={farm?.availability_date}
                        endDate={farm?.closing_date}
                      />
                      <td>{farm?.no_of_available_units}</td>
                      <td>{farm?.return}%</td>
                      <td>
                        {new Date(farm?.closing_date).toLocaleDateString()}
                      </td>
                      <td>{farm?.status}</td>
                      <ActionButton
                        id={farm?._id}
                        token={token}
                        onOpen={() =>
                          this.setState({ actionModalIsOpen: farm?._id })
                        }
                        isOpen={this.state.actionModalIsOpen == farm?._id}
                        onClose={() =>
                          this.setState({ actionModalIsOpen: false })
                        }
                        options={options}
                        setFarms={this.setFarms}
                        onEditFarm={() => {
                          this.setState({ updatingValues: farm });
                        }}
                      />
                    </tr>
                  ))}
                </tbody>
              )}
            </table>
            {farms.length == 0 && (
              <div style={{ textAlign: "center", padding: "10px" }}>
                {isFetchingFarms ? (
                  <Spinner size="lg" />
                ) : (
                  <div className="emptyList">No farms added</div>
                )}
              </div>
            )}
          </div>
        </div>
        {(addingNewFarm || updatingValues) && (
          <AddFarmModal
            isOpen={addingNewFarm || updatingValues}
            updatingValues={this.state.updatingValues}
            closeModal={() =>
              this.setState({ addingNewFarm: false, updatingValues: false })
            }
            setFarms={this.setFarms}
          />
        )}
      </div>
    );
  }
}

export default connect((state) => ({ token: state.auth?.token }))(BookFarm);
