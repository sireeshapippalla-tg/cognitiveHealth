import React, { useState, useEffect } from "react";
import { useParams, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { IconButton } from "@mui/material";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import {
  BlogDetailWrapper,
  BlogContent,
  BlogHeader,
  BlogTitle,
  BlogDate,
  Breadcrumb,
  BreadcrumbLink,
  Author,
} from "./BlogDetailPage.styles";
import SEO from "../../components/SEO";
import { mediaData } from "../../data/mediaData";
import type { Media } from "../../data/mediaData";
import CTASection from "../../components/home/CTA/CTASection";
import { ROUTES } from "../../routes/RoutePaths";
import {
  MediaContent1,
  MediaContent2,
  MediaContent3,
  MediaContent4,
  MediaContent5,
  MediaContent6,
  MediaContent7,
  MediaContent8,
  MediaContent9,
  MediaContent10,
  MediaContentDefault,
} from "./MediaContents";

const MediaDetailPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const location = useLocation();
  const fromTab = location.state?.fromTab || "media";

  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Find the media item by slug
  const media = mediaData.find((m) => m.link === `/media/${slug}`);

  if (!media) {
    return (
      <BlogDetailWrapper style={{ padding: "120px 0", textAlign: "center" }}>
        <h2>Media Article Not Found</h2>
        <BreadcrumbLink to={ROUTES.RESOURCES}>
          Return to Resources
        </BreadcrumbLink>
      </BlogDetailWrapper>
    );
  }

  const baseUrl = window.location.origin;
  const mediaSchema = {
    "@context": "https://schema.org",
    "@type": "NewsArticle",
    headline: media.title,
    description: media.description,
    image: media.image,
    datePublished: media.date,
    url: `${baseUrl}/media/${slug}`,
    author: {
      "@type": "Organization",
      name: "CognitiveHealth",
    },
  };

  const renderMediaContent = (media: Media) => {
    switch (media.id) {
      case "1":
        return <MediaContent1 media={media} />;
      case "2":
        return <MediaContent2 media={media} />;
      case "3":
        return <MediaContent3 media={media} />;
      case "4":
        return <MediaContent4 media={media} />;
      case "5":
        return <MediaContent5 media={media} />;
      case "6":
        return <MediaContent6 media={media} />;
      case "7":
        return <MediaContent7 media={media} />;
      case "8":
        return <MediaContent8 media={media} />;
      case "9":
        return <MediaContent9 media={media} />;
      case "10":
        return <MediaContent10 media={media} />;
      default:
        return <MediaContentDefault media={media} />;
    }
  };

  return (
    <BlogDetailWrapper>
      <SEO
        title={`${media.title} | CognitiveHealth Media`}
        description={media.description}
        keywords="AI, Healthcare, RCM, Press Release, News, CognitiveHealth"
        schema={mediaSchema}
      />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <BlogContent>
          <Breadcrumb>
            <BreadcrumbLink to={ROUTES.HOME}>Home</BreadcrumbLink>
            <span> // </span>
            <BreadcrumbLink to={`${ROUTES.RESOURCES}#${fromTab}`}>
              Resources
            </BreadcrumbLink>
            <span> // </span>
            <span>{media.title}</span>
          </Breadcrumb>

          <BlogHeader>
            <BlogDate>{media.date}</BlogDate>
            <BlogTitle>{media.title}</BlogTitle>
            <Author>Published in Healthcare Media | {media.date}</Author>
            {/* {media.id !== "4" && (
              <BlogDescription>
                {media.description}
              </BlogDescription>
            )} */}
          </BlogHeader>

          {/* {media.image && media.image.includes("images") && media.id !== "1" && media.id !== "2" && ( */}
          {/* <BlogImage src={media.image} alt={media.title} /> */}
          {/* )} */}

          {renderMediaContent(media)}

          {/* {media.id !== "1" && media.id !== "2" && media.id !== "3" && (
            <SectionContent sx={{ mt: 6 }}>
              To learn more about how CognitiveHealth Technologies can transform your organization's revenue cycle workflows, explore our comprehensive AI platform capabilities or request a personalized demonstration.
            </SectionContent>
          )} */}
        </BlogContent>
        <CTASection />
      </motion.div>

      <AnimatePresence>
        {showScrollTop && (
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.5 }}
            transition={{ duration: 0.3 }}
            style={{
              position: "fixed",
              bottom: "40px",
              right: "40px",
              zIndex: 999,
            }}
          >
            <IconButton
              onClick={scrollToTop}
              sx={{
                bgcolor: "#0066cc",
                color: "#ffffff",
                width: "50px",
                height: "50px",
                boxShadow: "0 4px 20px rgba(0, 102, 204, 0.4)",
                "&:hover": {
                  bgcolor: "#0052a3",
                },
              }}
              aria-label="scroll back to top"
            >
              <ArrowUpwardIcon />
            </IconButton>
          </motion.div>
        )}
      </AnimatePresence>
    </BlogDetailWrapper>
  );
};

export default MediaDetailPage;
