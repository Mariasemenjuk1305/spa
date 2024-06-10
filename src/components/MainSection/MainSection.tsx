import { useState, type FC } from 'react';
import { v4 as uuidv4 } from 'uuid';

import '../../styles/MainPages.scss';
import Slider from '../Slider/Slider';
import { sliderData1, sliderData2 } from '../Slider/sliderData';
import { mainSectionData } from './mainSectionData';
import DetailsSection from '../DetailsSection/DetailsSection';

const MainSection: FC = () => {
  const [showDailyPlan, setShowDailyPlan] = useState(false);
  return (
    <div className='MainSection'>
      <div className='MainSection__container'>
        <div className='MainSection__container--textbox'>
          <div className='MainSection__container__content--title'>
            <div className='MainSection__container__content--title---black' id="scroll">
              {mainSectionData.title}
            </div>
            <div className='MainSection__container__content--title---gray'>
              {mainSectionData.labels.map(item => <span key={uuidv4()}>{item}</span>)}             
            </div>
          </div>
          <div className='MainSection__container--text'>
            <p>{mainSectionData.description}</p>
          </div>
        </div>
        {!showDailyPlan ? (
          <div>
            <div className='MainSection__container--mainbox---title'>
              <span className='Title'>Region highlights</span>
              <div>
                <span onClick={() => setShowDailyPlan(true)} className='Btn'>
                  Show daily plan
                </span>
              </div>
            </div>
            <div className='MainSection__container--mainbox'>
              <Slider sliderData={sliderData1} />
            </div>
          </div>
        ) : null}

        <div className='MainSection__container--detailsbox'>
          <div className='MainSection__container--detailsbox'>
            {showDailyPlan ? (
              <DetailsSection setShowDailyPlan={setShowDailyPlan} from='mainSection' />
            ) : null}
          </div>
        </div>
        <div className='MainSection__container--staybox---title'>
          <span className='Title'>Where to stay</span>
        </div>
        <div className='MainSection__container--staybox---slider'>
          <Slider sliderData={sliderData2} />
        </div>
      </div>
    </div>
  );
};

export default MainSection;
