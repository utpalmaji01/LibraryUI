import React, { useState } from "react";
import { Tab, Tabs, Typography } from "@material-ui/core";
import { PeopleOutlined as PeopleOutlinedIcon } from "@material-ui/icons";
import "../style/allAssets.scss";

const AllAssets = () => {
  const [value, setValue] = useState("NEW USER");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className="all-assets-container">
      <Tabs
        variant="fullWidth"
        value={value}
        onChange={handleChange}
        className="assets-tabs"
      >
        <Tab
          disabled
          value="NEW USER"
          label={
            <div className="tab-details">
              <Typography variant="body2" className="details-header">
                New User
              </Typography>
              <Typography variant="body1" className="details-description">
                65650
              </Typography>
            </div>
          }
          icon={<PeopleOutlinedIcon fontSize="small" className="tab-icon" />}
          className="assets-tab"
        />
        <Tab
          disabled
          value="NEW FEEDBACK"
          label={
            <div className="tab-details">
              <Typography variant="body2" className="details-header">
                New Feedback
              </Typography>
              <Typography variant="body1" className="details-description">
                32604
              </Typography>
            </div>
          }
          icon={<PeopleOutlinedIcon fontSize="small" className="tab-icon" />}
          className="assets-tab"
        />
        <Tab
          disabled
          value="EMPLOYEES"
          label={
            <div className="tab-details">
              <Typography variant="body2" className="details-header">
                Employees
              </Typography>
              <Typography variant="body1" className="details-description">
                17583
              </Typography>
            </div>
          }
          icon={<PeopleOutlinedIcon fontSize="small" className="tab-icon" />}
          className="assets-tab"
        />
        <Tab
          disabled
          value="TOTAL SALES"
          label={
            <div className="tab-details">
              <Typography variant="body2" className="details-header">
                Total Sales
              </Typography>
              <Typography variant="body1" className="details-description">
                61119
              </Typography>
            </div>
          }
          icon={<PeopleOutlinedIcon fontSize="small" className="tab-icon" />}
          className="assets-tab"
        />
      </Tabs>
    </div>
  );
};

export default AllAssets;
