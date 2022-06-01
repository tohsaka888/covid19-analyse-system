import React from "react";
import ReactECharts from "echarts-for-react";
import useScreenSize from "../hooks/useScreenSize/useScreenSize";

function ChinaMap() {
  const size = useScreenSize()
  return (
    <ReactECharts
      style={{
        height: (size.height - 220) / 2,
        width: "20vw",
        margin: "0 auto",
      }}
      option={{}}
    />
  );
}

export default ChinaMap;
