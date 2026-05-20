import React from "react";
import {
  FolderStyledIcon,
  PaymentsStyledIcon,
  HospitalStyledIcon,
  TrendingStyledIcon,
  InsightsStyledIcon,
  TimeStyledIcon,
  AIStyledIcon,
  HandshakeStyledIcon,
} from "./Rcmreadiness.style";

export type ChecklistItem = { label: string };

export type SectionProps = {
  title: string;
  icon?: React.ReactNode;
  items: ChecklistItem[];
};

export const sections: SectionProps[] = [
  {
    title: "Correspondence Classification",
    icon: <FolderStyledIcon />,
    items: [
      { label: "Receive daily high volumes of correspondence" },
      { label: "Documents arrive via fax, email, portals, and mail" },
      { label: "Staff manually reviews, labels, and sorts documents" },
      { label: "Handling 5+ categories (denials, medical records, appeals)" },
    ],
  },
  {
    title: "Payment Posting & Reconciliation",
    icon: <PaymentsStyledIcon />,
    items: [
      { label: "Manual posting of non-standard ERAs or paper EOBs" },
      { label: "Significant delays in month-end reconciliation" },
      { label: "Difficulty matching bulk payments to individual claims" },
      { label: "High volume of unposted cash on the balance sheet" },
    ],
  },
  {
    title: "EMR & Facility Complexity",
    icon: <HospitalStyledIcon />,
    items: [
      { label: "Operating across multiple incompatible EMR systems" },
      { label: "Managing billing for multiple facility locations" },
      { label: "Lack of centralized data integration between sites" },
      { label: "Inconsistent data formats require manual work" },
    ],
  },
  {
    title: "Low Dollar Denials & Write-Offs",
    icon: <TrendingStyledIcon />,
    items: [
      {
        label:
          "High volume of denials under $200–$500 that are written off or outsourced",
      },
      { label: "Cost-to-collect exceeds the potential recovery amount" },
      { label: "Lack of granular visibility into small balance denial trends" },
      { label: "Manual appeal process is too expensive for low balances" },
    ],
  },
  {
    title: "Measurable Impact Potential",
    icon: <InsightsStyledIcon />,
    items: [
      { label: "Leadership has set goals to reduce DSO or AR days" },
      { label: "Finance team requires ROI within 6–12 months" },
      { label: "Goal to shift staff from data entry to high-value tasks" },
      { label: "Need to reduce overall cost-to-collect" },
    ],
  },
  {
    title: "Operational Challenges",
    icon: <TimeStyledIcon />,
    items: [
      { label: "Staff turnover or shortages in the RCM department" },
      { label: "Missed appeal deadlines due to routing delays" },
      { label: "Backlogs in work queues creating cash-flow delays" },
    ],
  },
  {
    title: "AI Compatibility & Readiness",
    icon: <AIStyledIcon />,
    items: [
      { label: "Current inputs are digital (PDF, 835/837, scanned images)" },
      { label: "IT team is open to API, SFTP, or secure pilot access" },
      { label: "Workflows are documented or can be mapped clearly" },
      { label: "Data is accessible via shared folders or DMS" },
    ],
  },
  {
    title: "Organizational Readiness",
    icon: <HandshakeStyledIcon />,
    items: [
      { label: "Key stakeholders support automation" },
      { label: "Budget is available for efficiency tools" },
      { label: "Organization is willing to pilot new technology" },
      { label: "There is a designated champion to drive the initiative" },
    ],
  },
];
