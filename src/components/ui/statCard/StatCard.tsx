import { useInView } from "framer-motion";
import { useRef } from "react";
import useCountUp from "../useCountUp";
import {
  Card,
  DescriptionText,
  GradientValue,
  MixedText,
  MixedWrapper,
  MotionWrapper,
  PureTextValue,
  TitleText,
  ValueWrapper,
} from "./StatCard.styles";

interface StatCardProps {
  value: string;
  title: string;
  description: string;
  index?: number;
}

const StatCard = ({ value, title, description, index = 0 }: StatCardProps) => {
  const ref = useRef(null);

  const isInView = useInView(ref, {
    once: true,
    margin: "-100px",
  });

  //  Extract numeric value
  const numericValue = parseFloat(value.replace(/[^\d.]/g, ""));
  const hasPercent = value.includes("%");
  const hasText = /[a-zA-Z]/.test(value);
  const isRange = value.includes("-"); // ✅ FIX for 2-4%
  const isPureText = hasText && isNaN(numericValue);

  //  Animate only valid numbers
  const count = useCountUp(
    isInView && !isNaN(numericValue) ? numericValue : 0,
    2000,
  );

  //  Split number + text
  const numberPart = value.replace(/[^\d.]/g, "");
  const textPart = value.replace(/[\d.]/g, "").trim();

  return (
    <MotionWrapper
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.15 }}
    >
      <Card>
        

        <ValueWrapper>
          {isRange ? (
            //  RANGE VALUE

            <GradientValue>{value}</GradientValue>
          ) : isPureText ? (
            //  PURE TEXT
            <PureTextValue>{value}</PureTextValue>
          ) : hasText ? (
            //  MIXED
            <MixedWrapper>
              <GradientValue>{numberPart}</GradientValue>
              <MixedText>{textPart}</MixedText>
            </MixedWrapper>
          ) : (
            <GradientValue>
              {hasPercent
                ? `${count.toFixed(0)}${value.includes("+") ? "%+" : "%"}`
                : `${count.toFixed(0)}`}
            </GradientValue>
          )}
        </ValueWrapper>
        {/* </Box> */}

        {/* TITLE */}
        {title && <TitleText>{title}</TitleText>}

        {/* DESCRIPTION */}

        <DescriptionText>{description}</DescriptionText>
      </Card>
    </MotionWrapper>
  );
};

export default StatCard;
