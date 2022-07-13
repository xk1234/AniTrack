import { Fragment } from "react";
import ShowList from "../components/dashboard/ShowList";
import StatsBox from "../components/dashboard/StatsBox";
import Activity from "../components/dashboard/Activity";
import "./Pages.css";

const Dashboard = (props) => {
  return (
    <div className="dashboard">
      <ShowList />
      <div className="info">
        <StatsBox />
        <Activity />
      </div>
    </div>
  );
};
export default Dashboard;
