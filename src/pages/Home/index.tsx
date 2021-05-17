import React from 'react';
import styled from 'styled-components';
import { Button } from 'antd';
import banner from '../../assets/banner.png';
import banner2x from '../../assets/banner2x.png';
import what_Portal from '../../assets/what_Portal.png';
// import { useTranslation } from 'react-i18next';
import work_mechanism from '../../assets/work_mechanism.png';
import work_mechanism2x from '../../assets/work_mechanism2x.png';
import work_node from '../../assets/word_node.png';
import word_node2x from '../../assets/word_node2x.png';
import join_com from '../../assets/join_com.png';
import discord from '../../assets/svg/discord.svg';
import telegram from '../../assets/svg/telegram.svg';
import twitter from '../../assets/svg/Twitter.svg';
import github from '../../assets/svg/Github.svg';
import news_ban from '../../assets/news_ban.png';
import aelf_net2x from '../../assets/aelf_net2x.png';
import contract2x from '../../assets/contract2x.png';
import commit2x from '../../assets/commit2x.png';
import agility2x from '../../assets/agility2x.png';
import prestige2x from '../../assets/prestige2x.png';
import moreT from '../../assets/moreT.png';
import moreTB from '../../assets/moreTB.png';
import Bottom from './components/Bottom';
import right_color from '../../assets/right_color.png';
import right_white from '../../assets/right_white.png';
import { ContentWholeWrap, ContentWarp, StyledLink } from './components';
export const Home: React.FC = () => {
  return (
    <>
      <TopContentWrap>
        <ContentWarp>
          <TopCenterWrap>
            <div>Portal</div>
            <div className="recommond">
              <div className="text-content">
                <h1>Portal主旨</h1>
                <p>
                  Prota以打造去中心化预言机网络为目标，为智能合约开发者提供安全可靠的预言机解决方案。
                </p>
                <p>
                  Prota以aelf智能合约为入口，能够得到可靠的、被任何区块链所使用的链下数据，并通过构建于aelf主网上的预言机机制连接链上世界与链下世界，及不同的区块链，从而让商业和社会流程变得更加安全、透明、灵活且高效。
                </p>
                <div className="botton-content">
                  <StyledLink
                    href="https://github.com/eventeum/eventeum"
                    target="_blank"
                  >
                    <Button type="primary">用aelf Portal开发</Button>
                  </StyledLink>
                  {/* <Button type="primary">发布自己的喂价</Button> */}
                </div>
              </div>
              <div className="img-content">
                <img src={banner2x} alt="banner" />
              </div>
            </div>
          </TopCenterWrap>
        </ContentWarp>
      </TopContentWrap>
      <ContentWholeWrap>
        <ContentWarp>
          <FrameworkWrap>
            <h2>可靠、灵活、透明、安全的基础架构</h2>
            <ul>
              <li>
                <div className="box-content">
                  <div className="img-content">
                    <img src={aelf_net2x} alt="" />
                  </div>
                  <h3>基于aelf主网</h3>
                  <p>
                    Protal的所有智能合约都部署在aelf主网的共享侧链之上，这意味着预言机节点的工作过程和信用记录都将全程上链，并基于此实现声誉排名和组织自治体系
                  </p>
                </div>
              </li>
              <li>
                <div className="box-content">
                  <div className="img-content">
                    <img src={contract2x} alt="" />
                  </div>
                  <h3>连接任何现有API</h3>
                  <p>
                    建立智能合约与API之间的中间层，帮助智能合约调用任何API数据，无缝连接所有遗留系统和区块链
                  </p>
                </div>
              </li>
              <li>
                <div className="box-content">
                  <div className="img-content">
                    <img src={agility2x} alt="" />
                  </div>
                  <h3>灵活的聚合方式</h3>
                  <p>
                    在aelf上，用户向预言机网络发出请求时可以自定义预言机节点结果集的聚合方式和逻辑，在链上世界直接使用聚合后的数据
                  </p>
                </div>
              </li>
              <li>
                <div className="box-content">
                  <div className="img-content">
                    <img src={commit2x} alt="" />
                  </div>
                  <h3>“提交-揭露”机制</h3>
                  <p>
                    预言机节点需要通过两个阶段提交链下数据，第一阶段提交的答案是加密的，在收集到足够多的预言机答案并验证后才逐步解密全部答案，从而防止其他预言机节点吃空饷
                  </p>
                </div>
              </li>
              <li>
                <div className="box-content">
                  <div className="img-content">
                    <img src={prestige2x} alt="" />
                  </div>
                  <h3>预言机节点和组织声誉系统</h3>
                  <p>
                    基于链上实际交互历史为单个预言机节点和预言机组织积累信用，并基于该声誉系统。
                  </p>
                </div>
              </li>
            </ul>
          </FrameworkWrap>
        </ContentWarp>
      </ContentWholeWrap>
      <ContentWholeWrap bgImg={what_Portal}>
        <TextContent>
          <h2>什么是Portal？</h2>
          <p>
            Portal是在aelf主网的共享侧链之上、以预言机（Oracle）合约为基础的项目，使用业内公认有效的解决方案，为包括以太坊和aelf在内的所有链上运算提供可靠的链下数据。Portal允许任何组织和个人通过申请成为预言机节点，自由形成去中心化的预言机自治网络，以此为基础为区块链的多个未来发展赋能。
          </p>
        </TextContent>
      </ContentWholeWrap>
      <ContentWholeWrap bg="#F8FCFF">
        <StratBuildingWrap
          pdBottom="70px"
          imgWd="958px"
          imgHt="198px"
          imgMgT="39px"
        >
          <h2>成为Portal的预言机节点</h2>
          <p>
            我们提供了aelf和以太坊事件监听器，支持用户动态订阅aelf与以太坊网络事件，当只能合约事件被触发时，包含事件详情的消息将广播到消息总线上，进而被后端服务利用，实现了智能合约事件与后端微服务的结合。同时，我们已经实现了处理链下数据请求的必要逻辑，如查询、提交数据等，除此之外，用户也可以在其中自定义针对某个事件的处理逻辑。
          </p>
          <div className="botton-content">
            <StyledLink
              href="https://github.com/eventeum/eventeum"
              target="_blank"
            >
              <Button type="primary">Start building</Button>
            </StyledLink>
          </div>
          <div className="img-contract">
            <img src={word_node2x} alt="" />
          </div>
        </StratBuildingWrap>
      </ContentWholeWrap>
      <ContentWholeWrap>
        <StratBuildingWrap
          pdBottom="94px"
          imgWd="1160px"
          imgHt="278px"
          imgMgT="54px"
        >
          <h2>Oracle合约工作机制</h2>
          <p>
            用户或者aelf共享侧链上的其他合约把数据请求发给Oracle合约，Oracle合约随即通过事件通知指定的每个预言机节点或组织，预言机节点们进行数据查询并将结果提交给链上的Oracle合约，Oracle合约将多个预言机节点所提交的结果集进行聚合后，使用聚合数据回调用户指定的方法（或者单纯返回数据）。{' '}
          </p>
          <div className="img-contract">
            <img src={work_mechanism2x} alt="" />
          </div>
        </StratBuildingWrap>
      </ContentWholeWrap>
      <ContentWholeWrap bgImg={join_com}>
        <JoinCommunityWrap>
          <h2>加入aelf Portal社区</h2>
          <ul>
            <li>
              <div>
                {/* <Icon component={Discord}/> */}
                <img src={discord} alt="" />
                <span>Discord</span>
              </div>
              <div>
                <span>加入我们</span>
                <i></i>
              </div>
            </li>

            <li>
              <div>
                <img src={twitter} alt="" />
                <span>推特</span>
              </div>
              <div>
                <span>阅读最新消息</span>
                <i></i>
              </div>
            </li>
            <StyledLink
              href="https://t.me/joinchat/eGt6uDYtbMVmZTE1"
              target="_blank"
            >
              <li>
                <div>
                  <img src={telegram} alt="" />
                  <span>Telegram</span>
                </div>
                <div>
                  <span>加入讨论</span>
                  <i></i>
                </div>
              </li>
            </StyledLink>
            <StyledLink
              href="https://github.com/eventeum/eventeum"
              target="_blank"
            >
              <li>
                <div>
                  <img src={github} alt="" />
                  <span>Github</span>
                </div>
                <div>
                  <span>与我们一起开发</span>
                  <i></i>
                </div>
              </li>
            </StyledLink>
          </ul>
        </JoinCommunityWrap>
      </ContentWholeWrap>
      <ContentWholeWrap>
        <RoadMapWrap>
          <h2>Road Map</h2>
          <ul>
            <li>
              <div>
                <p>· 在aelf主网上部署Portal预言</p>
                <p>· 通过aelf主网议会组织为以太坊合约喂价</p>
                <p>· 公布aelf主网事件监听和处理客户端的源代码</p>
              </div>
              <div>第一阶段</div>
            </li>
            <li>
              <div>
                <p>· 上线Protal预言机实时数据浏览器</p>
                <p>· 升级aelf合约到2.0版本，实现预言机节点和组织的 治理</p>
                <p>· 用户可自定义以太坊链下聚合方案</p>
                <p>· 推出围绕PORT代币的激励计划</p>
                <p>· 公布以太坊事件监听和处理客户端的源代码</p>
              </div>
              <div>第二阶段</div>
            </li>
            <li className="last-item">
              <div>
                <p>· 上线Protal预言机组织声誉浏览器</p>
                <p>
                  · 升级aelf合约到3.0版本，增加用户投诉和预言机组 织退还佣金机制
                </p>
                <p>· 聆听社区需求，通过aelf主网为其他区块链实现链 下聚合</p>
              </div>
              <div>第三阶段</div>
            </li>
          </ul>
        </RoadMapWrap>
      </ContentWholeWrap>
      <ContentWholeWrap bgImg={news_ban}>
        <EmailContentWarp>
          <h2>获取最新的Portal新闻</h2>
          <div>
            <input type="text" placeholder="请输入您的电子邮箱地址" />
            <div className="btn">
              <Button type="primary">订阅</Button>
            </div>
          </div>
        </EmailContentWarp>
      </ContentWholeWrap>
      <ContentWholeWrap bg="#212A40">
        <Bottom />
      </ContentWholeWrap>
    </>
  );
};

