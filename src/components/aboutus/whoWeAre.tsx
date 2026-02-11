import React from "react";
import {
  SectionContainer,
  Wrapper,
} from "../home/platformInfo/PlatformIntroSection.styles";
import { SectionTitle } from "../ui/sectionTitle/SectionTitle";
import { Box } from "@mui/material";

const WhoWeAreSection: React.FC = () => {
  return (
    <Box mt={4}>
      <SectionContainer>
        <Wrapper>
          <SectionTitle
            title="Who We Are"
            subtitle={
              <>
                <p>
                  <span style={{color:"var(--color-primary-hover)"}}>CognitiveHealth</span> is dedicated to solving the toughest
                  operational challenges in healthcare revenue cycle management
                  through intelligent automation. We combine deep expertise with
                  advanced technology to deliver measurable, sustainable results
                  for health systems, physician groups, and specialty providers.
                </p>
                &nbsp;
                <p>
                  Founded by revenue cycle leaders who experienced firsthand the
                  inefficiencies and complexity of managing healthcare financial
                  operations, we understand that technology must serve people,
                  workflows, and outcomes—not the other way around.
                </p>
                &nbsp;
                <p>
                  Our approach is grounded in operational excellence, continuous
                  improvement, and partnership. We work alongside healthcare
                  organizations to automate repetitive tasks, reduce errors, and
                  empower teams to focus on strategic, high-value work that
                  drives financial performance and supports exceptional patient
                  care.
                </p>
              </>
            }
            maxWidth={900}
            //   highlightText="CognitiveHealth"
          />
        </Wrapper>
      </SectionContainer>
    </Box>
  );
};

export default WhoWeAreSection;
