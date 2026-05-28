import React, { useState, useEffect } from "react";
import { useParams, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { IconButton } from "@mui/material";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import {
  BlogDetailWrapper,
  BlogContent,
  Breadcrumb,
  BreadcrumbLink,
} from "./BlogDetailPage.styles";
import SEO from "../../components/SEO";
import { blogData } from "../../data/blogData";
import CTASection from "../../components/home/CTA/CTASection";
import { ROUTES } from "../../routes/RoutePaths";
import {
  BlogContent1,
  BlogContent2,
  BlogContent3,
  BlogContent4,
  BlogContentDefault,
} from "./BlogContents";

const BlogDetailPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const location = useLocation();
  const fromTab = location.state?.fromTab || "blog";

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

  // Find the blog post by slug
  const blog = blogData.find((b) => b.link === `/resource/${slug}`);

  if (!blog) {
    return <div>Blog not found</div>;
  }

  const baseUrl = window.location.origin;
  const blogSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: blog.title,
    description: blog.description,
    image: blog.image,
    datePublished: blog.date,
    url: `${baseUrl}/resource/${slug}`,
    author: {
      "@type": "Organization",
      name: "CognitiveHealth",
    },
  };

  // Render content based on blog ID
  const renderBlogContent = () => {
    switch (blog.id) {
      case "1":
        return <BlogContent1 blog={blog} />;
      case "2":
        return <BlogContent2 blog={blog} />;
      case "3":
        return <BlogContent3 blog={blog} />;
      case "4":
        return <BlogContent4 blog={blog} />;
      default:
        return <BlogContentDefault blog={blog} />;
    }
  };

  return (
    <BlogDetailWrapper>
      <SEO
        title={`${blog.title} | CognitiveHealth`}
        description={blog.description}
        keywords="AI, Healthcare, RCM, Intelligent Document Processing"
        schema={blogSchema}
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
            <span>{blog.title}</span>
          </Breadcrumb>

          {renderBlogContent()}
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

export default BlogDetailPage;
