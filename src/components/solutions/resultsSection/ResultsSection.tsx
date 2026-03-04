import { Grid } from "@mui/material";
import {
  SectionContainer,
  Wrapper,
  Subtitle,
  CtaActions,
  FooterText,
  PrimaryButtonStyles,
  Title,
} from "./ResultsSection.style";
import { MetricCard } from "../../ui/metricCard/MetricCard";
import AppButton from "../../ui/appButton/AppButton";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

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

const ResultsSection = () => {
  return (
    <SectionContainer>
      <Wrapper>
        <Title>
          See Real Results from Healthcare Organizations Like Yours
        </Title>

        <Subtitle>
          Leading health systems, physician groups, and specialty providers are
          achieving breakthrough results with CognitiveHealth AI agents.
        </Subtitle>

        <Grid container spacing={3} sx={{ marginTop: 4 }}>
          {stats.map((stat, index) => (
            <Grid size={{ xs: 12, sm: 6, md: 3 }} key={index}>
              <MetricCard
                value={stat.value}
                description={stat.label}
                color="#EB7724"
              />
            </Grid>
          ))}
        </Grid>

        {/* <CTAWrapper>
          <Button variant="outlined">Read Customer Success Stories</Button>
          <Button variant="contained">
            Download Complete Results Package →
          </Button>
        </CTAWrapper> */}

        <CtaActions direction={{ xs: "column", sm: "row" }} spacing={2}>
          <AppButton
            variantType="primary"
            sx={PrimaryButtonStyles}
            endIcon={<ArrowForwardIosIcon sx={{ fontSize: 14 }} />}
          >
            Read Customer Success Stories
          </AppButton>

          <AppButton
            variantType="outline"
            showBorder={true}
            // sx={OutlineButtonStyles}
            endIcon={<ArrowForwardIosIcon sx={{ fontSize: 14 }} />}
          >
            Download Complete Results Package
          </AppButton>
        </CtaActions>

        <FooterText>
          Join <b>50+ healthcare organizations</b> processing
          <b> 10M+ claims monthly</b> with CognitiveHealth
        </FooterText>
      </Wrapper>
    </SectionContainer>
  );
};

export default ResultsSection;
