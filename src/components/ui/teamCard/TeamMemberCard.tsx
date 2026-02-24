import { useState } from "react";
import { Card, Box, Avatar, Typography } from "@mui/material";
import TeamMemberModal from "./TeamMemberModal";

interface Props {
  member: {
    title: string;
    subtitle?: string;
    image?: string;
    description?: string;
  };
}

const TeamMemberCard: React.FC<Props> = ({ member }) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Card
        onClick={() => setOpen(true)}
        sx={{
          p: 3,
          borderRadius: 3,
          cursor: "pointer",
          transition: "0.3s",
          "&:hover": {
            transform: "translateY(-4px)",
            boxShadow: "0 8px 24px rgba(0,0,0,0.08)",
          },
        }}
      >
        {/* <Box display="flex" alignItems="center" gap={2}> */}
          <Avatar
            src={member.image}
            alt={member.title}
            sx={{ width: 64, height: 64 }}
          />
          <Box>
            <Typography fontWeight={600}>
              {member.title}
            </Typography>
            <Typography fontSize={14} color="primary">
              {member.subtitle}
            </Typography>
          </Box>
        {/* </Box> */}
      </Card>

      <TeamMemberModal
        open={open}
        onClose={() => setOpen(false)}
        name={member.title}
        designation={member.subtitle}
        image={member.image}
        description={member.description}
      />
    </>
  );
};

export default TeamMemberCard;