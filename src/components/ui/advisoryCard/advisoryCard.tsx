import { Card, Typography,Avatar } from "@mui/material";

export interface Advisor {
  id: number;
  name: string;
  role: string;
  description: string;
}

interface Props {
  advisor: Advisor;
}

const AdvisorCard: React.FC<Props> = ({ advisor }) => {
  return (
    <Card
      sx={{
        borderRadius: 3,
        p: 3,
        textAlign: "center",
        boxShadow: "0 0 0 1px #e5e7eb",
        height: "100%",
        backgroundColor: "#f9fafb",
      }}
    >
      <Avatar
        sx={{
          width: 70,
          height: 70,
          mx: "auto",
          mb: 2,
          bgcolor: "#f97316",
        }}
      />

      <Typography fontWeight={600}>{advisor.name}</Typography>

      <Typography
        fontSize={13}
        fontWeight={600}
        color="#f97316"
        mt={0.5}
        mb={1.5}
      >
        {advisor.role}
      </Typography>

      <Typography fontSize={14} color="text.secondary" lineHeight={1.7}>
        {advisor.description}
      </Typography>
    </Card>
  );
};

export default AdvisorCard;
