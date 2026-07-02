import React from "react";
import {
  BlogHeader,
  BlogTitle,
  BlogDate,
  BlogDescription,
  Author,
  SectionTitle,
  SectionContent,
} from "../BlogDetailPage.style";
import type { Blog } from "../../../data/blogData";

export interface BlogContentProps {
  blog: Blog;
}

export const BlogContentDefault: React.FC<BlogContentProps> = ({ blog }) => (
  <>
    <BlogHeader>
      <BlogDate>{blog.date}</BlogDate>
      <BlogTitle>{blog.title}</BlogTitle>
      <Author>by superadmin | {blog.date}</Author>
      <BlogDescription>{blog.description}</BlogDescription>
    </BlogHeader>

    <SectionContent>
      The benefits of automating healthcare administrative tasks to gain
      efficiencies have been agreed in principle for some time now. Ongoing
      conversations evolve around robotic process automation (RPA) and how to
      enact a meaningful digital workforce to recognize the touted advantages.
      It is widely known that healthcare is behind other industries in adopting
      tools and technologies that can deliver significant workflow improvements.
      The ever-increasing complexities and costs of U.S. healthcare
      administration require strategies to move beyond just automating tasks.
    </SectionContent>

    <SectionTitle>
      Analyze process components and flow vs. standalone tasks. What are your
      expectations?
    </SectionTitle>
    <SectionContent>
      “In the last 15 months of collaboration with the CognitiveHealth team we
      have successfully implemented automation in the areas of cash posting,
      reconciliation and correspondence workflows,” says Sharlene Seidman, Vice
      President of Patient Financial Services at Yale-New Haven Health (YNHH).
      “We are very pleased with the results and continuing to expand our
      partnership with CognitiveHealth.”
      <br />
      <br />
      The CognitiveHealth proven methodology examines a complete workflow
      process including business rules, data sources, input and output to
      identify and prioritize automation scenarios. We have found that initial
      automation of processes delivers and, in many cases exceeds, the SLAs or
      anticipated performance parameters we established with our customer.
      <br />
      <br />
      “That’s why we distinguish it as Intelligent Process Automation,” says
      Pavani, Co-Founder and Chief Operating Officer. “We use multifaceted
      technologies to automate the process, not simply implement RPA. A good
      example would be the results we can cite at Yale.”
    </SectionContent>

    <SectionTitle>Re-engineer vs as-is automation</SectionTitle>
    <SectionContent>
      Our first conversations usually assess whether to automate a process as-is
      or re-engineer and then automate. While there are benefits and risks for
      both, YNHH found value in the proposed solution to re-engineer before
      automating the process. A CognitiveHealth project team was formed to
      collaborate with the customer, and exhaustively map the current process
      including the manual workflows and tasks. It was possible to visualize the
      future state of an automated process.
      <br />
      <br />
      This exercise gave invaluable perspective to the YNHH operations team for
      optimizing the process, and laid out how the iCAN™ engine (Integrated
      Cognitive Automation Neuron) would take over and more efficiently manage
      the rules-based, high volume and repetitive processes. iCAN leverages
      multiple technologies and tools where they are best utilized, such as RPA,
      AI and machine learning attuned to the precise requirements of the
      automation use cases to be deployed.
      <br />
      <br />
      In another example for a healthcare billing company, a change management
      process was not adequately organized for a re-engineered project in
      progress. Therefore, CognitiveHealth recommended as an alternative that
      their current manual process be more effectively automated.
      <br />
      <br />
      According to the CEO, “When it was first proposed what iCAN could do it
      sounded to us like science fiction. But when we saw it in action it became
      what you call a ‘no-brainer’ to deploy iCAN to scale our operations.” For
      this company iCAN not only automates the tedious data entry work, but also
      frees up the time of precious nursing resources. They are able to turn
      their focus back to patient care, rather than working on time-consuming
      Excel spreadsheets. The company is pleased with the initial results and
      plans to expand iCAN to 100+ facilities. iCAN will process over 250,000
      patient records a year in preparing and sending data to various vendors
      every day.
    </SectionContent>

    <SectionTitle>About CognitiveHealth Technologies</SectionTitle>
    <SectionContent>
      CognitiveHealth Technologies develops and deploys iCAN, a platform
      purpose-built for healthcare by experts from across the healthcare
      industry. iCAN automates rules-based, rote tasks to automate an end-to-end
      process with human resources in the loop as needed, generally for
      exceptions-type tasks. This enables employees to enhance their skills and
      take on new opportunities. CognitiveHealth measures success by
      demonstrating exponential savings in administrative processes across
      disparate systems. iCAN has been developed in partnerships with large and
      innovative health systems.
    </SectionContent>
  </>
);
