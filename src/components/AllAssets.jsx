import React, { useState } from "react";
import { Tab, Tabs } from "@material-ui/core";
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
          label={<div className="tab-details">utpal</div>}
          icon={<PeopleOutlinedIcon fontSize="small" className="tab-icon" />}
          className="assets-tab"
        />
      </Tabs>
    </div>
  );
};

export default AllAssets;
