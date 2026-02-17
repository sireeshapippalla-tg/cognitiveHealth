import { useState } from "react";
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
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    email: "",
  });
  const handleChange = (field: string, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));

    // Clear error when user starts typing
    if (field === "name" || field === "email") {
      setErrors((prev) => ({ ...prev, [field]: "" }));
    }
  };
  const validate = () => {
    const tempErrors = { name: "", email: "" };
    let isValid = true;

    if (!form.name.trim()) {
      tempErrors.name = "Full Name is required";
      isValid = false;
    }

    if (!form.email.trim()) {
      tempErrors.email = "Email is required";
      isValid = false;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      tempErrors.email = "Enter a valid email address";
      isValid = false;
    }

    setErrors(tempErrors);
    return isValid;
  };
  const handleSubmit = () => {
    if (validate()) {
      console.log("Form submitted:", form);
    }
  };

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
              label={
                <>
                  Full Name <span style={{ color: "red" }}>*</span>
                </>
              }
              placeholder="Enter Your First Name"
              fullWidth
              value={form.name}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                handleChange("name", e.target.value)
              }
              error={!!errors.name}
              helperText={errors.name}
            />

            <StyledInput
              label={
                <>
                  Email <span style={{ color: "red" }}>*</span>
                </>
              }
              placeholder="Enter Your Email"
              fullWidth
              value={form.email}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                handleChange("email", e.target.value)
              }
              error={!!errors.email}
              helperText={errors.email}
            />

            <StyledInput
              label="Phone"
              value={form.phone}
              placeholder="Enter Your Phone"
              fullWidth
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                handleChange("phone", e.target.value)
              }
            />

            <StyledInput
              label="How can we assist?"
              placeholder="Let us know how we can help"
              fullWidth
              multiline
              value={form.message}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                handleChange("message", e.target.value)
              }
              rows={4}
            />

            <SubmitButton variant="contained" onClick={handleSubmit}>
              Send Message
            </SubmitButton>
          </FormCard>
        </Content>
      </OuterCard>
    </Wrapper>
  );
};

export default ContactSection;
