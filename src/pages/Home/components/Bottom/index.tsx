import React from 'react';
import styled from 'styled-components';
import wechat from '../../../../assets/wechat.png';
import telegram_gray from '../../../../assets/telegram_gray.png';
import twitter_gray from '../../../../assets/twitter_gray.png';
import discord_gray from '../../../../assets/discord_gray.png';
import { StyledLink } from '../index';

const Bottom: React.FC = () => {
  return (
    <BottomWrap>
      <ul>
        <li></li>
        <li></li>
        <li>
          <BottomListItem>
            <li>开发者</li>
            {/* <li>白皮书</li> */}
            <li>
              <StyledLink
                href="https://github.com/eventeum/eventeum"
                target="_blank"
              >
                <span>GitHub</span>
              </StyledLink>
            </li>
            <li>审计报告</li>
          </BottomListItem>
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
          <BottomListItem className="community">
            <li>社交媒体</li>

            <li>
              <StyledLink
                href="https://t.me/joinchat/eGt6uDYtbMVmZTE1"
                target="_blank"
              >
                <img className="telegram" src={telegram_gray} alt="" />
                <span>Telegram</span>
              </StyledLink>
            </li>

            <li>
              <img className="twitter" src={twitter_gray} alt="" />
              <span>推特</span>
            </li>
            <li>
              <img className="discord" src={discord_gray} alt="" />
              <span>Discord</span>
            </li>
            {/* <li>
              <img className="wechat" src={wechat} alt="" />
              <span>论坛</span>
            </li> */}
          </BottomListItem>
        </li>
        <li>
          <BottomListItem>
            <li>联系我们</li>
            <li>portal@aelf.io</li>
          </BottomListItem>
        </li>
      </ul>
      <div>© 2021 aelfProtal. All Rights Reserved.</div>
    </BottomWrap>
  );
};
const ContentWarp = styled.div`
  width: 1200px;
  margin: auto;
  p,
  h2,
  ul,
  li {
    padding: 0;
    margin: 0;
  }
`;

const BottomWrap = styled(ContentWarp)`
  padding-top: 68px;
  & > ul {
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid #30384d;
    & > li {
      height: 218px;
    }
    .community li {
      &:first-child {
        margin-bottom: 28px;
      }
      margin-bottom: 10px;
    }
  }
  div {
    height: 58px;
    font-size: 12px;
    font-weight: 400;
    color: #777f95;
    text-align: center;
    line-height: 58px;
  }
`;

const BottomListItem = styled.ul`
  li {
    font-size: 14px;
    font-weight: 400;
    color: #777f95;
    line-height: 1;
    margin-bottom: 18px;
  }
  li:first-child {
    font-size: 16px;
    font-weight: 500;
    color: #ced6ed;
    line-height: 1;
    margin-bottom: 28px;
  }
  span {
    font-size: 14px;
    font-weight: 400;
    color: #777f95;
    line-height: 1;
  }
  img {
    /* width: 22px;
    height: 22px; */
    margin-right: 8px;
  }
  /* .wechat {
    width: 22px;
    height: 22px;
    margin-right: 6px;
  } */
  /* .twitter {
    width: 18px;
  }
  .discord {
    width: 17px;
    height: 16px;
  } */
`;
export default Bottom;
