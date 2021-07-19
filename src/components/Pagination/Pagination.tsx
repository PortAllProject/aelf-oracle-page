import React from 'react';
import { Pagination } from 'antd';
import { PaginationConfig } from 'antd/lib/pagination';
import './Pagination.less';

const PaginationAntd: React.FC<PaginationConfig> = (PaginationParams) => {
  return (
    <section className="pagination-wrap">
      <Pagination
        showTitle={false}
        showSizeChanger={false}
        {...PaginationParams}
      />
    </section>
  );
};

export default PaginationAntd;
