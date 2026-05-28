import React from "react";
import { Box, Typography } from "@mui/material";
import {
  SectionTitle,
  SectionContent,
  OutcomeList,
  InlineImageContainer,
  InlineImage,
  ImageCaption,
  ExternalLinkButton,
} from "../BlogDetailPage.styles";
import type { MediaContentProps } from "./MediaContentA";

import Picture1Img from "../../../assets/Media/Picture1.webp";
import albertImg from "../../../assets/aboutUs/albert.svg";

export const MediaContent4: React.FC<MediaContentProps> = () => (
  <>
    <SectionTitle>Leadership Announcement</SectionTitle>
    <Box sx={{ my: 4, display: "flex", justifyContent: "center" }}>
      <img
        width={48}
        height={48}
        src={Picture1Img}
        alt="Ms. Pavani Munjuluri, Chief Executive Officer"
        style={{
          maxWidth: "100%",
          height: "auto",
          borderRadius: "12px",
          boxShadow: "0 8px 24px rgba(0,0,0,0.15)",
        }}
        loading="lazy"
      />
    </Box>
    <SectionContent>
      CognitiveHealth Technologies is excited to announce Ms. Pavani Munjuluri
      as the Chief Executive Officer. Pavani is the Co-founder and has been
      serving as Chief Operating Officer for the last three years. She has been
      highly successful in leading product development and client success teams
      to deliver on the company's vision and create immense value for clients
      and stakeholders. She will continue to work closely with clients and
      partners in this pivotal growth phase.
    </SectionContent>

    <Box
      sx={{
        my: 4,
        p: 4,
        bgcolor: "#f5f7fa",
        borderRadius: "12px",
        borderLeft: "6px solid #0066cc",
      }}
    >
      <Typography
        variant="h6"
        sx={{ fontStyle: "italic", mb: 2, color: "#333" }}
      >
        "It has been a tremendous honor to serve as the CEO of CognitiveHealth
        Technologies for the last three years. Since founding the company, I am
        incredibly proud of everything our team has accomplished together. The
        Board and I are confident that Pavani will build on this momentum. She
        is a seasoned leader with significant experience working with healthcare
        clients, operating efficiently at scale, building great teams, and
        delivering value to our investors. We are lucky to have her as our next
        CEO."
      </Typography>
      <Typography
        variant="subtitle1"
        sx={{ fontWeight: 600, color: "#0066cc" }}
      >
        – BM Chittaranjan, President & Co-Founder
      </Typography>
    </Box>

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

export const MediaContent5: React.FC<MediaContentProps> = () => (
  <>
    <SectionTitle>Tackling Revenue Cycle Inefficiency with IPA</SectionTitle>
    <SectionContent>
      As the pandemic heads toward a second year with no further financial
      stimulus guaranteed, hospitals and health systems are seeking ways to
      reduce costs and improve revenue cycle performance. Intelligent process
      automation (IPA) is an emerging solution designed to optimize operations
      and increase productivity through a combination of process modeling,
      process automation, and artificial intelligence.
      <br />
      <br />
      IPA in the revenue cycle enables healthcare organizations to shift manual,
      repetitive work to automated processes that improve efficiency, accuracy,
      and financial outcomes. These benefits are particularly important in the
      healthcare revenue cycle where a maze of confusing payer requirements,
      redundant workflows, and siloed administrative functions push up
      operational costs and departmental overhead.
      <br />
      <br />
      Connecticut’s leading healthcare system, Yale-New Haven Health, is
      breaking the pattern of costly revenue cycle operations—one function at a
      time. This article explores how the health system’s 1,200-employee
      Corporate Business Services organization uses IPA in the revenue cycle to
      tackle inefficiency.
    </SectionContent>

    <SectionTitle>
      Revenue Cycle Automation at Yale-New Haven Health
    </SectionTitle>
    <SectionContent>
      Yale-New Haven Health began using IPA to streamline revenue cycle
      operations in 2019. The organization first analyzed all their high-volume,
      repetitive tasks that required no human intervention until there was an
      exception in the case or workflow. Their assessment process involved four
      steps:
    </SectionContent>
    <OutcomeList>
      <li>
        Evaluate each revenue cycle function for high levels of repetitive,
        redundant tasks, or work overlaps.
      </li>
      <li>
        Step back and perform process mapping. Look at EHR and other existing
        vendors to ensure efficient uses of all current application
        capabilities. Implement any capabilities not currently being used.
      </li>
      <li>
        Identify any remaining gaps and determine if revenue cycle automation
        using an IPA platform could fill the gaps for that specific revenue
        cycle function.
      </li>
      <li>
        Work with internal staff and IPA vendors to create a comprehensive
        physical map of the entire process, new workflow changes, and a timeline
        for implementation.
      </li>
    </OutcomeList>
    <SectionContent>
      In addition to choosing the right revenue cycle process to automate, it is
      critical to re-engineer those functions to achieve the greatest impact and
      value to the healthcare organization. “We needed to use all of our
      existing systems before bringing in new revenue cycle automation,” says
      Melisa Brereton-Esposito, Director, Systems, Training and Development,
      Corporate Business Services at Yale-New Haven Health. “We first focused on
      cash reconciliation and posting, which provided a valuable learning
      experience for future projects.”
      <br />
      <br />
      The four-step approach takes time, but yields dramatic results in cost
      reduction and staff adoption. “If our team doesn’t use the recommended
      assessment process, the introduction of IPA is of little value,” adds
      Brereton-Esposito.
    </SectionContent>

    <SectionTitle>Overcoming Adoption Challenges</SectionTitle>
    <SectionContent>
      Initially, there was general distrust among staff regarding how automation
      would improve or replace their manual work. Concerned about job security,
      many were reluctant to turn over tasks to the computer. Revenue cycle
      staff tend to be long-term employees who are cautious by nature.
      Brereton-Esposito’s department implemented three managerial guidelines
      with regard to staffing:
    </SectionContent>
    <OutcomeList>
      <li>
        Keep staff whose jobs are replaced by technology—never let them go based
        on automation.
      </li>
      <li>
        Reassign and retrain to jobs that require more analytical thinking.
        Encourage staff to focus on the next "better" job.
      </li>
      <li>
        Redistribute staff or wait for attrition in areas that have been
        automated.
      </li>
    </OutcomeList>

    <SectionTitle>
      Example of a task currently automated: Correspondence Workflow
    </SectionTitle>
    <SectionContent>
      Applies to mail that comes into the revenue cycle department, centralized
      across five hospitals.
      <br />
      <br />
      <strong>Before automation:</strong> All letters are received from a
      lockbox in random order in batches. Staff are assigned to read, sort, and
      process the letters to different work queues such as an explanation of
      benefits (EOB), financial assistance applications, approval, and denial
      letters in the EMR system. This is a highly manual effort and delays in
      this process may sometimes lead to missing time-sensitive correspondence
      from the payors and other external entities.
      <br />
      <br />
      <strong>After automation:</strong> The technology uses OCR and machine
      learning to categorize each piece of correspondence based on the content
      and then moves it to the correct person or place. For all types of
      letters, the system takes steps to sort and send to the right category.
      The technology is expected to read approximately 70% and send 30% to the
      human in the loop. Percentages should improve with ongoing testing,
      validation, tracking, and working on the exceptions in incoming
      correspondence.
    </SectionContent>

    <SectionTitle>Checklist for Evaluating Solutions</SectionTitle>
    <SectionContent>
      Automation platforms should use a combination of AI tools along with RPA
      (robotic process automation) to enable automated workflows, specifically
      processes like document classification. Solution providers who have an
      enterprise approach and multi-tenant automation technology platforms can
      help with long term organizational goals.
      <br />
      <br />
      Organizations should look for vendors with the knowledge and experience of
      healthcare processes and have deep technology capabilities beyond RPA,
      like the capability to handle large amounts of structured and unstructured
      data, to drive automation. Evaluate vendors beyond a point solution on how
      the automation platform can scale across various functions and their
      ability to partner with you to maximize value.
      <br />
      <br />
      Finally, these systems learn as they go. Vendors should have the ability
      to scale with reusable components and continuous learning for
      enterprise-wide automation.
    </SectionContent>

    <SectionTitle>Feedback and Outcomes</SectionTitle>
    <SectionContent>
      Achieving positive outcomes with revenue cycle automation depends on staff
      trust in the technology and new processes. Partnering with a reputable IPA
      vendor will allow the management to build trust with the staff and get
      staff involved in the process. Accuracy is one of the key determinants of
      success and must be measured consistently since intelligent systems learn
      and improve over time. When staff and leadership agree that an
      implementation is successful, then they can rely on IPA to address the
      next costly and inefficient revenue cycle function.
    </SectionContent>

    <SectionTitle>About Albert Porco</SectionTitle>
    <InlineImageContainer>
      <InlineImage
        src={albertImg}
        alt="Albert Porco"
        style={{ maxWidth: "200px", borderRadius: "50%" }}
      />
      <ImageCaption>
        Albert Porco, Chief Solutions Architect at Cognitive Health Technologies
      </ImageCaption>
    </InlineImageContainer>
    <SectionContent sx={{ fontStyle: "italic", color: "#666", mt: 2 }}>
      Albert Porco serves as Chief Solutions Architect at Cognitive Health
      Technologies. Albert has served as CIO for several New York metropolitan
      area hospitals and health systems. Prior to joining Cognitive Health
      Technologies, he also served as the Chief Technology Officer for the New
      York Department of Health. He can be reached at
      Albert.Porco@CognitiveHealthIT.com.
    </SectionContent>

    <Box sx={{ my: 4 }}>
      <ExternalLinkButton
        href="https://hitconsultant.net/2020/11/09/yale-new-haven-ipa-revenue-cycle-inefficiency/#.X9pFqXrityx"
        target="_blank"
        rel="noopener noreferrer"
      >
        Read Original Article on HIT Consultant
      </ExternalLinkButton>
    </Box>
  </>
);

export const MediaContent6: React.FC<MediaContentProps> = () => (
  <>
    <SectionTitle>
      Automating Revenue Cycle On The Back End Improves Patient Engagement On
      The Front
    </SectionTitle>
    <SectionContent>
      For one health system, robotic process automation equates to about 27,000
      hours in a month saved, which correlates to around $500,000.
      <br />
      <br />
      Revenue cycle directors are seeing a clear path for automation to increase
      revenue, decrease denials, speed up prior authorization and claims, and
      remove many of the repetitive clicks that hamper daily operations.
      <br />
      <br />
      From an ROI perspective, automation saves money through fewer full-time
      equivalent positions.
      <br />
      <br />
      Three rev cycle executives interviewed, who are at different stages of
      revenue cycle automation in their health systems, said the savings have
      not been achieved through layoffs, but through attrition and employees
      being trained for jobs machines and even smart AI processes, can't do.
      <br />
      <br />
      "From a savings perspective, it's a moving target," said Lynn Ansley,
      senior director for revenue cycle at Moffitt Cancer Center headquartered
      in Tampa, Florida. "People get so dead set on FTEs. Our volume is growing.
      To me it's not the net reduction in FTEs. It's people we wouldn't have to
      hire to keep up with the volume."
      <br />
      <br />
      Robotic process automation equates to about 27,000 hours in a month saved,
      which correlates to around $500,000, Ansley said. As the price tag on
      automation is pretty large, the savings make for a good argument for
      starting the process.
      <br />
      <br />
      However, the executives at Moffitt Cancer Center didn't need to be sold,
      she said. Automation has been embraced to the point that the revenue cycle
      team is now showcasing what it can do for other departments.
      <br />
      <br />
      "We're proud of the seamless performance we have," Ansley said. "Through
      the automation we've done, we've been to absorb more and more volumes
      without having to increase FTE volumes."
      <br />
      <br />
      Automation control stays within the revenue cycle department at Moffitt
      Cancer Center, not with the IT department.
      <br />
      <br />
      "We like to have control over our automation," Ansley said. "We like to do
      that scripting and monitoring in-house. We've recruited talent that knows
      the system, but has that coding background to script. They're able to look
      at a problem and know what the right technology is."
      <br />
      <br />
      But automation alone won't align the revenue cycle process.
      <br />
      <br />
      "You don't want to automate a broken process," Ansley said. "First you fix
      your process."
      <br />
      <br />
      Melisa Brereton-Esposito, director of systems training and development for
      corporate business services at Yale New Haven Health System, said the team
      has not yet attributed savings to automation, since the systems are new.
      <br />
      <br />
      "It will save FTEs," she said. "We didn't necessarily eliminate staff, we
      relocated them. People are afraid of automation. They see it as potential
      to take jobs, but resources being distributed to something else, as
      opposed to eliminating a position."
      <br />
      <br />
      Sherri Liebl, executive director of revenue cycle for CentraCare said, "We
      look at its incremental value as four-and-a-half times the investment in
      technology. It will have a significant impact on our organization and our
      patients."
    </SectionContent>

    <SectionTitle>THE RIGHT TOOLS</SectionTitle>
    <SectionContent>
      Moffitt Cancer Center has been using an EMUE tool from Databound since May
      2017. The emulator operates in the system on claim scripts, which are
      monitored on a dashboard. As soon as an appointment gets scheduled, EMUE
      checks insurance eligibility and benefits and then secures any needed
      prior authorization from the payers.
      <br />
      <br />
      EMUE gets the correct values on claims. Through the automation, Ansley's
      team can discharge bills faster and sort out the ones that need to be done
      by hand.
      <br />
      <br />
      "A lot of that can be started by the emulators," Ansley said. In fact, so
      much work is being handled by EMUE that it's working around the clock to
      run "turbo EMUEs" on claim scripts, she said. "We're at the point now,
      there is no longer low-hanging fruit with EMUE. If there's a redundant
      task, we can have the emulator do that."
      <br />
      <br />
      Another automation that came about a year-and-a-half ago is the Healthcare
      Extendibility Platform, or HEP, which, unlike an emulator, works behind
      the scenes in real time to get a claim paid. It's a Cerner product that
      fits with the health system's EHR Cerner system.
      <br />
      <br />
      Still, neither system involves artificial intelligence. All is next on the
      list for rev cycle improvements.
      <br />
      <br />
      Brereton-Esposito at Yale New Haven helped to implement intelligent
      process automation (IPA) in 2019 to automate high-volume, mundane
      administrative tasks in the revenue cycle.
      <br />
      <br />
      Yale New Haven has an Epic EHR system. "We brought Epic in and did a full
      review, instituted a number of changes in bills and systems,"
      Brereton-Esposito said. "And then we looked at, what else could we do? We
      recognized what we could to automate within Epic. In addition to
      eliminating work, it improved the accuracy."
      <br />
      <br />
      The system also worked closely with CognitiveHealth Technologies in
      process-mapping such areas as cash-posting process. That's been in place
      for over a year now. This past June, Yale New Haven started automation
      work with prior authorizations. And in September, they put in a
      correspondence automation workflow that cut down on the number of people
      needed to look at mail. CognitiveHealth uses AI tools to recognize the key
      words and structure on a document, puts an indicator on it and routes it
      to the correct work queue. The team started with remits, overpayment
      letters, approval and denial letters from insurance companies and expanded
      it to include medical records requests, attorney letters and more.
      <br />
      <br />
      Despite the digital improvements, the fax machine is still in use. "We're
      waiting for insurance companies to have portals to accept digital
      information," Brereton-Esposito said.
    </SectionContent>

    <SectionTitle>ARTIFICIAL INTELLIGENCE</SectionTitle>
    <SectionContent>
      AI watches what your team does and then it learns what your team does,
      said Ansley, who sees this as the next logical step in automation. "I
      don't think it's way in the future," she said.
      <br />
      <br />
      Liebl at CentraCare said the health system is in the process of
      implementing AI and automation in relation to the payers - and in taking
      some of the low-level work off staff that's tedious and expensive to do.
      Staff people are being moved to positions that can't be done by machine.
      <br />
      <br />
      "For instance, using AI in regards to prior authorization: We're
      constantly getting notices from payers for prior authorization."
      <br />
      <br />
      AI can tell payers, she said, "Yes, this is service that needs to be
      authorized."
      <br />
      <br />
      If it's simple, AI can do it without human intervention. For claim status
      checks that have been denied, AI is going into the payer portals and into
      work queues.
      <br />
      <br />
      AI is new, within the last year. It's been doing prior authorization for a
      couple of months.
      <br />
      <br />
      Liebl said she's seen a 20% decrease in denials. "Yes, that's a huge
      impact for us," she said.
    </SectionContent>

    <SectionTitle>AN IMPROVED PATIENT EXPERIENCE</SectionTitle>
    <SectionContent>
      Mindy McNamara, patient financial experience coordinator for Yale New
      Haven said, "As far as engaging patients, these are more back-end
      workflows," which the patient doesn't see. But value is added through
      increased accuracy and a decrease in lag times. Claims are processed
      faster.
      <br />
      <br />
      Within the revenue cycle is a huge opportunity to leverage automation for
      better patient engagement, Liebl said.
      <br />
      <br />
      MyChart from Epic engages the patients. Patients can schedule an
      appointment and get out-of-pocket cost estimates.
      <br />
      <br />
      "From that point, we can ask them to pay in advance," Liebl said. "If a
      patient says 'I can't afford this,' it moves into patient counseling for
      payment programs."
      <br />
      <br />
      If patients still can't afford the payment, the health system can
      determine if they qualify for Medicaid.
      <br />
      <br />
      "Our patients are asking, 'How much is this going to cost me?' This weighs
      on them as they go into procedures. We have better clinical outcomes in
      the end."
    </SectionContent>

    <SectionContent sx={{ fontStyle: "italic", color: "#666", mt: 4 }}>
      Source: Healthcarefinance; HIMMS Media Managing Editor
      <br />
      Twitter: @SusanJMorse
      <br />
      Email the writer: susan.morse@himssmedia.com
      <br />
      Revenue Cycle Automation Absorbs Increasing Volumes Patients Return
    </SectionContent>

    <Box sx={{ my: 4 }}>
      <ExternalLinkButton
        href="https://www.healthcarefinancenews.com/news/revenue-cycle-automation-absorbs-increasing-volumes-patients-return"
        target="_blank"
        rel="noopener noreferrer"
      >
        Read Original Article on Healthcare Finance
      </ExternalLinkButton>
    </Box>
  </>
);
