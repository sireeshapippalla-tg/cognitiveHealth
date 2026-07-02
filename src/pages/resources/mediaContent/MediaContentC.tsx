import React from "react";
import {
  SectionContent,
  OutcomeList,
  ExternalLinkButton,
  MarginContainer,
  SectionContentWithMargin,
} from "../BlogDetailPage.style";
import {
  QuoteBoxGreen,
  QuoteTitleBlue,
  BigQuoteMark,
  VideoEmbedContainer,
  AudioEmbedContainer,
  OutcomeListDecimal,
} from "../BlogDetailSpecial.style";
import type { MediaContentProps } from "./MediaContentA";

export const MediaContent7: React.FC<MediaContentProps> = () => (
  <>
    <SectionContent>
      When it comes to intelligent process automation (IPA) in healthcare,
      multiple stakeholders drive technology adoption. Payers, providers and
      patients all bring their own unique interests and perspectives on how
      healthcare should operate and in what areas IPA should be used. 2021 is
      the right time to leverage and measure the benefits and successes of IPA
      in healthcare.
    </SectionContent>

    <QuoteBoxGreen>
      <QuoteTitleBlue variant="h6">
        IPA in Healthcare: Our Year to Catch Up
      </QuoteTitleBlue>
      <BigQuoteMark>
        ”
      </BigQuoteMark>
    </QuoteBoxGreen>

    <MarginContainer>
      <ExternalLinkButton
        href="https://www.healthitanswers.net/ipa-in-healthcare-our-year-to-catch-up/"
        target="_blank"
        rel="noopener noreferrer"
      >
        Read Full Article on Health IT Answers
      </ExternalLinkButton>
    </MarginContainer>
  </>
);

export const MediaContent8: React.FC<MediaContentProps> = () => (
  <>
    <SectionContent>
      <strong>Topic:</strong>
      <br />
      The Need for Intelligent Process Automation in the Revenue Cycle
      <br />
      <br />
      <strong>Featuring:</strong>
      <br />
      Pavani Munjulri, Co-Founder and COO, Cognitive Health IT
    </SectionContent>

    <VideoEmbedContainer>
      <iframe
        src="https://fast.wistia.net/embed/iframe/3v0t6acnfs?videoFoam=true"
        title="The Need for Intelligent Process Automation in the Revenue Cycle"
        allow="autoplay; fullscreen"
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          border: "none",
        }}
      />
    </VideoEmbedContainer>
  </>
);

export const MediaContent9: React.FC<MediaContentProps> = () => (
  <>
    <SectionContent>
      Pavani Munjuluri , Co-Founder and COO for Cognitive Health IT talks to Jim
      Tate about the use of Intelligent Process Automation in the Healthcare
      Revenue Cycle.
      <br />
      <br />
      Listen to her talking about the technology and the opportunities IPA can
      provide here;
    </SectionContent>

    <AudioEmbedContainer>
      <iframe
        width="100%"
        height="166"
        scrolling="no"
        frameBorder="no"
        allow="autoplay"
        src="https://w.soundcloud.com/player/?url=https%3A//soundcloud.com/hcnradio/guest-pavani-munjuluri&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"
      />
    </AudioEmbedContainer>

    <MarginContainer>
      <ExternalLinkButton
        href="https://soundcloud.com/hcnradio/guest-pavani-munjuluri"
        target="_blank"
        rel="noopener noreferrer"
      >
        Listen on SoundCloud
      </ExternalLinkButton>
    </MarginContainer>
  </>
);

export const MediaContent10: React.FC<MediaContentProps> = () => (
  <>
    <SectionContent>
      In a recent article published by Healthcare IT Today,{" "}
      <strong>CognitiveHealth Technologies</strong> co-founder{" "}
      <strong>Pavani Munjuluri</strong> offers readers a glimpse into
      intelligent process automation (IPA) and how it's benefiting providers in
      the wake of COVID-19.
      <br />
      <br />
      IPA has emerged as a powerful tool to support providers' rapid pivot to
      adopt new processes, workflows and technologies. Munjuluri details how
      Connecticut-based Yale-New Haven Health applied IPA to a multi-system
      revenue cycle process that was difficult to support in the new remote work
      environment brought on by the coronavirus pandemic. By automating
      processes around payment posting and cash reconciliation, the health
      system was able to reduce full-time employee workload by 14 percent with
      estimated cost savings of over 30 percent of budget.
      <br />
      <br />
      Munjuluri touches on additional areas that are ripe for IPA in healthcare,
      including:
    </SectionContent>

    <OutcomeList>
      <li>
        System accessibility: Use IPA bots to automatically run tests and flag
        areas of failure
      </li>
      <li>
        Test script automation: Use intelligent bots to create test patient
        profiles for integrated testing
      </li>
      <li>
        Revenue cycle efficiency: Use intelligent bots for repetitive,
        high-volume tasks in healthcare RCM processes
      </li>
    </OutcomeList>

    <SectionContent>
      She also offers best practices for provider organizations considering IPA
      solutions, encouraging healthcare leaders to:
    </SectionContent>

    <OutcomeListDecimal>
      <li>Automate repetitive tasks to achieve the greatest impact.</li>
      <li>Embrace digital employees as part of the team.</li>
      <li>
        Take an enterprise view and leverage the IPA platform across
        departments.
      </li>
    </OutcomeListDecimal>

    <SectionContentWithMargin $mt={4}>
      Read the full article, including five additional IPA implementation best
      practices, here:
    </SectionContentWithMargin>

    <MarginContainer>
      <ExternalLinkButton
        href="https://www.healthcareittoday.com/2020/08/27/when-is-ipa-intelligent-process-automation-right-for-you-best-practices-to-scale-and-implement-today/"
        target="_blank"
        rel="noopener noreferrer"
      >
        When is IPA (Intelligent Process Automation) Right for You? Best
        Practices to Scale and Implement Today
      </ExternalLinkButton>
    </MarginContainer>
  </>
);
