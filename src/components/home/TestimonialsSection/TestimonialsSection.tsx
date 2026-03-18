// import { Grid } from "@mui/material";

// import { SectionTitle } from "../../ui/sectionTitle/SectionTitle";
// import { TestimonialCard } from "../../ui/testimonialCard/TestimonialCard";
// import { SectionContainer, Wrapper } from "./TestimonialsSection.styles";

// const testimonials = [
//   {
//     quote:
//       "By automating the end of the day reconciliation process, we are able to reduce data entry errors and improve efficiency. The timing of this process implementation has been very important for our current situation. The portal has allowed us to transition to a work from home process with no disruption to our workflow.",
//     author: "Senior Manager, Corporate Business Services",
//     role: "",
//     company: "4000+ Bed Health System",
//   },
//   {
//     quote:
//       "In the 15 months of collaboration with the CognitiveHealth team we have successfully implemented automation in the areas of cash posting, reconciliation and correspondence work. We are pleased with the early results and continuing to expand our partnership with CognitiveHealth.",
//     author: "Vice President of Patient Financial Services",
//     role: "",
//     company: "3500+ Bed Academic Hospital",
//   },
//   {
//     quote:
//       "Reducing reconciliation complexity and improving accuracy, iCAN platform transformed our workflow by cutting onshore oversight nearly in half while raising productivity. Our team now works more collaboratively and efficiently, with higher job satisfaction across onshore and offshore roles. Partnering with CognitiveHealth helped us uncover process gaps we didn’t realize existed. The ongoing improvements to iCAN’s reporting and dashboards, combined with a collaborative approach, have driven measurable improvements across our operations",
//     author: "Director, RCM",
//     role: "",
//     company: "Nationally Servicing Behavioral Health System",
//   },
// ];

// const TestimonialsSection = () => {
//   return (
//     <SectionContainer>
//       <Wrapper>
//         <SectionTitle
//           pillVariant="orange"
//           pillText="See What Revenue Cycle Executives Are Saying"
//           title="Trusted By Healthcare Leaders"
//           maxWidth={700}
//         />
//         <Grid container spacing={3}>
//           {testimonials.map((testimonial, index) => (
//             <Grid size={{ xs: 12, md: 4 }} key={index}>
//               <TestimonialCard
//                 quote={testimonial.quote}
//                 author={testimonial.author}
//                 role={testimonial.role}
//                 company={testimonial.company}
//               />
//             </Grid>
//           ))}
//         </Grid>
//       </Wrapper>
//     </SectionContainer>
//   );
// };

// export default TestimonialsSection;


import { Box, Typography, Grid } from "@mui/material";
import FormatQuoteIcon from "@mui/icons-material/FormatQuote";
import { motion } from "framer-motion";

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
    <Box sx={{ py: 10, px: { xs: 2, md: 8 }, background: "#fff" }}>
      
      {/* Title */}
      <Typography
        variant="h4"
        align="center"
        fontWeight={700}
        mb={8}
      >
        Trusted By Healthcare Leaders
      </Typography>

      <Grid container spacing={6}>
        {testimonials.map((item, index) => (
          <Grid size={{xs:12, md:4}}  key={index}>
            
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: false }}
            >
              <Box
                sx={{
                  position: "relative",
                  pl: 4,
                  cursor: "pointer",
                  transition: "all 0.3s ease",
                  "&:hover .line": {
                    height: "100%",
                  },
                }}
              >
                {/* Left vertical line */}
                <Box
                  className="line"
                  sx={{
                    position: "absolute",
                    left: 0,
                    top: 0,
                    width: "3px",
                    height: "40px",
                    background: "#ff6b35",
                    transition: "0.3s ease",
                  }}
                />

                {/* Quote icon */}
                <FormatQuoteIcon
                  sx={{
                    fontSize: 28,
                    color: "#ff6b35",
                    mb: 1,
                  }}
                />

                {/* Text */}
                <Typography
                  variant="body1"
                  sx={{
                    color: "#444",
                    lineHeight: 1.8,
                    mb: 3,
                  }}
                >
                  {item.quote}
                </Typography>

                {/* Role */}
                <Typography
                  variant="subtitle2"
                  sx={{
                    fontWeight: 600,
                    color: "#ff6b35",
                  }}
                >
                  {item.author}
                </Typography>

                {/* Org */}
                <Typography variant="caption" sx={{ color: "#777" }}>
                  {item.company}
                </Typography>
              </Box>
            </motion.div>

          </Grid>
        ))}
      </Grid>
    </Box>
  );
}