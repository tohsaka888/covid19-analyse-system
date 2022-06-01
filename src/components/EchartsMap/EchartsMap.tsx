import React, { HTMLAttributes, useCallback, useEffect, useRef } from "react";
import * as echarts from "echarts";
import { chinaMapConfig } from "./mapConfig";
import { ConfigProps } from "./type";
import { AreaInfoResults } from "../../type";

type Props = ConfigProps & HTMLAttributes<HTMLDivElement> & {
  clickEvent: (params: any) => void;
  info?: AreaInfoResults
};

function EchartsMap({ data, max, min, color, theme, clickEvent, info, ...props }: Props) {
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
      chinaMapConfig({ data: [], max: 100, min: 0, theme: theme })
    );
    mapInstance.current.on("click", (params: any) => {
      clickEvent(params)
    });
    return () => {
      // 销毁实例，销毁后实例无法再被使用。
      mapInstance && mapInstance.current.dispose();
    };
  }, [clickEvent, theme]);

  useEffect(() => {

    let params = ''
    if (!info) {
      params = 'china'
    } else {
      params = `${info.locationId}`
    }
    const getMapData = async () => {
      const res = await fetch(`https://geojson.cn/api/data/${params}.json`);
      const data = await res.json();
      if (data) {
        console.log(data)
        echarts.registerMap("China", { geoJSON: data });
        renderChart();
      }
    };
    getMapData();

  }, [info, renderChart]);

  // useEffect(() => {
  //   renderChart();
  // }, [renderChart]);

  return <div ref={mapRef} {...props} />;
}

export default EchartsMap;
