import React from 'react';
import telegram_gray from '../../../../assets/telegram_gray.png';
import twitter_gray from '../../../../assets/twitter_gray.png';
import discord_gray from '../../../../assets/discord_gray.png';
import './Bottom.less';
const Bottom: React.FC = () => {
  return (
    <div className="bottom-wrap">
      <div className="bottom-logo">Portal</div>
      <ul>
        <li></li>
        <li></li>
        <li></li>
        <li>
          <ul className="bottom-list-item">
            <li>开发者</li>
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
            <li>审计报告</li>
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
          <ul className="bottom-list-item community">
            <li>社交媒体</li>

            <li>
              <a
                className="style-link"
                rel="noreferrer"
                href="https://t.me/joinchat/eGt6uDYtbMVmZTE1"
                target="_blank"
              >
                <img className="telegram" src={telegram_gray} alt="" />
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
                <img className="twitter" src={twitter_gray} alt="" />
                <span>推特</span>
              </a>
            </li>
            <li>
              <a
                className="style-link"
                rel="noreferrer"
                href="https://discord.gg/NQsyzmn3bb"
                target="_blank"
              >
                <img className="discord" src={discord_gray} alt="" />
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
            <li>联系我们</li>
            <li>portal@aelf.io</li>
          </ul>
        </li>
      </ul>
      <div className="reserved">© 2021 aelfProtal. All Rights Reserved.</div>
    </div>
  );
};

export default Bottom;
