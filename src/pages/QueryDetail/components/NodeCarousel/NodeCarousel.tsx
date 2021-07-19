import React, { useState, useEffect } from 'react';
import './NodeCarousel.less';
import { Carousel, Anchor } from 'antd';
import isMobile from 'ismobilejs';

interface TradeType {
  Commit?: string;
  Reveal?: string;
}
interface TableDataType {
  name: string;
  tradeId: TradeType;
  promise: string;
  submit: string;
  time: string;
  titleText: string;
  state: string;
  num: string;
}

const NodeCarousel: React.FC<{ dataSource: TableDataType[] }> = ({
  dataSource,
}) => {
  const [nodeData, setNodeData] = useState<TableDataType[][]>([]);
  const { Link } = Anchor;
  const ismobile = isMobile().apple.phone || isMobile().android.phone;
  const [targetOffset, setTargetOffset] =
    useState<number | undefined>(undefined);
  useEffect(() => {
    setTargetOffset(window.innerHeight / 2);
  }, []);
  useEffect(() => {
    const data = [...dataSource];
    const nodeData = [];
    while (data.length) {
      nodeData.push(data.splice(0, ismobile ? 4 : 12));
    }
    console.log(dataSource);
    setNodeData(nodeData);
  }, [ismobile, dataSource]);
  const anchorClickHandler = (
    e: React.MouseEvent<HTMLElement, MouseEvent>,
    link: {
      title: React.ReactNode;
      href: string;
    }
  ) => {
    const el = document.getElementById(
      link.href.replace('#', '')
    ) as HTMLElement;
    const parentEle = el?.parentElement?.parentElement;
    // const trArr = parentEle?.parentElement?.children && Array.from(parentEle?.parentElement?.children);
    Array.from(document.querySelectorAll('.active-anchor-target')).forEach(
      (item) => {
        item?.classList?.remove('active-anchor-target');
      }
    );
    parentEle &&
      parentEle.tagName === 'TR' &&
      parentEle?.classList?.add('active-anchor-target');
  };
  return (
    <div
      className={`node-carousel-wrap${
        ismobile ? ' node-carousel-wrap-phone' : ''
      }`}
    >
      <Carousel dots={{ className: 'dots-style' }}>
        {nodeData.map((item, index) => (
          <div key={`reveal${index}`}>
            <div className="reveal-list-content" key={`reveal${index}`}>
              {item.map((item, index) => (
                <Anchor
                  key={`reveal-Anchor${index}`}
                  affix={false}
                  targetOffset={targetOffset}
                  onClick={anchorClickHandler}
                >
                  <Link
                    href={`#${item.name ?? ''}`}
                    title={
                      <>
                        <div
                          key={`reveal-child${index}`}
                          className="reveal-child-content"
                        >
                          <p>
                            <span className={item.state}></span>
                            <span>{item.name}</span>
                          </p>
                          <h4>{item.num}</h4>
                          {item.titleText && !ismobile ? (
                            <div className="node-carousel-mask">
                              <p>{item.titleText}</p>
                              <p>{item.time}</p>
                            </div>
                          ) : null}
                        </div>
                      </>
                    }
                  ></Link>
                </Anchor>
              ))}
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default NodeCarousel;
