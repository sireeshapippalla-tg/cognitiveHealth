import { Box, Typography } from "@mui/material";
import {
  CardContainer,
  LeftContent,
  IconWrapper,
} from "./PopoverCard.styles";

type PopoverCardProps = {
  icon: React.ReactNode;
  label?: string;
  title: string;
  description?: string;
  onClick: () => void;
};

const PopoverCard = ({
  icon,
  label,
  title,
  description,
  onClick,
}: PopoverCardProps) => {
  return (
    <CardContainer onClick={onClick}>
      <LeftContent>
        <IconWrapper>{icon}</IconWrapper>

        <Box>
          {label && (
            <Typography
              fontSize="11px"
              fontWeight={600}
              color="#6b7280"
              textTransform="uppercase"
            >
              {label}
            </Typography>
          )}

          <Typography fontSize="14px" fontWeight={600} color="var(--color-gray-900)">
            {title}
          </Typography>

          {description && (
            <Typography fontSize="12px" color="var(--color-gray-500)">
              {description}
            </Typography>
          )}
        </Box>
      </LeftContent>
    </CardContainer>
  );
};

export default PopoverCard;