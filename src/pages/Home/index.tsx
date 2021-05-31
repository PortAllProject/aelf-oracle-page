import React, { useState } from 'react';
import { Button } from 'antd';
import banner2x from '../../assets/banner2x.png';
import { useTranslation } from 'react-i18next';
import discord from '../../assets/svg/discord.svg';
import telegram from '../../assets/svg/telegram.svg';
import twitter from '../../assets/svg/Twitter.svg';
import github from '../../assets/svg/Github.svg';
import Bottom from './components/Bottom/Bottom';
import Framwork from './components/Framwork/Framwork';
import RoadMap from './components/RoadMap/RoadMap';
import LanguageChange from '../../components/LanguageChange/LChange';
import isMobile from 'ismobilejs';
import './Home.less';
export const Home: React.FC = () => {
  const { t, i18n } = useTranslation();
  const [loadingFlag, setLoading] = useState<boolean>(false);
  const [emailVal, setEmailVal] = useState<string>('');
  const ismobile = isMobile().apple.phone || isMobile().android.phone;
  const LG = i18n.language;
  const emailSubscript = () => {
    const REG = /^(\w)+(\.\w+)*@(\w)+((\.\w+)+)$/;
    if (REG.test(emailVal)) {
    } else {
      return;
    }
    setLoading(true);
    const ids = setTimeout(() => {
      setLoading(false);
      clearTimeout(ids);
    }, 500);
  };
  return (
    <div
      className={
        LG === 'en' ? 'zn-content-wrap en-content-wrap' : 'zn-content-wrap'
      }
    >
      <div className={ismobile ? `phone-wrap` : ''}>
        <div className="top-content-wrap">
          <div className="content-warp">
            <div className="top-center-wrap">
              <div className="top_logo">
                <span className="logo">Portal</span>
                <div className="language-change">
                  <LanguageChange />
                </div>
              </div>
              <div className="recommond">
                <div className="text-content">
                  <h1>{t('Portal theme')}</h1>
                  <p>{t('Introduce')}</p>
                  <div className="botton-content">
                    <a
                      className="style-link"
                      href="https://github.com/eventeum/eventeum"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <Button type="primary">{t('Start Portal')}</Button>
                    </a>
                    {/* <Button type="primary">发布自己的喂价</Button> */}
                  </div>
                </div>
                <div className="img-content">
                  <img src={banner2x} alt="banner" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={ismobile ? '' : 'whole-wrap'}>
          <div className="content-warp">
            <Framwork />
          </div>
        </div>
        <div className="whole-wrap what_Portal">
          <div className="content-warp TextContent">
            <h2>{t('What is Portal')}</h2>
            <p>{t('Portal text')}</p>
          </div>
        </div>
        <div className="whole-wrap bg-deepwhite">
          <div className="TextContent StartBuildingWrap">
            <h2>{t('Become an oracle node of Portal')}</h2>
            <p className="text">{t('Become an oracle node text')}</p>
            <div className="botton-content">
              <a
                className="style-link"
                href="https://github.com/eventeum/eventeum"
                target="_blank"
                rel="noreferrer"
              >
                <Button type="primary">{t('Start building')}</Button>
              </a>
            </div>
            <div className="img-contract">
              {/* <img src={word_node2x} alt="" /> */}
            </div>
          </div>
        </div>
        <div className="whole-wrap">
          <div className="TextContent working-mechanism">
            <h2>{t('Oracle contract mechanism')}</h2>
            <p className="text">{t('Oracle contract mechanism introduce')}</p>
            <div className="img-contract"></div>
          </div>
        </div>
        <div className="whole-wrap bg_join_com">
          <div className={`content-warp join-community-wrap`}>
            <h2>{t('Join the Portal community')}</h2>
            <ul>
              <a
                className="style-link"
                href="https://discord.gg/NQsyzmn3bb"
                target="_blank"
                rel="noreferrer"
              >
                <li>
                  <div>
                    <img src={discord} alt="" />
                    <h4>Discord</h4>
                  </div>
                  <div>
                    <span>{t('Join us')}</span>
                    <i></i>
                  </div>
                </li>
              </a>
              <a
                href="https://twitter.com/aelfportal"
                className="style-link"
                rel="noreferrer"
                target="_blank"
              >
                <li>
                  <div>
                    <img src={twitter} alt="" />
                    <h4>{t('Twitter')}</h4>
                  </div>
                  <div>
                    <span>{t('Read the latest information')}</span>
                    <i></i>
                  </div>
                </li>
              </a>
              <a
                className="style-link"
                href="https://t.me/joinchat/eGt6uDYtbMVmZTE1"
                target="_blank"
                rel="noreferrer"
              >
                <li>
                  <div>
                    <img src={telegram} alt="" />
                    <h4>Telegram</h4>
                  </div>
                  <div>
                    <span>{t('Join the discussion')}</span>
                    <i></i>
                  </div>
                </li>
              </a>
              <a
                className="style-link"
                href="https://github.com/eventeum/eventeum"
                target="_blank"
                rel="noreferrer"
              >
                <li>
                  <div>
                    <img src={github} alt="" />
                    <h4>Github</h4>
                  </div>
                  <div>
                    <span>{t('Develop with us')}</span>
                    <i></i>
                  </div>
                </li>
              </a>
            </ul>
          </div>
        </div>
        <div className="whole-wrap">
          <RoadMap />
        </div>
        <div className="whole-wrap bg_news_ban">
          <div className="content-warp email-content-warp">
            <h2>{t('Get the news')}</h2>
            <div>
              <input
                type="text"
                placeholder={t('News placeholder')}
                value={emailVal}
                onChange={(e) => {
                  const val = e.target.value.replace(/\s/g, '');
                  setEmailVal(val);
                }}
              />
              <div className="btn">
                <Button
                  type="primary"
                  // icon={<PoweroffOutlined />}
                  loading={loadingFlag}
                  onClick={emailSubscript}
                >
                  {t('Sign up')}
                </Button>
              </div>
            </div>
          </div>
        </div>
        <div className="whole-wrap bg-212A40">
          <Bottom />
        </div>
      </div>
    </div>
  );
};
