import type { FC } from 'react';

import './DetailsSection.scss';
import { mainSectionData, extraMainSectionData } from './detailsData';

interface DetailsSectionProps {
  setShowDailyPlan: (param: boolean) => void;
  from: string;
}

const DetailsSection: FC<DetailsSectionProps> = ({
  setShowDailyPlan,
  from,
}) => {
  const detailsData =
    from === 'mainSection' ? mainSectionData : extraMainSectionData;
  return (
    <div className='DetailsSection'>
      <div className='DetailsSection__container'>
        <div className='DetailsSection__container--detailsbox---title'>
          <span className='Title'>2 days plan</span>
          <div>
            <span onClick={() => setShowDailyPlan(false)} className='Btn'>
              Show highlights
            </span>
          </div>
        </div>
        <div className='DetailsSection__container--info'>
          {detailsData.map((item) => (
            <>
              <div className='DetailsSection__container--info---title'>
                <div className='DetailsSection__container--info---title-text'>
                  {item.title}
                </div>
                <div className='DetailsSection__container--info---title-label'>
                  <span>
                    <img src='images/time.svg' alt='time' />
                    <span>{item.time}</span>
                  </span>
                  <img src='images/dots.svg' alt='dots' />
                </div>
              </div>
              <div className='DetailsSection__container--info---data'>
                {item.data.map((e) => (
                  <div className='DetailsSection__container--info---data-block'>
                    <div>
                      <img src={e.img} alt='data-img' />
                    </div>
                    <div className='DetailsSection__container--info---data-block-txt'>
                      <div>
                        <div className='Title'>{e.title}</div>
                        {e.label !== '' ? (
                          <div className='Label'>{e.label}</div>
                        ) : null}
                        {e.text !== '' ? (
                          <div className='Text'>{e.text}</div>
                        ) : null}
                      </div>
                      <div>
                        <img
                          src='images/draganddrop-small.svg'
                          alt='draganddrop'
                        />
                        <img src='images/dots.svg' alt='dots' />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DetailsSection;
