import React, { PureComponent } from "react";
import InvestmentsSummary from "../../components/cards/InvestmentsSummary.js";
import TabHeader from "./TabHeader";
import Transactions from "./Transactions";
import Investments from "./Investments";
import Payouts from "./Payouts";
import Deposits from "./Deposits";
import "./dashboard.css";

class Dashboard extends PureComponent {
  state = {
    activeTab: "Transactions",
  };

  renderTable = () => {
    const { activeTab } = this.state;
    switch (activeTab) {
      case "Transactions":
        return <Transactions />;
      case "Investments":
        return <Investments />;
      case "Payouts":
        return <Payouts />;
      case "Deposits":
        return <Deposits />;
      default:
        return null;
    }
  };

  setActiveTab = (activeTab) => this.setState({ activeTab });
  render() {
    const { activeTab } = this.state;
    return (
      <div>
        <TabHeader activeTab={activeTab} setActiveTab={this.setActiveTab} />
        {this.renderTable()}
        <InvestmentsSummary />
      </div>
    );
  }
}

export default Dashboard;
