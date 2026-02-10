import {
  Card,
  CardContent,
  Typography,
  IconButton,
  Box,
  Avatar,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useState } from "react";

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
  variant?: "team" | "capability"; // 👈 design switch
}

const ExpandableCard: React.FC<Props> = ({ item, variant = "team" }) => {
  const [open, setOpen] = useState(item.defaultOpen ?? false);

  const isCapability = variant === "capability";

  return (
    <Card
      sx={{
        borderRadius: 3,
        boxShadow: "0 0 0 1px #e5e7eb",
        p: 2,
        transition: "0.3s",
        border: open && isCapability ? "1px solid #f97316" : "1px solid #e5e7eb",
      }}
    >
      {/* Header */}
      <Box display="flex" alignItems="center" gap={2}>
        {/* Icon OR Avatar */}
        {isCapability ? (
          <Box
            sx={{
              width: 44,
              height: 44,
              borderRadius: 2,
              background: "#3b82f6",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "white",
            }}
          >
            {item.icon}
          </Box>
        ) : (
          <Avatar src={item.image} alt={item.title} sx={{ width: 56, height: 56 }} />
        )}

        <Box flex={1}>
          <Typography fontWeight={600}>{item.title}</Typography>

          {item.subtitle && !isCapability && (
            <Typography fontSize={14} color="#f97316" fontWeight={500}>
              {item.subtitle}
            </Typography>
          )}
        </Box>

        {item.description && (
          <IconButton onClick={() => setOpen(!open)}>
            <ExpandMoreIcon
              sx={{
                transform: open ? "rotate(180deg)" : "rotate(0deg)",
                transition: "0.3s",
              }}
            />
          </IconButton>
        )}
      </Box>

      {/* Expandable content */}
      {open && item.description && (
        <CardContent sx={{ px: 0, pt: 2 }}>
          <Typography fontSize={14} color="text.secondary" lineHeight={1.7}>
            {item.description}
          </Typography>
        </CardContent>
      )}
    </Card>
  );
};

export default ExpandableCard;
