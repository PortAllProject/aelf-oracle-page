import React, { useState, useEffect, useMemo } from 'react';
import './RQNumTable.less';
import * as echarts from 'echarts';
import isMobile from 'ismobilejs';
import { useTranslation } from 'react-i18next';

interface ChartItem {
  time: string;
  value: number;
}
interface ChartData {
  [monthData: string]: ChartItem[];
  yearData: ChartItem[];
  allData: ChartItem[];
}
const RQNumTable: React.FC<{ ChartData: ChartData }> = ({ ChartData }) => {
  const [period, setPeriod] = useState<string>('monthData');
  const [chart, setChart] = useState<echarts.ECharts | null>(null);
  const [active, setActive] = useState<number>(0);
  const { t } = useTranslation();
  const btnMap = useMemo(
    () => [
      { name: '30天', key: 'monthData' },
      { name: '365天', key: 'yearData' },
      { name: t('all'), key: 'allData' },
    ],
    [t]
  );
  const ismobile = isMobile().apple.phone || isMobile().android.phone;
  useEffect(() => {
    const chartDom: HTMLDivElement | null = document.getElementById(
      `rq-chart`
    ) as HTMLDivElement;
    const myChart = echarts.init(chartDom);
    setChart(myChart);
  }, []);

  useEffect(() => {
    if (chart) {
      const Xdata: string[] = [];
      const Ydata: number[] = [];
      ChartData[period]?.forEach((item) => {
        Xdata.push(item.time);
        Ydata.push(item.value);
      });
      const option: echarts.EChartOption | echarts.EChartsResponsiveOption = {
        tooltip: {
          trigger: 'axis',
          textStyle: {
            color: '#3A4B74',
            fontSize: 12,
            width: 74,
            height: 65,
          },
        },
        grid: {
          top: '12%',
          left: ismobile ? '20%' : '6%',
        },
        xAxis: {
          type: 'category',
          data: Xdata,
          axisLabel: {
            rotate: ismobile ? 45 : 0,
            color: '#858D99',
            interval: (ismobile
              ? Math.ceil(Xdata.length / 6)
              : 'auto') as number,
            showMinLabel: false,
          },
          boundaryGap: false,
        },
        yAxis: {
          type: 'value',
          boundaryGap: false,
          // axisLabel: {
          //   interval: Math.ceil(Ydata.length / 6),
          // }
          splitNumber: 4,
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
      chart?.setOption(option);
    }
  }, [period, chart, ChartData, ismobile]);
  return (
    <div
      className={`request-number-table${
        ismobile ? ' request-number-table-phone' : ''
      }`}
    >
      <div className="title-wrap">
        <h3>
          {ismobile ? t('Sum of requests') : t('requests responded chart')}
        </h3>
        <ul>
          {btnMap.map((item, index) => (
            <li
              key={item.key}
              className={index === active ? 'active' : ''}
              onClick={() => {
                setPeriod(item.key);
                setActive(index);
              }}
            >
              {item.name}
            </li>
          ))}
        </ul>
      </div>
      <div id="rq-chart" className="re-chart-content"></div>
    </div>
  );
};

export default RQNumTable;
