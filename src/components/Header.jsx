import React, { useState } from "react";
import {
  Tab,
  Tabs,
  Typography,
  InputBase,
  IconButton,
} from "@material-ui/core";
import {
  Search as SearchIcon,
  NotificationsNoneOutlined as NotificationsNoneOutlinedIcon,
  DesktopMacOutlined as DesktopMacOutlinedIcon,
  FlagOutlined as FlagOutlinedIcon,
} from "@material-ui/icons";
import logo from "../assets/image/icon.png";
import vsCodeLogo from "../assets/image/vsCodeLogo.png";
import "../style/header.scss";

const Header = () => {
  const [value, setValue] = useState("DASHBOARD");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className="header-container">
      <div className="primary-header">
        <div className="primary-header-one">
          <img src={logo} alt="liberty-logo" className="logo-pic" />
          <Typography variant="h5" color="textPrimary">
            Liberty
          </Typography>
          <Typography variant="h5" color="primary">
            UI
          </Typography>
        </div>
        <div className="primary-header-two">
          <div className="search">
            <SearchIcon fontSize="small" />
            <InputBase margin="dense" className="search-bar" />
          </div>
          <IconButton>
            <NotificationsNoneOutlinedIcon />
          </IconButton>
          <IconButton className="profile-button">
            <img src={vsCodeLogo} alt="profile-pic" className="prpfile-pic" />
          </IconButton>
        </div>
      </div>
      <div className="secondary-header">
        <Tabs
          value={value}
          variant="fullWidth"
          onChange={handleChange}
          className="header-tabs"
        >
          <Tab
            value="DASHBOARD"
            label="DASHBOARD"
            icon={
              <DesktopMacOutlinedIcon fontSize="small" className="tab-icon" />
            }
            className="header-tab"
          />
          <Tab
            value="WIDGETS"
            label="WIDGETS"
            icon={
              <DesktopMacOutlinedIcon fontSize="small" className="tab-icon" />
            }
            className="header-tab"
          />
          <Tab
            value="UI ELEMENTS"
            label="UI ELEMENTS"
            icon={
              <DesktopMacOutlinedIcon fontSize="small" className="tab-icon" />
            }
            className="header-tab"
          />
          <Tab
            value="PAGES"
            label="PAGES"
            icon={<FlagOutlinedIcon fontSize="small" className="tab-icon" />}
            className="header-tab"
          />
          <Tab
            value="FORMS"
            label="FORMS"
            icon={
              <DesktopMacOutlinedIcon fontSize="small" className="tab-icon" />
            }
            className="header-tab"
          />
          <Tab
            value="APPS"
            label="APPS"
            icon={
              <DesktopMacOutlinedIcon fontSize="small" className="tab-icon" />
            }
            className="header-tab"
          />
        </Tabs>
      </div>
    </div>
  );
};

export default Header;
