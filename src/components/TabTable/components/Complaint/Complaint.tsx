import React, { useState, useMemo } from 'react';
import './Complaint.less';
import { Table, Tooltip } from 'antd';
import Pagination from '../../../Pagination';
import Attachment from '../../../Attachment';
import isMobile from 'ismobilejs';
import { ColumnsType } from 'antd/lib/table';
import { useTranslation } from 'react-i18next';
interface EnumData {
  reason: string[];
  status: string[];
  result: string[];
}
const Complaint: React.FC<{ ComplaintData: ComplaintItem[] }> = ({
  ComplaintData,
}) => {
  const [page, setPage] = useState<number>(1);
  const [annexList, setAnnex] = useState<string[]>([]);
  const [showModel, setModel] = useState<boolean>(false);
  const ismobile = isMobile().apple.phone || isMobile().android.phone;
  const { t } = useTranslation();
  const enumData: EnumData = useMemo(() => {
    return {
      reason: [t('flawed data'), t('others')],
      status: [t('in processing'), t('processed')],
      result: ['不成立', '已惩罚'],
    };
  }, [t]);
  const columns: ColumnsType<ComplaintItem> = useMemo(
    () => [
      {
        width: ismobile ? 80 : 'auto',
        fixed: ismobile ? 'left' : false,
        title: '#',
        dataIndex: 'index',
        key: 'index',
      },
      {
        title: t('complain time'),
        dataIndex: 'time',
        key: 'time',
      },
      {
        title: t('complain description'),
        dataIndex: 'reason',
        key: 'reason',
        render: (reason: string) => <span>{enumData.reason[+reason]}</span>,
      },
      {
        title: '投诉说明',
        dataIndex: 'directions',
        key: 'directions',
        render: (directions: string) => (
          <Tooltip title={directions} getTooltipContainer={(v) => v}>
            {directions.slice(0, 6)}...
          </Tooltip>
        ),
      },
      {
        title: t('attachment'),
        dataIndex: 'annex',
        key: 'annex',
        render: (annex: string[]) => (
          <span
            className="annex-content"
            onClick={(e) => {
              annexClickHander(annex, e);
            }}
          >
            {t('click-n-check')}
          </span>
        ),
      },
      {
        title: t('status'),
        dataIndex: 'state',
        key: 'state',
        render: (state: number) => <span>{enumData.status[state]}</span>,
      },
      {
        title: t('result'),
        dataIndex: 'result',
        key: 'result',
        render: (result: number) => <span>{enumData.result[+result]}</span>,
      },
    ],
    [ismobile, t, enumData]
  );
  const onRow = (
    record: ComplaintItem,
    index?: number
  ): React.HTMLAttributes<HTMLElement> => {
    // return <div>1</div>
    return {
      onClick: () => {
        // console.log(record, index)
        // history.push({
        //   pathname: '/queryDetail'
        // })
      },
    };
  };

  const pageChangeHandler = (page: number, pageSize?: number) => {
    setPage(page);
  };

  const annexClickHander = (annex: string[], e: React.MouseEvent) => {
    console.log(annex, 'annex');
    setAnnex(annex);
    setModel(true);
  };
  const ComplaintDataNow = useMemo(() => {
    return ComplaintData.slice((page - 1) * 10, page * 10);
  }, [ComplaintData, page]);

  const modelCloseHandle = () => {
    setModel(false);
  };
  return (
    <>
      <section className="complaint-table-content">
        <Table
          scroll={{ x: ismobile ? 1000 : '' }}
          columns={columns}
          dataSource={ComplaintDataNow}
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
        {ComplaintData.length && (
          <Pagination
            total={ComplaintData.length}
            defaultCurrent={page}
            pageSize={10}
            onChange={pageChangeHandler}
          />
        )}
      </section>
      <Attachment
        AnnexList={annexList}
        showModel={annexList.length > 0 && showModel}
        onClose={modelCloseHandle}
      />
    </>
  );
};

export default Complaint;
