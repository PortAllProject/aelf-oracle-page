import React, { useState, useEffect, useMemo } from 'react';
import './Report.less';
import TableTitle from '../../components/TableTitle';
import { Table, Tooltip } from 'antd';
import Copy from '../../components/Copy';
import isMobile from 'ismobilejs';
import NodeCarousel from './components/NodeCarousel';
import { ColumnsType } from 'antd/lib/table/interface';
import { useHistory } from 'react-router';
import { useTranslation } from 'react-i18next';

const STSTE = ['bg22BD85', 'bgD8D8D8', 'bgF13030'];
interface chainDataType {
  name: string;
  url: string;
}
interface TableData {
  name: string;
  tradeId: string;
  sureTime: string;
  sign: string;
  key: string;
}
const Report: React.FC = () => {
  const reportDataDetail = {
    cycleId: '1',
    reporter: '预言团',
    reward: '9 ETH',
    pmResult: '$ 200',
    mode: 'api.coincap.io/v2/assets/bitcoin: data/priceUsd, timestamp [1]',
    targetTradeId: '3a581d0ecfd6119ad31c7255bf19ecc41936acaafed79dbe2086…',
    targetContract: '0x5f4eC3Df9cbd43714FE2740f5E3616155c5b8419',
    pmDetail: '...',
  };
  const [chainData, setChainData] = useState<chainDataType[]>([]);
  // const [nodeData, setNodeData] = useState<nodeDataType[]>([]);
  const [dataSource, setTableData] = useState<TableData[]>([]);
  const ismobile = isMobile().apple.phone || isMobile().android.phone;
  const history = useHistory();
  const { t } = useTranslation();
  const cellNameRow = useMemo(
    () =>
      (
        record: TableData,
        index?: number
      ): React.HTMLAttributes<HTMLElement> => {
        return {
          onClick: (e) => {
            e.stopPropagation();

            history.push('/nodes');
          },
        };
      },
    [history]
  );
  const columns: ColumnsType<TableData> = useMemo(
    () => [
      {
        width: ismobile ? 100 : 'auto',
        fixed: ismobile ? 'left' : false,
        title: t('node name'),
        dataIndex: 'name',
        key: 'name',
        onCell: cellNameRow,
        render: (name: string) => (
          <span className="node-name" id={name}>
            {name}
          </span>
        ),
      },
      {
        title: t('Trading ID'),
        dataIndex: 'tradeId',
        key: 'tradeId',
        render: (tradeId: string) => (
          <Tooltip title={tradeId}>
            <div className="trade-item">
              <span></span>
              <span>{tradeId.slice(0, 6)}...</span>
            </div>
          </Tooltip>
        ),
      },
      {
        title: t('confirmed time'),
        dataIndex: 'sureTime',
        key: 'sureTime',
      },
      {
        title: t('signature'),
        dataIndex: 'sign',
        key: 'sign',
        render: (sign: string) => (
          <Tooltip title={sign}>{sign.slice(0, 6)}...</Tooltip>
        ),
      },
    ],
    [ismobile, cellNameRow, t]
  );
  useEffect(() => {
    console.log(1);
    let i = 0;
    const chainData = [];
    while (i < 10) {
      const obj = {
        name: 'ETH/USD',
        url: 'https://api.coincap.io/…data/usdPrice, timestamp，timestamp，timestamp',
      };
      chainData.push(obj);
      i++;
    }
    let i1 = 0;
    const data = [];
    const tableData = [];
    while (i1 < 14) {
      const nodeItem = {
        name: `0${i1 + 1}Node`,
        state: STSTE[i1 % 3],
        num: '$200.123',
      };
      data.push(nodeItem);
      const tableItem = {
        name: `0${i1 + 1}Node`,
        tradeId:
          'd90160b3bf3bafb15ab1938ddd37d22dd12dbc495e84099675527937d9d0b671',
        sureTime: '2021.4.26  19:55:01',
        sign: '3a581…3a581…3a581…3a581…',
        key: `notary${i1}`,
      };
      tableData.push(tableItem);
      i1++;
    }
    // setNodeData(data);
    setChainData(chainData);
    setTableData(tableData);
  }, []);
  const onRow = (
    record: TableData,
    index?: number
  ): React.HTMLAttributes<HTMLElement> => {
    return {
      onClick: () => {
        console.log(index);
      },
    };
  };
  return (
    <main className={`report-wrap${ismobile ? ' report-wrap-phone' : ''}`}>
      <h1 className="center-wrap report-title">{t('report information')}</h1>
      <section className="center-wrap report-detail chain-data">
        <h2>{t('request information')}</h2>
        <ul>
          {chainData.map((item, index) => (
            <li key={`chain-item${index}`}>
              <div className="title">{item.name}</div>

              <span className="copy-content">
                <Copy toCopy={item.url} />
              </span>
              <div className="chain-detail-main">
                <p>{item.url}</p>
                {/* <p>{item.detail}</p> */}
              </div>
            </li>
          ))}
        </ul>

        <div className="report-detail-item">
          <div className="report-detail-left">
            <h3>{t('cycle ID')}</h3>
            <p>{reportDataDetail.cycleId}</p>
            <h3>{t('reporter')}</h3>
            <p>{reportDataDetail.reporter}</p>
            <h3>{t('Reward')}</h3>
            <p>{reportDataDetail.reward}</p>
            <h3>{t('aggregate result')}</h3>
            <p>{reportDataDetail.pmResult}</p>
            <h3>{t('aggregation mode')}</h3>
            <p>{reportDataDetail.mode}</p>
            <h3>{t('target contract')}</h3>
            <p>{reportDataDetail.targetContract}</p>
            <h3>{t('target transaction ID')}</h3>
            <p>{reportDataDetail.targetTradeId}</p>
            <h3>{t('data aggregation details')}</h3>
            <p
              onClick={() => {
                history.push({
                  pathname: '/polymerization',
                });
              }}
              className="p-last-child"
            >
              {reportDataDetail.pmDetail}
            </p>
          </div>
          <div className="report-detail-right">
            <div className="tip-content">
              <div>
                <span className="bg22BD85"></span>
                <span>{t('signed')}</span>
              </div>
              <div>
                <span className="bgD8D8D8"></span>
                <span>{t('waiting for the signature')}</span>
              </div>
              <div>
                <span className="bgF13030"></span>
                <span>{t('rejected signature')}</span>
              </div>
            </div>
            <div className="reveal-top-box">
              <div>
                <p>{t('last updated time')}</p>
                <h4>2021.4.28 15:42:24</h4>
              </div>
              <div>
                <p>{t('signed nodes')}</p>
                <h4>6</h4>
              </div>
            </div>

            <div className="node-carousel-box">
              <NodeCarousel />
            </div>
          </div>
        </div>
      </section>
      <section className="center-wrap notary-table">
        <TableTitle text={t('notary')} />
        <Table
          dataSource={dataSource}
          columns={columns}
          pagination={false}
          scroll={{ x: ismobile ? 800 : '' }}
          onRow={onRow}
        />
      </section>
    </main>
  );
};

export default Report;
