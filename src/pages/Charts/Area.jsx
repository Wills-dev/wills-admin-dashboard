import React from "react";
import { Header } from "../../components";
import AreaCharts from "../../components/Charts/AreaCharts";

const Area = () => {
  return (
    <div className="m-4 md:m-10 mt-24 p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl">
      <Header category="Chart" title="Area Rate" />
      <div className="w-full">
        <AreaCharts />
      </div>
    </div>
  );
};

export default Area;
