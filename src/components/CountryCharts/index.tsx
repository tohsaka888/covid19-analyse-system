import React, { useEffect, useState } from "react";
import ReactECharts, { EChartsReactProps } from "echarts-for-react";
import { option as defaultOptions } from "./options";
import useScreenSize from "../hooks/useScreenSize/useScreenSize";
import { AreaInfoResults } from "../../type";

type Props = {
  source?: AreaInfoResults;
};

const CountryCharts = React.memo(function ({
  option,
  style,
  source,
  ...props
}: EChartsReactProps & Props) {
  const size = useScreenSize();
  const [newOptions, setNewOptions] = useState<EChartsReactProps["option"]>({
    ...option,
    ...defaultOptions,
  });

  useEffect(() => {
    if (source) {
      setNewOptions((newOptions: any) => ({
        ...newOptions,
        series: [
          {
            ...newOptions.series[0],
            data: [
              { value: source?.currentConfirmedCount, name: "现存确诊人数" },
              { value: source?.confirmedCount, name: "累计确诊人数" },
              { value: source?.suspectedCount, name: "疑似感染人数" },
              { value: source?.curedCount, name: "治愈人数" },
              { value: source?.deadCount, name: "死亡人数" },
            ],
          },
        ],
      }));
    }
  }, [
    source,
    source?.confirmedCount,
    source?.curedCount,
    source?.currentConfirmedCount,
    source?.deadCount,
    source?.suspectedCount,
  ]);

  return (
    <ReactECharts
      style={{
        height: (size.height - 220) / 2,
        width: "20vw",
        margin: "0 auto",
        ...style,
      }}
      {...props}
      option={newOptions}
    />
  );
});

export default CountryCharts;
