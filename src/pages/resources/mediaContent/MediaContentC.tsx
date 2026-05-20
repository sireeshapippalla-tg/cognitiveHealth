import React from "react";
import { Box, Typography } from "@mui/material";
import { SectionContent, OutcomeList, ExternalLinkButton } from "../BlogDetailPage.styles";
import type { MediaContentProps } from "./MediaContentA";

export const MediaContent7: React.FC<MediaContentProps> = () => (
  <>
    <SectionContent>
      When it comes to intelligent process automation (IPA) in healthcare, multiple stakeholders drive technology adoption. Payers, providers and patients all bring their own unique interests and perspectives on how healthcare should operate and in what areas IPA should be used. 2021 is the right time to leverage and measure the benefits and successes of IPA in healthcare.
    </SectionContent>

    <Box
      sx={{
        my: 4,
        p: 4,
        bgcolor: "#f8fafd",
        borderRadius: "0 12px 12px 0",
        borderLeft: "6px solid #4caf50",
        position: "relative",
        overflow: "hidden",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between"
      }}
    >
      <Typography variant="h6" sx={{ color: "#0066cc", fontWeight: 600, zIndex: 1 }}>
        IPA in Healthcare: Our Year to Catch Up
      </Typography>
      <Typography
        sx={{
          fontSize: "120px",
          fontWeight: 900,
          color: "#e2edf8",
          position: "absolute",
          right: "20px",
          top: "-20px",
          lineHeight: 1,
          userSelect: "none"
        }}
      >
        ”
      </Typography>
    </Box>

    <Box sx={{ my: 4 }}>
      <ExternalLinkButton href="https://www.healthitanswers.net/ipa-in-healthcare-our-year-to-catch-up/" target="_blank" rel="noopener noreferrer">
        Read Full Article on Health IT Answers
      </ExternalLinkButton>
    </Box>
  </>
);

export const MediaContent8: React.FC<MediaContentProps> = () => (
  <>
    <SectionContent>
      <strong>Topic:</strong><br />
      The Need for Intelligent Process Automation in the Revenue Cycle
      <br /><br />
      <strong>Featuring:</strong><br />
      Pavani Munjulri, Co-Founder and COO, Cognitive Health IT
    </SectionContent>

    <Box sx={{ my: 4, position: "relative", paddingTop: "56.25%", width: "100%", boxShadow: "0 10px 30px rgba(0,0,0,0.15)", borderRadius: "12px", overflow: "hidden" }}>
      <iframe
        src="https://fast.wistia.net/embed/iframe/3v0t6acnfs?videoFoam=true"
        title="The Need for Intelligent Process Automation in the Revenue Cycle"
        allow="autoplay; fullscreen"
        style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", border: "none" }}
      />
    </Box>
  </>
);

export const MediaContent9: React.FC<MediaContentProps> = () => (
  <>
    <SectionContent>
      Pavani Munjuluri , Co-Founder and COO for Cognitive Health IT talks to Jim Tate about the use of Intelligent Process Automation in the Healthcare Revenue Cycle.
      <br /><br />
      Listen to her talking about the technology and the opportunities IPA can provide here;
    </SectionContent>

    <Box sx={{ my: 4, width: "100%", height: "166px", boxShadow: "0 8px 24px rgba(0,0,0,0.12)", borderRadius: "12px", overflow: "hidden" }}>
      <iframe
        width="100%"
        height="166"
        scrolling="no"
        frameBorder="no"
        allow="autoplay"
        src="https://w.soundcloud.com/player/?url=https%3A//soundcloud.com/hcnradio/guest-pavani-munjuluri&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"
      />
    </Box>

    <Box sx={{ my: 4 }}>
      <ExternalLinkButton href="https://soundcloud.com/hcnradio/guest-pavani-munjuluri" target="_blank" rel="noopener noreferrer">
        Listen on SoundCloud
      </ExternalLinkButton>
    </Box>
  </>
);

export const MediaContent10: React.FC<MediaContentProps> = () => (
  <>
    <SectionContent>
      In a recent article published by Healthcare IT Today, <strong>CognitiveHealth Technologies</strong> co-founder <strong>Pavani Munjuluri</strong> offers readers a glimpse into intelligent process automation (IPA) and how it's benefiting providers in the wake of COVID-19.
      <br /><br />
      IPA has emerged as a powerful tool to support providers' rapid pivot to adopt new processes, workflows and technologies. Munjuluri details how Connecticut-based Yale-New Haven Health applied IPA to a multi-system revenue cycle process that was difficult to support in the new remote work environment brought on by the coronavirus pandemic. By automating processes around payment posting and cash reconciliation, the health system was able to reduce full-time employee workload by 14 percent with estimated cost savings of over 30 percent of budget.
      <br /><br />
      Munjuluri touches on additional areas that are ripe for IPA in healthcare, including:
    </SectionContent>

    <OutcomeList>
      <li>System accessibility: Use IPA bots to automatically run tests and flag areas of failure</li>
      <li>Test script automation: Use intelligent bots to create test patient profiles for integrated testing</li>
      <li>Revenue cycle efficiency: Use intelligent bots for repetitive, high-volume tasks in healthcare RCM processes</li>
    </OutcomeList>

    <SectionContent>
      She also offers best practices for provider organizations considering IPA solutions, encouraging healthcare leaders to:
    </SectionContent>

    <OutcomeList sx={{ listStyleType: "decimal", pl: 4 }}>
      <li>Automate repetitive tasks to achieve the greatest impact.</li>
      <li>Embrace digital employees as part of the team.</li>
      <li>Take an enterprise view and leverage the IPA platform across departments.</li>
    </OutcomeList>

    <SectionContent sx={{ mt: 4 }}>
      Read the full article, including five additional IPA implementation best practices, here:
    </SectionContent>

    <Box sx={{ my: 4 }}>
      <ExternalLinkButton href="https://www.healthcareittoday.com/2020/08/27/when-is-ipa-intelligent-process-automation-right-for-you-best-practices-to-scale-and-implement-today/" target="_blank" rel="noopener noreferrer">
        When is IPA (Intelligent Process Automation) Right for You? Best Practices to Scale and Implement Today
      </ExternalLinkButton>
    </Box>
  </>
);
