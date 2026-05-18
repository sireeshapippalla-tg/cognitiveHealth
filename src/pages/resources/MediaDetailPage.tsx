import React, { useState, useEffect } from "react";
import { useParams, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Box, Typography, IconButton } from "@mui/material";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import { BlogDetailWrapper, BlogContent, BlogHeader, BlogTitle, BlogDate, Breadcrumb, BreadcrumbLink, Author, SectionTitle, SectionContent, OutcomeList, InlineImageContainer, InlineImage, ImageCaption, ExternalLinkButton, StyledExternalLinkText, StyledResourceLink } from "./BlogDetailPage.styles";
import SEO from "../../components/SEO";
import { mediaData } from "../../data/mediaData";
import type { Media } from "../../data/mediaData";
import CTASection from "../../components/home/CTA/CTASection";
import { ROUTES } from "../../routes/RoutePaths";
import albertImg from "../../assets/aboutUs/albert.svg";

const MediaDetailPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const location = useLocation();
  const fromTab = location.state?.fromTab || "media";

  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Find the media item by slug
  const media = mediaData.find((m) => m.link === `/media/${slug}`);

  if (!media) {
    return (
      <BlogDetailWrapper style={{ padding: "120px 0", textAlign: "center" }}>
        <h2>Media Article Not Found</h2>
        <BreadcrumbLink to={ROUTES.RESOURCES}>Return to Resources</BreadcrumbLink>
      </BlogDetailWrapper>
    );
  }

  const baseUrl = window.location.origin;
  const mediaSchema = {
    "@context": "https://schema.org",
    "@type": "NewsArticle",
    "headline": media.title,
    "description": media.description,
    "image": media.image,
    "datePublished": media.date,
    "url": `${baseUrl}/media/${slug}`,
    "author": {
      "@type": "Organization",
      "name": "CognitiveHealth"
    }
  };

  const renderMediaContent = (media: Media) => {
    if (media.id === "1") {
      return (
        <Box sx={{ mt: 2, mb: 4 }}>
          <StyledExternalLinkText
            href="https://cognitivehealthit.com/wp-content/uploads/2025/11/Cognitive-Fall2025.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            Read More
          </StyledExternalLinkText>
        </Box>
      );
    } else if (media.id === "2") {
      return (
        <Box sx={{ mt: 2, mb: 4 }}>
          <StyledExternalLinkText
            href="https://47880081.fs1.hubspotusercontent-na1.net/hubfs/47880081/HFMA%20magazine-Pavani-Munjuluri-Article.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            Read More
          </StyledExternalLinkText>
        </Box>
      );
    } else if (media.id === "3") {
      return (
        <>
          <SectionTitle>Addressing the Critical Cyber Threats in US Healthcare</SectionTitle>
          <SectionContent>
            US health care is 17.3 percent of the US GDP and by itself now exceeds the GDP of Germany. It has grown to the point where the uninterrupted functioning of healthcare payments is vital to national security. In recent months, the healthcare industry has faced severe data security challenges, leading to breaches, and compromising patient trust.
            <br /><br />
            The Change Healthcare ransomware incident that occurred on February 21 imposed a stark reminder to the nation that the critical healthcare infrastructure, if severely disrupted or disabled, would cause a cascading and crippling impact on our national economic security and public health and safety. As per HHS, Change Healthcare handles fifteen billion transactions every year. It is estimated that as many as eighty-five million patients’ medical records might have been exfiltrated from Change’s vast databases and destroyed.
          </SectionContent>

          <SectionTitle>Complex Healthcare Technology Environment</SectionTitle>
          <Box sx={{ my: 4, display: "flex", justifyContent: "center" }}>
            <img
              src="https://cognitivehealthit.com/wp-content/uploads/2024/07/1721194338541.png"
              srcSet="https://cognitivehealthit.com/wp-content/uploads/2024/07/1721194338541-300x156.png 300w, https://cognitivehealthit.com/wp-content/uploads/2024/07/1721194338541-768x400.png 768w, https://cognitivehealthit.com/wp-content/uploads/2024/07/1721194338541.png 860w"
              sizes="(max-width: 768px) 100vw, 768px"
              alt="Complex Healthcare Technology Environment Diagram"
              style={{ maxWidth: "100%", height: "auto", borderRadius: "8px", boxShadow: "0 8px 24px rgba(0,0,0,0.12)" }}
            />
          </Box>
          <SectionContent>
            Healthcare technologies have the potential to extend, save, and enhance lives. Technologies on the healthcare provider side range from those providing storage of electronic health records (EHRs or EMRs), devices that monitor health and deliver medication, to telemedicine technology delivering care remotely. On the payer side, they range from claims processing, managing communications with providers and patients, managing documentation and medical records, and EDI transactions for eligibility verification and provider/member services.
            <br /><br />
            Patients increasingly use mobile applications connected to their respective provider EMR or payer applications. On average, in revenue cycle management alone, Providers and Payers use dozens of technology applications and have many ways to interface with each other. These interconnected systems, applications, and devices in healthcare create a complex network where consistent security is challenging to maintain.
          </SectionContent>

          <SectionTitle>Evolution of Cyber Threats</SectionTitle>
          <SectionContent>
            Healthcare in the USA is not new to Cyber Threats. Whether it is an individual stealing healthcare data or large ransomware attacks, there are thousands of reported breaches in the country yearly. Over the past five years, there has been a 256% increase in significant breaches reported to OCR involving hacking and a 264% increase in ransomware. In 2023, hacking accounted for 79% of the significant breaches reported to OCR, affecting over 134 million individuals.
            <br /><br />
            Since the black-market value for health records is 10 to 50 times higher than general personal records, healthcare data becomes highly attractive for malicious actors. In 2023, 46 hospital systems, encompassing 141 hospitals, were impacted by ransomware.
          </SectionContent>

          <SectionTitle>What are healthcare organizations doing to secure their data?</SectionTitle>
          <SectionContent>
            Securing healthcare data is crucial to protect patient privacy, maintain data integrity, and prevent unauthorized access. Hospitals and healthcare organizations employ various strategies to safeguard sensitive information:
          </SectionContent>
          <OutcomeList>
            <li><strong>Access Controls:</strong> Restricting access to patient data based on roles and responsibilities using RBAC, biometrics, and audit logs.</li>
            <li><strong>Encryption:</strong> Ensuring patient records remain confidential during transmission (SSL/TLS) and storage (AES).</li>
            <li><strong>Firewalls and Network Segmentation:</strong> Deploying firewalls and isolating critical systems (EHRs) from less sensitive areas.</li>
            <li><strong>Regular Software Updates and Patch Management:</strong> Keeping operating systems, databases, and applications up to date to address vulnerabilities.</li>
            <li><strong>Endpoint Security:</strong> Securing devices (computers, tablets, medical equipment) with antivirus, IDS, and endpoint protection.</li>
            <li><strong>Data Backup and Disaster Recovery:</strong> Maintaining off-site backups and redundancies to ensure data remains accessible during cyber attacks.</li>
            <li><strong>Employee Training and Awareness:</strong> Educating staff on security best practices, phishing awareness, and social engineering.</li>
            <li><strong>Vendor Risk Management:</strong> Assessing the security practices of third-party vendors and cloud service providers.</li>
            <li><strong>Physical Security:</strong> Securing physical access to servers, data centers, and storage facilities with restricted badges or biometrics.</li>
            <li><strong>HIPAA Compliance:</strong> Mandating rigorous data privacy and security adherence for protected health information (PHI).</li>
          </OutcomeList>

          <SectionTitle>Technology Initiatives in Healthcare Data Security using AI</SectionTitle>
          <SectionContent>
            Apart from traditional methods, healthcare organizations are actively deploying AI-driven security initiatives:
          </SectionContent>
          <OutcomeList>
            <li><strong>Privacy Analytics Using AI:</strong> Implementing AI-driven privacy analytics models to detect potential privacy violations or attacks in EHRs.</li>
            <li><strong>Secure and Private AI Solutions:</strong> Defending against threats to data integrity and ensuring privacy through advanced encryption protocols.</li>
            <li><strong>Detecting Malware and Breaches:</strong> Leveraging machine learning algorithms to efficiently identify malware, security breaches, and zero-day cyberattacks.</li>
          </OutcomeList>

          <SectionTitle>Impact of Data Breaches & About CognitiveHealth</SectionTitle>
          <SectionContent>
            Breaches erode patient trust, leading to patients withholding crucial health information from providers. Without a complete picture of patient health, clinicians cannot provide holistic care. There is also a direct effect on revenue—delays in payments, claims submission, and fundamental interactions with payers like eligibility verifications.
            <br /><br />
            CognitiveHealth provides AI-driven process automation applications to Healthcare Providers. Focusing on Healthcare RCM functions, CognitiveHealth has delivered successful process automation apps that have significantly reduced costs and improved efficiency in various RCM processes. <StyledResourceLink to={ROUTES.CONTACTUS}>Contact us</StyledResourceLink> to schedule a demo.
          </SectionContent>

          <InlineImageContainer>
            <InlineImage src="https://cognitivehealthit.com/wp-content/uploads/2020/02/VispiGowadia.jpg" alt="Vispi Gowadia" style={{ maxWidth: "200px", borderRadius: "50%" }} />
            <ImageCaption>Author: Vispi Gowadia, VP Technologies, CognitiveHealth Technologies</ImageCaption>
          </InlineImageContainer>
        </>
      );
    } else if (media.id === "4") {
      return (
        <>
          <SectionTitle>Leadership Announcement</SectionTitle>
          <Box sx={{ my: 4, display: "flex", justifyContent: "center" }}>
            <img
              src="https://cognitivehealthit.com/wp-content/uploads/2022/01/Picture1.png"
              srcSet="https://cognitivehealthit.com/wp-content/uploads/2022/01/Picture1-300x284.png 300w, https://cognitivehealthit.com/wp-content/uploads/2022/01/Picture1.png 365w"
              sizes="(max-width: 365px) 100vw, 365px"
              alt="Ms. Pavani Munjuluri, Chief Executive Officer"
              style={{ maxWidth: "100%", height: "auto", borderRadius: "12px", boxShadow: "0 8px 24px rgba(0,0,0,0.15)" }}
            />
          </Box>
          <SectionContent>
            CognitiveHealth Technologies is excited to announce Ms. Pavani Munjuluri as the Chief Executive Officer. Pavani is the Co-founder and has been serving as Chief Operating Officer for the last three years. She has been highly successful in leading product development and client success teams to deliver on the company's vision and create immense value for clients and stakeholders. She will continue to work closely with clients and partners in this pivotal growth phase.
          </SectionContent>

          <Box sx={{ my: 4, p: 4, bgcolor: "#f5f7fa", borderRadius: "12px", borderLeft: "6px solid #0066cc" }}>
            <Typography variant="h6" sx={{ fontStyle: "italic", mb: 2, color: "#333" }}>
              "It has been a tremendous honor to serve as the CEO of CognitiveHealth Technologies for the last three years. Since founding the company, I am incredibly proud of everything our team has accomplished together. The Board and I are confident that Pavani will build on this momentum. She is a seasoned leader with significant experience working with healthcare clients, operating efficiently at scale, building great teams, and delivering value to our investors. We are lucky to have her as our next CEO."
            </Typography>
            <Typography variant="subtitle1" sx={{ fontWeight: 600, color: "#0066cc" }}>
              – BM Chittaranjan, President & Co-Founder
            </Typography>
          </Box>

          <SectionTitle>About CognitiveHealth</SectionTitle>
          <SectionContent>
            CognitiveHealth provides automation as a service to Healthcare Providers across the country. iCAN™, the intelligent automation platform developed by CognitiveHealth, is purpose-built for healthcare. Using iCAN™, health systems have achieved significant cost savings, higher operational efficiencies.
          </SectionContent>
        </>
      );
    } else if (media.id === "5") {
      return (
        <>
          <SectionTitle>Tackling Revenue Cycle Inefficiency with IPA</SectionTitle>
          <SectionContent>
            As the pandemic heads toward a second year with no further financial stimulus guaranteed, hospitals and health systems are seeking ways to reduce costs and improve revenue cycle performance. Intelligent process automation (IPA) is an emerging solution designed to optimize operations and increase productivity through a combination of process modeling, process automation, and artificial intelligence.
            <br /><br />
            IPA in the revenue cycle enables healthcare organizations to shift manual, repetitive work to automated processes that improve efficiency, accuracy, and financial outcomes. These benefits are particularly important in the healthcare revenue cycle where a maze of confusing payer requirements, redundant workflows, and siloed administrative functions push up operational costs and departmental overhead.
            <br /><br />
            Connecticut’s leading healthcare system, Yale-New Haven Health, is breaking the pattern of costly revenue cycle operations—one function at a time. This article explores how the health system’s 1,200-employee Corporate Business Services organization uses IPA in the revenue cycle to tackle inefficiency.
          </SectionContent>

          <SectionTitle>Revenue Cycle Automation at Yale-New Haven Health</SectionTitle>
          <SectionContent>
            Yale-New Haven Health began using IPA to streamline revenue cycle operations in 2019. The organization first analyzed all their high-volume, repetitive tasks that required no human intervention until there was an exception in the case or workflow. Their assessment process involved four steps:
          </SectionContent>
          <OutcomeList>
            <li>Evaluate each revenue cycle function for high levels of repetitive, redundant tasks, or work overlaps.</li>
            <li>Step back and perform process mapping. Look at EHR and other existing vendors to ensure efficient uses of all current application capabilities. Implement any capabilities not currently being used.</li>
            <li>Identify any remaining gaps and determine if revenue cycle automation using an IPA platform could fill the gaps for that specific revenue cycle function.</li>
            <li>Work with internal staff and IPA vendors to create a comprehensive physical map of the entire process, new workflow changes, and a timeline for implementation.</li>
          </OutcomeList>
          <SectionContent>
            In addition to choosing the right revenue cycle process to automate, it is critical to re-engineer those functions to achieve the greatest impact and value to the healthcare organization. “We needed to use all of our existing systems before bringing in new revenue cycle automation,” says Melisa Brereton-Esposito, Director, Systems, Training and Development, Corporate Business Services at Yale-New Haven Health. “We first focused on cash reconciliation and posting, which provided a valuable learning experience for future projects.”
            <br /><br />
            The four-step approach takes time, but yields dramatic results in cost reduction and staff adoption. “If our team doesn’t use the recommended assessment process, the introduction of IPA is of little value,” adds Brereton-Esposito.
          </SectionContent>

          <SectionTitle>Overcoming Adoption Challenges</SectionTitle>
          <SectionContent>
            Initially, there was general distrust among staff regarding how automation would improve or replace their manual work. Concerned about job security, many were reluctant to turn over tasks to the computer. Revenue cycle staff tend to be long-term employees who are cautious by nature. Brereton-Esposito’s department implemented three managerial guidelines with regard to staffing:
          </SectionContent>
          <OutcomeList>
            <li>Keep staff whose jobs are replaced by technology—never let them go based on automation.</li>
            <li>Reassign and retrain to jobs that require more analytical thinking. Encourage staff to focus on the next "better" job.</li>
            <li>Redistribute staff or wait for attrition in areas that have been automated.</li>
          </OutcomeList>

          <SectionTitle>Example of a task currently automated: Correspondence Workflow</SectionTitle>
          <SectionContent>
            Applies to mail that comes into the revenue cycle department, centralized across five hospitals.
            <br /><br />
            <strong>Before automation:</strong> All letters are received from a lockbox in random order in batches. Staff are assigned to read, sort, and process the letters to different work queues such as an explanation of benefits (EOB), financial assistance applications, approval, and denial letters in the EMR system. This is a highly manual effort and delays in this process may sometimes lead to missing time-sensitive correspondence from the payors and other external entities.
            <br /><br />
            <strong>After automation:</strong> The technology uses OCR and machine learning to categorize each piece of correspondence based on the content and then moves it to the correct person or place. For all types of letters, the system takes steps to sort and send to the right category. The technology is expected to read approximately 70% and send 30% to the human in the loop. Percentages should improve with ongoing testing, validation, tracking, and working on the exceptions in incoming correspondence.
          </SectionContent>

          <SectionTitle>Checklist for Evaluating Solutions</SectionTitle>
          <SectionContent>
            Automation platforms should use a combination of AI tools along with RPA (robotic process automation) to enable automated workflows, specifically processes like document classification. Solution providers who have an enterprise approach and multi-tenant automation technology platforms can help with long term organizational goals.
            <br /><br />
            Organizations should look for vendors with the knowledge and experience of healthcare processes and have deep technology capabilities beyond RPA, like the capability to handle large amounts of structured and unstructured data, to drive automation. Evaluate vendors beyond a point solution on how the automation platform can scale across various functions and their ability to partner with you to maximize value.
            <br /><br />
            Finally, these systems learn as they go. Vendors should have the ability to scale with reusable components and continuous learning for enterprise-wide automation.
          </SectionContent>

          <SectionTitle>Feedback and Outcomes</SectionTitle>
          <SectionContent>
            Achieving positive outcomes with revenue cycle automation depends on staff trust in the technology and new processes. Partnering with a reputable IPA vendor will allow the management to build trust with the staff and get staff involved in the process. Accuracy is one of the key determinants of success and must be measured consistently since intelligent systems learn and improve over time. When staff and leadership agree that an implementation is successful, then they can rely on IPA to address the next costly and inefficient revenue cycle function.
          </SectionContent>

          <SectionTitle>About Albert Porco</SectionTitle>
          <InlineImageContainer>
            <InlineImage src={albertImg} alt="Albert Porco" style={{ maxWidth: "200px", borderRadius: "50%" }} />
            <ImageCaption>Albert Porco, Chief Solutions Architect at Cognitive Health Technologies</ImageCaption>
          </InlineImageContainer>
          <SectionContent sx={{ fontStyle: "italic", color: "#666", mt: 2 }}>
            Albert Porco serves as Chief Solutions Architect at Cognitive Health Technologies. Albert has served as CIO for several New York metropolitan area hospitals and health systems. Prior to joining Cognitive Health Technologies, he also served as the Chief Technology Officer for the New York Department of Health. He can be reached at Albert.Porco@CognitiveHealthIT.com.
          </SectionContent>

          <Box sx={{ my: 4 }}>
            <ExternalLinkButton href="https://hitconsultant.net/2020/11/09/yale-new-haven-ipa-revenue-cycle-inefficiency/#.X9pFqXrityx" target="_blank" rel="noopener noreferrer">
              Read Original Article on HIT Consultant
            </ExternalLinkButton>
          </Box>
        </>
      );
    } else if (media.id === "6") {
      return (
        <>
          <SectionTitle>Automating Revenue Cycle On The Back End Improves Patient Engagement On The Front</SectionTitle>
          <SectionContent>
            For one health system, robotic process automation equates to about 27,000 hours in a month saved, which correlates to around $500,000.
            <br /><br />
            Revenue cycle directors are seeing a clear path for automation to increase revenue, decrease denials, speed up prior authorization and claims, and remove many of the repetitive clicks that hamper daily operations.
            <br /><br />
            From an ROI perspective, automation saves money through fewer full-time equivalent positions.
            <br /><br />
            Three rev cycle executives interviewed, who are at different stages of revenue cycle automation in their health systems, said the savings have not been achieved through layoffs, but through attrition and employees being trained for jobs machines and even smart AI processes, can't do.
            <br /><br />
            "From a savings perspective, it's a moving target," said Lynn Ansley, senior director for revenue cycle at Moffitt Cancer Center headquartered in Tampa, Florida. "People get so dead set on FTEs. Our volume is growing. To me it's not the net reduction in FTEs. It's people we wouldn't have to hire to keep up with the volume."
            <br /><br />
            Robotic process automation equates to about 27,000 hours in a month saved, which correlates to around $500,000, Ansley said. As the price tag on automation is pretty large, the savings make for a good argument for starting the process.
            <br /><br />
            However, the executives at Moffitt Cancer Center didn't need to be sold, she said. Automation has been embraced to the point that the revenue cycle team is now showcasing what it can do for other departments.
            <br /><br />
            "We're proud of the seamless performance we have," Ansley said. "Through the automation we've done, we've been to absorb more and more volumes without having to increase FTE volumes."
            <br /><br />
            Automation control stays within the revenue cycle department at Moffitt Cancer Center, not with the IT department.
            <br /><br />
            "We like to have control over our automation," Ansley said. "We like to do that scripting and monitoring in-house. We've recruited talent that knows the system, but has that coding background to script. They're able to look at a problem and know what the right technology is."
            <br /><br />
            But automation alone won't align the revenue cycle process.
            <br /><br />
            "You don't want to automate a broken process," Ansley said. "First you fix your process."
            <br /><br />
            Melisa Brereton-Esposito, director of systems training and development for corporate business services at Yale New Haven Health System, said the team has not yet attributed savings to automation, since the systems are new.
            <br /><br />
            "It will save FTEs," she said. "We didn't necessarily eliminate staff, we relocated them. People are afraid of automation. They see it as potential to take jobs, but resources being distributed to something else, as opposed to eliminating a position."
            <br /><br />
            Sherri Liebl, executive director of revenue cycle for CentraCare said, "We look at its incremental value as four-and-a-half times the investment in technology. It will have a significant impact on our organization and our patients."
          </SectionContent>

          <SectionTitle>THE RIGHT TOOLS</SectionTitle>
          <SectionContent>
            Moffitt Cancer Center has been using an EMUE tool from Databound since May 2017. The emulator operates in the system on claim scripts, which are monitored on a dashboard. As soon as an appointment gets scheduled, EMUE checks insurance eligibility and benefits and then secures any needed prior authorization from the payers.
            <br /><br />
            EMUE gets the correct values on claims. Through the automation, Ansley's team can discharge bills faster and sort out the ones that need to be done by hand.
            <br /><br />
            "A lot of that can be started by the emulators," Ansley said. In fact, so much work is being handled by EMUE that it's working around the clock to run "turbo EMUEs" on claim scripts, she said. "We're at the point now, there is no longer low-hanging fruit with EMUE. If there's a redundant task, we can have the emulator do that."
            <br /><br />
            Another automation that came about a year-and-a-half ago is the Healthcare Extendibility Platform, or HEP, which, unlike an emulator, works behind the scenes in real time to get a claim paid. It's a Cerner product that fits with the health system's EHR Cerner system.
            <br /><br />
            Still, neither system involves artificial intelligence. All is next on the list for rev cycle improvements.
            <br /><br />
            Brereton-Esposito at Yale New Haven helped to implement intelligent process automation (IPA) in 2019 to automate high-volume, mundane administrative tasks in the revenue cycle.
            <br /><br />
            Yale New Haven has an Epic EHR system. "We brought Epic in and did a full review, instituted a number of changes in bills and systems," Brereton-Esposito said. "And then we looked at, what else could we do? We recognized what we could to automate within Epic. In addition to eliminating work, it improved the accuracy."
            <br /><br />
            The system also worked closely with CognitiveHealth Technologies in process-mapping such areas as cash-posting process. That's been in place for over a year now. This past June, Yale New Haven started automation work with prior authorizations. And in September, they put in a correspondence automation workflow that cut down on the number of people needed to look at mail. CognitiveHealth uses AI tools to recognize the key words and structure on a document, puts an indicator on it and routes it to the correct work queue. The team started with remits, overpayment letters, approval and denial letters from insurance companies and expanded it to include medical records requests, attorney letters and more.
            <br /><br />
            Despite the digital improvements, the fax machine is still in use. "We're waiting for insurance companies to have portals to accept digital information," Brereton-Esposito said.
          </SectionContent>

          <SectionTitle>ARTIFICIAL INTELLIGENCE</SectionTitle>
          <SectionContent>
            AI watches what your team does and then it learns what your team does, said Ansley, who sees this as the next logical step in automation. "I don't think it's way in the future," she said.
            <br /><br />
            Liebl at CentraCare said the health system is in the process of implementing AI and automation in relation to the payers - and in taking some of the low-level work off staff that's tedious and expensive to do. Staff people are being moved to positions that can't be done by machine.
            <br /><br />
            "For instance, using AI in regards to prior authorization: We're constantly getting notices from payers for prior authorization."
            <br /><br />
            AI can tell payers, she said, "Yes, this is service that needs to be authorized."
            <br /><br />
            If it's simple, AI can do it without human intervention. For claim status checks that have been denied, AI is going into the payer portals and into work queues.
            <br /><br />
            AI is new, within the last year. It's been doing prior authorization for a couple of months.
            <br /><br />
            Liebl said she's seen a 20% decrease in denials. "Yes, that's a huge impact for us," she said.
          </SectionContent>

          <SectionTitle>AN IMPROVED PATIENT EXPERIENCE</SectionTitle>
          <SectionContent>
            Mindy McNamara, patient financial experience coordinator for Yale New Haven said, "As far as engaging patients, these are more back-end workflows," which the patient doesn't see. But value is added through increased accuracy and a decrease in lag times. Claims are processed faster.
            <br /><br />
            Within the revenue cycle is a huge opportunity to leverage automation for better patient engagement, Liebl said.
            <br /><br />
            MyChart from Epic engages the patients. Patients can schedule an appointment and get out-of-pocket cost estimates.
            <br /><br />
            "From that point, we can ask them to pay in advance," Liebl said. "If a patient says 'I can't afford this,' it moves into patient counseling for payment programs."
            <br /><br />
            If patients still can't afford the payment, the health system can determine if they qualify for Medicaid.
            <br /><br />
            "Our patients are asking, 'How much is this going to cost me?' This weighs on them as they go into procedures. We have better clinical outcomes in the end."
          </SectionContent>

          <SectionContent sx={{ fontStyle: "italic", color: "#666", mt: 4 }}>
            Source: Healthcarefinance; HIMMS Media Managing Editor<br />
            Twitter: @SusanJMorse<br />
            Email the writer: susan.morse@himssmedia.com<br />
            Revenue Cycle Automation Absorbs Increasing Volumes Patients Return
          </SectionContent>

          <Box sx={{ my: 4 }}>
            <ExternalLinkButton href="https://www.healthcarefinancenews.com/news/revenue-cycle-automation-absorbs-increasing-volumes-patients-return" target="_blank" rel="noopener noreferrer">
              Read Original Article on Healthcare Finance
            </ExternalLinkButton>
          </Box>
        </>
      );
    } else if (media.id === "7") {
      return (
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
    } else if (media.id === "8") {
      return (
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
    } else if (media.id === "9") {
      return (
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
    } else if (media.id === "10") {
      return (
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
    }

    // Fallback for any future media items
    return (
      <>
        <SectionTitle>Transforming Healthcare Revenue Cycle Management</SectionTitle>
        <SectionContent>
          As healthcare providers and payers face unprecedented operational challenges—ranging from severe staffing shortages to rising claim denial rates—the adoption of intelligent process automation (IPA) has become a strategic imperative. Organizations leveraging advanced AI platforms are experiencing significant reductions in A/R days, improved cash flow, and enhanced staff productivity.
          <br /><br />
          CognitiveHealth Technologies continues to pioneer innovative digital platforms designed specifically for the healthcare industry. By combining deep domain expertise with cutting-edge artificial intelligence, CognitiveHealth delivers scalable, secure solutions that eliminate administrative burdens and foster financial sustainability.
        </SectionContent>
        <SectionTitle>Key Highlights & Strategic Impact</SectionTitle>
        <OutcomeList>
          <li>Seamless integration with existing EMR and billing systems</li>
          <li>Significant reduction in manual touchpoints and administrative friction</li>
          <li>Enhanced financial visibility, compliance, and revenue recovery</li>
          <li>Empowering healthcare staff to focus on complex, high-value outcomes</li>
        </OutcomeList>
      </>
    );
  };

  return (
    <BlogDetailWrapper>
      <SEO
        title={`${media.title} | CognitiveHealth Media`}
        description={media.description}
        keywords="AI, Healthcare, RCM, Press Release, News, CognitiveHealth"
        schema={mediaSchema}
      />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <BlogContent>
          <Breadcrumb>
            <BreadcrumbLink to={ROUTES.HOME}>Home</BreadcrumbLink>
            <span> // </span>
            <BreadcrumbLink to={`${ROUTES.RESOURCES}#${fromTab}`}>Resources</BreadcrumbLink>
            <span> // </span>
            <span>{media.title}</span>
          </Breadcrumb>

          <BlogHeader>
            <BlogDate>{media.date}</BlogDate>
            <BlogTitle>{media.title}</BlogTitle>
            <Author>Published in Healthcare Media | {media.date}</Author>
            {/* {media.id !== "4" && (
              <BlogDescription>
                {media.description}
              </BlogDescription>
            )} */}
          </BlogHeader>

          {/* {media.image && media.image.includes("images") && media.id !== "1" && media.id !== "2" && ( */}
          {/* <BlogImage src={media.image} alt={media.title} /> */}
          {/* )} */}

          {renderMediaContent(media)}

          {/* {media.id !== "1" && media.id !== "2" && media.id !== "3" && (
            <SectionContent sx={{ mt: 6 }}>
              To learn more about how CognitiveHealth Technologies can transform your organization's revenue cycle workflows, explore our comprehensive AI platform capabilities or request a personalized demonstration.
            </SectionContent>
          )} */}

        </BlogContent>
        <CTASection />
      </motion.div>

      <AnimatePresence>
        {showScrollTop && (
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.5 }}
            transition={{ duration: 0.3 }}
            style={{
              position: "fixed",
              bottom: "40px",
              right: "40px",
              zIndex: 999,
            }}
          >
            <IconButton
              onClick={scrollToTop}
              sx={{
                bgcolor: "#0066cc",
                color: "#ffffff",
                width: "50px",
                height: "50px",
                boxShadow: "0 4px 20px rgba(0, 102, 204, 0.4)",
                "&:hover": {
                  bgcolor: "#0052a3",
                },
              }}
              aria-label="scroll back to top"
            >
              <ArrowUpwardIcon />
            </IconButton>
          </motion.div>
        )}
      </AnimatePresence>
    </BlogDetailWrapper>
  );
};

export default MediaDetailPage;
