import React, { useRef } from 'react';
import './CarouselWrap.less';
import { Carousel } from 'antd';
import isMobile from 'ismobilejs';
import { CarouselRef } from 'antd/lib/carousel';

const CarouselWrap: React.FC<{ AnnexList: string[] }> = ({ AnnexList }) => {
  const carouselRef = useRef<CarouselRef | null>(null);
  const ismobile = isMobile().apple.phone || isMobile().android.phone;

  return (
    <div className={`carousel-wrap${ismobile ? ' carousel-wrap-phone' : ''}`}>
      <span
        className="left-arrow"
        onClick={(e) => {
          e.stopPropagation();
          carouselRef.current?.prev();
          console.log(e);
        }}
      ></span>
      <span
        className="right-arrow"
        onClick={() => {
          carouselRef.current?.next();
        }}
      ></span>
      <Carousel ref={carouselRef} dots={false}>
        {AnnexList.map((item, key) => (
          <img
            className="carouse-img"
            key={key}
            src={item}
            alt=""
            onClick={() => {
              carouselRef.current?.next();
            }}
          />
        ))}
      </Carousel>
    </div>
  );
};

export default CarouselWrap;
