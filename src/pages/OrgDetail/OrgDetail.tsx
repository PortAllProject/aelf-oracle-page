import React, { useState, useEffect } from 'react';
import { Select } from 'antd';
import './OrgDetail.less';
import TabTable from '../../components/TabTable';
import RQNumTable from '../../components/RQNumTable';
import OrgNode from './components/OrgNode';
import isMobile from 'ismobilejs';
import { useTranslation } from 'react-i18next';

const chartData = {
  monthData: [
    { time: '2021-06-07', value: 200 },
    { time: '2021-06-14', value: 500 },
    { time: '2021-06-21', value: 1000 },
    { time: '2021-06-28', value: 300 },
    { time: '2021-07-04', value: 100 },
    { time: '2021-07-11', value: 1000 },
    { time: '2021-07-18', value: 600 },
  ],
  yearData: [
    { time: '2021-06-01', value: 200 },
    { time: '2021-06-02', value: 500 },
    { time: '2021-06-03', value: 200 },
    { time: '2021-06-04', value: 500 },
    { time: '2021-06-07', value: 200 },
    { time: '2021-06-14', value: 500 },
    { time: '2021-06-21', value: 1000 },
    { time: '2021-06-28', value: 300 },
    { time: '2021-07-04', value: 100 },
    { time: '2021-07-11', value: 1000 },
    { time: '2021-07-18', value: 600 },
  ],
  allData: [],
};

const NodeDetail: React.FC = () => {
  const { Option } = Select;
  const [, setSelectVal] = useState<string>('all');
  const [InquireData, setInquireData] = useState<InquireItem[]>([]);
  const [ReportData, setReportData] = useState<ReportItem[]>([]);
  const [ComplaintData, setComplaint] = useState<ComplaintItem[]>([]);
  const ismobile = isMobile().apple.phone || isMobile().android.phone;
  const { t } = useTranslation();
  const setlectData = {
    requestNum: '33,446',
    committee: '4,246.628',
    responTime: '27.683',
    amount: '1,000,000.0000',
    startTime: '2021.4.26 19:55:01',
  };

  useEffect(() => {
    let i = 0;
    const InquireData = [];
    const ReportData = [];
    const ComplaintData = [];
    while (i < 14) {
      const tradeId: TradeType = {};
      tradeId['Commit'] =
        'd90160b3bf3bafb15ab1938ddd37d22dd12dbc495e84099675527937d9d0b671';
      tradeId['Reveal'] =
        'd90160b3bf3bafb15ab1938ddd37d22dd12dbc495e84099675527937d9d0b671';

      const tableItem = {
        inquireID: `B57D00${i + 1}Node`,
        key: `inquire${i}`,
        tradeId,
        reportState: 'd90160b3bf3bafb15ab1938ddd37d22dd12dbc495e84091',
        result: '$2,001',
        nodesNum: `${i % 10}`,
      };
      InquireData.push(tableItem);

      const agDetail = {
        address: 'd90160b3bf3bafb15ab1938ddd37d22dd12dbc495e84091',
        icon: i,
      };
      const reportItem = {
        agDetail,
        startTime: '2021.4.26  19:55:01',
        key: `report${i}`,
        tradeId: 'd90160b3bf3bafb15ab1938ddd37d22dd12dbc495e84091',
        comfirmTime: '2021.4.26  19:55:01',
        finishTime: '2021.4.26  19:55:01',
        resultSet: '$2,001',
      };
      ReportData.push(reportItem);
      const ComplaintItem = {
        index: i + 1,
        time: '2021.4.26  19:55:01',
        key: `Complaint${i}`,
        reason: `${i % 2}`,
        directions: '数据差距较数据差距较数据差距较数据差距较数据差距较',
        annex: [
          'https://imtoken.fans/uploads/default/original/2X/b/be1536ae841be47c09760b3e798b2fa291c0a4f4.png',
          'https://imtoken.fans/uploads/default/original/2X/1/1e9293630f199cc98fb64cb5cac88a4600fb76d3.jpeg',
          'https://imtoken.fans/uploads/default/original/2X/e/e93763979923197e6bea2e0a71ff62cb8d35ce85.jpeg',
        ],
        state: i % 2,
        result: i % 2,
      };
      ComplaintData.push(ComplaintItem);
      setComplaint(ComplaintData);
      setReportData(ReportData);
      setInquireData(InquireData);
      i++;
    }
  }, []);
  return (
    <main
      className={`node-detail-wrap${ismobile ? ' node-detail-wrap-phone' : ''}`}
    >
      <section className="content">
        <h2>{t('oracle network')}</h2>
        <div className="statistics">
          <div className="statistics-header">
            <h3>{t('data statistics')}</h3>
            <Select
              defaultValue="all"
              style={{
                width: ismobile ? '7.17rem' : 208,
                height: ismobile ? '2rem' : 28,
                lineHeight: ismobile ? '2rem' : 28,
              }}
              onChange={(val) => setSelectVal(val)}
            >
              <Option value="all">{t('total time')}</Option>
              <Option value="month">{t('in the past month')}</Option>
              <Option value="week">{t('in the past week')}</Option>
              <Option value="day">{t('in the past day')}</Option>
            </Select>
          </div>
          <div className="data-item-content">
            <div>
              <p className="title">{t('requests responded')}</p>
              <p>{setlectData.requestNum}</p>
            </div>
            <div>
              <p className="title">{t('accumulate commission (PORT)')}</p>
              <p>{setlectData.committee}</p>
            </div>
            <div>
              <p className="title">{t('average response time (per second)')}</p>
              <p>{setlectData.responTime}</p>
            </div>
            <div>
              <p className="title">{t('staking amount')}</p>
              <p>
                {setlectData.amount}
                <span>ETH</span>
              </p>
            </div>
            <div>
              <p className="title">{t('network founding time')}</p>
              <p>{setlectData.startTime}</p>
            </div>
          </div>
        </div>
        <div className="table-content">
          <TabTable
            InquireData={InquireData}
            ReportData={ReportData}
            ComplaintData={ComplaintData}
          />
        </div>
        <RQNumTable ChartData={chartData} />
        <OrgNode />
      </section>
    </main>
  );
};
export default NodeDetail;
