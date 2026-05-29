import { Grid, Box, Container } from "@mui/material";
import { useState } from "react";
import { motion } from "framer-motion";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { toast } from "react-toastify";

import {
  ButtonGroup,
  CTAWrapper,
  FooterText,
  Glow,
  Header,
  OutlineButton,
  PrimaryButton,
  Section,
  StatCard,
  StatDivider,
  StatLabel,
  StatValue,
  Title,
  Subtitle,
} from "./ResultsSection.style";

import { useSendResultsPdfMutation } from "../../../services/emailApi";
import { EmailDialog } from "./EmailDialog";
import { PdfListDialog } from "./PdfListDialog";
import { PdfViewerDialog } from "./PdfViewerDialog";

const stats = [
  {
    value: "93.8%",
    label: "Clean Claim and Reconciliation Accuracy",
  },
  {
    value: "60%",
    label: "Reduction in Denial Rates",
  },
  {
    value: "$2M+",
    label: "Annual Revenue Recovery per Facility",
  },
  {
    value: "80%",
    label: "Decrease in Manual Work",
  },
];

import NationalProviderPdf from '../../../assets/docs/National-Provider-Organization-Achieves-3x-Faster-Revenue-Recognition.pdf';
import CopyProviderPdf from '../../../assets/docs/Copy-of-National-Provider-Organization-Achieves-3x-Faster-Revenue-Recognition.pdf';

const pdfList = [
  {
    name: "National Provider Organization",
    file: NationalProviderPdf,
  },
  {
    name: "Regional 7 Hospital Health System",
    file: CopyProviderPdf,
  },
];

const ResultsSection = () => {
  const [openEmailDialog, setOpenEmailDialog] = useState(false);
  const [email, setEmail] = useState("");
  const [openPdfList, setOpenPdfList] = useState(false);
  const [openPdfViewer, setOpenPdfViewer] = useState(false);
  const [selectedPdf, setSelectedPdf] = useState<string | null>(null);

  const [sendPdf, { isLoading }] = useSendResultsPdfMutation();

  const handleOpenPdfList = () => setOpenPdfList(true);
  const handleSelectPdf = (file: string) => {
    setSelectedPdf(file);
    setOpenPdfList(false);
    setOpenPdfViewer(true);
  };
  const handleBackToList = () => {
    setOpenPdfViewer(false);
    setOpenPdfList(true);
  };
  const handleCloseAll = () => {
    setOpenPdfViewer(false);
    setOpenPdfList(false);
    setSelectedPdf(null);
  };

  const handleSendEmail = async () => {
    if (!email) {
      toast.error("Please enter an email address");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      toast.error("Please enter a valid email address");
      return;
    }

    try {
      // 3. Send email using RTK Query mutation
      const formData = new FormData();
      formData.append("email", email);
      // formData.append("file", blob, "results.pdf");

      await sendPdf(formData).unwrap();

      toast.success("PDF sent successfully to your email!");
      setOpenEmailDialog(false);
      setEmail("");
    } catch (error: unknown) {
      const err = error as { data?: { error?: string }; message?: string };
      toast.error(
        err.data?.error ||
          err.message ||
          "Failed to send email. Please try again."
      );
      console.error(error);
    }
  };

  return (
    <Section>
      {/* Dynamic Background: Ambient Glowing Orbs */}
      <Glow
        animate={{ scale: [0.8, 1, 0.8], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 15, repeat: Infinity }}
      />

      <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1 }}>
        <Header>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: false, amount: 0.2 }}
          >
            <Title>
              See Real Results from Healthcare Organizations Like Yours
            </Title>

            <Subtitle>
              Leading health systems, physician groups, and specialty providers
              are achieving breakthrough results with CognitiveHealth AI agents
            </Subtitle>
          </motion.div>
        </Header>

        {/* ORGANIC METRICS CLUSTER: Staggered, Floating, Non-Grid feeling */}
        <Grid container spacing={6} justifyContent="center">
          {stats.map((stat, index) => (
            <Grid
              size={{ xs: 12, sm: 6, md: 3 }}
              key={index}
              sx={{ display: "flex", alignItems: "stretch" }}
            >
              <motion.div
                style={{ width: "100%", display: "flex" }}
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: false, amount: 0.2 }}
              >
                <StatCard>
                  <StatValue>{stat.value}</StatValue>
                  <StatDivider />
                  <StatLabel>{stat.label}</StatLabel>
                </StatCard>
              </motion.div>
            </Grid>
          ))}
        </Grid>

        {/* CTA ACTIONS */}
        <CTAWrapper>
          <ButtonGroup>
            <PrimaryButton
              onClick={handleOpenPdfList}
              endIcon={<ArrowForwardIosIcon sx={{ fontSize: 14 }} />}
            >
              Read Customer Success Stories
            </PrimaryButton>
            <OutlineButton
              onClick={() => setOpenEmailDialog(true)}
              endIcon={<ArrowForwardIosIcon sx={{ fontSize: 14 }} />}
            >
              Download Complete Results Package
            </OutlineButton>
          </ButtonGroup>

          <FooterText>
            Join{" "}
            <Box component="span" sx={{ color: "var(--color-gray-900)" }}>
              50+ healthcare organizations
            </Box>{" "}
            processing{" "}
            <Box component="span" sx={{ color: "var(--color-gray-900)" }}>
              10M+ claims monthly
            </Box>{" "}
            with CognitiveHealth
          </FooterText>
        </CTAWrapper>
      </Container>

      {/* SUBCOMPONENTS */}
      <EmailDialog
        open={openEmailDialog}
        onClose={() => setOpenEmailDialog(false)}
        email={email}
        setEmail={setEmail}
        isLoading={isLoading}
        onSend={handleSendEmail}
      />

      <PdfListDialog
        open={openPdfList}
        onClose={handleCloseAll}
        pdfList={pdfList}
        onSelectPdf={handleSelectPdf}
      />

      <PdfViewerDialog
        open={openPdfViewer}
        onClose={handleCloseAll}
        onBack={handleBackToList}
        selectedPdf={selectedPdf}
      />
    </Section>
  );
};

export default ResultsSection;
