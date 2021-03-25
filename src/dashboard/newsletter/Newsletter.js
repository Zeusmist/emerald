import React, { PureComponent } from "react";
import { connect } from "react-redux";
import { toast } from "react-toastify";
import InvestmentsSummary from "../../components/cards/InvestmentsSummary.js";
import { baseUrl } from "../../config";
import { getParameterByName } from "../../utils/urls.js";
import { withRouter } from "react-router-dom";
import { compose } from "redux";
import Spinner from "../../components/Spinner.js";

class NewsLetter extends PureComponent {
  state = { newsletters: [] };

  getSingleNewsletter = async (id) => {
    await fetch(`${baseUrl}/api/v1/users/getNewsletter/${id}`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${this.props.token}`,
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("single newsletter data", data);
        if (data?.code == 200) {
          this.setState({ newsletterData: data?.data });
        } else toast.error(data?.message);
      });
  };

  getAllNewsletters = async () => {
    await fetch(`${baseUrl}/api/v1/users/getAllNewsletters`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${this.props.token}`,
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("newsletter data", data);
        if (data?.code == 200) {
          this.setState({
            newsletters: data?.data,
          });
        } else toast.error(data?.message);
      });
  };

  changeScreenType = async (type, id) => {
    this.props.history.push(
      `${type == "forward" ? `?id=${id}` : "/newsletter"}`
    );
    if (type == "forward") {
      setTimeout(async () => {
        const newsletterId = getParameterByName("id");
        if (newsletterId) {
          await this.getSingleNewsletter(newsletterId);
        }
      });
    } else {
      setTimeout(async () => {
        await this.getAllNewsletters();
        this.setState({ newsletterData: false });
      });
    }
  };

  determinePageType = async () => {
    const newsletterId = getParameterByName("id");
    if (newsletterId) {
      await this.getSingleNewsletter(newsletterId);
    }
  };

  async componentDidMount() {
    await this.determinePageType();
    await this.getAllNewsletters();
  }

  render() {
    const { newsletters, newsletterData } = this.state;

    return (
      <div className="col-md-12 p-3" style={{ height: "100%" }}>
        <div className="farmtitle">
          <h4 style={{ color: "#191D38" }}>Newsletter</h4>
        </div>
        <div
          className={`${newsletterData ? "row" : ""} mt-4 p-2 newsletterCon`}
        >
          {!newsletterData && newsletters.length == 0 && (
            <div style={{ width: "100%", textAlign: "center" }}>
              <Spinner size="lg" />
            </div>
          )}
          {!newsletterData
            ? newsletters.map((newsletter, i) => (
                <div
                  className="col-md-4 col-sm-12 d-flex justify-content-center pb-2"
                  style={{
                    backgroundColor: "#D8FBE5",
                    boxShadow: "1px 8px 9px 0px rgba(0,0,0,0.4)",
                    borderRadius: "5px",
                    marginRight: "10px",
                  }}
                >
                  <div className="sliderDiv">
                    <div
                      className="newsCircle"
                      style={{
                        backgroundImage: `url(${newsletter?.farm?.imageUrl})`,
                        backgroundPosition: "center",
                        backgroundSize: "cover",
                        backgroundRepeat: "no-repeat",
                      }}
                    ></div>
                    <div>
                      <span>
                        <h2
                          style={{
                            display: "flex",
                            alignItems: "baseline",
                            marginTop: ".5rem",
                          }}
                        >
                          {newsletter?.farm?.name}{" "}
                          <div className="ml-2" style={{ color: "#41726B" }}>
                            {newsletter?.farm?.return}%
                          </div>
                          <small className="ml-1">ROI</small>
                        </h2>
                      </span>
                    </div>
                    <h2 className="ml-2" style={{ color: "#0A403B" }}>
                      ₦
                      {(newsletter?.farm?.cost_per_unit)
                        .toFixed(2)
                        .replace(/\d(?=(\d{3})+\.)/g, "$&,")}
                    </h2>
                    <div>
                      <button
                        className="newsBut"
                        style={{ color: "#0A403B" }}
                        onClick={() =>
                          this.changeScreenType("forward", newsletter?._id)
                        }
                      >
                        READ MORE
                      </button>
                    </div>
                  </div>
                </div>
              ))
            : !!newsletterData && (
                <div>
                  <div style={{ display: "flex", alignItems: "center" }}>
                    <div
                      className="newsCircle"
                      style={{
                        backgroundImage: `url(${newsletterData?.farm?.imageUrl})`,
                        backgroundPosition: "center",
                        backgroundSize: "cover",
                        backgroundRepeat: "no-repeat",
                        border: "1px solid #ACF7C5",
                        marginRight: "20px",
                      }}
                    ></div>
                    <div>
                      <div>
                        <span>
                          <h2
                            style={{
                              display: "flex",
                              alignItems: "baseline",
                              marginTop: ".5rem",
                              color: "#000",
                            }}
                          >
                            {newsletterData?.farm?.name}{" "}
                            <div
                              className="ml-2"
                              style={{ color: "#41726B", fontSize: "20px" }}
                            >
                              {newsletterData?.farm?.return}%
                            </div>
                            <small
                              className="ml-1"
                              style={{ fontSize: "13px" }}
                            >
                              ROI
                            </small>
                          </h2>
                        </span>
                      </div>
                      <h2 style={{ color: "#0A403B" }}>
                        ₦
                        {(newsletterData?.farm?.cost_per_unit)
                          .toFixed(2)
                          .replace(/\d(?=(\d{3})+\.)/g, "$&,")}
                      </h2>
                    </div>
                  </div>
                  <div className="mt-2 mb-3">{newsletterData?.text}</div>
                  <div>
                    <button
                      className="newsBut"
                      style={{
                        color: "#0A403B",
                        width: "initial",
                        height: "initial",
                        padding: "5px 10px",
                      }}
                      onClick={this.changeScreenType}
                    >
                      Back
                    </button>
                  </div>
                </div>
              )}
        </div>

        <InvestmentsSummary />
      </div>
    );
  }
}

export default compose(
  withRouter,
  connect(({ auth }) => ({ token: auth?.token }))
)(NewsLetter);
