import React, { PureComponent } from "react";
import { connect } from "react-redux";
import { toast } from "react-toastify";
import Spinner from "../../components/Spinner";
import { baseUrl } from "../../config";
import { toggleModal } from "../../redux/actions";

const tabs = ["Transactions", "Investments", "Payouts", "Deposits"];

class TabHeader extends PureComponent {
  state = {};

  handleFundWallet = () =>
    this.props.toggleModal({ modal: "userboard", isOpen: true });

  fnGetFileNameFromContentDispostionHeader = (header) => {
    let contentDispostion = header.split(";");
    const fileNameToken = `filename*=UTF-8''`;

    let fileName = "downloaded.pdf";
    for (let thisValue of contentDispostion) {
      if (thisValue.trim().indexOf(fileNameToken) === 0) {
        fileName = decodeURIComponent(
          thisValue.trim().replace(fileNameToken, "")
        );
        break;
      }
    }

    return fileName;
  };

  handleDownload = () => {
    const { activeTab } = this.props;
    this.setState({ isDownloading: true }, async () => {
      await fetch(
        `${baseUrl}/api/v1/users/downloadTransactions?type=${
          activeTab == "Transactions"
            ? "transfer"
            : activeTab == "Investments"
            ? "investment"
            : activeTab == "Payouts"
            ? "payout"
            : "deposit"
        }`,
        {
          method: "GET",
          headers: {
            Authorization: `Bearer ${this.props.token}`,
            "Content-Type": "application/pdf",
          },
        }
      )
        .then((response) => response.blob())
        .then((blob) => {
          var url = window.URL.createObjectURL(blob);
          var a = document.createElement("a");
          a.href = url;
          a.download = "filename.xlsx";
          document.body.appendChild(a); // we need to append the element to the dom -> otherwise it will not work in firefox
          a.click();
          a.remove(); //afterwards we remove the element again
        })
        .catch((e) => console.log(e));

      this.setState({ isDownloading: false });
    });
  };

  render() {
    const { activeTab, setActiveTab } = this.props;
    const { isDownloading } = this.state;
    return (
      <div className="dashboardTopAction row">
        <div className="col-2">
          <button
            className="btn btn-primary fundWalletButton"
            onClick={this.handleFundWallet}
          >
            Fund Wallet
          </button>
        </div>
        <div className="col">
          {/* <DaySelector /> */}
          {tabs.map((tab, i) => (
            <button
              key={i}
              type="button"
              className={`butGroup col-md-3 col ${
                activeTab == tab ? "activeBtn" : ""
              } durBtn`}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </button>
          ))}
        </div>
        <div className="col-2" style={{ maxWidth: "inherit" }}>
          {/* <ExportButton /> */}
          <button
            type="button"
            className="btn btn-primary fundWalletButton"
            style={{ borderRadius: 8 }}
            onClick={this.handleDownload}
          >
            {isDownloading ? (
              <Spinner size="sm" />
            ) : (
              <>
                <i className="fa fa-download" aria-hidden="true"></i> Download
              </>
            )}
          </button>
        </div>
      </div>
    );
  }
}

export default connect(({ auth }) => ({ token: auth?.token }), { toggleModal })(
  TabHeader
);
