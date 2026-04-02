import { Box, Typography } from "@mui/material";
// import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { useNavigate } from "react-router-dom";

type Props = {
  title: string;
  desc: string;
  path: string;
  highlight?: boolean;
  onNavigate: (path: string) => void;
  active?: boolean;
  icon?: React.ReactNode;
};

export const SolutionItem = ({
  title,
  desc,
  path,
  highlight,
  onNavigate,
  active,
  icon,
}: Props) => {
  const navigate = useNavigate();
  const isHighlighted = highlight || active;
  return (
    <Box
      onClick={() => {
        navigate(path);
        onNavigate(path);
      }}
      // sx={{
      //   display: "flex",
      //   gap: 2,
      //   cursor: "pointer",
      //   alignItems: "flex-start",
      // }}
      sx={{
        display: "flex",
        gap: 2,
        p: 2,
        borderRadius: 2,
        cursor: "pointer",
        alignItems: "flex-start",
        transition: "all 0.2s ease",

        "&:hover": {
          backgroundColor: "#ecfdf5",
          color: "var(--color-green)",
        },
      }}
    >
      {/* ICON */}
      <Box
        // sx={{
        //   width: 40,
        //   height: 40,
        //   borderRadius: 2,
        //   backgroundColor: isHighlighted
        //     ? "var(--color-primary)"
        //     : "var(--color-text-blue)",
        //   display: "flex",
        //   alignItems: "center",
        //   justifyContent: "center",
        //   flexShrink: 0,
        // }}
        sx={{
          width: 42,
          height: 42,
          borderRadius: "10px",
          // backgroundColor: "#f3f4f6",
          backgroundColor: isHighlighted
            ? "var(--color-primary)"
            : "var(--color-text-blue)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexShrink: 0,
          transition: "all 0.2s ease",

          // "&:hover": {
          //   backgroundColor: "var(--color-white)7ed",
          // },

          "&:hover": {
            // backgroundColor: "#ecfdf5",
            color: "var(--color-green)",
          },
        }}
      >
        {icon}
      </Box>

      {/* TEXT */}
      <Box>
        {/* <Typography
          fontWeight={600}
          color={isHighlighted ? "var(--color-primary)" : "#111"}
        >
          {title}
        </Typography>
        <Typography fontSize={14} color="#6b7280">
          {desc}
        </Typography> */}
        <Typography fontWeight={600} fontSize="15px" color="var(--color-gray-900)" >
          {title}
        </Typography>

        <Typography fontSize="13px" color="#6b7280" mt={0.5}>
          {desc}
        </Typography>
      </Box>
    </Box>
  );
};
