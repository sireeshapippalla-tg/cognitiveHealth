import { useState } from "react";
import {
  HeroSection,
  HeroContent,
  HeroTitle,
  HeroSubtitle,
  FormCard,
  FormTitle,
  StyledInput,
  SubmitButton,
  InfoSection,
  InfoWrapper,
  InfoText,
  // InfoItem,
  InfoRow,
  InfoIconWrapper,
  InfoTextItem,
} from "./ContactSection.styles";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import LocationOnIcon from "@mui/icons-material/LocationOn";

const ContactSection = () => {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });
  const [errors, setErrors] = useState({
    firstName: "",
    lastName: "",
    email: "",
  });
  const handleChange = (field: string, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));

    // Clear error when user starts typing
    if (field === "firstName" || field === "lastName" || field === "email") {
      setErrors((prev) => ({ ...prev, [field]: "" }));
    }
  };
  const validate = () => {
    const tempErrors = { firstName: "", lastName: "", email: "" };
    let isValid = true;

    if (!form.firstName.trim()) {
      tempErrors.firstName = "First Name is required";
      isValid = false;
    }

    if (!form.lastName.trim()) {
      tempErrors.lastName = "Last Name is required";
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
    <>
      {/* HERO */}
      <HeroSection>
        <HeroContent>
          <HeroTitle>Get in Touch With Our Team</HeroTitle>

          <HeroSubtitle>
            Connect with our healthcare specialists to explore enterprise-grade
            operational and compliance-driven solutions.
          </HeroSubtitle>
        </HeroContent>

        <FormCard>
          <FormTitle>Contact Us</FormTitle>

          <StyledInput
            label={
              <>
                First Name{" "}
                <span style={{ color: "var(--color-error)" }}>*</span>
              </>
            }
            placeholder="Enter Your First Name"
            fullWidth
            value={form.firstName}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              handleChange("firstName", e.target.value)
            }
            error={!!errors.firstName}
            helperText={errors.firstName}
          />

          <StyledInput
            label={
              <>
                Last Name <span style={{ color: "var(--color-error)" }}>*</span>
              </>
            }
            placeholder="Enter Your Last Name"
            fullWidth
            value={form.lastName}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              handleChange("lastName", e.target.value)
            }
            error={!!errors.lastName}
            helperText={errors.lastName}
          />

          <StyledInput
            label={
              <>
                Email <span style={{ color: "var(--color-error)" }}>*</span>
              </>
            }
            fullWidth
            value={form.email}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              handleChange("email", e.target.value)
            }
            error={!!errors.email}
            helperText={errors.email}
          />

          <StyledInput
            label="Phone Number"
            fullWidth
            value={form.phone}
            onChange={(e) => handleChange("phone", e.target.value)}
          />

          <StyledInput
            label="Write your message"
            fullWidth
            multiline
            rows={4}
            value={form.message}
            onChange={(e) => handleChange("message", e.target.value)}
          />

          <SubmitButton variant="contained" fullWidth onClick={handleSubmit}>
            Send Message
          </SubmitButton>
        </FormCard>
      </HeroSection>

      {/* INFO SECTION */}
      <InfoSection>
        <InfoWrapper>
          <InfoText>
            Give us a call or fill out our contact form and one of our
            healthcare consultants will reach out shortly.
          </InfoText>

          <InfoRow>
            <InfoIconWrapper>
              <AccessTimeIcon fontSize="small" />
            </InfoIconWrapper>
            <InfoTextItem>Mon – Fri: 9:00am to 5:00pm EST</InfoTextItem>
          </InfoRow>

          <InfoRow>
            <InfoIconWrapper>
              <EmailIcon fontSize="small" />
            </InfoIconWrapper>
            <InfoTextItem
              onCopy={(e) => e.preventDefault()}
              onCut={(e) => e.preventDefault()}
              onContextMenu={(e) => e.preventDefault()}
            >
              info@cognitivehealthit.com
            </InfoTextItem>
          </InfoRow>

          <InfoRow>
            <InfoIconWrapper>
              <PhoneIcon fontSize="small" />
            </InfoIconWrapper>
            <InfoTextItem onMouseDown={(e) => e.preventDefault()}>
              646-701-5030
            </InfoTextItem>
          </InfoRow>

          <InfoRow>
            <InfoIconWrapper>
              <LocationOnIcon fontSize="small" />
            </InfoIconWrapper>
            <InfoTextItem>
              1345 Avenue of the Americas, New York, NY, USA
            </InfoTextItem>
          </InfoRow>
        </InfoWrapper>
      </InfoSection>
    </>
  );
};

export default ContactSection;
