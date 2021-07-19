import React from 'react';
import './TableTitle.less';
import isMobile from 'ismobilejs';

const TableTitle: React.FC<{ text: string; elem?: React.ReactNode }> = (
  TitleParams
) => {
  const ismobile = isMobile().apple.phone || isMobile().android.phone;
  return (
    <div
      className={`table-title-portal${
        ismobile ? ' table-title-portal-phone' : ''
      }`}
    >
      <h2>
        <span key={Math.random()}>{TitleParams.text}</span>
        {TitleParams.elem && TitleParams.elem}
      </h2>
    </div>
  );
};

export default TableTitle;
