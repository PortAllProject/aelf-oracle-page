import React, { useState, useMemo } from 'react';
import './Report.less';
import { Table, Tooltip } from 'antd';
import Pagination from '../../../Pagination';
import isMobile from 'ismobilejs';
import { ColumnsType } from 'antd/lib/table';
import { useHistory } from 'react-router';
import { useTranslation } from 'react-i18next';

const Report: React.FC<{ ReportData: ReportItem[] }> = ({ ReportData }) => {
  const [page, setPage] = useState<number>(1);
  const ismobile = isMobile().apple.phone || isMobile().android.phone;
  const history = useHistory();
  const { t } = useTranslation();
  const agDetailCell = useMemo(
    () =>
      (
        record: ReportItem,
        index?: number
      ): React.HTMLAttributes<HTMLElement> => {
        return {
          onClick: (e) => {
            e.stopPropagation();

            history.push('/polymerization');
          },
        };
      },
    [history]
  );
  const columns: ColumnsType<ReportItem> = useMemo(
    () => [
      {
        width: ismobile ? 120 : 'auto',
        fixed: ismobile ? 'left' : false,
        title: t('aggregation information'),
        dataIndex: 'agDetail',
        key: 'agDetail',
        onCell: agDetailCell,
        render: (agDetail: { address: string; icon: number }) => (
          <Tooltip title={agDetail.address} getTooltipContainer={(v) => v}>
            <div className="ag-detail-content">
              <span
                className={agDetail.icon % 2 ? 'binance-icon' : 'ethereum-icon'}
              ></span>
              <span>{agDetail.address.slice(0, 6)}...</span>
            </div>
          </Tooltip>
        ),
      },
      {
        title: t('report generated time'),
        dataIndex: 'startTime',
        key: 'startTime',
      },
      {
        title: t('report confirmed time'),
        dataIndex: 'comfirmTime',
        key: 'comfirmTime',
      },
      {
        title: t('report accomplished time'),
        dataIndex: 'finishTime',
        key: 'finishTime',
      },
      {
        title: t('trading ID (Etherscan)'),
        dataIndex: 'tradeId',
        key: 'tradeId',
        render: (tradeId: string) => (
          <Tooltip title={tradeId} getTooltipContainer={(v) => v}>
            <span>{tradeId.slice(0, 6)}...</span>
          </Tooltip>
        ),
      },
      {
        title: t('result set'),
        dataIndex: 'resultSet',
        key: 'resultSet',
        render: (resultSet: string) => (
          <span className="result-set">{resultSet}</span>
        ),
      },
    ],
    [agDetailCell, ismobile, t]
  );
  const onRow = (
    record: ReportItem,
    index?: number
  ): React.HTMLAttributes<HTMLElement> => {
    // return <div>1</div>
    return {
      onClick: () => {
        // history.push({
        //   pathname: '/queryDetail'
        // })
      },
    };
  };

  const pageChangeHandler = (page: number, pageSize?: number) => {
    setPage(page);
  };
  const ReportDataNow = useMemo(() => {
    return ReportData.slice((page - 1) * 10, page * 10);
  }, [ReportData, page]);
  return (
    <>
      <section className="report-table-content">
        <Table
          scroll={{ x: ismobile ? 1000 : '' }}
          columns={columns}
          dataSource={ReportDataNow}
          loading={false}
          pagination={false}
          onRow={onRow}
        />
      </section>
      <section
        className={`${
          ismobile ? 'pagination-content-phone' : 'pagination-content'
        }`}
      >
        {ReportData.length && (
          <Pagination
            total={ReportData.length}
            defaultCurrent={page}
            pageSize={10}
            onChange={pageChangeHandler}
          />
        )}
      </section>
    </>
  );
};

export default Report;
