import { Grid } from "@mui/material";

import {
  Section,
  Title,
  MotionCard,
  Card,
  Line,
  QuoteText,
  Author,
  Company,
  StyledQuoteIcon,
} from "./TestimonialsSection.style";

const testimonials = [
  {
    quote:
      "By automating the end of the day reconciliation process, we are able to reduce data entry errors and improve efficiency. The timing of this process implementation has been very important for our current situation. The portal has allowed us to transition to a work from home process with no disruption to our workflow.",
    author: "Senior Manager, Corporate Business Services",
    role: "",
    company: "4000+ Bed Health System",
  },
  {
    quote:
      "In the 15 months of collaboration with the CognitiveHealth team we have successfully implemented automation in the areas of cash posting, reconciliation and correspondence work. We are pleased with the early results and continuing to expand our partnership with CognitiveHealth.",
    author: "Vice President of Patient Financial Services",
    role: "",
    company: "3500+ Bed Academic Hospital",
  },
  {
    quote:
      "Reducing reconciliation complexity and improving accuracy, iCAN platform transformed our workflow by cutting onshore oversight nearly in half while raising productivity. Our team now works more collaboratively and efficiently, with higher job satisfaction across onshore and offshore roles. Partnering with CognitiveHealth helped us uncover process gaps we didn’t realize existed. The ongoing improvements to iCAN’s reporting and dashboards, combined with a collaborative approach, have driven measurable improvements across our operations",
    author: "Director, RCM",
    role: "",
    company: "Nationally Servicing Behavioral Health System",
  },
];

export default function TestimonialSection() {
  return (
    <Section>
      {/* Title */}

      <Title>Trusted By Healthcare Leaders</Title>

      <Grid container spacing={6}>
        {testimonials.map((item, index) => (
          <Grid size={{ xs: 12, md: 4 }} key={index}>
            <MotionCard
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: false }}
            >
              <Card>
                <Line className="line" />

                <StyledQuoteIcon />

                <QuoteText>{item.quote}</QuoteText>

                <Author>{item.author}</Author>

                <Company variant="caption">{item.company}</Company>
              </Card>
            </MotionCard>
          </Grid>
        ))}
      </Grid>
    </Section>
    // </Box>
  );
}
