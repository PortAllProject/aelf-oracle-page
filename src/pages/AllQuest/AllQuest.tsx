import React from 'react';
import FRTable from '../../components/FRTable';
import './AllQuest.less';
import isMobile from 'ismobilejs';
import { useTranslation } from 'react-i18next';

const AllQuest: React.FC = () => {
  const ismobile = isMobile().apple.phone || isMobile().android.phone;
  const { t } = useTranslation();
  return (
    <main className={`${ismobile ? 'all-quest-wrap-phone' : 'all-quest-wrap'}`}>
      <section className="all-quest-content">
        <FRTable
          text={`${t('completed transactions')}: ${1999}`}
          pagination={true}
        />
      </section>
    </main>
  );
};
export default AllQuest;
