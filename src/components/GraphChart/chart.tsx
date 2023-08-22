/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useRef } from "react"
// import * as Highcharts from "highcharts"
// import HighchartsReact from "highcharts-react-official"

const stockOptions = {
  title: {
    text: "",
  },
  // series: [
  //   {
  //     type: "line",
  //     data: [30, 500, 1000, 1500, 2000],
  //   },
  // ],
  // xAxis: {
  //   categories: [0o1, 0o5, 10, 15, 20],
  // },
  series: [
    {
      type: "line",
      // name: "Series 1",
      data: [9, 10, 11, 10.18, 12],
    },
  ],
  // colorAxis: {
  //   min: 0,
  //   stops: [[0], [0.67], [1]],
  // },
}
const Charts = ({ props }: any) => {
  const chartComponentRef = useRef()
  return (
    <div className="charts">
      <div className="flex gap-[30px] mt-[32px] ">
        <div className="w-full">
          {/* <HighchartsReact
            highcharts={Highcharts}
            options={stockOptions}
            ref={chartComponentRef}
            {...props}
          /> */}
        </div>
      </div>
    </div>
  )
}

export default Charts
