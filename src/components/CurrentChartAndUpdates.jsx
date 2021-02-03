import {
  Divider,
  Step,
  StepContent,
  StepLabel,
  Stepper,
  Typography,
} from "@material-ui/core";
import React, { Component } from "react";
import { Bar } from "react-chartjs-2";
import ScheduleOutlinedIcon from "@material-ui/icons/ScheduleOutlined";
import "../style/currentChartAndUpdates.scss";
class CurrentChartAndUpdates extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {
        labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
        datasets: [
          {
            label: "Random Data 1",
            data: [3, 4, 1, 5, 2, 7, 3],
            backgroundColor: "rgba(63, 191, 63, 0.5)",
            borderColor: "rgba(63, 191, 63, 0.95)",
          },
        ],
      },
      updateData: [
        {
          title: "User confirmation",
          description: "description1",
        },
        {
          title: "Continuous evaluation",
          description: "description2",
        },
        {
          title: "Promotion",
          description: "description3",
        },
      ],
    };
  }

  render() {
    return (
      <div className="current-chart-and-updates-container">
        <div className="bar-chart">
          <div className="chart-header">
            <Typography variant="h6">The current chart</Typography>
          </div>
          <div className="chart">
            <Bar
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
                      display: true,
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
                        min: 0,
                        max: 8,
                      },
                      gridLines: {
                        display: false,
                      },
                    },
                  ],
                },
              }}
              data={this.state.data}
            />
          </div>
          <Divider className="chart-divider" />
          <div className="chart-footer">
            <Typography variant="caption" className="footer-title">
              Project status
            </Typography>
            <div className="chart-footer-contant">
              <Typography variant="h4" className="footer-count">
                76,533
              </Typography>
              <Typography variant="caption" className="footer-type">
                PCS
              </Typography>
            </div>
          </div>
        </div>
        <div className="all-updates">
          <div className="all-updates-container">
            <Typography variant="h6" className="update-header">
              Updates
            </Typography>
            <Stepper orientation="vertical" className="updates">
              {this.state.updateData.map((eachData, index) => (
                <Step active key={index} className="each-updates">
                  <StepLabel className="step-label">
                    <Typography variant="body1">{eachData.title}</Typography>
                  </StepLabel>
                  <StepContent className="step-contant">
                    <Typography>{eachData.description}</Typography>
                    <div className="remainder">
                      <ScheduleOutlinedIcon
                        fontSize="small"
                        className="remainder-icon"
                      />
                      <Typography variant="caption" color="textSecondary">
                        7 months ago
                      </Typography>
                    </div>
                  </StepContent>
                </Step>
              ))}
            </Stepper>
          </div>
        </div>
      </div>
    );
  }
}

export default CurrentChartAndUpdates;
