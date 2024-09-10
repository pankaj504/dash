import React from "react";
import "./financial.css";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';


const Financial = () => {
  return (
    <div className="financial">
      <div className="financialConatiner">
        <div className="financialHeader">
          <span className="financialHeaderTitle">Revenue</span>
          <div className="costHeader">
            <span className="cost">$132.7</span>
            <span className="lose">
              -10.7
              <ArrowDownwardIcon className="down active" />
            </span>
          </div>
          <p>Compare to last month</p>
        </div>
        <div className="financialHeader">
          <span className="financialHeaderTitle">Sales</span>
          <div className="costHeader">
            <span className="cost">$542.7</span>
            <span className="lose">
              -1.7
              <ArrowDownwardIcon className="down active" />
            </span>
          </div>
          <p>Compare to last month</p>
        </div>{" "}
        <div className="financialHeader">
          <span className="financialHeaderTitle">Cost</span>
          <div className="costHeader">
            <span className="cost">$122.7</span>
            <span className="lose">
              +90.7
              <ArrowUpwardIcon className="up" />
            </span>
          </div>
          <p>Compare to last month</p>
        </div>
      </div>
    </div>
  );
};

export default Financial;
