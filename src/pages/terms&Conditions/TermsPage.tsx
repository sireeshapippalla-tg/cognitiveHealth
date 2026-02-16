import { UpdatedBadge } from "../privacyPolicy/PrivacyPolicy.styles";
import {
  HeroSection,
  HeroInner,
  HeroTitle,
  HeroSubtitle,
  ContentWrapper,
  ContentInner,
  // PageTitle,
  // UpdatedText,
  SectionBlock,
  SectionTitle,
  Paragraph,
  StyledList,
  StyledListItem,
} from "./Terms.styles";

type TermBlock =
  | { type: "paragraph"; text: string }
  | { type: "list"; items: string[] };

type TermSection = {
  id: string;
  title: string;
  blocks: TermBlock[];
};

const TermsPage = () => {
  const termsSections: TermSection[] = [
    {
      id: "introduction",
      title: "Terms and Conditions of Use",
      blocks: [
        {
          type: "paragraph",
          text: "Please read these Terms of Use and Privacy Policy carefully before using this site. By using the website, you accept and agree to be bound by these Terms of Use and Privacy Policy.",
        },
        {
          type: "paragraph",
          text: "This site and its related services are governed by the Terms of Use stated below, and your continued access to this site and its services is subject to your agreement to be bound by such Termsof Use and Privacy Policy, as they may change from time to time.If you do not agree to these Terms of Use, you may not use this site. ",
        },
      ],
    },
    {
      id: "legal-advice",
      title: "Legal Advice",
      blocks: [
        {
          type: "paragraph",
          text: "Nothing on this site constitutes, or should be construed to constitute, any tax or legal advice or provide any warranties. The material is for informational purposes only with an understanding that local, state and federal laws and regulations may be different in various jurisdictions or may change over time.",
        },
        {
          type: "paragraph",
          text: "You should consult your own tax and legal professionals before engaging in any arrangements. We and our clients abide by all applicable privacy regulations, including but not limited to Health Insurance Portability and Accountability Act (HIPAA), but no HIPAA-protected information is accessible through this website.",
        },
      ],
    },
    {
      id: "interaction-surveys",
      title: "Interaction and Surveys",
      blocks: [
        {
          type: "paragraph",
          text: "From time-to-time our site may request feedback and/or information from you via survey. Participation in these requests or surveys is completely voluntary and you have a choice whether or not to disclose the requested information, which may include contact information (name and address) and demographic information. Feedback collected by these surveys will be used for purposes of monitoring or improving use of this site. It is a condition of your use of the website that all information that you provide must be correct, current, complete and not misleading.",
        },
      ],
    },
    {
      id: "links",
      title: "Links",
      blocks: [
        {
          type: "paragraph",
          text: "This website contains links to third party sites for your convenience. Please be aware that CognitiveHealth Technologies LLC and its affiliates are not responsible for any of the information, products, advertisements, and other content on these sites, nor do CognitiveHealth Technologies LLC or its affiliates make any representations as to such information, products, advertisements, and other content or its accuracy. Use of any linked third-party site is solely at your own risk and we encourage you to read the terms and conditions of each linked third party site you choose to access, including the privacy statements of each such site.",
        },
      ],
    },
    {
      id: "no-warranties",
      title: "No Warranties or Representations",
      blocks: [
        {
          type: "paragraph",
          text: "CognitiveHealth Technologies LLC makes no warranty whatsoever, express or implied, including any warranty as to accuracy, completeness or timeliness, concerning the information contained on or linked through this site, and you should not assume that such information is accurate,complete or the most up-to-date information available. CognitiveHealth Technologies LLC shall not be liable for any loss, claim or damages caused in whole or in part by its provision of, or your use of, any of the information contained on, or linked through, this site. CognitiveHealth Technologies LLC disclaims any express statutory or implied warranties, including, without limitation, warranties of merchantability or fitness for a particular purpose.",
        },
      ],
    },
    {
      id: "intellectual-property",
      title: "Intellectual Property Rights",
      blocks: [
        {
          type: "paragraph",
          text: "The website and its entire contents, features, and functionality (including but not limited to all information, software, text, displays, images, video, and audio, and the design, selection, and arrangement thereof), are owned by CognitiveHealth Technologies LLC and are protected by United States and international copyright, trademark, patent, trade secret, and other intellectual property or proprietary rights laws.",
        },
        {
          type: "paragraph",
          text: "These Terms of Use permit you to use the website for your personal, non-commercial use only. You must not reproduce, distribute, modify, create derivative works of, publicly display, publicly perform, republish, download, store, or transmit any of the material on our website, except as follows:",
        },
        {
          type: "list",
          items: [
            "Your computer may temporarily store copies of such materials in RAM incidental to your accessing and viewing those materials.",
            "You may store files that are automatically cached by your Web browser for display enhancement purposes.",
            "You may print one copy of a reasonable number of pages of the website for your own personal, non-commercial use and not for further reproduction, publication, or distribution.",
          ],
        },
      ],
    },

    {
      id: "mustnot",
      title: "You must not:",
      blocks: [
        {
          type: "list",
          items: [
            "Modify copies of any materials from this site.",
            "Use any illustrations, photographs, video or audio sequences, or any graphics separately from the accompanying text.",
            "Delete or alter any copyright, trademark, or other proprietary rights notices from copies of materials from this site.",
          ],
        },
      ],
    },

    {
      id: "copyrights",
      title: "Copyrights",
      blocks: [
        {
          type: "paragraph",
          text: "@2024 CognitiveHealth Technologies LLC. All rights reserved. The text, graphics, sound files, animation files, video files and their arrangements on all CognitiveHealth Technologies LLC sites are subject to copyright and other intellectual property protection. These materials may not be copied in whole or in part for commercial use or distribution, nor may these objects be modified or reposted to other sites.",
        },
      ],
    },
    {
      id: "limitations",
      title: "Limitations on Liability",
      blocks: [
        {
          type: "paragraph",
          text: "TO THE FULLEST EXTENT PROVIDED BY LAW, IN NO EVENT WILL THE COMPANY, ITS AFFILIATES, SERVICE PROVIDERS, EMPLOYEES, AGENTS,OFFICERS, OR DIRECTORS BE LIABLE FOR DAMAGES OF ANY KIND, UNDER ANY LEGAL THEORY, ARISING OUT OF OR IN CONNECTION WITH YOUR USE, OR INABILITY TO USE, THE WEBSITE, ANY WEBSITES LINKED TO IT, ANY CONTENT ON THE WEBSITE, INCLUDING ANY DIRECT, INDIRECT,SPECIAL, INCIDENTAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, INCLUDING BUT NOT LIMITED TO, PERSONAL INJURY, PAIN AND SUFFERING,EMOTIONAL DISTRESS, LOSS OF REVENUE, LOSS OF PROFITS, LOSS OF BUSINESS OR ANTICIPATED SAVINGS, LOSS OF USE, LOSS OF GOODWILL,LOSS OF DATA, AND WHETHER CAUSED BY TORT (INCLUDING NEGLIGENCE), BREACH OF CONTRACT, OR OTHERWISE, EVEN IF FORESEEABLE.",
        },
      ],
    },
    {
      id: "limitations",
      title: "Changes to Our Terms of Use and Privacy Policy",
      blocks: [
        {
          type: "paragraph",
          text: "We may modify this Terms of Use at any time and will post any changes by a link from our homepage so that you always know what information we collect and how we use it. Such changes will be effective immediately upon posting and shall apply prospectively only. Please consult this Terms of Use regularly for any important changes as they occur.",
        },
      ],
    },
  ];

  return (
    <>
      {/* HERO */}
      <HeroSection>
        <HeroInner>
          <HeroTitle>Terms of Service</HeroTitle>
             <UpdatedBadge>  This Terms of Use is effective January 1, 2024</UpdatedBadge>
          <HeroSubtitle>
            These Terms and Conditions govern your use of the CognitiveHealth
            platform and services.
          </HeroSubtitle>
        </HeroInner>
      </HeroSection>

      {/* CONTENT */}
      <ContentWrapper>
        <ContentInner>
          {/* <PageTitle>Terms of Use</PageTitle>
          <UpdatedText>Last Updated: January 1, 2024</UpdatedText> */}
          {/* <UpdatedText>
            This Terms of Use is effective January 1, 2024
          </UpdatedText> */}
          {termsSections.map((section) => (
            <SectionBlock key={section.id} id={section.id}>
              <SectionTitle>{section.title}</SectionTitle>

              {section.blocks.map((block: TermBlock, index: number) => {
                if (block.type === "paragraph") {
                  return <Paragraph key={index}>{block.text}</Paragraph>;
                }

                if (block.type === "list") {
                  return (
                    <StyledList key={index}>
                      {block.items.map((item: string, i: number) => (
                        <StyledListItem key={i}>{item}</StyledListItem>
                      ))}
                    </StyledList>
                  );
                }

                return null;
              })}
            </SectionBlock>
          ))}
        </ContentInner>
      </ContentWrapper>
    </>
  );
};

export default TermsPage;
