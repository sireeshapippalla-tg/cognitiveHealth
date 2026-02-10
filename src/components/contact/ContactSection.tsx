import {
  Wrapper,
  OuterCard,
  HeaderStrip,
  HeaderTitle,
  HeaderSubtitle,
  Content,
  Info,
  InfoBlock,
  InfoLabel,
  InfoValue,
  FormCard,
  StyledInput,
  SubmitButton,
} from "./ContactSection.styles";

const ContactSection = () => {
  return (
    <Wrapper>
      <OuterCard>
        {/* ORANGE HEADER */}
        <HeaderStrip>
          <HeaderTitle>Get in touch!</HeaderTitle>
          <HeaderSubtitle>
            Get in touch with us for inquiries, partnerships, or support:
          </HeaderSubtitle>
        </HeaderStrip>

        {/* MAIN CONTENT */}
        <Content>
          {/* LEFT SIDE INFO */}
          <Info>
            <InfoBlock>
              <InfoLabel>Email:</InfoLabel>
              <InfoValue>info@cognitivehealthit.com</InfoValue>
            </InfoBlock>

            <InfoBlock>
              <InfoLabel>Phone:</InfoLabel>
              <InfoValue>646-701-5030</InfoValue>
            </InfoBlock>

            <InfoBlock>
              <InfoLabel>Location:</InfoLabel>
              <InfoValue>
                1345 Avenue of the Americas, New York, NY, USA
              </InfoValue>
            </InfoBlock>
          </Info>

          {/* RIGHT SIDE FORM */}
          <FormCard>
            <StyledInput
              label="Full Name"
              placeholder="Enter Your First Name"
              fullWidth
            />

            <StyledInput
              label="Email"
              placeholder="Enter Your Email"
              fullWidth
            />

            <StyledInput
              label="Phone"
              placeholder="Enter Your Phone"
              fullWidth
            />

            <StyledInput
              label="How can we assist?"
              placeholder="Let us know how we can help"
              fullWidth
              multiline
              rows={4}
            />

            <SubmitButton variant="contained">
              Send Message
            </SubmitButton>
          </FormCard>
        </Content>
      </OuterCard>
    </Wrapper>
  );
};

export default ContactSection;
