import { Card, CardContent, Typography, Avatar, IconButton, Box } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useState } from "react";


export interface TeamMember {
  id: number;
  name: string;
  role: string;
  image: string;
  description?: string;
}

interface Props {
  member: TeamMember;
}

const TeamCard: React.FC<Props> = ({ member }) => {
  const [open, setOpen] = useState(false);

  return (
    <Card
      sx={{
        borderRadius: 3,
        boxShadow: "0 0 0 1px #e5e7eb",
        p: 2,
        height: "100%",
      }}
    >
      {/* Header */}
      <Box display="flex" alignItems="center" gap={2}>
        <Avatar
          src={member.image}
          alt={member.name}
          sx={{ width: 56, height: 56 }}
        />

        <Box flex={1}>
          <Typography fontWeight={600}>{member.name}</Typography>
          <Typography fontSize={14} color="#f97316" fontWeight={500}>
            {member.role}
          </Typography>
        </Box>

        {member.description && (
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

      {/* Expandable description */}
      {open && member.description && (
        <CardContent sx={{ px: 0, pt: 2 }}>
          <Typography fontSize={14} color="text.secondary" lineHeight={1.7}>
            {member.description}
          </Typography>
        </CardContent>
      )}
    </Card>
  );
};

export default TeamCard;
