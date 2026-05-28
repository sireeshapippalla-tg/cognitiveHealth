export type TermBlock =
  | { type: "heading"; text: string }
  | { type: "paragraph"; text: string }
  | { type: "list"; items: string[] }
  | { type: "link"; text: string; url: string };

export type TermSection = {
  id: string;
  title: string;
  blocks: TermBlock[];
};

export const termsSections: TermSection[] = [
  {
    id: "introduction",
    title: "GENERAL",
    blocks: [
      {
        type: "paragraph",
        text: `CognitiveHealth Technologies LLC ("Company" or "we" or "us" or "our") respects the privacy of its users ("user" or "you") that use our website located at
              www.CognitiveHealthIT.com, including other media forms, media channels, mobile website or mobile application related or connected thereto
              (collectively, the "Website"). The following Company privacy policy ("Privacy Policy") is designed to inform you, as a user of the Website, about the
              types of information that Company may gather about or collect from you in connection with your use of the Website. It also is intended to explain the
              conditions under which Company uses and discloses that information, and your rights in relation to that information. Changes to this Privacy Policy
              are discussed at the end of this document. Each time you use the Website, however, the current version of this Privacy Policy will apply. Accordingly,
              each time you use the Website you should check the date of this Privacy Policy (which appears at the beginning of this document) and review any
              changes since the last time you used the Website.`,
      },
      {
        type: "paragraph",
        text: `Our Website is hosted in the United States of America and is subject to U.S. state and federal law. If you are accessing our Website from other
                jurisdictions, please be advised that you are transferring your personal information to us in the United States, and by using our Website, you consent
                to that transfer and use of your personal information in accordance with this Privacy Policy. You also agree to abide by the applicable laws of
                applicable Federal law and California law concerning your use of the Website and your agreements with us. Any person accessing our Website is
                solely responsible for compliance with any local laws, to the extent they are applicable.`,
      },
      {
        type: "paragraph",
        text: `BY USING OR ACCESSING THE WEBSITE, YOU ARE ACCEPTING THE PRACTICES DESCRIBED IN THIS PRIVACY POLICY.`,
      },
    ],
  },
  {
    id: "gathering-use-disclosure",
    title:
      "GATHERING, USE AND DISCLOSURE OF PERSONALLY IDENTIFYING INFORMATION",
    blocks: [
      {
        type: "heading",
        text: "User Registration",
      },
      {
        type: "paragraph",
        text: `As defined herein, "Personally Identifying Information" or "PII" is information that personally identifies a particular individual, such as name,
              address, email address or phone number. We do not gather or store any PII about you when you simply visit our Website. You may have the opportunity to
              provide PII on our Website, such as when you submit a request for information or ask a question. The PII we collect in those circumstances is the PII that
              you choose to provide. We will use the PII you provide to respond to your request or question, or to contact you later about our products or services.
              If you do not want to be contacted later, you may choose to opt-out.`,
      },
      {
        type: "paragraph",
        text: `We will not disclose your PII to third parties for their direct marketing purposes. We may disclose your PII to third-party service providers that perform
              services on our behalf, such as hosting our Website, sending emails, or processing payments. These service providers are authorized to use your PII
              only as necessary to provide these services to us and are contractually obligated to keep your PII confidential.`,
      },
      {
        type: "paragraph",
        text: `We also may disclose your PII if required to do so by law, or in the good-faith belief that such action is necessary to comply with applicable law,
              respond to a subpoena, court order, or other legal process, or protect the rights, property, or safety of our Company, our users, or others.`,
      },
    ],
  },
  {
    id: "non-personally-identifying-information",
    title: "NON-PERSONALLY IDENTIFYING INFORMATION",
    blocks: [
      {
        type: "paragraph",
        text: `We may collect non-personally identifying information about your visit to our Website, such as the date and time of your visit, the pages you
              viewed, the website from which you linked to our Website, and your IP address. We use this information to analyze trends, administer the Website,
              track user movement, and gather broad demographic information for aggregate use. We do not link this information to your PII.`,
      },
      {
        type: "paragraph",
        text: `We also may use "cookies" or similar technologies to collect information about your browser type, operating system, and Website usage. Cookies are small
              text files that are stored on your computer or mobile device when you visit a website. You can set your browser to reject cookies, but doing so may
              limit your ability to use certain features of our Website.`,
      },
    ],
  },
  {
    id: "security",
    title: "SECURITY",
    blocks: [
      {
        type: "paragraph",
        text: `We take reasonable security measures to protect your PII from unauthorized access, use, or disclosure. However, no data transmission over the Internet
              or electronic storage system can be guaranteed to be 100% secure. Accordingly, we cannot guarantee the security of any information you transmit to us,
              and you do not hold us liable for any security breaches.`,
      },
    ],
  },
  {
    id: "children",
    title: "CHILDREN'S PRIVACY",
    blocks: [
      {
        type: "paragraph",
        text: `Our Website is not directed to children under the age of 13, and we do not knowingly collect PII from children under the age of 13. If you believe
              we have collected PII from a child under the age of 13, please contact our privacy officer, and we will take steps to delete that information.`,
      },
    ],
  },
  {
    id: "changes-privacy-policy",
    title: "CHANGES TO THIS PRIVACY POLICY",
    blocks: [
      {
        type: "paragraph",
        text: `We may update this Privacy Policy from time to time to reflect changes in our practices or applicable law. We will post the updated Privacy Policy on
              our Website, and the version date at the beginning of the document will reflect when it was last updated. We encourage you to review our Privacy Policy
              periodically to stay informed about how we collect, use, and protect your information.`,
      },
    ],
  },
  {
    id: "california-privacy-rights",
    title: "CALIFORNIA PRIVACY RIGHTS",
    blocks: [
      {
        type: "paragraph",
        text: `California Civil Code Section 1798.83, also known as the "Shine The Light" law, permits our users who are California residents to request and obtain
          from us once a year, free of charge, information about the personal information (if any) we disclosed to third parties for direct marketing purposes in
          the preceding calendar year. If applicable, this information would include a list of the categories of personal information that was shared and the
          names and addresses of all third parties with which we shared information in the immediately preceding calendar year. If you are a California
          resident and would like to make such a request, please submit your request in writing to our privacy officer as listed below.`,
      },
    ],
  },
  {
    id: "do-not-track-policy",
    title: "DO NOT TRACK POLICY",
    blocks: [
      {
        type: "paragraph",
        text: `Our Website does not respond to "Do Not Track" signals or mechanisms.`,
      },
    ],
  },
  {
    id: "contact-information",
    title: "Contact",
    blocks: [
      {
        type: "paragraph",
        text: "If you have any questions regarding our Privacy Policy, please contact our privacy officer at:",
      },
      {
        type: "paragraph",
        text: "Attention: Legal Department",
      },
      {
        type: "paragraph",
        text: "1345, Avenue of the Americas, St. 200",
      },
      {
        type: "paragraph",
        text: "New York, NY 10105",
      },
      {
        type: "link",
        text: "legal@cognitivehealthit.com",
        url: "mailto:legal@cognitivehealthit.com",
      },
    ],
  },
];
