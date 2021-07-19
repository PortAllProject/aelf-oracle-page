import React, { useState, useEffect, useMemo } from 'react';
import './Inquire.less';
import { Table, Tooltip } from 'antd';
import Pagination from '../../../Pagination';
import Copy from '../../../Copy';
import isMobile from 'ismobilejs';
import { useHistory } from 'react-router';
import { ColumnsType } from 'antd/lib/table';
import { useTranslation } from 'react-i18next';

const Inquire: React.FC<{ InquireData: InquireItem[] }> = ({ InquireData }) => {
  const [page, setPage] = useState<number>(1);
  const [columns, setColumns] = useState<ColumnsType<InquireItem>>([]);
  const ismobile = isMobile().apple.phone || isMobile().android.phone;
  const history = useHistory();
  const { t } = useTranslation();
  const cellNameRow = useMemo(
    () =>
      (
        record: InquireItem,
        index?: number
      ): React.HTMLAttributes<HTMLElement> => {
        return {
          onClick: (e) => {
            e.stopPropagation();

            history.push('/queryDetail');
          },
        };
      },
    [history]
  );
  useEffect(() => {
    const columns: ColumnsType<InquireItem> = [
      {
        width: ismobile ? 120 : 'auto',
        fixed: ismobile ? 'left' : false,
        title: t('query ID'),
        dataIndex: 'inquireID',
        key: 'inquireID',
        onCell: cellNameRow,
        render: (inquireID: string) => (
          <Tooltip title={inquireID} getTooltipContainer={(v) => v}>
            <span className="inquire-id">{inquireID.slice(0, 6)}...</span>
          </Tooltip>
        ),
      },
      {
        title: t('Trading ID (aelf)'),
        dataIndex: 'tradeId',
        key: 'tradeId',
        // ellipsis: true,
        render: (tradeId: TradeType) => (
          <div className="trade-item">
            {tradeId.Commit && (
              <Tooltip title={tradeId.Commit} getTooltipContainer={(v) => v}>
                <div>
                  <span className="commit">Commit</span>
                  <span>{tradeId.Commit.slice(0, 6)}...</span>
                </div>
              </Tooltip>
            )}
            {tradeId.Reveal && (
              <Tooltip title={tradeId.Reveal} getTooltipContainer={(v) => v}>
                <div>
                  <span className="reveal">Reveal</span>
                  <span>{tradeId.Reveal.slice(0, 6)}...</span>
                </div>
              </Tooltip>
            )}
          </div>
        ),
      },
      {
        title: t('requester'),
        dataIndex: 'reportState',
        key: 'reportState',
        // ellipsis: true,
        render: (reportState: string) => (
          <Tooltip title={reportState} getTooltipContainer={(v) => v}>
            <span className="report-state">{reportState.slice(0, 6)}...</span>
          </Tooltip>
        ),
      },
      {
        title: t('result'),
        dataIndex: 'result',
        key: 'result',
        render: (text: string) => (
          <span className="inquire-result">{text}</span>
        ),
      },
      {
        title: t('request link'),
        dataIndex: 'reqLink',
        key: 'reqLink',
        className: 'reqlink',
        render: (reqLink: string) => (
          <div style={{ paddingRight: '34px' }}>
            <Copy toCopy={reqLink} />
            <span>{reqLink}</span>
          </div>
        ),
      },
    ];
    console.log(InquireData, 'InquireData');
    if (InquireData[0]?.nodesNum) {
      columns.splice(columns.length - 1, 1, {
        title: t('number of active nodes'),
        dataIndex: 'nodesNum',
        key: 'nodesNum',
        render: (num: string) => <span>{num}/10</span>,
      });
    }
    setColumns(columns);
  }, [InquireData, ismobile, cellNameRow, t]);

  const onRow = (
    record: InquireItem,
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
  const InquireDataNow = useMemo(() => {
    return InquireData.slice((page - 1) * 6, page * 6);
  }, [InquireData, page]);
  return (
    <>
      <section className="inquire-table-content">
        <Table
          columns={columns}
          scroll={{ x: ismobile ? 1000 : '' }}
          dataSource={InquireDataNow}
          loading={false}
          tableLayout="fixed"
          pagination={false}
          onRow={onRow}
        />
      </section>
      <section
        className={`${
          ismobile ? 'pagination-content-phone' : 'pagination-content'
        }`}
      >
        {InquireData.length && (
          <Pagination
            total={InquireData.length}
            defaultCurrent={page}
            pageSize={6}
            onChange={pageChangeHandler}
          />
        )}
      </section>
    </>
  );
};

export default Inquire;
