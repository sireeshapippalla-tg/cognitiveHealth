import { Fade, useTheme, useMediaQuery } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { motion } from "framer-motion";
import {
  StyledDialog,
  ModalContainer,
  CloseButtonWrapper,
  StyledCloseButton,
  ContentBox,
  AvatarContainer,
  StyledAvatar,
  InfoContainer,
  NameText,
  RoleText,
  DescriptionText,
  TitleWrapper,
} from "./TeamMemberModal.style";

interface Props {
  open: boolean;
  onClose: () => void;
  member: {
    title: string;
    subtitle: string;
    image: string;
    description: string;
  };
}

const TeamMemberModal = ({ open, onClose, member }: Props) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  if (!member) return null;

  return (
    <StyledDialog
      open={open}
      onClose={onClose}
      fullScreen={isMobile}
      maxWidth="md"
      fullWidth
      slotProps={{
        backdrop: {
          style: {
            backgroundColor: "rgba(10, 15, 30, 0.4)",
            backdropFilter: "blur(12px)",
          },
        },
      }}
      TransitionComponent={Fade}
      transitionDuration={400}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ type: "spring", stiffness: 300, damping: 25 }}
        style={{ width: "100%", outline: "none" }}
      >
        <ModalContainer>
          {/* Close Button - Detached */}
          <CloseButtonWrapper>
            <motion.div
              whileHover={{ scale: 1.1, rotate: 90 }}
              whileTap={{ scale: 0.9 }}
            >
              <StyledCloseButton
                onClick={onClose}
                aria-label="Close"
              >
                <CloseIcon fontSize={isMobile ? "small" : "medium"} />
              </StyledCloseButton>
            </motion.div>
          </CloseButtonWrapper>

          <ContentBox>
            {/* IMAGE SECTION */}
            <AvatarContainer>
              <StyledAvatar
                src={member.image}
                alt={member.title}
                variant="rounded"
              />
            </AvatarContainer>

            {/* TEXT SECTION */}
            <InfoContainer>
              <TitleWrapper>
                <NameText variant={isMobile ? "h4" : "h3"}>
                  {member.title}
                </NameText>

                <RoleText>
                  {member.subtitle}
                </RoleText>
              </TitleWrapper>

              <DescriptionText>
                {member.description}
              </DescriptionText>
            </InfoContainer>
          </ContentBox>
        </ModalContainer>
      </motion.div>
    </StyledDialog>
  );
};

export default TeamMemberModal;
