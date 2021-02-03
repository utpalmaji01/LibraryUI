import { Button, Divider, Typography } from "@material-ui/core";
import React, { Component } from "react";
import { Line } from "react-chartjs-2";
import vsCodeLogo from "../assets/image/vsCodeLogo.png";
import "../style/userDetails.scss";
class UserDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data1: {
        labels: ["1", "2", "3", "4", "5", "6"],
        datasets: [
          {
            label: "Random Data 1",
            data: [2, 3, 1, 4, 7, 6, 8],
            backgroundColor: "rgba(63, 191, 63, 0.5)",
            borderColor: "rgba(63, 191, 63, 0.95)",
          },
          {
            label: "Random Data 2",
            data: [4, 5, 3, 6, 10, 8, 11],
            backgroundColor: "rgba(191, 63, 63, 0.5)",
            borderColor: "rgba(191, 63, 63, 0.95)",
          },
        ],
      },
      data2: {
        labels: [2007, 2008, 2009, 2010, 2011, 2012],
        datasets: [
          {
            label: "Random Data 1",
            data: [0, 75, 12, 50, 100, 70],
            backgroundColor: "#fff",
            borderColor: "rgba(63, 191, 63, 0.95)",
            pointBackgroundColor: "rgba(63, 191, 63, 0.95)"
          },
          {
            label: "Random Data 2",
            data: [50, 75, 30, 35, 70, 80],
            backgroundColor: "#fff",
            borderColor: "rgba(191, 63, 63, 0.95)",
            pointBackgroundColor: "rgba(191, 63, 63, 0.95)"
          },
        ],
      },
    };
  }
  render() {
    return (
      <div className="user-details-container">
        <div className="user">
          <div className="user-image">
            <img src={vsCodeLogo} alt="user" className="user-pic" />
          </div>
          <Typography variant="h6" className="user-name">
            Maria Johnson
          </Typography>
          <Typography variant="body2" className="user-post">
            Developer
          </Typography>
          <Typography variant="body1" className="user-description">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Numquam
            nisi repellendus autem deleniti iusto vel!
          </Typography>
          <Button
            variant="contained"
            size="small"
            color="primary"
            className="follow-button"
          >
            Follow
          </Button>
          <Divider className="user-divider" />
          <div className="user-details">
            <div className="user-posts">
              <Typography variant="body1">5896</Typography>
              <Typography variant="caption">Post</Typography>
            </div>
            <div className="user-followers">
              <Typography variant="body1">1596</Typography>
              <Typography variant="caption">Followers</Typography>
            </div>
            <div className="user-likes">
              <Typography variant="body1">7896</Typography>
              <Typography variant="caption">Likes</Typography>
            </div>
          </div>
        </div>
        <div className="line-chart-1">
          <div className="line-chart-1-container">
            <div className="top-products">
              <Typography
                variant="h5"
                color="textSecondary"
                className="top-products-title"
              >
                Top Products
              </Typography>
              <Typography
                variant="h4"
                color="textPrimary"
                className="top-products-count"
              >
                598,486
              </Typography>
              <Typography
                variant="body1"
                color="textPrimary"
                className="top-products-details"
              >
                6.5% changes from today
              </Typography>
            </div>
            <Divider className="line-chart-1-divider" />
            <div className="support-cases">
              <Typography
                variant="h5"
                color="textSecondary"
                className="support-cases-title"
              >
                Support Cases
              </Typography>
              <Typography
                variant="h4"
                color="textPrimary"
                className="support-cases-count"
              >
                323,360
              </Typography>
              <Typography
                variant="body1"
                color="textPrimary"
                className="support-cases-details"
              >
                2.5% changes from yesterday
              </Typography>
            </div>
          </div>
          <Line
            className="test-chart"
            options={{
              responsive: true,
              legend: {
                display: false, //This will do the task
              },
              tooltips: {
                enabled: false,
              },
              scales: {
                xAxes: [
                  {
                    display: false,
                    ticks: {
                      beginAtZero: true,
                    },
                    gridLines: {
                      display: false,
                    },
                  },
                ],
                yAxes: [
                  {
                    display: false,
                    ticks: {
                      beginAtZero: true,
                    },
                    gridLines: {
                      display: false,
                    },
                  },
                ],
              },
            }}
            data={this.state.data1}
          />
        </div>
        <div className="line-chart-2">
          <div className="line-chart-2-container">
            <div className="line-chart-2-header">
              <div className="header-total-sales">
                <Typography variant="h6" color="textPrimary">
                  6256
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  Total Sales
                </Typography>
              </div>
              <div className="header-open-campaign">
              <Typography variant="h6" color="textPrimary">
                  8569
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  Open Campaign
                </Typography>
              </div>
            </div>
            <Line
              className="test-chart"
              options={{
                responsive: true,
                legend: {
                  display: false, //This will do the task
                },
                tooltips: {
                  enabled: false,
                },
                scales: {
                  xAxes: [
                    {
                      //   display: false,
                      ticks: {
                        min: 2007,
                        // stepSize: 4,
                      },
                      gridLines: {
                        display: false,
                      },
                    },
                  ],
                  yAxes: [
                    {
                      //   display: false,
                      ticks: {
                        beginAtZero: true,
                        stepSize: 25,
                      },
                      gridLines: {
                        display: false,
                      },
                    },
                  ],
                },
              }}
              data={this.state.data2}
            />
            <div className="line-chart-2-footer">
              <div className="footer-online-sales">
              <Typography variant="h6" color="textPrimary">
                  5136
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  Online Sales
                </Typography>
              </div>
              <div className="footer-store-sales">
              <Typography variant="h6" color="textPrimary">
                  4596
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  Store Sales
                </Typography>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default UserDetails;
