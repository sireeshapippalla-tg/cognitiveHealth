import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";

interface TrackProps {
  height: number;
  trackColor: string;
}

interface FillProps {
  value: number;
  color: string;
}

export const Track = styled(Box)<TrackProps>(
  ({ height, trackColor }) => ({
    height,
    width: "100%",
    backgroundColor: trackColor,
    borderRadius: height / 2,
    overflow: "hidden",
  })
);

export const Fill = styled(Box)<FillProps>(({ value, color }) => ({
  height: "100%",
  width: `${Math.min(100, Math.max(0, value))}%`,
  backgroundColor: color,
  transition: "width 0.5s ease-in-out",
}));
