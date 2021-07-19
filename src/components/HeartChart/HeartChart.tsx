import React, { useEffect } from 'react';
import './HeartChart.less';
import * as echarts from 'echarts';
import isMobile from 'ismobilejs';
interface ChartData {
  time: string;
  value: number;
}

const HeartChart: React.FC<{ ChartData: ChartData[]; Key: string }> = ({
  ChartData,
  Key,
}) => {
  const ismobile = isMobile().apple.phone || isMobile().android.phone;
  useEffect(() => {
    const chartDom: HTMLDivElement | null = document.getElementById(
      `heart-chart-content${Key}`
    ) as HTMLDivElement;
    const Xdata: string[] = [];
    const Ydata: number[] = [];
    ChartData.forEach((item: ChartData) => {
      Xdata.push(item.time);
      Ydata.push(item.value);
    });
    const myChart = echarts.init(chartDom);
    const option: echarts.EChartOption | echarts.EChartsResponsiveOption = {
      grid: {
        left: 'left',
      },
      xAxis: {
        type: 'category',
        data: Xdata,
        show: false,
        boundaryGap: false,
      },
      yAxis: {
        type: 'value',
        show: false,
        boundaryGap: false,
      },
      series: [
        {
          data: Ydata,
          type: 'line',
          smooth: true,
          lineStyle: {
            color: '#753BDE',
          },
          showSymbol: false,
        },
      ],
    };
    myChart.setOption(option);
  }, [ChartData, Key]);
  return (
    <div
      id={`heart-chart-content${Key}`}
      className={`${ismobile ? ' heart-chart-phone' : 'heart-chart'}`}
    ></div>
  );
};

export default HeartChart;
