import { Grid } from "@mui/material";

import { SectionTitle } from "../../ui/sectionTitle/SectionTitle";
import { TestimonialCard } from "../../ui/testimonialCard/TestimonialCard";
import { SectionContainer, Wrapper } from "./TestimonialsSection.styles";

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
      "Reducing reconciliation complexity and improving accuracy, iCAN platform transformed our workflow by cutting onshore oversight nearly in half while raising productivity. Our team now works more collaboratively and efficiently, with higher job satisfaction across onshore and offshore roles",
    author: "Director, RCM",
    role: "",
    company: "Nationally Servicing Behavioral Health System",
  },
];

const TestimonialsSection = () => {
  return (
    <SectionContainer>
      <Wrapper>
      <SectionTitle
        pillText="See What Revenue Cycle Executives Are Saying"
        title="Trusted By Healthcare Leaders"
        maxWidth={700}
      />
      <Grid container spacing={3}>
        {testimonials.map((testimonial, index) => (
          <Grid size={{ xs: 12, md: 4 }} key={index}>
            <TestimonialCard
              quote={testimonial.quote}
              author={testimonial.author}
              role={testimonial.role}
              company={testimonial.company}
            />
          </Grid>
        ))}
      </Grid>
      </Wrapper>
    </SectionContainer>
  );
};

export default TestimonialsSection;
