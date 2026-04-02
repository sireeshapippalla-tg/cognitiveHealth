import { useState } from "react";
import { Box, Typography, Avatar, IconButton } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import TeamMemberModal from "./TeamMemberModal";

interface Props {
  member: {
    title: string;
    subtitle: string;
    image: string;
    description: string;
  };
}

const TeamMemberCard = ({ member }: Props) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Box textAlign="center">
        {/* IMAGE WRAPPER */}
        <Box
          sx={{
            position: "relative",
            width: 180,
            height: 180,
            mx: "auto",
            mb: 2,
          }}
        >
          <Avatar
            src={member.image}
            alt={member.title}
            sx={{
              width: 180,
              height: 180,
              transition: "0.4s",
              "&:hover": {
                transform: "scale(1.05)",
              },
            }}
          />

          {/* Arrow Button */}
          <IconButton
            onClick={() => setOpen(true)}
            sx={{
              position: "absolute",
              bottom: 8,
              right: 8,
              width: 40,
              height: 40,
              background: "var(--color-white)",
              boxShadow: "0 6px 20px rgba(0,0,0,0.15)",
              "&:hover": {
                background: "var(--color-text-blue)",
                color: "var(--color-white)",
              },
            }}
          >
            <ArrowForwardIcon fontSize="small" />
          </IconButton>
        </Box>

        {/* TEXT */}
        <Typography fontWeight={600} fontSize={16}>
          {member.title}
        </Typography>

        <Typography
          sx={{
            fontSize: 13,
            color: "#6b7280",
          }}
        >
          {member.subtitle}
        </Typography>
      </Box>

      <TeamMemberModal
        open={open}
        onClose={() => setOpen(false)}
        member={member}
      />
    </>
  );
};

export default TeamMemberCard;
