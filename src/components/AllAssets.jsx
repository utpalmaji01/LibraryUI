import React from "react";
import { Tab, Tabs } from "@material-ui/core";
import { PeopleOutlined as PeopleOutlinedIcon } from "@material-ui/icons";
import "../style/allAssets.scss";

const AllAssets = () => {
  return (
    <div className="all-assets-container">
      <Tabs variant="fullWidth" className="assets-tabs">
        <Tab
          disabled
          label={<div className="tab-details">utpal</div>}
          icon={<PeopleOutlinedIcon fontSize="small" className="tab-icon" />}
          className="assets-tab"
        />
      </Tabs>
    </div>
  );
};

export default AllAssets;
