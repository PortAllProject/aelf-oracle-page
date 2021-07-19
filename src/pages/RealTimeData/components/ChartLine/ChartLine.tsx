import React, { useEffect } from 'react';
import * as echarts from 'echarts';
import './ChartLine.less';
import TableTitle from '../../../../components/TableTitle';
import isMobile from 'ismobilejs';
import { useTranslation } from 'react-i18next';
import { ChartLineItem, useChartLine } from '../../../../hooks/useRealTimeData';
import { Spin } from 'antd';

const ChartLine: React.FC = () => {
  const ismobile = isMobile().apple.phone || isMobile().android.phone;
  const { t } = useTranslation();
  const chartData: ChartLineItem[] = useChartLine();
  useEffect(() => {
    // setData(data);

    const chartDom: HTMLDivElement | null = document.getElementById(
      'chartLine'
    ) as HTMLDivElement;
    const Xdata: string[] = [];
    const Ydata: number[] = [];
    if (chartData.length && chartDom) {
      chartData.forEach((item: ChartLineItem) => {
        Xdata.push(item.Date);
        Ydata.push(item.scales);
      });

      const myChart = echarts.init(chartDom);
      const option: echarts.EChartOption | echarts.EChartsResponsiveOption = {
        grid: {
          left: ismobile ? '20%' : '12%',
          top: '10%',
        },
        tooltip: {
          trigger: 'axis',
          textStyle: {
            color: '#3A4B74',
            fontSize: 12,
            width: 74,
            height: 65,
          },
        },
        xAxis: {
          type: 'category',
          data: Xdata,
          axisLine: {
            show: false,
          },
          axisLabel: {
            rotate: ismobile ? 45 : 0,
            color: '#858D99',
            showMinLabel: false,
            interval: ismobile
              ? Math.ceil(Xdata.length / 6)
              : Math.ceil(Xdata.length / 10),
          },
          boundaryGap: false,
        },

        yAxis: {
          type: 'value',
          // offset: ismobile ?  -12 : 0,
          axisLine: {
            // show: true,
          },
          axisPointer: {
            lineStyle: {
              type: 'dashed',
            },
          },
        },
        series: [
          {
            data: Ydata,
            type: 'line',
            smooth: true,
            lineStyle: {
              color: '#753BDE',
            },
            cursor: 'pointer',
            showSymbol: false,
          },
        ],
      };
      myChart.setOption(option);
    }
  }, [ismobile, chartData]);

  return (
    <>
      <section
        className={`chartLine-content${
          ismobile ? ' chartLine-content-phone' : ''
        }`}
      >
        <TableTitle text={t('Sum of requests')} />
        {!chartData.length ? <Spin /> : <div id="chartLine"></div>}
      </section>
    </>
  );
};
export default ChartLine;
