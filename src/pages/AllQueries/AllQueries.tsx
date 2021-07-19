import React, { useState, useEffect, useMemo } from 'react';
import TableTitle from '../../components/TableTitle';
import { Table, Tooltip } from 'antd';
import Pagination from '../../components/Pagination';
import Progress from './components/Progress';
import './AllQueries.less';
import { useHistory } from 'react-router-dom';
import isMobile from 'ismobilejs';
import { ColumnsType } from 'antd/lib/table';
import { useTranslation } from 'react-i18next';

const AllQueries: React.FC = () => {
  const [data, setData] = useState<QueryItem[]>([]);
  const history = useHistory();
  const [, setPage] = useState<number>(1);
  const ismobile = isMobile().apple.phone || isMobile().android.phone;
  const { t } = useTranslation();
  const columns: ColumnsType<QueryItem> = useMemo(() => {
    return [
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
        width: 300,
        render: (tradeId: string) => (
          <Tooltip title={tradeId}>{`${tradeId.slice(0, 10)}...`}</Tooltip>
        ),
      },
      {
        title: t('Report status'),
        dataIndex: 'reportState',
        key: 'reportState',
        render: (per: number) => <Progress percent={per} showInfo={false} />,
      },
      {
        title: t('Time'),
        dataIndex: 'time',
        key: 'time',
      },
    ];
  }, [ismobile, t]);
  useEffect(() => {
    let i = 0;
    const data = [];
    while (i < 10) {
      const obj = {
        key: '1',
        name: 'John Brown',
        tradeId: '3a581d0ecf3a581d0ecf',
        reportState: 0,
        time: '2021.4.26  19:55:01',
      };
      obj.key = `${i + 1}`;
      obj.reportState = i * 10;
      data.push(obj);

      i++;
    }

    setData(data);
  }, []);

  const onRow = (
    record: QueryItem,
    index?: number
  ): React.HTMLAttributes<HTMLElement> => {
    // return <div>1</div>
    return {
      onClick: () => {
        history.push({
          pathname: '/queryDetail',
        });
      },
    };
  };

  const pageChangeHandler = (page: number, pageSize?: number) => {
    console.log(page, pageSize);
    setPage(page);
  };
  return (
    <main
      className={`${ismobile ? ' all-queries-wrap-phone' : 'all-queries-wrap'}`}
    >
      <section className="all-queries-content">
        <div className="table-content">
          <TableTitle text={`${t('Total inquiries')}: ${1999}`} />
          <div>
            <Table
              tableLayout="fixed"
              scroll={ismobile ? { x: 800 } : {}}
              columns={columns}
              dataSource={data}
              loading={false}
              onRow={onRow}
              pagination={false}
            />
          </div>
        </div>
      </section>
      <section className="pagination-content">
        <Pagination
          defaultCurrent={1}
          total={1999}
          onChange={pageChangeHandler}
        />
      </section>
    </main>
  );
};
export default AllQueries;
