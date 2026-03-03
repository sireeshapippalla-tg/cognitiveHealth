import { Box } from "@mui/material";

interface BulletListProps {
  items: string[];
}

const BulletList: React.FC<BulletListProps> = ({ items }) => (
  <Box
    component="ul"
    sx={{
      m: 0,
      pl: 3,
      listStyleType: "disc",
      color: "text.secondary",
      fontSize: 16,
    }}
  >
    {items.map((text, index) => (
      <Box
        component="li"
        key={index}
        sx={{
          mb: 1,
          lineHeight: 1.8,
        }}
      >
        {text}
      </Box>
    ))}
  </Box>
);

export default BulletList;