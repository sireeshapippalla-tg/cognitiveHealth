import {
  Wrapper,
  Pill,
  Title,
  Subtitle,
} from "./SectionTitle.style";

interface SectionTitleProps {
  pillText?: string;
  title: string;
  subtitle?: string;
  align?: "center" | "left";
  maxWidth?: number;
  textColor?:string;
}

export const SectionTitle = ({
  pillText,
  title,
  subtitle,
  align = "center",
  maxWidth = 700,
  textColor
}: SectionTitleProps) => (
  <Wrapper align={align}>
    {pillText && <Pill>{pillText}</Pill>}

    <Title
      variant="h2"
      dangerouslySetInnerHTML={{ __html: title }}
      textcolor={textColor}
      sx={{ marginBottom: subtitle ? "16px" : "20px" }} // optional dynamic spacing
    />

    {subtitle && (
      <Subtitle variant="body1" maxWidth={maxWidth} textColor={textColor} >
        {subtitle}
      </Subtitle>
    )}
  </Wrapper>
);
