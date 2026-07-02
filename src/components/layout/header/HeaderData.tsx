import React from "react";
import Vector from "../../../assets/Vector.svg";
import Frame from "../../../assets/Frame.svg";
import Workflow from "../../../assets/Workflow.svg";
import Eligibility from "../../../assets/Eligibility.svg";
import Analysis from "../../../assets/Analysis.svg";
import PreBill from "../../../assets/Prebill.svg";

import BlogIcon from "../../../assets/Resources/Blog.svg";
import VideoIcon from "../../../assets/Resources/video.svg";
import MediaIcon from "../../../assets/Resources/media.svg";

export interface SolutionLink {
  title: string;
  desc: string;
  hash: string;
  icon: React.ReactNode;
}

export interface ResourceLink {
  title: string;
  hash: string;
  icon: React.ReactNode;
}

export const solutionLinks: SolutionLink[] = [
  {
    title: "Payment Posting",
    desc: "Automated reconciliation and posting",
    hash: "paymentPosting",
    icon: (
      <img
        width={24}
        height={24}
        src={Vector}
        alt="Vector Icon"
        style={{ width: 24, height: 24 }}
        loading="lazy"
      />
    ),
  },
  {
    title: "Lockbox Management",
    desc: "AI-powered document ingestion system",
    hash: "lockboxManagement",
    icon: (
      <img
        width={24}
        height={24}
        src={Frame}
        alt="Frame Icon"
        style={{ width: 24, height: 24 }}
        loading="lazy"
      />
    ),
  },
  {
    title: "Denials Workflow",
    desc: "Smart prioritization and appeals",
    hash: "denialWorkflow",
    icon: (
      <img
        width={24}
        height={24}
        src={Eligibility}
        alt="Eligibility Icon"
        style={{ width: 24, height: 24 }}
        loading="lazy"
      />
    ),
  },
  {
    title: "Eligibility Discovery",
    desc: "Real-time coverage verification portal",
    hash: "eligibilityDiscovery",
    icon: (
      <img
        width={24}
        height={24}
        src={Workflow}
        alt="Workflow Icon"
        style={{ width: 24, height: 24 }}
        loading="lazy"
      />
    ),
  },
  {
    title: "Contract Analysis",
    desc: "Intelligent contract research assistant",
    hash: "contractAnalysis",
    icon: (
      <img
        width={24}
        height={24}
        src={Analysis}
        alt="Analysis Icon"
        style={{ width: 24, height: 24 }}
        loading="lazy"
      />
    ),
  },
  {
    title: "Pre-Bill Services",
    desc: "Automated charge capture validation",
    hash: "preBillReview",
    icon: (
      <img
        width={24}
        height={24}
        src={PreBill}
        alt="PreBill Icon"
        style={{ width: 24, height: 24 }}
        loading="lazy"
      />
    ),
  },
];

export const resourceLinks: ResourceLink[] = [
  {
    title: "Blog",
    hash: "blog",
    icon: (
      <img
        width={48}
        height={48}
        src={BlogIcon}
        alt="Blog Icon"
        style={{
          width: 24,
          height: 24,
          filter: "brightness(0) invert(1)",
        }}
        loading="lazy"
      />
    ),
  },
  {
    title: "Videos",
    hash: "videos",
    icon: (
      <img
        width={48}
        height={48}
        src={VideoIcon}
        alt="Video Icon"
        style={{
          width: 24,
          height: 24,
          filter: "brightness(0) invert(1)",
        }}
        loading="lazy"
      />
    ),
  },
  {
    title: "Media",
    hash: "media",
    icon: (
      <img
        width={48}
        height={48}
        src={MediaIcon}
        alt="Media Icon"
        style={{
          width: 24,
          height: 24,
          filter: "brightness(0) invert(1)",
        }}
        loading="lazy"
      />
    ),
  },
];
