import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SearchIcon from "@mui/icons-material/Search";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Box, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
// import {
//   HeroSection,
//   HeroInner,
//   HeroTitle,
//   HeroSubtitle,
//   PageBackground,
//   ContentWrapper,
//   ContentInner,
//   SectionBlock,
//   SectionTitle,
//   Paragraph,
//   ListParagraph,
//   UpdatedBadge,
//   SearchContainer,
//   SearchInputWrapper,
//   StyledInput,
//   AccordionContainer,
//   AccordionItem,
//   AccordionHeader,
//   AccordionContent,
//   IconWrapper,
//   NoResults,
//   CtaSection,
//   CtaTitle,
//   CtaText,
//   CtaButton,
// } from "./PrivacyPolicy.styles";
import {
  HeroSection,
  HeroInner,
  HeroTitle,
  HeroSubtitle,
  PageBackground,
  ContentWrapper,
  ContentInner,
  SectionBlock,
  SectionTitle,
  Paragraph,
  ListParagraph,
  // UpdatedBadge,
  SearchContainer,
  SearchInputWrapper,
  StyledInput,
  AccordionContainer,
  AccordionItem,
  AccordionHeader,
  AccordionContent,
  IconWrapper,
  NoResults,
  CtaSection,
  CtaTitle,
  CtaText,
  CtaButton,
  UpdatedBadge,
} from "../faq/Faq.styles";

type TermBlock =
  | { type: "heading"; text: string }
  | { type: "paragraph"; text: string }
  | { type: "list"; items: string[] }
  | { type: "link"; text: string; url: string };

type TermSection = {
  id: string;
  title: string;
  blocks: TermBlock[];
};

