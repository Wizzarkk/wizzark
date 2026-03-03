import React from 'react';
import Hero from '../components/Hero';
import Problem from '../components/Problem';
import Services from '../components/Services';
import Proof from '../components/Proof';
import LeadMagnet from '../components/LeadMagnet';
import HowItWorks from '../components/HowItWorks';
import SmallFooter from '../components/SmallFooter';

const HomePage = () => {
  return (
    <>
      <Hero />
      <Problem />
      <Services />
      <HowItWorks />
      <Proof />
      <LeadMagnet />
      <SmallFooter />
    </>
  );
};

export default HomePage;