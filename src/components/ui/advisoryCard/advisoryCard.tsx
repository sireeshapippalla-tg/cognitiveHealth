import {
  StyledCard,
  StyledAvatar,
  NameText,
  RoleText,
  DescriptionText,
} from "./advisory.style";

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
    <StyledCard>
      <StyledAvatar />

      <NameText>{advisor.name}</NameText>

      <RoleText>{advisor.role}</RoleText>

      <DescriptionText>{advisor.description}</DescriptionText>
    </StyledCard>
  );
};

export default AdvisorCard;