const PrivacyPolicyPage = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const termsSections: TermSection[] = [
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
                  applicable states and U.S. federal law concerning your use of the Website and your agreements with us. Any persons accessing our Website from any
                  jurisdiction with laws or regulations governing the use of the Internet, including personal data collection, use and disclosure different from those of
                  the jurisdictions mentioned above may only use the Website in a manner lawful in their jurisdiction. If your use of our Website would be unlawful in
                  your jurisdiction, please do not use the Website.`,
        },
        {
          type: "paragraph",
          text: "BY USING OR ACCESSING THE WEBSITE, YOU ARE ACCEPTING THE PRACTICES DESCRIBED IN THIS PRIVACY POLICY.",
        },
        {
          type: "paragraph",
          text: "<strong>GATHERING, USE AND DISCLOSURE OF NON-PERSONALLY-IDENTIFYING INFORMATION</strong>",
        },
      ],
    },
    {
      id: "users-of-website",
      title: "Users of the Website Generally",
      blocks: [
        {
          type: "paragraph",
          text: `"Non-Personally-Identifying Information" is information that, without the aid of additional information, cannot be directly associated with a specific
                person. "Personally-Identifying Information," by contrast, is information such as a name or email address that, without more, can be directly
                associated with a specific person. Like most website operators, Company gathers from users of the Website Non-Personally-Identifying Information of
                the sort that Web browsers, depending on their settings, may make available. That information includes the user's Internet Protocol (IP) address,
                operating system and browser type, and the locations of the Web pages the user views right before arriving at, while navigating and immediately
                after leaving the Website. Although such information is not personally identifiable, it may be possible for Company to determine from an IP address a
                user's Internet service provider and the geographic location of the visitor's point of connectivity as well as other statistical usage data. Company
                analyzes Non-Personally-Identifying Information gathered from users of the Website to help Company better understand how the Website is being
                used. By identifying patterns and trends in usage, Company is able to better design the Website to improve users' experiences, both in terms of
                content and ease of use. From time to time, Company may also release the Non-Personally-Identifying Information gathered from Website users in
                the aggregate, such as by publishing a report on trends in the usage of the Website`,
        },
      ],
    },

    {
      id: "web-cookies",
      title: "Web Cookies",
      blocks: [
        {
          type: "paragraph",
          text: `A "Web Cookie" is a string of information which assigns you a unique identification that a website stores on a user's computer, and that the user's
                browser provides to the website each time the user submits a query to the site. Company uses Web Cookies to track the pages that users visit during
                each Website session, both to help Company improve users' experiences and to help Company understand how the Website is being used. As with
                other Non-Personally-Identifying Information gathered from users of the Website, Company analyzes and discloses in aggregated form information
                gathered using Web Cookies, so as to help Company, its partners and others better understand how the Website is being used. WEBSITE USERS
                WHO DO NOT WISH TO HAVE WEB COOKIES PLACED ON THEIR COMPUTERS SHOULD SET THEIR BROWSERS TO REFUSE WEB COOKIES BEFORE
                ACCESSING THE WEBSITE, WITH THE UNDERSTANDING THAT CERTAIN FEATURES OF THE WEBSITE MAY NOT FUNCTION PROPERLY WITHOUT THE
                AID OF WEB COOKIES. WEBSITE USERS WHO REFUSE WEB COOKIES ASSUME ALL RESPONSIBILITY FOR ANY RESULTING LOSS OF
                FUNCTIONALITY.`,
        },
      ],
    },

    {
      id: "third-party-advertisers-inline",
      title: "Third Party Advertisers",
      blocks: [
        {
          type: "paragraph",
          text: `We may use third-party advertising companies to serve ads when you visit the Website. These companies may use information (not including any Personally-Identifying Information) about your visits to this and other websites that are contained in Web Cookies in order to provide advertisements about goods and services of interest to you. Using a tool created by the Network Advertising Initiative, you can opt out of several third party ad servers’ and networks’ Web Cookies simultaneously. If you would like more information about this practice and to know your choices about not having this information used by these companies, please follow the following links: <a href="http://networkadvertising.org/managing/opt_out.asp" target="_blank">http://networkadvertising.org/managing/opt_out.asp</a>, <a href="http://preferences-mgr.truste.com/" target="_blank">http://preferences-mgr.truste.com/</a>, or <a href="http://www.aboutads.info/choices/" target="_blank">http://www.aboutads.info/choices/</a>. Please contact us if you would like to know the identity of the third-party advertising companies we are currently using to serve ads.`,
        },

        {
          type: "paragraph",
          text: `We may allow advertisers to choose the characteristics of users who will see their advertisements and we may use any of the non-personally
                  identifiable attributes we have collected (including information you may have decided not to show to other users, such as your birth year or other
                    sensitive personal information or preferences) to select the appropriate audience for those advertisements. We do not identify you to the advertiser.`,
        },
      ],
    },
    {
      id: "web-beacons",
      title: "Web Beacons",
      blocks: [
        {
          type: "paragraph",
          text: `A "Web Beacon" is an object that is embedded in a web page or email that is usually invisible to the user and allows website operators to check
                whether a user has viewed a particular web page or an email. Company may use Web Beacons on the Website and in emails to count users who have
                visited particular pages, viewed emails, and to deliver co-branded services. Web Beacons are not used to access users' Personally-Identifying
                Information; they are a technique Company may use to compile aggregated statistics about Website usage. Web Beacons collect only a limited set of
                information including a Web Cookie number, time and date of a page or email view, and a description of the page or email on which the Web
                Beacon resides. You may not decline Web Beacons, however, they can be rendered ineffective by declining all Web Cookies or modifying your
                browser setting to notify you each time a Web Cookie is tendered and permit you to accept or decline Web Cookies on an individual basis.`,
        },
      ],
    },
    {
      id: "analytics",
      title: "Analytics",
      blocks: [
        {
          type: "paragraph",
          text: `We may use third-party vendors, including Google, who use first-party cookies (such as the Google Analytics cookie) and third-party cookies (such as the DoubleClick cookie) together to provide analytics services, inform, optimize, 
            and serve ads based on your past activity on our websites and applications, including Google Analytics for Display Advertising. These vendors may use Web Cookies, Web Beacons and other technologies to collect information about your use of the Website, 
            our service and other websites, including your IP address, web browser, pages viewed, time spent on pages, links clicked and conversion information. This information may be used by us and others to, among other things, analyze and track data, determine the popularity of certain content,
             deliver advertising and content targeted to your interests on our service and other websites and better understand your online activity. If you do not want any information to be collected and used by Google Analytics, you can install an opt-out in your web browser (<a href="https://tools.google.com/dlpage/gaoptout/" target="_blank">https://tools.google.com/dlpage/gaoptout/</a>) and/or opt out from Google Analytics
           for Display Advertising or the Google Display Network. You can do so by using Google’s Ads Settings (<a href="https://www.google.com/settings/ads" target="_blank">www.google.com/settings/ads</a>). For more information about interest-based ads, or to opt out in general of having your web browsing information used for behavioral advertising purposes, please visit <a href="https://www.aboutads.info/choices" target="_blank">www.aboutads.info/choices</a>.`,
        },
      ],
    },

    {
      id: "aggregated-information",
      title: "Aggregated and Non-Personally-Identifying Information",
      blocks: [
        {
          type: "paragraph",
          text: `We may share aggregated and Non-Personally Identifying Information we collect under any of the above circumstances. We may also share it with
                third parties and our affiliate companies to develop and deliver targeted advertising on our Website and on websites of third parties. We may
                combine Non-Personally Identifying Information we collect with additional Non-Personally Identifying Information collected from other sources. We
                also may share aggregated information with third parties, including advisors, advertisers and investors, for the purpose of conducting general
                business analysis. For example, we may tell our advertisers the number of visitors to our Website and the most popular features or services accessed.
                This information does not contain any Personally-Identifying Information and may be used to develop website content and services that we hope you
                and other users will find of interest and to target content and advertising.`,
        },
      ],
    },

    {
      id: "personal-information-collection",
      title:
        "Collection, Use and Disclosure of Personally-Identifying Information",
      blocks: [
        {
          type: "heading",
          text: "Collection of Information",
        },
        {
          type: "paragraph",
          text: `As defined above, Personally-Identifying Information is information that can be directly associated with a specific person. Company may collect a
            range of Personally-Identifying Information from and about Website users. Much of the Personally-Identifying Information collected by Company
            about users is information provided by users themselves when (1) participating in polls, surveys or other features of our service, or responding to
            offers or advertisements, (2) communicating with us, (3) creating a public profile, or (4) signing up to receive newsletters. That information may
            include each user's name, address, email address, and telephone number. We also may request information about your interests and activities, and
            other relevant information as determined by Company from time to time. Users of the Website are under no obligation to provide Company with
            Personally-Identifying Information of any kind, with the caveat that a user's refusal to do so may prevent the user from using certain Website features.`,
        },
        {
          type: "paragraph",
          text: `BY USING THE WEBSITE, YOU CONSENT TO THE USE AND DISCLOSURE OF YOUR PERSONALLY IDENTIFYING INFORMATION AS DESCRIBED IN THIS
            "COLLECTION, USE AND DISCLOSURE OF PERSONALLY-IDENTIFYING INFORMATION" SECTION.`,
        },
      ],
    },

    {
      id: "company-communications",
      title: "Company Communications",
      blocks: [
        {
          type: "paragraph",
          text: `We may occasionally use your name and email address to send you notifications regarding new services offered by the Website that we think you
          may find valuable. We may also send you service-related announcements from time to time. You may opt out of such emails, though we reserve the
          right to send you service announcements, and administrative messages, even if you opt out of all voluntary email notifications.`,
        },
      ],
    },

    {
      id: "company-disclosures",
      title: "Company Disclosures",
      blocks: [
        {
          type: "paragraph",
          text: "Company will disclose Personally-Identifying Information under the following circumstances:",
        },
        {
          type: "list",
          items: [
            `<strong>By Law or to Protect Rights.</strong> When we believe disclosure is appropriate in connection with efforts to investigate, prevent, or take other action regarding
            illegal activity, suspected fraud or other wrongdoing; to protect and defend the rights, property or safety of our Company, our users, our employees, or
            others; to comply with applicable law or cooperate with law enforcement; or to enforce our Terms of Use or other agreements or policies, in response to a
            subpoena or similar investigative demand, a court order, or a request for cooperation from a law enforcement or other government agency; to establish or
            exercise our legal rights; to defend against legal claims; or as otherwise required by law. In such cases, we may raise or waive any legal objection or right
            available to us.`,
            `<strong>Marketing Communications.</strong> Unless users opt-out from receiving Company marketing materials, Company may email users about products and services
              that Company believes may be of interest to them. If a user wishes to opt-out of receiving marketing materials from Company, user may do so by following
              the unsubscribe link in email communications or contacting us using the contact information below.`,
            `<strong>Third Party Service Providers.</strong> We may share your Personally-Identifying Information, which may include your name and contact information (including
              email address) with our authorized service providers that perform certain services on our behalf. These services may include fulfilling orders, providing
              customer service and marketing assistance, performing business and sales analysis, supporting our website functionality, and supporting surveys and
              other features offered through our Website. These service providers may have access to personal information needed to perform their functions but are
              not permitted to share or use such information for any other purpose.`,
            `<strong>Business Transfers; Bankruptcy.</strong> Company reserves the right to transfer all Personally-Identifying Information in its possession to a successor organization
              in the event of a merger, acquisition, or bankruptcy or other sale of all or a portion of Company's assets. Other than to the extent ordered by a bankruptcy or
              other court, the use and disclosure of all transferred Personally-Identifying Information will be subject to this Privacy Policy, or to a new privacy policy if you
              are given notice of that new privacy policy and are given an opportunity to affirmatively opt-out of it. Personally-Identifying Information submitted or
              collected after a transfer, however, may be subject to a new privacy policy adopted by the successor organization.`,
          ],
        },
      ],
    },
    {
      id: "changing-personally-identifying-information",
      title: "Changing Personally-Identifying Information",
      blocks: [
        {
          type: "paragraph",
          text: `You may at any time review or change or delete your Personally-Identifying Information by contacting us using the contact information below. We
            will retain in our files some personal information to prevent fraud, to troubleshoot problems, to assist with any investigations, and to comply with
            legal requirements as is permitted by law. Therefore, you should not expect that all your personal information will be completely removed from our
            databases in response to your requests. Additionally, we keep a history of changed information to investigate suspected fraud.`,
        },
      ],
    },

    {
      id: "third-party-collection",
      title: "COLLECTION AND USE OF INFORMATION BY THIRD PARTIES GENERALLY",
      blocks: [
        {
          type: "paragraph",
          text: `Company contractually prohibits its contractors, affiliates, vendors and suppliers from disclosing Personally-Identifying Information received from
            Company, other than in accordance with this Privacy Policy. Third parties are under no obligation to comply with this Privacy Policy, however, with
            respect to Personally-Identifying Information that users provide directly to those third parties or that those third parties collect for themselves.
            Company neither owns nor controls the third-party websites and applications accessible through the Website. Thus, this Privacy Policy does not apply
            to information provided to or gathered by the third parties that operate them. Before visiting a third-party, or using a third party application, whether
            by means of a link on the Website, directly through the Website, or otherwise, and before providing any Personally-Identifying Information to any
            such third party, users should inform themselves of the privacy policies and practices (if any) of the third party responsible for that website or
            application, and should take those steps necessary to, in those users' discretion, protect their privacy.`,
        },
      ],
    },

    {
      id: "security",
      title: "SECURITY",
      blocks: [
        {
          type: "paragraph",
          text: `We take security of your Personally-Identifying Information seriously and use reasonable electronic, personnel, and physical measures to protect it
            from loss, theft, alteration, or misuse. However, please be advised that even the best security measures cannot fully eliminate all risks. We cannot
            guarantee that only authorized persons will view your information. We are not responsible for third party circumvention of any privacy settings or
            security measures.`,
        },
      ],
    },

    {
      id: "privacy-policy-changes",
      title: "PRIVACY POLICY CHANGES",
      blocks: [
        {
          type: "paragraph",
          text: `Company may, in its sole discretion, change this Privacy Policy from time to time. Any and all changes to Company's Privacy Policy will be reflected on
            this page and the date new versions are posted will be stated at the top of this Privacy Policy. Unless stated otherwise, our current Privacy Policy
            applies to all information that we have about you. Users should regularly check this page for any changes to its Privacy Policy. Company will always
            post new versions of the Privacy Policy on the Website. However, Company may, as determined in its discretion, decide to notify users of changes
            made to this Privacy Policy via email or otherwise. Accordingly, it is important that users always maintain and update their contact information.`,
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

  const filteredSections = useMemo(() => {
    if (!searchQuery) return termsSections;
    const lowerQuery = searchQuery.toLowerCase();
    return termsSections.filter(
      (section) =>
        section.title.toLowerCase().includes(lowerQuery) ||
        section.blocks.some(
          (block) =>
            (block.type === "paragraph" && block.text.toLowerCase().includes(lowerQuery)) ||
            (block.type === "list" && block.items.some(item => item.toLowerCase().includes(lowerQuery)))
        )
    );
  }, [searchQuery]);

  const toggleAccordion = (id: string) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <Box sx={{ minHeight: "100vh" }}>
      {/* HERO SECTION */}
      <HeroSection
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <HeroInner>
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8, ease: "easeOut" }}
          >
            <UpdatedBadge>Version Date: 11/01/2024</UpdatedBadge>
            <HeroTitle variant="h1">
              Privacy Policy
            </HeroTitle>
            <HeroSubtitle>
              How we collect, use, and protect your information at CognitiveHealthIT.com
            </HeroSubtitle>
          </motion.div>

          <SearchContainer
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8, ease: "easeOut" }}
          >
            <SearchInputWrapper>
              <SearchIcon sx={{ color: "var(--color-text-muted)", mr: 1, fontSize: 24 }} />
              <StyledInput
                placeholder="Search privacy topics..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </SearchInputWrapper>
          </SearchContainer>
        </HeroInner>
      </HeroSection>

      {/* CONTENT SECTION */}
      <PageBackground>
        <ContentWrapper>
          <ContentInner>
            <AccordionContainer>
              <AnimatePresence mode="popLayout">
                {filteredSections.length > 0 ? (
                  filteredSections.map((section, index) => (
                    <AccordionItem
                      key={section.id}
                      initial={{ opacity: 0, y: 15 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ delay: index * 0.05, duration: 0.4 }}
                      $expanded={expandedId === section.id}
                    >
                      <AccordionHeader $expanded={expandedId === section.id} onClick={() => toggleAccordion(section.id)}>
                        <Box>
                          {searchQuery && (
                            <Box sx={{
                              fontSize: "12px",
                              fontWeight: 600,
                              color: "var(--color-primary-dark)",
                              textTransform: "uppercase",
                              letterSpacing: "0.5px",
                              mb: 1
                            }}>
                              {section.title}
                            </Box>
                          )}
                          <SectionTitle className="faq-title" $expanded={expandedId === section.id}>
                            {section.title}
                          </SectionTitle>
                        </Box>
                        <IconWrapper className="faq-icon" $expanded={expandedId === section.id}>
                          <ExpandMoreIcon />
                        </IconWrapper>
                      </AccordionHeader>

                      <AnimatePresence>
                        {expandedId === section.id && (
                          <AccordionContent
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.4, ease: [0.04, 0.62, 0.23, 0.98] }}
                          >
                            <SectionBlock>
                              {section.blocks.map((block: TermBlock, bIndex: number) => {
                                if (block.type === "heading") {
                                  return (
                                    <Typography
                                      key={bIndex}
                                      variant="h6"
                                      sx={{ mt: 3, mb: 2, fontWeight: 500, color: 'var(--color-gray-900)', fontSize: '18px' }}
                                    >
                                      {block.text}
                                    </Typography>
                                  );
                                }
                                if (block.type === "paragraph") {
                                  return (
                                    <Paragraph
                                      key={bIndex}
                                      sx={{ mb: 2 }}
                                      dangerouslySetInnerHTML={{ __html: block.text }}
                                    />
                                  );
                                }
                                if (block.type === "list") {
                                  return (
                                    <ListParagraph key={bIndex}>
                                      <ul>
                                        {block.items.map((item, i) => (
                                          <li key={i} dangerouslySetInnerHTML={{ __html: item }} />
                                        ))}
                                      </ul>
                                    </ListParagraph>
                                  );
                                }
                                if (block.type === "link") {
                                  return (
                                    <Paragraph key={bIndex} sx={{ mt: 2 }}>
                                      <a href={block.url}>{block.text}</a>
                                    </Paragraph>
                                  );
                                }
                                return null;
                              })}
                            </SectionBlock>
                          </AccordionContent>
                        )}
                      </AnimatePresence>
                    </AccordionItem>
                  ))
                ) : (
                  <NoResults
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                  >
                    No results found for "{searchQuery}". Please try another search term.
                  </NoResults>
                )}
              </AnimatePresence>
            </AccordionContainer>

            {/* CTA SECTION */}
            <CtaSection>
              <CtaTitle>Need More Clarity?</CtaTitle>
              <CtaText>
                If you have specific questions about our privacy practices or data handling, our legal team is here to help.
              </CtaText>
              <CtaButton onClick={() => navigate("/contact-us")}>
                Contact Legal Team
              </CtaButton>
            </CtaSection>

          </ContentInner>
        </ContentWrapper>
      </PageBackground>
    </Box>
  );
};

export default PrivacyPolicyPage;
