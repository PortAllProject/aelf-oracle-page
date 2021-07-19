import React from 'react';
import { useTranslation } from 'react-i18next';
import isMobile from 'ismobilejs';
import './Bottom.less';
import { useHistory } from 'react-router';
const Bottom: React.FC = () => {
  const { t } = useTranslation();
  const ismobile = isMobile().apple.phone || isMobile().android.phone;
  const history = useHistory();
  return (
    <div className="bottom-content">
      <div className={`bottom-wrap${ismobile ? ' phone-bottom-wrap' : ''}`}>
        <div className="bottom-logo">Portall</div>
        <ul>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li>
            <ul className="bottom-list-item">
              <li>
                <h5>{t('Developer')}</h5>
              </li>
              {/* <li>白皮书</li> */}
              <li>
                <a
                  className="style-link"
                  rel="noreferrer"
                  href="https://github.com/eventeum/eventeum"
                  target="_blank"
                >
                  <span>GitHub</span>
                </a>
              </li>
              <li>
                <span>{t('Audit Report')}</span>
              </li>
            </ul>
          </li>
          {/* <li>
          <BottomListItem>
            <li>解决方案</li>
            <li>概述</li>
            <li>实时数据</li>
          </BottomListItem>
        </li> */}
          {/* <li>
          <BottomListItem>
            <li>数据提供商</li>
            <li>预言机节点</li>
            <li>预言机组织</li>
            <li>成为节点</li>
            <li>创建组织</li>
          </BottomListItem>
        </li> */}
          <li>
            <ul className="bottom-list-item">
              <li>
                <h5>{t('Reputation')}</h5>
              </li>
              {/* <li>白皮书</li> */}
              <li
                onClick={() => {
                  history.push('/nodes');
                }}
              >
                <span>{t('Nodes reputation')}</span>
              </li>
              <li
                onClick={() => {
                  history.push('/orgs');
                }}
              >
                <span>{t('Network reputation')}</span>
              </li>
            </ul>
          </li>

          <li>
            <ul className="bottom-list-item community">
              <li>
                <h5>{t('Social media')}</h5>
              </li>

              <li>
                <a
                  className="style-link"
                  rel="noreferrer"
                  href="https://t.me/joinchat/eGt6uDYtbMVmZTE1"
                  target="_blank"
                >
                  <i className="telegram"></i>
                  <span>Telegram</span>
                </a>
              </li>

              <li>
                <a
                  href="https://twitter.com/aelfportal"
                  className="style-link"
                  rel="noreferrer"
                  target="_blank"
                >
                  <i className="twitter"></i>
                  <span>{t('Twitter')}</span>
                </a>
              </li>
              <li>
                <a
                  className="style-link"
                  rel="noreferrer"
                  href="https://discord.gg/NQsyzmn3bb"
                  target="_blank"
                >
                  <i className="discord"></i>
                  <span>Discord</span>
                </a>
              </li>
              {/* <li>
              <img className="wechat" src={wechat} alt="" />
              <span>论坛</span>
            </li> */}
            </ul>
          </li>
          <li>
            <ul className="bottom-list-item">
              <li>
                <h5>{t('Contact us')}</h5>
              </li>
              <a target="_blank" href="mailto:portal@aelf.io" rel="noreferrer">
                {' '}
                <li>
                  <span>portal@aelf.io</span>
                </li>
              </a>
            </ul>
          </li>
        </ul>
        <div className="reserved">
          {' '}
          &copy; 2021 aelfProtal. All Rights Reserved.
        </div>
      </div>
    </div>
  );
};

export default Bottom;
