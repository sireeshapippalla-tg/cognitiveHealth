import React from "react";
import { useParams, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import {
  BlogDetailWrapper,
  BlogContent,
  BlogHeader,
  BlogTitle,
  BlogDate,
  Breadcrumb,
  BreadcrumbLink,
  Author,
} from "./BlogDetailPage.style";
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
  const media = mediaData.find((m) => m.link === `/resources/media/${slug}`);

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
    url: `${baseUrl}/resources/media/${slug}`,
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
            <BreadcrumbLink to={`/resources/${fromTab === "blog" ? "blogs" : fromTab}`}>
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


        </BlogContent>
        <CTASection />
      </motion.div>
    </BlogDetailWrapper>
  );
};

export default MediaDetailPage;
