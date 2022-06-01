import { EChartsReactProps } from "echarts-for-react";

export const option: EChartsReactProps["option"] = {
  title: {
    text: '当前选择区域疫情状况',
    subtext: '内容来源--丁香网',
    x: 'right',
    textStyle: {
      color: '#fff'
    }
  },
  tooltip: {
    trigger: 'item',
    formatter: "{a} <br/>{b} : {c} ({d}%)",
    color: '#fff',
    textStyle: {
      color: '#fff'
    }
  },
  legend: {
    orient: 'vertical',
    left: 'left',
    data: ['现存确诊人数', '累计确诊人数', '疑似感染人数', '治愈人数', '死亡人数'],
    textStyle: {
      color: '#fff'
    }
  },
  series: [
    {
      name: '人数',
      type: 'pie',
      radius: '55%',
      center: ['50%', '60%'],
      data: [
        { value: 335, name: '现存确诊人数' },
        { value: 310, name: '累计确诊人数' },
        { value: 234, name: '疑似感染人数' },
        { value: 135, name: '治愈人数' },
        { value: 1548, name: '死亡人数' }
      ],
      itemStyle: {
        emphasis: {
          shadowBlur: 10,
          shadowOffsetX: 0,
          shadowColor: 'rgba(0, 0, 0, 0.5)'
        }
      }
    }
  ]
};