interface ThemeWrap {
  bg?: string;
  bgImg?: string;
  color?: string;
  [key: string]: any;
}

const EmailContentWarp = styled(ContentWarp)`
  padding: 52px 69px;
  h2 {
    text-align: center;
    font-size: 32px;
    font-weight: 500;
    color: #ffffff;
    line-height: 45px;
  }
  & > div {
    margin: 26px auto 0;
    display: flex;
    width: 514px;
    height: 48px;
    input {
      flex: 1;
      white-space: nowrap;
      border: none;
      outline: none;
      border-radius: 100px 0px 0px 100px;
      font-size: 16px;
      padding-left: 22px;
      &::placeholder {
        font-size: 16px;
        font-family: PingFangSC-Regular, PingFang SC;
        font-weight: 400;
        color: #999999;
        line-height: 22px;
      }
    }
    .btn {
      button {
        width: 124px;
        height: 100%;
        border-radius: 0px 100px 100px 0px;
        border: 1px solid #ffffff;
        border-left: 0;
        background: rgba(0, 0, 0, 0);
        text-align: center;
      }
    }
  }
`;
const RoadMapWrap = styled(ContentWarp)`
  padding-bottom: 106px;
  p {
    margin: 0;
    padding: 0;
  }
  h2 {
    text-align: center;
    font-size: 32px;
    font-weight: 500;
    color: #3a4b74;
    line-height: 32px;
    margin: 0 auto;
    padding: 106px 0 64px;
  }
  & > ul {
    margin: 0;
    display: flex;
    & > li {
      flex: 1;
      height: 318px;
      margin: 0;
      padding: 42px 36px 41px;
      position: relative;
      border-right: 1px solid #763add;
      &:first-child {
        background: linear-gradient(270deg, #773adc 0%, #5e48ff 100%);
        color: #ffffff;
        border-radius: 8px;
        div:last-child,
        p {
          color: #ffffff;
        }
      }
      &::after {
        width: 0;
        height: 0;
        border: 11px solid #ffffff;
        border-left: 11px solid #763add;
        display: block;
        content: '';
        position: absolute;
        top: 50%;
        right: -12px;
        transform: translate(50%, -50%);
      }
      p {
        font-size: 14px;
        font-weight: 400;
        color: #858d99;
        line-height: 30px;
        text-indent: -12px;
        margin-left: 12px;
      }
      div:last-child {
        position: absolute;
        bottom: 41px;
        font-size: 18px;
        color: #3a4b74;
        line-height: 25px;
      }
    }
    .last-item {
      border: 0;
      &::after {
        border: 0;
      }
    }
  }
`;

