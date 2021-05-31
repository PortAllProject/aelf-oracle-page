import react from 'react';
import { useTranslation } from 'react-i18next';
import isMobile from 'ismobilejs';
import { Steps } from 'antd';
import './RoadMap.less';
const RoadMap: react.FC = () => {
  const { Step } = Steps;
  const { t, i18n } = useTranslation();
  const LG = i18n.language;
  const ismobile = isMobile().apple.phone || isMobile().android.phone;
  return ismobile ? (
    <>
      <div className={`road-map-phone`}>
        <div className={LG === 'en' ? 'en-road-map-phone' : ''}>
          <h2>Road Map</h2>
          <Steps progressDot current={4} direction="vertical">
            <Step
              description={
                <div className="stage-content first-stage">
                  <h4 className="stage">{t('First stage')}</h4>
                  <div>
                    <p>{t('First stage list1')}</p>
                    <p>{t('First stage list2')}</p>
                    <p>{t('First stage list3')}</p>
                  </div>
                </div>
              }
            />
            <Step
              description={
                <div className="stage-content">
                  <h4 className="stage">{t('Second stage')}</h4>
                  <div>
                    <p>{t('Second stage list1')}</p>
                    <p>{t('Second stage list2')}</p>
                    <p>{t('Second stage list3')}</p>
                    <p>{t('Second stage list4')}</p>
                    <p>{t('Second stage list5')}</p>
                  </div>
                </div>
              }
            />
            <Step
              description={
                <div className="stage-content third-stage">
                  <h4 className="stage">{t('Third stage')}</h4>
                  <div>
                    <p>{t('Third stage list1')}</p>
                    <p>{t('Third stage list2')}</p>
                    <p>{t('Third stage list3')}</p>
                    <p>{t('Third stage list4')}</p>
                  </div>
                </div>
              }
            />
            <Step />
          </Steps>
        </div>
      </div>
    </>
  ) : (
    <div className={`road-map-wrap${LG === 'en' ? ' en-road-map' : ''}`}>
      <h2>Road Map</h2>
      <ul>
        <li>
          <div>
            <p>{t('First stage list1')}</p>
            <p>{t('First stage list2')}</p>
            <p>{t('First stage list3')}</p>
          </div>
          <h4 className="stage">{t('First stage')}</h4>
        </li>
        <li>
          <div>
            <p>{t('Second stage list1')}</p>
            <p>{t('Second stage list2')}</p>
            <p>{t('Second stage list3')}</p>
            <p>{t('Second stage list4')}</p>
            <p>{t('Second stage list5')}</p>
          </div>
          <h4 className="stage">{t('Second stage')}</h4>
        </li>
        <li className="last-item">
          <div>
            <p>{t('Third stage list1')}</p>
            <p>{t('Third stage list2')}</p>
            <p>{t('Third stage list3')}</p>
            <p>{t('Third stage list4')}</p>
          </div>
          <h4 className="stage">{t('Third stage')}</h4>
        </li>
      </ul>
    </div>
  );
};

export default RoadMap;
