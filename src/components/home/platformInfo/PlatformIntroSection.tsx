
import { SectionTitle } from "../../ui/sectionTitle/SectionTitle";
import { SectionContainer, Wrapper } from "./PlatformIntroSection.styles";

const PlatformIntroSection = () => {
  return (
    <SectionContainer>
      <Wrapper>
      <SectionTitle
        pillText="The Future of Healthcare Revenue Cycle Is Here – Unified, Smarter, Better"
        title="<span>CognitiveHealth’s iCAN™</span> Platform: Where Deep <br/> RCM Expertise Meets Advanced AI"
        subtitle="Decades of revenue cycle leadership combined with cutting-edge intelligent automation, machine learning, generative AI, and enterprise-grade infrastructure, purpose-built to solve your toughest operational challenges."
        maxWidth={860}
      />
      </Wrapper>
    </SectionContainer>
  );
};

export default PlatformIntroSection;
