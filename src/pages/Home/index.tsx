import React from 'react';
import { Button } from 'antd';
import banner2x from '../../assets/banner2x.png';
// import { useTranslation } from 'react-i18next';
import work_mechanism2x from '../../assets/work_mechanism2x.png';
import word_node2x from '../../assets/word_node2x.png';
import discord from '../../assets/svg/discord.svg';
import telegram from '../../assets/svg/telegram.svg';
import twitter from '../../assets/svg/Twitter.svg';
import github from '../../assets/svg/Github.svg';
import aelf_net2x from '../../assets/aelf_net2x.png';
import contract2x from '../../assets/contract2x.png';
import commit2x from '../../assets/commit2x.png';
import agility2x from '../../assets/agility2x.png';
import prestige2x from '../../assets/prestige2x.png';
import Bottom from './components/Bottom';
import './Home.less';
export const Home: React.FC = () => {
  return (
    <>
      <div className="top-content-wrap">
        <div className="content-warp">
          <div className="top-center-wrap">
            <div className="top_logo">Portal</div>
            <div className="recommond">
              <div className="text-content">
                <h1>Portal 主旨</h1>
                <p>
                  Protal以aelf主网为入口，旨在打造去中心化预言机网络，为任何区块链的智能合约开发者提供安全可靠的链下数据。
                </p>
                <div className="botton-content">
                  <a
                    className="style-link"
                    href="https://github.com/eventeum/eventeum"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Button type="primary">开始使用Portal</Button>
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
      <div className="whole-wrap">
        <div className="content-warp">
          <div className="framework-wrap">
            <h2>可靠、灵活、透明、安全的基础架构</h2>
            <ul>
              <li>
                <div className="box-content">
                  <div className="img-content">
                    <img src={aelf_net2x} alt="" />
                  </div>
                  <h3>基于aelf主网去除信用风险</h3>
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
          </div>
        </div>
      </div>
      <div className="whole-wrap what_Portal">
        <div className="content-warp TextContent">
          <h2>什么是Portal？</h2>
          <p>
            Portal是在aelf主网的共享侧链之上、以预言机（Oracle）合约为基础的项目，使用业内公认有效的解决方案，为包括以太坊和aelf在内的所有链上运算提供可靠的链下数据。Portal允许任何组织和个人通过申请成为预言机节点，自由形成去中心化的预言机自治网络，以此为基础为区块链的多个未来发展赋能。
          </p>
        </div>
      </div>
      <div className="whole-wrap bg-deepwhite">
        <div className="content-warp TextContent StratBuildingWrap">
          <h2>成为Portal的预言机节点</h2>
          <p className="text">
            我们提供了aelf和以太坊事件监听器，支持用户动态订阅aelf与以太坊网络事件，当智能合约事件被触发时，包含事件详情的消息将广播到消息总线上，进而被后端服务利用，实现了智能合约事件与后端微服务的结合。同时，我们已经实现了处理链下数据请求的必要逻辑，如查询、提交数据等，除此之外，用户也可以在其中自定义针对某个事件的处理逻辑。
          </p>
          <div className="botton-content">
            <a
              className="style-link"
              href="https://github.com/eventeum/eventeum"
              target="_blank"
              rel="noreferrer"
            >
              <Button type="primary">开始开发</Button>
            </a>
          </div>
          <div className="img-contract">
            <img src={word_node2x} alt="" />
          </div>
        </div>
      </div>
      <div className="whole-wrap">
        <div className="content-warp TextContent working-mechanism">
          <h2>Oracle合约工作机制</h2>
          <p className="text">
            用户或者aelf共享侧链上的其他合约把数据请求发给Oracle合约，Oracle合约随即通过事件通知指定的每个预言机节点或组织，预言机节点们进行数据查询并将结果提交给链上的Oracle合约，Oracle合约将多个预言机节点所提交的结果集进行聚合后，使用聚合数据回调用户指定的方法（或者单纯返回数据）。{' '}
          </p>
          <div className="img-contract">
            <img src={work_mechanism2x} alt="" />
          </div>
        </div>
      </div>
      <div className="whole-wrap bg_join_com">
        <div className="content-warp join-community-wrap">
          <h2>加入aelf Portal社区</h2>
          <ul>
            <a
              className="style-link"
              href="https://discord.gg/NQsyzmn3bb"
              target="_blank"
              rel="noreferrer"
            >
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
                  <span>推特</span>
                </div>
                <div>
                  <span>阅读最新消息</span>
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
                  <span>Telegram</span>
                </div>
                <div>
                  <span>加入讨论</span>
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
                  <span>Github</span>
                </div>
                <div>
                  <span>与我们一起开发</span>
                  <i></i>
                </div>
              </li>
            </a>
          </ul>
        </div>
      </div>
      <div className="whole-wrap">
        <div className="content-warp road-map-wrap">
          <h2>Road Map</h2>
          <ul>
            <li>
              <div>
                <p>· 在aelf主网上部署Portal预言机相关合约的1.0版本</p>
                <p>· 通过aelf主网议会组织为以太坊合约喂价</p>
                <p>· 公布aelf主网事件监听和处理客户端的源代码</p>
              </div>
              <div>第一阶段</div>
            </li>
            <li>
              <div>
                <p>· 上线Portal预言机实时数据浏览器</p>
                <p>· 升级aelf合约到2.0版本，实现预言机节点和组织的治理</p>
                <p>· 上线Portal预言机组织声誉浏览器</p>
                <p>· 公布以太坊事件监听和处理客户端的源代码</p>
                <p>· 公布Portal白皮书和开发文档</p>
              </div>
              <div>第二阶段</div>
            </li>
            <li className="last-item">
              <div>
                <p>· 用户可自定义以太坊链下聚合方案</p>
                <p>· 推出围绕PORT代币的激励计划</p>
                <p>
                  · 升级aelf合约到3.0版本，增加用户投诉和预言机组织退还佣金机制
                </p>
                <p>· 聆听社区需求，通过aelf主网为其他区块链实现链下聚合</p>
              </div>
              <div>第三阶段</div>
            </li>
          </ul>
        </div>
      </div>
      <div className="whole-wrap bg_news_ban">
        <div className="content-warp email-content-warp">
          <h2>获取最新的Portal新闻</h2>
          <div>
            <input type="text" placeholder="请输入您的电子邮箱地址" />
            <div className="btn">
              <Button type="primary">订阅</Button>
            </div>
          </div>
        </div>
      </div>
      <div className="whole-wrap bg-212A40">
        <Bottom />
      </div>
    </>
  );
};
