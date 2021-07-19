import React, { useState, useEffect } from 'react';
import './NodeCarousel.less';
import { Anchor, Carousel } from 'antd';
import isMobile from 'ismobilejs';
interface nodeDataType {
  name: string;
  state: string;
}
const STSTE = ['bgF9AB29', 'bg22BD85', 'bgF13030', 'bgD8D8D8'];

const NodeCarousel: React.FC = () => {
  const [nodeData, setNodeData] = useState<nodeDataType[][]>([]);
  const ismobile = isMobile().apple.phone || isMobile().android.phone;
  const { Link } = Anchor;
  const [targetOffset, setTargetOffset] =
    useState<number | undefined>(undefined);
  useEffect(() => {
    setTargetOffset(window.innerHeight / 2);
  }, []);
  useEffect(() => {
    let i = 0;
    const data = [];
    const nodeData = [];
    while (i < 29) {
      const nodeItem = {
        name: `0${i + 1}Node`,
        state: STSTE[i % 4],
      };
      data.push(nodeItem);
      i++;
    }
    console.log(data);
    i = 0;
    while (i < data.length) {
      nodeData.push(data.splice(i, i + (ismobile ? 4 : 12)));
    }
    setNodeData(nodeData);
  }, [ismobile]);
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
    Array.from(document.querySelectorAll('.active-anchor-target')).forEach(
      (item) => {
        item?.classList?.remove('active-anchor-target');
      }
    );
    parentEle &&
      parentEle?.tagName === 'TR' &&
      parentEle?.classList.add('active-anchor-target');
  };
  return (
    <div
      className={`report-carousel-wrap${
        ismobile ? ' report-carousel-wrap-phone' : ''
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
