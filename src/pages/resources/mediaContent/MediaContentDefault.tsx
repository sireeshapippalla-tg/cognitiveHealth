import React from "react";
import {
  SectionTitle,
  SectionContent,
  OutcomeList,
} from "../BlogDetailPage.styles";
import type { MediaContentProps } from "./MediaContentA";

export const MediaContentDefault: React.FC<MediaContentProps> = () => (
  <>
    <SectionTitle>
      Transforming Healthcare Revenue Cycle Management
    </SectionTitle>
    <SectionContent>
      As healthcare providers and payers face unprecedented operational
      challenges—ranging from severe staffing shortages to rising claim denial
      rates—the adoption of intelligent process automation (IPA) has become a
      strategic imperative. Organizations leveraging advanced AI platforms are
      experiencing significant reductions in A/R days, improved cash flow, and
      enhanced staff productivity.
      <br />
      <br />
      CognitiveHealth Technologies continues to pioneer innovative digital
      platforms designed specifically for the healthcare industry. By combining
      deep domain expertise with cutting-edge artificial intelligence,
      CognitiveHealth delivers scalable, secure solutions that eliminate
      administrative burdens and foster financial sustainability.
    </SectionContent>
    <SectionTitle>Key Highlights & Strategic Impact</SectionTitle>
    <OutcomeList>
      <li>Seamless integration with existing EMR and billing systems</li>
      <li>
        Significant reduction in manual touchpoints and administrative friction
      </li>
      <li>Enhanced financial visibility, compliance, and revenue recovery</li>
      <li>
        Empowering healthcare staff to focus on complex, high-value outcomes
      </li>
    </OutcomeList>
  </>
);
