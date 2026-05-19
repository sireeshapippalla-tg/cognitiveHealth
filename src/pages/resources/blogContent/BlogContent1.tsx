import React from "react";
import { BlogHeader, BlogTitle, BlogDate, BlogDescription, Author, SectionTitle, SectionContent, OutcomeList, Table, TableHeader, TableRow, TableCell, Highlight } from "../BlogDetailPage.styles";

export interface BlogContentProps {
  blog: any;
}

export const BlogContent1: React.FC<BlogContentProps> = ({ blog }) => (
  <>
    <BlogHeader>
      <BlogDate>JULY 16, 2025</BlogDate>
      <BlogTitle>{blog.title}</BlogTitle>
      <Author>by BM Chittaranjan and Albert Porco | July 2025</Author>
      <BlogDescription>
        As the excitement around AI grows, it's easy to conflate different forms of automation under the "Agentic AI" label. However, not all intelligent or automated systems qualify as agentic.
      </BlogDescription>
      <BlogDescription>
        <Highlight>Agentic AI</Highlight> refers specifically to systems that operate with <Highlight>autonomy, goal orientation, and adaptive decision-making</Highlight>. They are not just tools but intelligent actors capable of planning, initiating actions, learning from outcomes, and collaborating across workflows.
      </BlogDescription>
    </BlogHeader>

    <SectionContent>
      Agentic AI is capturing attention because of its potential to revolutionize revenue cycle management (RCM). However, it is often misunderstood. Agentic AI is not merely automation or predictive analytics dressed in new language. These AI agents do not simply execute rules or respond to queries; they initiate, reason, and own outcomes. Unlike traditional bots, dashboards, or static machine learning models, agentic AI is designed to function more like a proactive, goal-oriented team member than a reactive tool.
    </SectionContent>

    <SectionTitle>Here is an example of how Agentic AI can work in Denial Management.</SectionTitle>

    <SectionContent>
      Almost always, denial management in healthcare relies on human analysts and AR specialists. Very few of them are using RPA (a form of automation) to assist them. However, it is still a problem that requires trained resources. For a large multi-specialty healthcare provider group with over 500,000 annual claims, it is common to face issues of claim denials - a significant portion due to missing documentation, simple claim errors, coding discrepancies, and payer-specific rule changes. They need between 25-30 staff to manage their denials.
    </SectionContent>
    <Table>
      <thead>
        <TableRow>
          <TableHeader>Task</TableHeader>
          <TableHeader>FTEs Needed (Est.)</TableHeader>
        </TableRow>
      </thead>
      <tbody>
        <TableRow>
          <TableCell>Denial triage & classification</TableCell>
          <TableCell>5-6</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>Documentation gathering</TableCell>
          <TableCell>4-5</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>Appeal drafting & submission</TableCell>
          <TableCell>9-10</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>Payer follow-up</TableCell>
          <TableCell>5-6</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>Reporting & analytics</TableCell>
          <TableCell>1-2</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>Supervisor / QA oversight</TableCell>
          <TableCell>1-2</TableCell>
        </TableRow>
        <TableRow>
          <TableCell><strong>Total</strong></TableCell>
          <TableCell><strong>25-31 FTEs</strong></TableCell>
        </TableRow>
      </tbody>
    </Table>

    <SectionTitle>How the Agentic AI Model in denial management?</SectionTitle>

    <SectionTitle>1. Perceive: Ingest and Understand Denial Reasons</SectionTitle>
    <SectionContent>
      The agent ingests 835/837 EDI, 835 denial codes, and payer correspondence and understands why a claim was denied - whether due to medical necessity, eligibility issues, documentation gaps, or coding errors.
    </SectionContent>
    <SectionContent>
      <Highlight>Agentic Quality:</Highlight> Integrates denial reasons into a specific workflow, thereby reducing the need for human intervention.
    </SectionContent>

    <SectionTitle>2. Decide: Categorize and Prioritize</SectionTitle>
    <SectionContent>
      It doesn't just flag denials - it understands based on payer impacts, associated revenue, and claim volume probability, and flags denials. For example, a $1,200 denied claim with a CO-97 code is routed higher than a $72 outstanding balance.
    </SectionContent>
    <SectionContent>
      <Highlight>Agentic Quality:</Highlight> The agent sets new goals aligned with broader objectives to improve recovery or reduce A/R.
    </SectionContent>

    <SectionTitle>3. Act: Identify the disposition and take action</SectionTitle>
    <SectionContent>
      The AI evaluates payer rules and determines the disposition of a denial. Traditional systems flag denials, but agentic AI evaluates payer rules and takes action.
    </SectionContent>
    <SectionContent>
      Examples of actions:
    </SectionContent>
    <OutcomeList>
      <li>Initiate an appeal with appropriate documentation</li>
      <li>Resubmit the claim with corrected codes</li>
      <li>Request additional documentation</li>
      <li>Route to a specialist for clinical appeal/peer review</li>
      <li>Flag as non-appealing</li>
      <li>Group for trend analysis</li>
    </OutcomeList>

    <SectionContent>
      <strong>Real-world example of a denial disposition:</strong>
    </SectionContent>
    <SectionContent>
      Denial code: CO-97 (missing authorization)<br />
      Patient record: Authorization was obtained, but not linked<br />
      Payer rules: Appeals allowed within 30 days
    </SectionContent>
    <SectionContent>
      <strong>Disposition:</strong> AI attaches the correct prior authorization documentation and submits the appeal.
    </SectionContent>
    <SectionContent>
      <Highlight>Agentic Quality:</Highlight> AI acts proactively, initiating workflows without waiting for a human trigger.
    </SectionContent>

    <SectionTitle>4. Learn: Track Outcomes and Adjust Strategy</SectionTitle>
    <SectionContent>
      The agent monitors appeal outcomes over time. It'll observe for a specific combination of CDT and payer have less success, it adjusts its strategy – either escalating to a PA or flagging for coding audits.
    </SectionContent>
    <SectionContent>
      <Highlight>Agentic Quality:</Highlight> It learns from outcomes and improves decision-making over time – a hallmark of agentic behavior.
    </SectionContent>

    <SectionTitle>5. Collaborate: Handoff and Notifications</SectionTitle>
    <SectionContent>
      For cases outside its knowledge (e.g., clinical appeal, legal), the AI flags them, provides necessary data, and escalates to the right human team. It even schedules follow-up reminders within the EMR work queue.
    </SectionContent>
    <SectionContent>
      <Highlight>Agentic Quality:</Highlight> It collaborates with humans, knowing when to relieve human burden and when to escalate intelligently.
    </SectionContent>

    <SectionTitle>OUTCOME</SectionTitle>
    <SectionContent>Over a period of 4-6 months, the providers can see:</SectionContent>
    <OutcomeList>
      <li>10-20% reduction in A/R days</li>
      <li>22-30% increase in first-level appeal success</li>
      <li>40-60% reduction in manual denial touches</li>
    </OutcomeList>

    <SectionTitle>The new denial team with Agentic AI looks as below</SectionTitle>
    <Table>
      <thead>
        <TableRow>
          <TableHeader>Task</TableHeader>
          <TableHeader>FTEs Free-up by AI</TableHeader>
          <TableHeader>Benefit</TableHeader>
        </TableRow>
      </thead>
      <tbody>
        <TableRow>
          <TableCell>Exception handling (clinical, legal, complex cases)</TableCell>
          <TableCell>4-6</TableCell>
          <TableCell>Focused, skilled roles</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>Audits, overnights & QA</TableCell>
          <TableCell>1-2</TableCell>
          <TableCell>Ensuring AI accuracy and compliance</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>Process analytics / AI operations</TableCell>
          <TableCell>1</TableCell>
          <TableCell>To train, tune, and govern agentic workflows</TableCell>
        </TableRow>
        <TableRow>
          <TableCell><strong>Total</strong></TableCell>
          <TableCell><strong>6-9 reduction</strong></TableCell>
          <TableCell></TableCell>
        </TableRow>
      </tbody>
    </Table>

    <SectionContent>
      This is not automation as we’ve known it. This is <Highlight>agentic intelligence at work</Highlight> – not just reacting, but reasoning, acting, learning, and collaborating. And it’s setting a new standard for what AI can do in healthcare.
    </SectionContent>
    <SectionContent>
      <Highlight>Agentic AI is not just automation with a brain – it’s automation with intent.</Highlight>
      <br />
      Understanding this distinction is key to making smart investments and setting the right expectations in healthcare RCM transformation.
    </SectionContent>
  </>
);
