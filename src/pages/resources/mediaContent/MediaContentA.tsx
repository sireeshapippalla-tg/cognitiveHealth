import React from "react";
import { Box } from "@mui/material";
import { StyledExternalLinkText, SectionTitle, SectionContent, OutcomeList, InlineImageContainer, InlineImage, ImageCaption, StyledResourceLink } from "../BlogDetailPage.styles";
import { ROUTES } from "../../../routes/RoutePaths";

import CognitiveFallPdf from "../../../assets/Media/Cognitive-Fall2025.pdf";
import HfmaMagazinePdf from "../../../assets/Media/HFMA-magazine.pdf";
import ThreatEnvImg from "../../../assets/Media/1721194338541.webp";
import VispiImg from "../../../assets/Media/VispiGowadia.webp";

export interface MediaContentProps {
  media: any;
}

export const MediaContent1: React.FC<MediaContentProps> = () => (
  <Box sx={{ mt: 2, mb: 4 }}>
    <StyledExternalLinkText
      href={CognitiveFallPdf}
      target="_blank"
      rel="noopener noreferrer"
    >
      Read More
    </StyledExternalLinkText>
  </Box>
);

export const MediaContent2: React.FC<MediaContentProps> = () => (
  <Box sx={{ mt: 2, mb: 4 }}>
    <StyledExternalLinkText
      href={HfmaMagazinePdf}
      target="_blank"
      rel="noopener noreferrer"
    >
      Read More
    </StyledExternalLinkText>
  </Box>
);

export const MediaContent3: React.FC<MediaContentProps> = () => (
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
        src={ThreatEnvImg}
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
      <InlineImage src={VispiImg} alt="Vispi Gowadia" style={{ maxWidth: "200px", borderRadius: "50%" }} />
      <ImageCaption>Author: Vispi Gowadia, VP Technologies, CognitiveHealth Technologies</ImageCaption>
    </InlineImageContainer>
  </>
);
