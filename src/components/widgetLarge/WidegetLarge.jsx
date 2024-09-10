import React from "react";
import "./widgetLarge.css";
const WidegetLarge = () => {
  const Button = ({ type }) => {
    return <button className={"widgetLargeButton " + type}>{type}</button>
   
  }
  return (
    <div className="widgetLarge">
      <h3 className="widgetLargetableHeading">Latest Transaction</h3>
      <table className="widgetLargetable">
        <tr className="widgetLargetableTr">
          <th className="widgetLargetableTh">Customer</th>
          <th className="widgetLargetableTh">Date</th>
          <th className="widgetLargetableTh">Amount</th>
          <th
            className="widgetLargetableTh">Status</th>
        </tr>
        <tr className="widgetLargeUser">
          <td className="widgetLargetableTd">
            <img src="src/assets/photo-1520466809213-7b9a56adcd45.avif" alt="" className="widgetLargetableImg" />
            <span className="widgetLargetableName">Panku Lohani</span>
          </td>
          <td className="widgetLargeDate">10 Apr 2024</td>
          <td className="widgetLargeAmount">$231.00</td>
          <td className="widgetLargeStatus"><Button type="Approved"/></td>
        </tr> <tr className="widgetLargeUser">
          <td className="widgetLargetableTd">
            <img src="src/assets/photo-1520466809213-7b9a56adcd45.avif" alt="" className="widgetLargetableImg" />
            <span className="widgetLargetableName">Panku Lohani</span>
          </td>
          <td className="widgetLargeDate">10 Apr 2024</td>
          <td className="widgetLargeAmount">$231.00</td>
          <td className="widgetLargeStatus"><Button type="Decline"/></td>
        </tr> <tr className="widgetLargeUser">
          <td className="widgetLargetableTd">
            <img src="src/assets/photo-1520466809213-7b9a56adcd45.avif" alt="" className="widgetLargetableImg" />
            <span className="widgetLargetableName">Panku Lohani</span>
          </td>
          <td className="widgetLargeDate">10 Apr 2024</td>
          <td className="widgetLargeAmount">$231.00</td>
          <td className="widgetLargeStatus"><Button type="Pending"/></td>
        </tr> <tr className="widgetLargeUser">
          <td className="widgetLargetableTd">
            <img src="src/assets/photo-1520466809213-7b9a56adcd45.avif" alt="" className="widgetLargetableImg" />
            <span className="widgetLargetableName">Panku Lohani</span>
          </td>
          <td className="widgetLargeDate">10 Apr 2024</td>
          <td className="widgetLargeAmount">$231.00</td>
          <td className="widgetLargeStatus"><Button type="Approved"/></td>
        </tr>
      </table>
    </div>
  );
};

export default WidegetLarge;
