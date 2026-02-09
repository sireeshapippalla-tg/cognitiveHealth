import { Track, Fill } from "./ProgressBar.style";

interface ProgressBarProps {
  value: number; // 0 to 100
  height?: number;
  color?: string;
  trackColor?: string;
}

export const ProgressBar = ({
  value,
  height = 8,
  color = "#2563eb",
  trackColor = "#e5e7eb",
}: ProgressBarProps) => {
  return (
    <Track height={height} trackColor={trackColor}>
      <Fill value={value} color={color} />
    </Track>
  );
};
