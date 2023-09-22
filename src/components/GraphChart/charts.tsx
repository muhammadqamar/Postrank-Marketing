/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useRef } from "react";
import * as Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

const Charts = ({ props, data }: any) => {
  const chartComponentRef = useRef();
  return (
    <div className="charts">
      <div className="flex gap-[30px] mt-[32px] ">
        <div className="w-full">
          <HighchartsReact
            highcharts={Highcharts}
            options={data}
            ref={chartComponentRef}
            {...props}
          />
        </div>
      </div>
    </div>
  );
};

export default Charts;
