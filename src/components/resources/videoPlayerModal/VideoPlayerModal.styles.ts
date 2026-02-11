import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";

export const VideoWrapper = styled(Box)({
  position: "relative",
  width: "100%",
  paddingTop: "56.25%", // 16:9
});

export const Iframe = styled("iframe")({
  position: "absolute",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  border: "none",
});
