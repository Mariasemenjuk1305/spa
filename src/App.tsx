import React, { FC } from 'react';
import IntroSection from './components/IntroSection/IntroSection';
import AboutSection from './components/AboutSection/AboutSection';
import MainSection from './components/MainSection/MainSection';
import ExternalMainSection from './components/ExtraMainSection/ExtraMainSection';
import './styles/HomePage.scss';

const App: FC = () => {
  return (
    <div className='App'>
      <div className='HomePage'>
        <IntroSection />
        <AboutSection />
        <MainSection />
        <ExternalMainSection />
      </div>
    </div>
  );
};

export default App;
