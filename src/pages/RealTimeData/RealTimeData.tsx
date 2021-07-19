import react from 'react';
import { Button, Tooltip } from 'antd';
import { useTranslation } from 'react-i18next';
import { EllipsisOutlined } from '@ant-design/icons';
import { useHistory } from 'react-router-dom';
import './RealTimeData.less';
import ChartLine from './components/ChartLine';
import LatestTable from './components/LatestTable';
import FRTable from '../../components/FRTable';
import isMobile from 'ismobilejs';
// import { useLastestReqList } from '../../hooks/useRealTimeData';
const RealTimeData: react.FC = () => {
  const history = useHistory();
  const { t } = useTranslation();
  const ismobile = isMobile().apple.phone || isMobile().android.phone;

  const User = {
    id: '3a581d0ecf3a581d0ecf',
    name: '用户三',
  };
  const MostNodes = [
    { name: '安全预言家' },
    { name: '安全预言家' },
    { name: '安全预言家' },
  ];
  return (
    <>
      {/* <Header /> */}
      <div className={`data-banner${ismobile ? ' data-banner-phone' : ''}`}>
        <div className="top"></div>

        <div className="banner">
          <div className="banner-text">
            <h2>{t('DONSDPF')}</h2>
            <p>{t('Introduce-live-price')}</p>
            <div className="botton-content">
              <a
                className="style-link"
                href="https://github.com/eventeum/eventeum"
                target="_blank"
                rel="noreferrer"
              >
                <Button type="primary">{t('Use aelf SDK')}</Button>
              </a>
              <a
                className="style-link"
                href="https://github.com/eventeum/eventeum"
                target="_blank"
                rel="noreferrer"
              >
                <Button type="primary">{t('Become a node operator')}</Button>
              </a>
            </div>
          </div>
          <div className="img-content">
            <img src="" alt="" />
          </div>
        </div>
      </div>
      <main className={`data-main${ismobile ? ' data-main-phone' : ''}`}>
        <div className="data-content">
          <section className="data-section data-section-first">
            <div className="latest-request">
              <h3>{t('Lastest request')}</h3>
              <Tooltip title={User.id}>
                <p className="user-id">
                  {User.id.slice(0, 10)}
                  <span>...</span>
                </p>
              </Tooltip>
              <p className="user-name">{User.name}</p>
            </div>
            <div className="most-content">
              <h3>{t('The node with highest total transactions')}</h3>
              <ul>
                {MostNodes.map((item, index) => (
                  <li key={`node${index}`}>
                    <span>{index + 1}</span>
                    <span>{item.name}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="most-content">
              <h3>{t('The oracle with highest total transactions')}</h3>
              <ul>
                {MostNodes.map((item, index) => (
                  <li key={`org${index}`}>
                    <span>{index + 1}</span>
                    <span>{item.name}</span>
                  </li>
                ))}
              </ul>
            </div>
          </section>
          <section className="data-section data-section-second">
            <div className="chart-line-wrap">
              <ChartLine />
            </div>
            <div className="latest-table-wrap">
              <LatestTable />
            </div>
          </section>
          <section className="data-section-third">
            <FRTable
              text={t('recent completed requests')}
              elem={
                <EllipsisOutlined
                  rotate={90}
                  style={{
                    color: '#CECEDD',
                    fontSize: '32px',
                    marginRight: '-16px',
                  }}
                  onClick={() => {
                    history.push({
                      pathname: '/allQuest',
                    });
                  }}
                />
              }
            />
          </section>
        </div>
      </main>
      {/* <Bottom /> */}
    </>
  );
};

export default RealTimeData;
