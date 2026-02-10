import React from 'react'
import SolutionsHeroSection from '../../components/solutions/preBillServices/solutionsHeroSection'
import TransformSection from '../../components/solutions/preBillServices/transformSection'
import CoreCapabilitiesSection from '../../components/solutions/preBillServices/coreCapabiltySection'
import MeasurableResultsSection from '../../components/solutions/preBillServices/measurableRsultsSection'
import HowItWorksSection from '../../components/solutions/preBillServices/HowitWorksSection'
import CallToActionSection from '../../components/home/CTA/CTASection'

const PreBillServicesPage = () => {
  return (
     <>
      <SolutionsHeroSection />
      <TransformSection />
      <CoreCapabilitiesSection/>
      <MeasurableResultsSection />
      <HowItWorksSection />
      <CallToActionSection />
    </>
  )
}

export default PreBillServicesPage