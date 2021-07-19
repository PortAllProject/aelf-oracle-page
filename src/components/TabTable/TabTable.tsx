import React from 'react';
import './TabTable.less';
import { Tabs } from 'antd';
import Inquire from './components/Inquire';
import Report from './components/Report';
import Complaint from './components/Complaint';
import { useTranslation } from 'react-i18next';
// import {InquireItem} from './index'
const TabTable: React.FC<{
  InquireData: InquireItem[];
  ReportData: ReportItem[];
  ComplaintData: ComplaintItem[];
}> = ({ InquireData, ReportData, ComplaintData }) => {
  const { TabPane } = Tabs;
  const { t } = useTranslation();
  return (
    <Tabs
      defaultActiveKey="Inquire"
      animated
      tabBarGutter={30}
      onChange={(val) => {
        console.log(val);
      }}
      className="tabbar-content"
    >
      <TabPane forceRender tab={t('Enquiry')} key="Inquire">
        <Inquire InquireData={InquireData} />
      </TabPane>
      <TabPane forceRender tab={t('Report')} key="Report">
        <Report ReportData={ReportData} />
      </TabPane>
      <TabPane forceRender tab={t('Complains')} key="Complaint">
        <Complaint ComplaintData={ComplaintData} />
      </TabPane>
    </Tabs>
  );
};

export default TabTable;
