import { Box, Typography } from "@mui/material";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { useNavigate } from "react-router-dom";

type Props = {
  title: string;
  desc: string;
  path: string;
  highlight?: boolean;
  onNavigate: (path: string) => void;
};

export const SolutionItem = ({
  title,
  desc,
  path,
  highlight,
  onNavigate,
}: Props) => {
  const navigate = useNavigate();

  return (
    <Box
      onClick={() => {
        navigate(path);
        onNavigate(path);
      }}
      sx={{
        display: "flex",
        gap: 2,
        cursor: "pointer",
        alignItems: "flex-start",
      }}
    >
      {/* ICON */}
      <Box
        sx={{
          width: 40,
          height: 40,
          borderRadius: 2,
          backgroundColor: highlight
            ? "var(--color-primary)"
            : "#3b5bdb",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "#fff",
          flexShrink: 0,
        }}
      >
        <ArrowForwardIosIcon fontSize="small" />
      </Box>

      {/* TEXT */}
      <Box>
        <Typography
          fontWeight={600}
          color={highlight ? "var(--color-primary)" : "#111"}
        >
          {title}
        </Typography>
        <Typography fontSize={14} color="#6b7280">
          {desc}
        </Typography>
      </Box>
    </Box>
  );
};
