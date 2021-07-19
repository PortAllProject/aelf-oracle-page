import React, { useState, useEffect, useMemo } from 'react';
import { useHistory } from 'react-router-dom';
import './QueryDetail.less';
import TableTitle from '../../components/TableTitle';
import { Tooltip, Table } from 'antd';
import { QuestionCircleOutlined } from '@ant-design/icons';
import Copy from '../../components/Copy';
import isMobile from 'ismobilejs';
import { ColumnsType } from 'antd/lib/table/interface';
import NodeCarousel from './components/NodeCarousel';
import { useTranslation } from 'react-i18next';

interface TradeType {
  Commit?: string;
  Reveal?: string;
}
interface TableDataType {
  name: string;
  tradeId: TradeType;
  promise: string;
  submit: string;
  time: string;
  titleText: string;
  state: string;
  num: string;
}
const STSTE = ['bgF9AB29', 'bg22BD85', 'bgF13030', 'bgD8D8D8'];
const QueryDetail: React.FC = () => {
  const [dataSource, setTableData] = useState<TableDataType[]>([]);
  const ismobile = isMobile().apple.phone || isMobile().android.phone;
  const history = useHistory();
  const { t } = useTranslation();
  const titleText = useMemo(
    () => [t('submitted time'), t('succeeded time')],
    [t]
  );

  const queryDataDetail = {
    queryId: 'B57D0B57D0B57D0B57D0B57D0B57D0B57D0',
    tradeId: '3a581d3a581d3a581d3a581d3a581d3a581d',
    nodeCount: '9',
    contract: '0x5f4eC3Df9cbd43714FE2740f5E3616155c5b8419',
    pmResult: '$ 200',
    cbContract: '0x5f4eC3Df9cbd43714FE2740f5E3616155c5b8419',
    cbName: 'Recerd Temperature',
    request: '0x5f4eC3Df9cbd43714FE2740f5E3616155c5b8419',
    commission: '10ETH',
    expireDate: '2021.5.6 12:01:50',
  };
  const cellNameRow = useMemo(
    () =>
      (
        record: TableDataType,
        index?: number
      ): React.HTMLAttributes<HTMLElement> => {
        return {
          onClick: (e) => {
            e.stopPropagation();
            history.push('/nodeDetail');
          },
        };
      },
    [history]
  );
  const cellTradeIdRow = (
    record: TableDataType,
    index?: number
  ): React.HTMLAttributes<HTMLElement> => {
    return {
      onClick: (e) => {
        e.stopPropagation();
        // aelf浏览器交易详情
        // history.push('/OrgDetail');
      },
    };
  };
  const columns: ColumnsType<TableDataType> = useMemo(
    () => [
      {
        width: ismobile ? 120 : 'auto',
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
        width: 700,
        render: (tradeId: TradeType) => (
          <div className="trade-item">
            {tradeId.Commit && (
              // <Tooltip title={tradeId.Commit}>
              <div>
                <span className="commit">Commit</span>
                <span>{tradeId.Commit}</span>
              </div>
              // </Tooltip>
            )}

            {tradeId.Reveal && (
              // <Tooltip title={tradeId.Reveal}>
              <div>
                <span className="reveal">Reveal</span>
                <span>{tradeId.Reveal}</span>
              </div>
              // </Tooltip>
            )}
          </div>
        ),
        onCell: cellTradeIdRow,
      },
      {
        title: () => (
          <div>
            <span className="promise">{t('commit')}</span>
            <Tooltip
              // placement="right"
              getTooltipContainer={(v) => v}
              title={t('promise tooltip')}
            >
              <QuestionCircleOutlined color="#CDCFD4" />
            </Tooltip>
          </div>
        ),
        dataIndex: 'promise',
        key: 'promise',
        // ellipsis: true,
        render: (promise: string) => (
          <Tooltip title={promise}>
            <span className="promise-text">{promise.slice(0, 6)}...</span>
          </Tooltip>
        ),
      },
      {
        title: t('submit data'),
        dataIndex: 'submit',
        key: 'submit',
        render: (submit: string) => (
          <span className="commit-column">{submit}</span>
        ),
      },
    ],
    [ismobile, cellNameRow, t]
  );
  useEffect(() => {
    let i = 0;
    const tableData = [];
    while (i < 14) {
      const tradeId: TradeType = {};
      if (i < 5) {
        tradeId['Commit'] =
          'd90160b3bf3bafb15ab1938ddd37d22dd12dbc495e84099675527937d9d0b671';
        tradeId['Reveal'] =
          'd90160b3bf3bafb15ab1938ddd37d22dd12dbc495e84099675527937d9d0b671';
      } else {
        tradeId['Commit'] =
          'd90160b3bf3bafb15ab1938ddd37d22dd12dbc495e84099675527937d9d0b671';
      }
      const tableItem = {
        name: `0${i + 1}Node`,
        key: `detail${i}`,
        tradeId,
        promise:
          'd90160b3bf3bafb15ab1938ddd37d22dd12dbc495e84099675527937d9d0b671',
        submit: '$201',

        state: STSTE[i % 4],
        num: '$200.123',
        titleText: titleText[i % 4] ?? '',
        time: '2021.4.23 19:55',
      };
      tableData.push(tableItem);
      i++;
    }
    setTableData(tableData);
  }, [titleText]);

  const onRow = (
    record: TableDataType,
    index?: number
  ): React.HTMLAttributes<HTMLElement> => {
    // return <div>1</div>
    // console.log(record, 'record')
    return {
      onClick: () => {
        console.log(index, record);
      },
    };
  };
  return (
    <main
      className={`query-detail-content${
        ismobile ? ' query-detail-content-phone' : ''
      }`}
    >
      <section className="detail-top">
        <div className="detail-top-left">
          <TableTitle text={t('request data details')} />
          <div className="datail">
            <h3>{t('query ID')}</h3>
            <p>{queryDataDetail.queryId}</p>

            <h3>{t('Trading ID')}</h3>
            <p>{queryDataDetail.tradeId}</p>
            <h3>
              <span className="mini-nodes">{t('minimum aggregate nodes')}</span>
              <Tooltip
                placement="right"
                title={t('minimum oracle nodes required for aggregation')}
                getTooltipContainer={(v) => v}
              >
                <QuestionCircleOutlined color="#E6E9F0" />
              </Tooltip>
            </h3>
            <p>{queryDataDetail.nodeCount}</p>
            <h3>{t('aggregate contract')}</h3>
            <p>{queryDataDetail.contract}</p>
            <h3>{t('aggregate result')}</h3>
            <p
              style={{ cursor: 'pointer' }}
              onClick={() => {
                history.push({
                  pathname: '/polymerization',
                });
              }}
            >
              {queryDataDetail.pmResult}
            </p>
            <h3>{t('callback contract')}</h3>
            <p>{queryDataDetail.cbContract}</p>
            <h3>{t('callback contract method name')}</h3>
            <p>{queryDataDetail.cbName}</p>
            <h3>{t('data requester')}</h3>
            <p>{queryDataDetail.request}</p>
            <h3>{t('commission')}</h3>
            <p>{queryDataDetail.commission}</p>
            <h3>{t('expiration')}</h3>
            <p className="p-last-child">{queryDataDetail.expireDate}</p>
          </div>
        </div>
        <div className="detail-top-right">
          <TableTitle text="查询进度" />
          <div className="query-progress-content">
            <div className="tip-content">
              <div>
                <span className="bgF9AB29"></span>
                <span>{t('submitted')}</span>
              </div>
              <div>
                <span className="bg22BD85"></span>
                <span>{t('succeeded')}</span>
              </div>
              <div>
                <span className="bgF13030"></span>
                <span>{t('failed')}</span>
              </div>
              <div>
                <span className="bgD8D8D8"></span>
                <span>{t('unsubmitted')}</span>
              </div>
            </div>
            <div className="reveal-top-box">
              <div>
                <p>{t('latest succeeded time')}</p>
                <h4>2021.4.28 15:42:24</h4>
              </div>
              <div>
                <p>{t('succeeded node')}</p>
                <h4>6</h4>
              </div>
            </div>
            <div className="node-carousel-box">
              <NodeCarousel dataSource={dataSource} />
            </div>
          </div>
        </div>
      </section>
      <section className="detail-center">
        <div className="chain-detail">
          <TableTitle text={t('off-chain data')} />
          <div className="chain-detail-main">
            <span>
              <Copy
                toCopy={
                  'https://api.coincap.io/v2/assets/aelfdata/usdPrice,timestamp，timestamp，timestamp'
                }
              />
            </span>
            <p>
              https://api.coincap.io/v2/assets/aelfdata/usdPrice,timestamp，timestamp，timestamp
            </p>
          </div>
        </div>
        <div className="node">
          <TableTitle text="指定预言机节点" />
          <div className="node-main">
            {/* <div> */}
            <p>0x5f4eC3Df9cbd43714FE2740f5E3616155c5b8419</p>
            <p>0x5f4eC3Df9cbd43714FE2740f5E3616155c5b8419</p>
            <p>0x5f4eC3Df9cbd43714FE2740f5E3616155c5b8419</p>
            <p>0x5f4eC3Df9cbd43714FE2740f5E3616155c5b8419</p>
            <p>0x5f4eC3Df9cbd43714FE2740f5E3616155c5b8419</p>
            <p>0x5f4eC3Df9cbd43714FE2740f5E3616155c5b8419</p>
            <p>0x5f4eC3Df9cbd43714FE2740f5E3616155c5b8419</p>
            <p>0x5f4eC3Df9cbd43714FE2740f5E3616155c5b8419</p>
            {/* </div> */}
          </div>
        </div>
      </section>
      <section className="detail-table-content">
        <div>
          <TableTitle text="数据详情" />
          <Table
            dataSource={dataSource}
            columns={columns}
            pagination={false}
            scroll={ismobile ? { x: 1000 } : {}}
            onRow={onRow}
          />
        </div>
      </section>
    </main>
  );
};

export default QueryDetail;
