import {
  Wrapper,
  Pill,
  Title,
  Subtitle,
} from "./SectionTitle.style";

interface SectionTitleProps {
  pillText?: string;
  pillIcon?: string; 
  title: string;
  subtitle?: React.ReactNode
  align?: "center" | "left";
  maxWidth?: number;
  textColor?:string;
  marginBottom?:number;
}

export const SectionTitle = ({
  pillText,
  title,
  subtitle,
  align = "center",
  maxWidth = 700,
   pillIcon,
  textColor,
  marginBottom
}: SectionTitleProps) => (
  <Wrapper align={align} marginBottom={marginBottom}>
   {pillText && (
      <Pill>
        {pillIcon && <img src={pillIcon} alt="" style={{ marginRight: 8, marginBottom: -4 }} />}
        {pillText}
      </Pill>
    )}

    <Title
      variant="h2"
      dangerouslySetInnerHTML={{ __html: title }}
      textcolor={textColor}
      sx={{ marginBottom: subtitle ? "16px" : "20px" }} 
    />

    {subtitle && (
      <Subtitle variant="body1" maxWidth={maxWidth} textColor={textColor} >
        {subtitle}
      </Subtitle>
    )}
  </Wrapper>
);
