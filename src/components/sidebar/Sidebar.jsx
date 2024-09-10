import React from "react";
import "./sidebar.css";
import { Home, TrendingUp } from "@mui/icons-material";
import Person2SharpIcon from "@mui/icons-material/Person2Sharp";
import InventoryIcon from "@mui/icons-material/Inventory";
import PaidOutlinedIcon from "@mui/icons-material/PaidOutlined";
import BarChartOutlinedIcon from "@mui/icons-material/BarChartOutlined";
import AttachEmailSharpIcon from "@mui/icons-material/AttachEmailSharp";
import FeedbackSharpIcon from "@mui/icons-material/FeedbackSharp";
import MessageSharpIcon from "@mui/icons-material/MessageSharp";
import ReportSharpIcon from "@mui/icons-material/ReportSharp";
import { Link } from "react-router-dom";
import TimelineIcon from "@mui/icons-material/Timeline";
const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebarItemsContainer">
        <div className="sidebarItemsItems">
          <h2 className="sidebarTitle">Dashboard</h2>
          <ul className="sidebarListContainer">
            <Link to='/' className="link">
            <li className="sidebarListItem active">
              <Home />
              Home
            </li>
            </Link>
            <li className="sidebarListItem">
              <TimelineIcon />
              Analytics
            </li>
            <li className="sidebarListItem">
              <TrendingUp />
              Sales
            </li>
          </ul>

          <h2 className="sidebarTitle">Quick Menu</h2>
          <ul className="sidebarListContainer">
            <Link to="/users" className="link">
              <li className="sidebarListItem">
                <Person2SharpIcon />
                User
              </li>{" "}
            </Link>
            <Link to="/products" className="link">
              <li className="sidebarListItem">
                <InventoryIcon />
                Products
              </li>
            </Link>
            <li className="sidebarListItem">
              <PaidOutlinedIcon />
              Transactions
            </li>
            <li className="sidebarListItem">
              <BarChartOutlinedIcon />
              Reports
            </li>
          </ul>
          <h2 className="sidebarTitle">Notifications</h2>
          <ul className="sidebarListContainer">
            <li className="sidebarListItem">
              <AttachEmailSharpIcon />
              Mail
            </li>
            <li className="sidebarListItem">
              <FeedbackSharpIcon />
              Feedback
            </li>
            <li className="sidebarListItem">
              <MessageSharpIcon />
              Message
            </li>
          </ul>
          <h2 className="sidebarTitle">Staff</h2>
          <ul className="sidebarListContainer">
            <li className="sidebarListItem">
              <Home />
              Manage
            </li>
            <li className="sidebarListItem">
              <TimelineIcon />
              Analytics
            </li>
            <li className="sidebarListItem">
              <ReportSharpIcon />
              Report
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
