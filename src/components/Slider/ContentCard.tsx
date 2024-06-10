import React, { FC } from 'react';
import './ContentCard.scss';

interface Card {
  id: number;
  img: string;
  title: string;
  time: string;
  place: string;
  label: string;
  rate: string;
}

interface ContentCardProps {
  data: Card;
}

const ContentCard: FC<ContentCardProps> = ({ data }) => {
  return (
    <div className='card'>
      <div className='cardWrapper'>
        <div className='imageBox'>
          <div className='imageBox-mark'>
            <span>{data.label}</span>
            <img src="/images/main/slider/save.svg" alt="save" />
          </div>
          <img src={data.img} alt='slider-img' />
        </div>
        <div className='textBox'>
          <p>{data.title}</p>
          {(data.rate) ? 
            <p className='rate'>{data.rate}</p>
          : null}
          <span>
            {data.time}
            <span className='dot'>
              <img src='/images/main/slider/dot.svg' alt='got' />
            </span>
            {data.place}
          </span>
        </div>
      </div>
    </div>
  );
};

export default ContentCard;
