import React from "react";
import {
  SectionTitle,
  SectionContent,
  OutcomeList,
  InlineImageContainer,
  ImageCaption,
  AuthorImage,
  ItalicInfoText,
  ExternalLinkButton,
  MarginContainer,
} from "../BlogDetailPage.style";
import type { MediaContentProps } from "./MediaContentA";

import albertImg from "../../../assets/aboutUs/albert.svg";

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
      <AuthorImage
        src={albertImg}
        alt="Albert Porco"
      />
      <ImageCaption>
        Albert Porco, Chief Solutions Architect at Cognitive Health Technologies
      </ImageCaption>
    </InlineImageContainer>
    <ItalicInfoText>
      Albert Porco serves as Chief Solutions Architect at Cognitive Health
      Technologies. Albert has served as CIO for several New York metropolitan
      area hospitals and health systems. Prior to joining Cognitive Health
      Technologies, he also served as the Chief Technology Officer for the New
      York Department of Health. He can be reached at
      Albert.Porco@CognitiveHealthIT.com.
    </ItalicInfoText>

    <MarginContainer>
      <ExternalLinkButton
        href="https://hitconsultant.net/2020/11/09/yale-new-haven-ipa-revenue-cycle-inefficiency/#.X9pFqXrityx"
        target="_blank"
        rel="noopener noreferrer"
      >
        Read Original Article on HIT Consultant
      </ExternalLinkButton>
    </MarginContainer>
  </>
);
