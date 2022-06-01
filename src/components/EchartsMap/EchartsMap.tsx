import React, { HTMLAttributes, useCallback, useEffect, useRef } from "react";
import * as echarts from "echarts";
import { chinaMapConfig } from "./mapConfig";
import { ConfigProps } from "./type";

type Props = ConfigProps & HTMLAttributes<HTMLDivElement>;

function EchartsMap({ data, max, min, color, theme, ...props }: Props) {
  // const [mapData, setMapData] = React.useState<any>([]);
  const mapRef = useRef<HTMLDivElement>(null!);
  const mapInstance = useRef<echarts.EChartsType>(null!);

  const renderChart = useCallback(() => {
    const renderedMapInstance = echarts.getInstanceByDom(mapRef.current);
    if (renderedMapInstance) {
      mapInstance.current = renderedMapInstance;
    } else {
      mapInstance.current = echarts.init(mapRef.current);
    }
    mapInstance.current.setOption(
      chinaMapConfig({ data: [], max: 100, min: 0 })
    );
  }, []);

  useEffect(() => {
    const getMapData = async () => {
      const res = await fetch("https://geojson.cn/api/data/china.json");
      const data = await res.json();
      // setMapData(data.features);
      console.log(data);
      if (data) {
        echarts.registerMap("china", { geoJSON: data });
        renderChart();
      }
    };
    getMapData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // useEffect(() => {
  //   renderChart();
  // }, [renderChart]);

  return <div ref={mapRef} {...props} />    ;
}

export default EchartsMap;
