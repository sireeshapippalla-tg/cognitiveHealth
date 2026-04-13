import ContactSection from "../../components/contact/ContactSection";
import SEO from "../../components/SEO";

const ContactUsPage: React.FC = () => {
  const contactSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "CognitiveHealth",
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "Customer Support",
      "email": "info@cognitivehealthit.com",
      "url": "https://cognitivehealthit.netlify.app/contact-us"
    }
  };

  return (
    <>
      <SEO 
        title="Contact Us | Get in Touch with Our Experts" 
        description="Have questions about our AI-powered RCM solutions? Contact the CognitiveHealth team today for support, inquiries, or to schedule a demo."
        keywords="Contact CognitiveHealth, Healthcare IT Support, RCM Consultation"
        schema={contactSchema}
      />
      <ContactSection />
    </>
  );
};

export default ContactUsPage;
