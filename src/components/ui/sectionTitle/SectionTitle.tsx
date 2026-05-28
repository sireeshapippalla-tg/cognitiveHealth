import DOMPurify from "dompurify";
import { Wrapper, Pill, Title, Subtitle } from "./SectionTitle.style";

interface SectionTitleProps {
  pillText?: string;
  pillIcon?: string;
  title: string;
  subtitle?: React.ReactNode;
  align?: "center" | "left";
  maxWidth?: number;
  textColor?: string;
  marginBottom?: number;
  pillVariant?: "primary" | "orange";
}

export const SectionTitle = ({
  pillText,
  title,
  subtitle,
  align = "center",
  maxWidth = 700,
  pillIcon,
  textColor,
  marginBottom,
  pillVariant,
}: SectionTitleProps) => (
  <Wrapper align={align} marginBottom={marginBottom}>
    {pillText && (
      <Pill variant={pillVariant}>
        {pillIcon && (
          <img
            width={48}
            height={48}
            src={pillIcon}
            alt=""
            style={{ marginRight: 8, marginBottom: -4 }}
            loading="lazy"
          />
        )}
        {pillText}
      </Pill>
    )}

    <Title
      dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(title) }}
      textcolor={textColor}
      // sx={{ marginBottom: subtitle ? "1px" : "20px" }}
    />

    {subtitle && (
      <Subtitle maxWidth={maxWidth} textColor={textColor}>
        {subtitle}
      </Subtitle>
    )}
  </Wrapper>
);
