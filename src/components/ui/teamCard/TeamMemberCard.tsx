import { useState } from "react";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import TeamMemberModal from "./TeamMemberModal";
import {
  CardContainer,
  ImageContainer,
  StyledAvatar,
  ViewButton,
  NameText,
  RoleText,
} from "./TeamMemberCard.style";

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
      <CardContainer>
        {/* IMAGE WRAPPER */}
        <ImageContainer>
          <StyledAvatar
            src={member.image}
            alt={member.title}
          />

          {/* Arrow Button */}
          <ViewButton
            onClick={() => setOpen(true)}
            aria-label={`View ${member.title}'s profile`}
          >
            <ArrowForwardIcon fontSize="small" />
          </ViewButton>
        </ImageContainer>

        {/* TEXT */}
        <NameText>
          {member.title}
        </NameText>

        <RoleText>
          {member.subtitle}
        </RoleText>
      </CardContainer>

      <TeamMemberModal
        open={open}
        onClose={() => setOpen(false)}
        member={member}
      />
    </>
  );
};

export default TeamMemberCard;