const JoinCommunityWrap = styled(ContentWarp)`
  text-align: center;
  padding-bottom: 122px;
  h2 {
    color: ${({ color }: ThemeWrap) => (color ? color : '#ffffff')};
    text-align: center;
    font-size: 32px;
    font-weight: 500;
    color: #ffffff;
    line-height: 32px;
    margin: 0 auto;
    padding: 106px 0 64px;
  }
  ul {
    display: flex;
    justify-content: space-between;
    margin: 0;
    li {
      text-align: left;
      width: 256px;
      height: 130px;
      background: rgba(255, 255, 255, 0.19);
      border-radius: 8px;
      padding: 31px 37px 35px 33px;
      color: #ffffff;
      div:first-child {
        margin-bottom: 14px;
        display: flex;
        align-items: center;
        position: relative;
        overflow: hidden;
        height: 30px;
        img {
          position: absolute;
          width: 30px;
          height: 30px;
          left: -80px;
          filter: drop-shadow(#ffffff 80px 0);
        }
        span {
          font-size: 16px;
          line-height: 20px;
          margin-left: 41px;
        }
      }
      div:last-child {
        line-height: 20px;
        font-size: 16px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        i {
          width: 26px;
          height: 18px;
          background-image: url(${right_white});
          background-size: contain;
          background-position: center;
        }
      }
    }
    li:hover {
      background: #ffffff;
      div:first-child {
        color: #3a4b74;
        img {
          filter: drop-shadow(#773adc 80px 0);
        }
      }
      div:last-child {
        color: #773bdd;
        i {
          width: 26px;
          height: 18px;
          background-image: url(${right_color});
        }
      }
    }
  }
`;
const TextContent = styled(ContentWarp)`
  text-align: center;
  padding-bottom: 122px;
  h2 {
    color: ${({ color }: ThemeWrap) => (color ? color : '#ffffff')};
    text-align: center;
    font-size: 32px;
    font-weight: 500;
    color: #ffffff;
    line-height: 32px;
    margin: 0 auto;
    padding: 0;
    padding-top: 108px;
  }
  p {
    /* height: 44px; */
    font-size: 16px;
    font-family: PingFangSC-Medium, PingFang SC;
    font-weight: 500;
    color: #ffffff;
    line-height: 22px;
    margin-top: 64px;
  }
`;
const StratBuildingWrap = styled(TextContent)`
  padding-bottom: ${({ pdBottom }) => (pdBottom ? pdBottom : 0)};
  h2 {
    padding-top: 106px;
    margin: auto;
    color: #3a4b74;
  }
  p {
    /* height: 66px; */
    font-weight: 400;
    color: #858d99;
  }
  .botton-content {
    margin: 50px auto 39px;
    font-size: 16px;
    button {
      width: 240px;
      height: 52px;
      background: linear-gradient(270deg, #773adc 0%, #5e48ff 100%);
      border-radius: 26px;
      margin: auto;
      border: 0;
    }
  }
  .img-contract {
    width: ${({ imgWd }) => (imgWd ? imgWd : 0)};
    height: ${({ imgHt }) => (imgHt ? imgHt : 0)};
    margin: auto;
    margin-top: ${({ imgMgT }) => (imgMgT ? imgMgT : 0)};
    img {
      margin: 0 auto;
      width: 100%;
      height: 100%;
    }
  }
`;

