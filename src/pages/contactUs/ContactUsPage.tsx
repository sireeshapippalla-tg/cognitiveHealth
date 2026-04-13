import ContactSection from "../../components/contact/ContactSection";
import SEO from "../../components/SEO";

const ContactUsPage: React.FC = () => {
  return (
    <>
      <SEO 
        title="Contact Us | Get in Touch with Our Experts" 
        description="Have questions about our AI-powered RCM solutions? Contact the CognitiveHealth team today for support, inquiries, or to schedule a demo."
        keywords="Contact CognitiveHealth, Healthcare IT Support, RCM Consultation"
      />
      <ContactSection />
    </>
  );
};

export default ContactUsPage;
