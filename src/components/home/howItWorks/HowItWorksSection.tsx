import AssignmentIcon from "@mui/icons-material/Assignment";
import LightbulbOutlinedIcon from "@mui/icons-material/LightbulbOutlined";
import MapOutlinedIcon from "@mui/icons-material/MapOutlined";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { useNavigate } from "react-router-dom";
import AppButton from "../../ui/appButton/AppButton";
import { SectionTitle } from "../../ui/sectionTitle/SectionTitle";
import { ProcessStep } from "../../ui/processStep/ProcessStep";
import {
  StepsCard,
  StepsRow,
  ArrowBox,
  ButtonsRow,
  Wrapper,
  SectionContainer,
} from "./HowItWorksSection.style";

import LightbulbIcon from "@mui/icons-material/Lightbulb";
import MapIcon from "@mui/icons-material/Map";
import { motion } from "framer-motion";
import { Box, Button, Grid, Typography } from "@mui/material";

const steps = [
  {
    title: "Take The Assessment",
    description: "Link to a questionnaire",
    icon: <AssignmentIcon fontSize="small" />,
  },
  {
    title: "Get Your CognitiveHealth Insights",
    description: "Receive personalized analysis",
    icon: <LightbulbOutlinedIcon fontSize="small" />,
  },
  {
    title: "Follow Your Personalized Plan",
    description: "Implement tailored solutions",
    icon: <MapOutlinedIcon fontSize="small" />,
  },
];

const HowItWorksSection = () => {
  const navigate = useNavigate();
  return (
    // <SectionContainer sx={{ backgroundColor: "#f9fafb" }}>
    //   <Wrapper>
    //     <SectionTitle title="How It Works" />

    //     <StepsCard>
    //       <StepsRow id="howItWorks">
    //         {steps.map((step, index) => (
    //           <>
    //             <ProcessStep
    //               key={step.title}
    //               icon={step.icon}
    //               title={step.title}
    //               description={step.description}
    //             />

    //             {index !== steps.length - 1 && (
    //               <ArrowBox>
    //                 <ArrowForwardIcon />
    //               </ArrowBox>
    //             )}
    //           </>
    //         ))}
    //       </StepsRow>
    //     </StepsCard>

    //     <ButtonsRow>
    //       <AppButton
    //         variantType="primary"
    //         endIcon={<ArrowForwardIosIcon sx={{ fontSize: 14 }} />}
    //         onClick={() => navigate("/rcm-readines")}
    //       >
    //         Take Assessment
    //       </AppButton>
    //     </ButtonsRow>
    //   </Wrapper>
    // </SectionContainer>

    <Box sx={{ py: 12, px: { xs: 2, md: 8 }, background: "#f9fafb" }}>
      {/* Title */}
      <Typography 
        variant="h4" 
        align="center" 
        fontWeight={700} 
        mb={10}
       
        sx={{
          fontSize: { xs: "1.5rem", sm: "2rem", md: "2.5rem" },
          lineHeight: 1.3,
        }}
      >
        How It Works
      </Typography>

      {/* Timeline */}
      <Box sx={{ position: "relative", maxWidth: 900, mx: "auto" }}>
        {/* Center Line */}
        <Box
          sx={{
            position: "absolute",
            left: "50%",
            top: 0,
            transform: "translateX(-50%)",
            width: "3px",
            height: "100%",
            background: "#e0e0e0",
          }}
        />

        {steps.map((step, index) => {
          const isLeft = index % 2 === 0;

          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: isLeft ? -80 : 80 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: false }}
            >
              <Box
                sx={{
                  display: "flex",
                  justifyContent: isLeft ? "flex-start" : "flex-end",
                  mb: 8,
                }}
              >
                <Box
                  sx={{
                    width: { xs: "100%", md: "45%" },
                    textAlign: isLeft ? "right" : "left",
                    position: "relative",
                  }}
                >
                  {/* Icon */}
                  <Box
                    sx={{
                      position: "absolute",
                      top: 0,
                      [isLeft ? "right" : "left"]: "-70px",
                      width: 70,
                      height: 70,
                      borderRadius: "50%",
                      background: "#F47A20",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "#fff",
                      fontSize: 30,
                      boxShadow: "0 10px 25px rgba(255,107,53,0.3)",
                      transition: "0.3s",
                      "&:hover": {
                        transform: "scale(1.1)",
                      },
                    }}
                  >
                    {step.icon}
                  </Box>

                  {/* Title */}
                  <Typography fontWeight={700} mb={1}>
                    {step.title}
                  </Typography>

                  {/* Description */}
                  <Typography color="text.secondary">
                    {step.description}
                  </Typography>
                </Box>
              </Box>
            </motion.div>
          );
        })}
      </Box>

      {/* CTA */}
      <Box textAlign="center" mt={6}>
        <motion.div whileHover={{ scale: 1.05 }}>
          <Button
            sx={{
              px: 5,
              py: 1.6,
              borderRadius: "40px",
              fontWeight: "bold",
              textTransform: "none",
              position: "relative",
              overflow: "hidden",
              background: "#F47A20",
              // background:
              //   "linear-gradient(90deg, #F47A20, #6BBF59, #4A90E2)",
              color: "white",
              boxShadow: "0 10px 25px rgba(244,122,32,0.3)",

              "&::after": {
                content: '""',
                position: "absolute",
                top: 0,
                left: "-80%",
                width: "60%",
                height: "100%",
                background:
                  "linear-gradient(120deg, transparent, rgba(255,255,255,0.4), transparent)",
                transform: "skewX(-20deg)",
              },

              "&:hover::after": {
                left: "130%",
                transition: "0.7s",
              },
            }}
            onClick={() => navigate("/rcm-readines")}
          >
            Take Assessment →
          </Button>
        </motion.div>
      </Box>
    </Box>
  );
};

export default HowItWorksSection;
