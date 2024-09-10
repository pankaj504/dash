import React from "react";
import "./Topbar.css";
import CircleNotificationsIcon from "@mui/icons-material/CircleNotifications";
import SettingsIcon from "@mui/icons-material/Settings";
import LanguageIcon from "@mui/icons-material/Language";

const Topbar = () => {
  return (
    <>
      <div className="topbar">
        <div className="topbarItemsContainer">
          <div className="topbarLeft">
            <span className="topbarlogo">
              <span className="logo">AnalytiCore</span>
            </span>
          </div>
          <div className="topbarRight">
            <ul className="topbarRightList">
              <li className="topbarRightListItem">
                <CircleNotificationsIcon className="icons" />
                <span className="badge">5</span>
              </li>
              <li className="topbarRightListItem">
                <SettingsIcon className="icons" />
              </li>
              <li className="topbarRightListItem">
                <LanguageIcon className="icons" />
                <span className="badge">5</span>
              </li>
              <li className="topbarRightListItem">
                <img
                  src="/src/assets/2251033_PANKAJLOHANI.jpg"
                  alt=""
                  className="avatar"
                />
              </li>
            </ul>
          </div>
        </div>

      </div>
    </>
  );
};

export default Topbar;
