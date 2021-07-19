import React, { useState, useEffect, useMemo } from 'react';
import { Select } from 'antd';
import './NodeReputation.less';
import { SearchOutlined } from '@ant-design/icons';
import Pagination from '../../components/Pagination';
import HeartChart from '../../components/HeartChart';
import { Table } from 'antd';
import { useHistory } from 'react-router-dom';
import isMobile from 'ismobilejs';
import { ColumnsType } from 'antd/lib/table';
import { useTranslation } from 'react-i18next';

const Node: React.FC = () => {
  const { Option } = Select;
  const [searchInfo, setSearchInfo] = useState<string>('');
  const [topTenData, setTopTenData] = useState<RepTableItem[]>([]);
  const [dataSource, setTableData] = useState<RepTableItem[]>([]);
  const [filterData, setFilterData] = useState<RepTableItem[]>([]);
  const ismobile = isMobile().apple.phone || isMobile().android.phone;
  const [selectVal, setSelectVal] = useState<string>('topTen');
  const [isPagination, setPagination] = useState<boolean>(false);
  const [page, setPage] = useState<number>(1);
  const history = useHistory();
  const { t } = useTranslation();
  const columns: ColumnsType<RepTableItem> = useMemo(
    () => [
      {
        width: ismobile ? '4rem' : 'auto',
        fixed: ismobile ? 'left' : false,
        title: '#',
        dataIndex: 'index',
        key: 'index',
      },
      {
        title: t('node name'),
        dataIndex: 'name',
        key: 'name',
      },
      {
        title: t('Requests responded'),
        dataIndex: 'queryCount',
        key: 'queryCount',
      },
      {
        title: t('response ratio'),
        dataIndex: 'responseRate',
        key: 'responseRate',
      },
      {
        title: t('average response time (seconds)'),
        dataIndex: 'rpSecondTime',
        key: 'rpSecondTime',
      },
      {
        title: t('all-time average response time (blocks)'),
        dataIndex: 'allTime',
        key: 'allTime',
      },
      {
        title: t('average block response time (week)'),
        dataIndex: 'rpWeekTime',
        key: 'rpWeekTime',
        className: 'rpWeekTime',
        render: (data: rpWeekTimeType) => {
          return <HeartChart ChartData={data.chartData} Key={data.key} />;
        },
      },
    ],
    [ismobile, t]
  );

  useEffect(() => {
    let i = 0;
    const data = [];
    const chartData = [
      { time: '2021-06-07', value: 200 },
      { time: '2021-06-14', value: 500 },
      { time: '2021-06-21', value: 1000 },
      { time: '2021-06-28', value: 300 },
      { time: '2021-07-04', value: 100 },
      { time: '2021-07-11', value: 1000 },
      { time: '2021-07-18', value: 600 },
    ];
    while (i < 40) {
      const obj = {
        key: `node${i}`,
        index: i + 1,
        name: '神谕者' + i,
        queryCount: '10301',
        responseRate: '99.999%',
        rpSecondTime: '27.683',
        allTime: '27.683',
        rpWeekTime: {
          chartData,
          key: `node${i}`,
        },
      };
      data.push(obj);

      i++;
    }
    console.log(data);
    setTopTenData(data.slice(0, 10));
    setTableData(data);
  }, []);

  useEffect(() => {
    setPage(1);
  }, [searchInfo]);
  const tableData = useMemo(() => {
    if (selectVal === 'all') {
      setPagination(true);
      const data = dataSource.filter((item) => {
        return item.name.indexOf(searchInfo) !== -1;
      });
      setFilterData(data);
      return data.slice((page - 1) * 10, page * 10);
    } else {
      setPagination(false);

      return topTenData.filter((item) => {
        return item.name.indexOf(searchInfo) !== -1;
      });
    }
  }, [selectVal, searchInfo, dataSource, topTenData, page]);

  const HeaderRow = (
    record: RepTableItem,
    index?: number
  ): React.HTMLAttributes<HTMLElement> => {
    return {
      onClick: () => {
        console.log(index, record);
        history.push({
          pathname: '/nodeDetail',
        });
      },
    };
  };

  const pageChangeHandler = (page: number, pageSize?: number) => {
    console.log(page, pageSize);
    setPage(page);
    // tableData.slice((page - 1) * (pageSize ?? 10), page * (pageSize ?? 10));
  };

  return (
    <main className={`nodes-wrap${ismobile ? ' nodes-wrap-phone' : ''}`}>
      <section className="nodes-banner">
        <div className="nodes-banner-center">
          <div>
            <h1>{t('oracle nodes reputation')}</h1>
            <p>{t('Introduce Node Reputation')}</p>
          </div>

          <div className="banner-image">
            <img src="" alt="" />
          </div>
        </div>
      </section>
      <section className="nodes-table-wrap">
        <div className="top-wrap">
          <Select
            defaultValue="topTen"
            style={{
              width: ismobile ? '100%' : 208,
              height: ismobile ? '3.29rem' : 46,
              lineHeight: ismobile ? '3.29rem' : 46,
            }}
            onChange={(val) => setSelectVal(val)}
          >
            <Option value="all">{t('all')}</Option>
            <Option value="topTen">{t('Top 10 oracle nodes')}</Option>
          </Select>
          <div className="search">
            <input
              type="text"
              placeholder={'名称/地址'}
              value={searchInfo}
              onChange={(event) => {
                const val = event.currentTarget.value
                  .toLocaleLowerCase()
                  .replace(/\s/g, '');
                setSearchInfo(val);
              }}
            />
            <SearchOutlined
              className="search-icon"
              style={{ color: '#D6D8E1', fontSize: '20px' }}
            />
          </div>
        </div>
        <div className="table-content">
          <Table
            dataSource={tableData}
            columns={columns}
            pagination={false}
            scroll={{ x: ismobile ? 800 : '' }}
            // tableLayout='fixed'
            onRow={(record, index) => HeaderRow(record, index)}
          />
        </div>
        <div className="pagination-content">
          {isPagination && (
            <Pagination
              defaultCurrent={page}
              total={filterData.length}
              onChange={pageChangeHandler}
            />
          )}
        </div>
      </section>
    </main>
  );
};
export default Node;
