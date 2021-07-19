import React from 'react';
import './Polymerization.less';
import Copy from '../../components/Copy';
import isMobile from 'ismobilejs';
import RadialGraph from './components/RadialGraph';
import { useHistory } from 'react-router';
import { useTranslation } from 'react-i18next';

const QueryDetail: React.FC = () => {
  const history = useHistory();
  const { t } = useTranslation();
  const ismobile = isMobile().apple.phone || isMobile().android.phone;
  const pmData = {
    chain: '0x5f4eC3Df9cbd43714FE2740f5E3616155c5b8419',
    mode: 'api.coincap.io/v2/assets/ethereum: data/priceUsd, timestamp [2]',
    org: '0x5f4eC3Df9cbd43714FE2740f5E3616155c5b8419',
    node: '9',
    contract: '0x5f4eC3Df9cbd43714FE2740f5E3616155c5b8419',
    latestTime: '2021.5.13  12:31:42',
    report: '123456',
  };

  const chainData = [
    {
      name: 'ETH/USD',
      url: 'https://api.coincap.io/',
      detail: '…data/usdPrice, timestamp，timestamp，timestamp',
    },
    {
      name: 'ETH/USD',
      url: 'https://api.coincap.io/',
      detail: '…data/usdPrice, timestamp，timestamp，timestamp',
    },
    {
      name: 'ETH/USD',
      url: 'https://api.coincap.io/',
      detail: '…data/usdPrice, timestamp，timestamp，timestamp',
    },
    {
      name: 'ETH/USD',
      url: 'https://api.coincap.io/',
      detail: '…data/usdPrice, timestamp，timestamp，timestamp',
    },
    {
      name: 'ETH/USD',
      url: 'https://api.coincap.io/',
      detail: '…data/usdPrice, timestamp，timestamp，timestamp',
    },
    {
      name: 'ETH/USD',
      url: 'https://api.coincap.io/',
      detail: '…data/usdPrice, timestamp，timestamp，timestamp',
    },
  ];

  return (
    <main
      className={`polymerization-wrap${
        ismobile ? ' polymerization-wrap-phone' : ''
      }`}
    >
      <section className="content">
        <h2>{t('data aggregation details')}</h2>
        <div className="detail">
          <div className="polymerization-left">
            <h3>{t('on-chain contract')}</h3>
            <p>{pmData.chain}</p>
            <h3>{t('aggregation mode')}</h3>
            <p>{pmData.mode}</p>
            <h3>{t('notary council')}</h3>
            {/* <a href="/report"> */}
            <p
              onClick={() => {
                history.push('/orgs');
              }}
            >
              {pmData.org}
            </p>
            {/* </a> */}

            <h3>{t('minimum notarization nodes')}</h3>
            <p>{pmData.node}</p>

            <h3>{t('aggregate contract')}</h3>
            <p>{pmData.contract}</p>
            <h3>{t('Last report time')}</h3>
            <p>{pmData.latestTime}</p>
            <h3>{t('last report')}</h3>
            <p
              onClick={() => {
                history.push({
                  pathname: '/report',
                });
              }}
              className="p-last-child"
            >
              {pmData.report}
            </p>
          </div>
          <div className="polymerization-right">
            <RadialGraph />
          </div>
        </div>
        <div className="chain-data">
          <h2>{t('required off-chain data')}</h2>
          <ul className={!ismobile && chainData.length > 4 ? 'height-ul' : ''}>
            {chainData.map((item, index) => (
              <li key={`chain-item${index}`}>
                <div className="title">{item.name}</div>
                <span className="copy-content">
                  <Copy toCopy={item.url} />
                </span>
                <div className="chain-detail-main">
                  <p>{item.url}</p>
                  <p>{item.detail}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </main>
  );
};

export default QueryDetail;