const FrameworkWrap = styled.div`
  font-family: PingFangSC-Medium, PingFang SC;
  h2 {
    text-align: center;
    font-size: 32px;
    font-weight: 500;
    color: #3a4b74;
    line-height: 32px;
    padding: 106px 0 64px;
    margin: 0;
  }
  ul {
    display: flex;
    /* justify-content: space-between; */
    padding: 0;
    padding-bottom: 108px;
    margin: 0;
    li {
      box-sizing: border-box;
      height: 348px;
      width: 234px;
      /* padding: 48px 0 48px 30px; */
      padding-left: 34px;
      background: #ffffff;
      display: flex;
      align-items: center;
      .box-content {
        box-sizing: border-box;
        border-right: 1px solid #e6e9f0;
        width: 100%;
        padding-right: 30px;
      }
      &:last-child .box-content {
        border: 0;
        padding: 0;
      }
      border-radius: 0px 32px 0px 32px;
      .img-content {
        img {
          width: 56px;
          height: 56px;
        }
      }
      h3 {
        font-size: 16px;
        font-weight: 500;
        color: #3a4b74;
        line-height: 22px;
        margin: 32px 0 22px;
      }
      p {
        font-size: 14px;
        font-weight: 400;
        color: #858d99;
        line-height: 24px;
        margin: 0;
        width: 200px;
        display: none;
      }
    }
    li:hover {
      box-shadow: 0px 5px 14px 0px rgba(215, 210, 225, 0.51);
      border: 1px solid #763add;
      padding: 48px 0 48px 30px;
      width: 260px;
      .box-content {
        border-right: 0;
      }
      p {
        display: block;
      }
    }
  }
`;
const TopCenterWrap = styled.div`
  color: #ffffff;
  &:first-child {
    font-size: 26px;
    font-family: Helvetica-Bold, Helvetica;
    font-weight: bold;
    line-height: 66px;
  }
  .recommond {
    display: flex;
    font-family: PingFangSC-Medium, PingFang SC;
    justify-content: space-between;
    .text-content {
      h1 {
        height: 62px;
        font-size: 44px;
        font-weight: 500;
        color: #ffffff;
        line-height: 62px;
        margin: 86px 0 30px;
      }
      p {
        width: 500px;
        font-size: 16px;
        font-weight: 400;
        color: #ffffff;
        line-height: 24px;
        margin-bottom: 32px;
      }
      .botton-content {
        margin-top: 34px;
        display: flex;
        button {
          border-radius: 23px;
          width: 172px;
          height: 46px;
          margin-right: 18px;
          border: 0;
        }
        button:first-child {
          background: linear-gradient(270deg, #773adc 0%, #5e48ff 100%);
        }
        /* button:last-child {
          background-color: #ffffff;
          color: #773bdd;
        } */
      }
    }
    .img-content {
      img {
        margin: 20px 53px 32px 0;
        width: 596px;
        height: 478px;
      }
    }
  }
`;

const TopContentWrap = styled.div`
  width: 100%;
  background: linear-gradient(273deg, #490f9c 0%, #180475 100%);
`;
