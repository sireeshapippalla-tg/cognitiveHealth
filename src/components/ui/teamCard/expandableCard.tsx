import { useState } from "react";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { CardContent, Box } from "@mui/material";

import {
  StyledCard,
  HeaderRow,
  CapabilityIcon,
  MemberAvatar,
  TitleText,
  SubtitleText,
  ExpandButton,
  DescriptionText,
} from "./expandableCard.style";

export interface ExpandableItem {
  id: number;
  title: string;
  subtitle?: string;
  description?: string;
  image?: string;
  icon?: React.ReactNode;
  defaultOpen?: boolean;
}

interface Props {
  item: ExpandableItem;
  variant?: "team" | "capability";
}

const ExpandableCard: React.FC<Props> = ({ item, variant = "team" }) => {
  const [open, setOpen] = useState(item.defaultOpen ?? false);

  const isCapability = variant === "capability";

  return (
    <StyledCard open={open} iscapability={isCapability}>
      {/* Header */}
      <HeaderRow>
        {isCapability ? (
          <CapabilityIcon>{item.icon}</CapabilityIcon>
        ) : (
          <MemberAvatar src={item.image} alt={item.title} />
        )}

        <Box flex={1}>
          <TitleText>{item.title}</TitleText>

          {item.subtitle && !isCapability && (
            <SubtitleText>{item.subtitle}</SubtitleText>
          )}
        </Box>

        {item.description && (
          <ExpandButton onClick={() => setOpen(!open)}>
            <ExpandMoreIcon
              sx={{
                transform: open ? "rotate(180deg)" : "rotate(0deg)",
                transition: "0.3s",
              }}
            />
          </ExpandButton>
        )}
      </HeaderRow>

      {/* Expandable description */}
      {open && item.description && (
        <CardContent sx={{ px: 0, pt: 2 }}>
          <DescriptionText>{item.description}</DescriptionText>
        </CardContent>
      )}
    </StyledCard>
  );
};

export default ExpandableCard;
