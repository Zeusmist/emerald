import React, { PureComponent } from "react";
import Chart from "chart.js";
import { baseUrl } from "../../../config";
import { toast } from "react-toastify";

function nFormatter(num, digits = 0) {
  var si = [
    { value: 1, symbol: "" },
    { value: 1e3, symbol: "k" },
    { value: 1e6, symbol: "M" },
    { value: 1e9, symbol: "G" },
    { value: 1e12, symbol: "T" },
    { value: 1e15, symbol: "P" },
    { value: 1e18, symbol: "E" },
  ];
  var rx = /\.0+$|(\.[0-9]*[1-9])0+$/;
  var i;
  for (i = si.length - 1; i > 0; i--) {
    if (num >= si[i].value) {
      break;
    }
  }
  return (num / si[i].value).toFixed(digits).replace(rx, "$1") + si[i].symbol;
}

const yearLabels = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

class InvestmentsChart extends PureComponent {
  state = { aggregate: [] };
  chartRef = React.createRef();

  getInvestmentAggregate = async () => {
    await fetch(`${baseUrl}/api/v1/admin/getAggregateInvestments`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${this.props.token}`,
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("get aggregate data", data);
        if (data?.code == 200) {
          this.setState({ aggregate: data?.data });
        } else toast.error(data?.message);
      });
  };

  async componentDidMount() {
    await this.getInvestmentAggregate();
    const { aggregate } = this.state;
    if (aggregate) {
      let months = aggregate.map(
        (obj) => yearLabels[Number((obj?.month).slice(-2)) - 1]
      );
      const investments = aggregate.map((obj) => Number(obj.investmentAmount));
      const myChartRef = this.chartRef.current.getContext("2d");
      new Chart(myChartRef, {
        type: "line",
        data: {
          //Bring in data
          labels: months,
          datasets: [
            {
              label: "Farm Sales Revenue",
              data: investments,
            },
          ],
        },
        options: {
          legend: {
            labels: {
              // This more specific font property overrides the global property
              fontColor: "black",
              fontWeight: "500",
            },
          },
          maintainAspectRatio: false,
          responsive: true,
          scales: {
            yAxes: [
              {
                ticks: {
                  beginAtZero: true,
                },
              },
            ],
          },
        },
      });
    }
  }

  render() {
    return (
      <div class="graphContainer">
        <canvas id="myChart" ref={this.chartRef} height="300" />
      </div>
    );
  }
}

export default InvestmentsChart;
