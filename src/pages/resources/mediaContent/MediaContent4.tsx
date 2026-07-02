import React from "react";
import {
  SectionTitle,
  SectionContent,
  CenteredImageContainer,
  ThreatImage,
} from "../BlogDetailPage.style";
import {
  HighlightBox,
  QuoteText,
  QuoteAuthor,
} from "../BlogDetailSpecial.style";
import type { MediaContentProps } from "./MediaContentA";

import Picture1Img from "../../../assets/Media/Picture1.webp";

export const MediaContent4: React.FC<MediaContentProps> = () => (
  <>
    <SectionTitle>Leadership Announcement</SectionTitle>
    <CenteredImageContainer>
      <ThreatImage
        width={48}
        height={48}
        src={Picture1Img}
        alt="Ms. Pavani Munjuluri, Chief Executive Officer"
        loading="lazy"
      />
    </CenteredImageContainer>
    <SectionContent>
      CognitiveHealth Technologies is excited to announce Ms. Pavani Munjuluri
      as the Chief Executive Officer. Pavani is the Co-founder and has been
      serving as Chief Operating Officer for the last three years. She has been
      highly successful in leading product development and client success teams
      to deliver on the company's vision and create immense value for clients
      and stakeholders. She will continue to work closely with clients and
      partners in this pivotal growth phase.
    </SectionContent>

    <HighlightBox>
      <QuoteText variant="h6">
        "It has been a tremendous honor to serve as the CEO of CognitiveHealth
        Technologies for the last three years. Since founding the company, I am
        incredibly proud of everything our team has accomplished together. The
        Board and I are confident that Pavani will build on this momentum. She
        is a seasoned leader with significant experience working with healthcare
        clients, operating efficiently at scale, building great teams, and
        delivering value to our investors. We are lucky to have her as our next
        CEO."
      </QuoteText>
      <QuoteAuthor variant="subtitle1">
        – BM Chittaranjan, President & Co-Founder
      </QuoteAuthor>
    </HighlightBox>

    <SectionTitle>About CognitiveHealth</SectionTitle>
    <SectionContent>
      CognitiveHealth provides automation as a service to Healthcare Providers
      across the country. iCAN™, the intelligent automation platform developed
      by CognitiveHealth, is purpose-built for healthcare. Using iCAN™, health
      systems have achieved significant cost savings, higher operational
      efficiencies.
    </SectionContent>
  </>
);
