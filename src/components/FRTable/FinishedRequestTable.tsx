import React, { useState, useEffect, useMemo } from 'react';
import { Table, Tooltip } from 'antd';
import './FinishedRequestTable.less';
import TableTitle from '../TableTitle';
import Pagination from '../Pagination';
import { useHistory } from 'react-router-dom';
import { ColumnsType } from 'antd/lib/table/interface';
import isMobile from 'ismobilejs';
import { useTranslation } from 'react-i18next';
import { FRItem, useFRTableData } from '../../hooks/useRealTimeData';

interface FRTableConfig {
  text: string;
  pagination?: boolean;
  elem?: React.ReactNode;
  MAXPAGE?: number;
}
const FinishedRequestTable: React.FC<FRTableConfig> = ({
  text,
  pagination = false,
  elem = null,
  MAXPAGE = 10,
}) => {
  const allData = useFRTableData();
  const [page, setPage] = useState<number>(1);
  const history = useHistory();
  const ismobile = isMobile().apple.phone || isMobile().android.phone;
  const { t } = useTranslation();
  const columns: ColumnsType<FRItem> = useMemo(
    () => [
      {
        width: ismobile ? 140 : 240,
        fixed: ismobile ? 'left' : false,
        title: t('oracle networks'),
        dataIndex: 'name',
        key: 'name',
        render: (text: string) => <span>{text}</span>,
      },
      {
        title: t('request ID'),
        dataIndex: 'requestId',
        key: 'requestId',
        render: (tradeId: string) => (
          <Tooltip title={tradeId} getTooltipContainer={(v) => v}>
            {`${tradeId.slice(0, 10)}...`}
          </Tooltip>
        ),
      },
      {
        title: t('Reward'),
        dataIndex: 'toPay',
        key: 'toPay',
      },
      {
        title: t('submit data'),
        dataIndex: 'commit',
        key: 'commit',
        className: 'commit-text',
      },
      {
        title: t('request link'),
        dataIndex: 'rqLink',
        key: 'rqLink',
        render: (rqLink: string) => (
          <Tooltip title={rqLink} getTooltipContainer={(v) => v}>
            {`${rqLink.slice(0, 20)}...`}
          </Tooltip>
        ),
      },
    ],
    [ismobile, t]
  );
  useEffect(() => {
    if (!pagination) {
      allData.length = 10;
    }
  }, [pagination, allData]);

  const onRow = (
    record: FRItem,
    index?: number
  ): React.HTMLAttributes<HTMLElement> => {
    return {
      onClick: () => {
        console.log(index);
        history.push({
          pathname: '/queryDetail',
        });
      },
    };
  };

  const formatData = useMemo(() => {
    return allData.slice((page - 1) * MAXPAGE, page * MAXPAGE);
  }, [page, allData, MAXPAGE]);

  const pageChangeHandler = (page: number, pageSize?: number) => {
    console.log(page, pageSize);
    setPage(page);
  };

  return (
    <>
      <section className="finished-table-content">
        <TableTitle text={text} elem={elem} />
        <Table
          columns={columns}
          dataSource={formatData}
          loading={!formatData.length}
          tableLayout="fixed"
          pagination={false}
          scroll={ismobile ? { x: 1000 } : {}}
          onRow={onRow}
        />
      </section>
      {pagination && (
        <section className="pagination-content">
          {allData.length && (
            <Pagination
              total={allData.length}
              defaultCurrent={1}
              onChange={pageChangeHandler}
            />
          )}
        </section>
      )}
    </>
  );
};

export default FinishedRequestTable;
