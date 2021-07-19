import React, { useEffect } from 'react';
import * as echarts from 'echarts';
import isMobile from 'ismobilejs';

const DemoIndentedTree: React.FC = () => {
  const ismobile = isMobile().apple.phone || isMobile().android.phone;
  useEffect(() => {
    const chartWarp: HTMLDivElement | null = document.getElementById(
      'main'
    ) as HTMLDivElement;
    if (chartWarp) {
      const myChart = echarts.init(chartWarp);
      const data = {
        name: 'flare',
        label: {
          position: 'inside',
          show: true,
          rotate: 0,
        },
        children: [
          {
            name: 'analytanalyticsanalyticsanalyticsanalyticsanalyticsanalyticsanalyticsanalyticsics',
          },
          {
            name: 'animate',
          },
          {
            name: 'data',
          },
          {
            name: 'display',
          },
          {
            name: 'flex',
          },
          {
            name: 'physicsfjdlsjflsadfjlsddd',
          },
          {
            name: 'query',
          },
          {
            name: 'scale',
          },
          {
            name: 'util',
          },
          {
            name: 'vis',
          },
        ],
      };
      const option: echarts.EChartOption | echarts.EChartsResponsiveOption = {
        tooltip: {
          // trigger: 'item',
          //  triggerOn: 'mousemove',

          textStyle: {
            color: '#3A4B74',
            fontSize: 12,
            width: 74,
            height: 65,
          },
          formatter: (
            params:
              | echarts.EChartOption.Tooltip.Format
              | echarts.EChartOption.Tooltip.Format[]
          ) => {
            return !(params instanceof Array) && params.data.name;
          },
        },

        series: [
          {
            type: 'tree',
            data: [data],
            layout: 'radial',
            symbol: 'circle',
            itemStyle: {
              color: '#CAC5FF',
            },
            lineStyle: {
              curveness: 0,
              width: 2,
            },
            emphasis: {
              // focus: 'series',
            },
            label: {
              fontSize: 18,
              // position: 'inside',
              show: false,
            },
            symbolRotate: 0,
            symbolSize: (_: undefined, b: { name: string }) => {
              if (b.name === 'flare') {
                return ismobile ? 96 : 152;
              }
              return ismobile ? 10 : 14;
            },

            initialTreeDepth: 100,

            animationDurationUpdate: 750,
          },
        ],
      };

      myChart.setOption(option);
    }
  }, [ismobile]);

  return <div id="main" style={{ width: '100%', height: '100%' }}></div>;
};

export default DemoIndentedTree;
