import React, { useMemo } from 'react';
import { Table, Tooltip } from 'antd';
import { useHistory } from 'react-router-dom';
import { EllipsisOutlined } from '@ant-design/icons';
import './LatestTable.less';
import TableTitle from '../../../../components/TableTitle';
import isMobile from 'ismobilejs';
import { ColumnsType } from 'antd/lib/table/interface';
import { useTranslation } from 'react-i18next';
import {
  useLastestReqList,
  LastestItem,
} from '../../../../hooks/useRealTimeData';

const LatestTable: React.FC = () => {
  const ismobile = isMobile().apple.phone || isMobile().android.phone;
  const history = useHistory();
  const { t } = useTranslation();
  const tableData: LastestItem[] = useLastestReqList();
  const columns: ColumnsType<LastestItem> = useMemo(
    () => [
      {
        width: ismobile ? 120 : 'auto',
        fixed: ismobile ? 'left' : false,
        title: t('User name'),
        dataIndex: 'name',
        key: 'name',
        render: (text: string) => <span>{text}</span>,
      },
      {
        title: t('Trading ID'),
        dataIndex: 'tradeId',
        key: 'tradeId',
        ellipsis: true,
        render: (tradeId: string) => (
          <Tooltip title={tradeId}>
            <span>{`${tradeId.slice(0, 10)}...`}</span>
          </Tooltip>
        ),
      },
      {
        title: t('Time'),
        dataIndex: 'time',
        key: 'time',
      },
    ],
    [ismobile, t]
  );

  const rowHandler = (
    record: LastestItem,
    index?: number
  ): React.HTMLAttributes<HTMLElement> => {
    // return <div>1</div>
    return {
      onClick: (e) => {
        console.log(index);
        history.push({
          pathname: '/queryDetail',
        });
      },
    };
  };
  return (
    <section className="latest-table-content">
      {/* <h2>
        <span>最近的请求</span>
        <EllipsisOutlined rotate={90} style={{color:'#CECEDD',fontSize: '32px', marginRight:'-16px'}} onClick={()=>{
          console.log('click')
        }}/>
      </h2> */}
      <TableTitle
        text={'最近的请求'}
        elem={
          <EllipsisOutlined
            rotate={90}
            style={{ color: '#CECEDD', fontSize: '32px', marginRight: '-16px' }}
            onClick={() => {
              history.push({
                pathname: '/allQueries',
              });
            }}
          />
        }
      />
      <Table
        scroll={ismobile ? { x: 500 } : {}}
        columns={columns}
        dataSource={tableData}
        loading={!tableData.length}
        pagination={false}
        onRow={(record, index) => rowHandler(record, index)}
      />
    </section>
  );
};

export default LatestTable;
