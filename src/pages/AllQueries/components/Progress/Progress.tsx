import React from 'react';
import { Progress } from 'antd';
import { ProgressProps } from 'antd/lib';
import './Progress.less';
import { useTranslation } from 'react-i18next';

const ProgressAntd: React.FC<ProgressProps> = (Props) => {
  const { t } = useTranslation();
  return (
    <div className="progress-content">
      <div className="progress-title">
        <span>{t('lowest')} 3</span>
        <span>
          <b>{(Props.percent ?? 0) / 10}</b> <b>/10</b>
        </span>
      </div>
      <Progress
        strokeWidth={6}
        strokeColor={(Props.percent ?? 0) < 30 ? '#773ADC' : '#00C080'}
        trailColor="#EAEBF5"
        {...Props}
      />
    </div>
  );
};

export default ProgressAntd;
