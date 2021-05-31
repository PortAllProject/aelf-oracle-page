import react from 'react';
import aelf_net2x from '../../../../assets/aelf_net2x.png';
import contract2x from '../../../../assets/contract2x.png';
import commit2x from '../../../../assets/commit2x.png';
import agility2x from '../../../../assets/agility2x.png';
import prestige2x from '../../../../assets/prestige2x.png';
import { useTranslation } from 'react-i18next';
import isMobile from 'ismobilejs';
import { Carousel } from 'antd';
import './Framwork.less';

const Framwork: react.FC = () => {
  const { t, i18n } = useTranslation();
  const LG = i18n.language;
  const ismobile = isMobile().apple.phone || isMobile().android.phone;
  const listItems = () => {
    return (
      <>
        <h2>{t('Infrastructure')}</h2>
        <div className="item-content">
          <ul className="list-content">
            <li>
              <div className="box-content">
                <div className="img-content">
                  <img src={aelf_net2x} alt="" />
                </div>
                <h3>{t('Based on aelf mainnet')}</h3>
                <p>{t('Based on aelf mainnet introduce')}</p>
              </div>
            </li>
            <li>
              <div className="box-content">
                <div className="img-content">
                  <img src={contract2x} alt="" />
                </div>
                <h3>{t('Connect API')}</h3>
                <p>{t('Connect API introduce')}</p>
              </div>
            </li>
            <li>
              <div className="box-content">
                <div className="img-content">
                  <img src={agility2x} alt="" />
                </div>
                <h3>{t('Flexible aggregation method')}</h3>
                <p>{t('Flexible aggregation method introduce')}</p>
              </div>
            </li>
            <li>
              <div className="box-content">
                <div className="img-content">
                  <img src={commit2x} alt="" />
                </div>
                <h3>{t('Submit-disclose mechanism')}</h3>
                <p>{t('Submit-disclose mechanism introduce')}</p>
              </div>
            </li>
            <li>
              <div className="box-content">
                <div className="img-content">
                  <img src={prestige2x} alt="" />
                </div>
                <h3>
                  {t('Oracle nodes and organizational reputation system')}
                </h3>
                <p>
                  {t(
                    'Oracle nodes and organizational reputation system introduce'
                  )}
                </p>
              </div>
            </li>
          </ul>
        </div>
      </>
    );
  };

  return (
    <>
      <div
        className={`framework-wrap${LG === 'en' ? ' en-framework-wrap' : ''}${
          ismobile ? ' phone-wrap' : ''
        }`}
      >
        {ismobile ? (
          <div className={ismobile ? 'phone-framework-wrap' : ''}>
            <h2>{t('Infrastructure')}</h2>
            <div className="item-content">
              <ul className="list-content">
                {ismobile ? (
                  <Carousel dots={{ className: 'dots' }} afterChange={() => ''}>
                    <li>
                      <div className="box-content">
                        <div className="img-content">
                          <img src={aelf_net2x} alt="" />
                        </div>
                        <h3>{t('Based on aelf mainnet')}</h3>
                        <p>{t('Based on aelf mainnet introduce')}</p>
                      </div>
                    </li>
                    <li>
                      <div className="box-content">
                        <div className="img-content">
                          <img src={contract2x} alt="" />
                        </div>
                        <h3>{t('Connect API')}</h3>
                        <p>{t('Connect API introduce')}</p>
                      </div>
                    </li>
                    <li>
                      <div className="box-content">
                        <div className="img-content">
                          <img src={agility2x} alt="" />
                        </div>
                        <h3>{t('Flexible aggregation method')}</h3>
                        <p>{t('Flexible aggregation method introduce')}</p>
                      </div>
                    </li>
                    <li>
                      <div className="box-content">
                        <div className="img-content">
                          <img src={commit2x} alt="" />
                        </div>
                        <h3>{t('Submit-disclose mechanism')}</h3>
                        <p>{t('Submit-disclose mechanism introduce')}</p>
                      </div>
                    </li>
                    <li>
                      <div className="box-content">
                        <div className="img-content">
                          <img src={prestige2x} alt="" />
                        </div>
                        <h3>
                          {t(
                            'Oracle nodes and organizational reputation system'
                          )}
                        </h3>
                        <p>
                          {t(
                            'Oracle nodes and organizational reputation system introduce'
                          )}
                        </p>
                      </div>
                    </li>
                  </Carousel>
                ) : (
                  listItems()
                )}
              </ul>
            </div>
          </div>
        ) : (
          listItems()
        )}
      </div>
    </>
  );
};

export default Framwork;
