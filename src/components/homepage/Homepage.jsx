import React from "react";
import "./homepage.css";
import Financial from "../financial/Financial";
import Chart from "../chart/Chart";
import userData from "../../demoData";
import WidegetLarge from "../widgetLarge/WidegetLarge";
import WidgetSmall from "../widgetSmall/WidgetSmall";
const Homepage = () => {
  return (
    <div className="home">
      <Financial />
      <Chart
        data={userData}
        grid
        dataKey="Active User"
        title="User Analytics"
      />
      <div className="widget">
        <WidgetSmall/>
        <WidegetLarge/>
      </div>
    </div>
  );
};

export default Homepage;
