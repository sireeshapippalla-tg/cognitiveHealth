import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title?: string;
  description?: string;
  canonical?: string;
  keywords?: string;
  ogType?: string;
  ogImage?: string;
  schema?: object; // New Prop for Structured Data
}

const SEO: React.FC<SEOProps> = ({
  title,
  description,
  canonical,
  keywords,
  ogType = 'website',
  ogImage = 'https://cognitivehealthit.com/og-image.jpg',
  schema,
}) => {
  const siteTitle = 'CognitiveHealth';
  
  // Logic to handle homepage title differently (just "CognitiveHealth")
  const isHome = !title || title === "AI-Powered RCM Solutions"; 
  const fullTitle = isHome ? siteTitle : `${siteTitle} | ${title}`;
  
  const defaultDescription = 'AI-powered Revenue Cycle Management solutions for Healthcare Providers.';
  const finalDescription = description || defaultDescription;

  return (
    <Helmet>
      {/* Standard metadata */}
      <title>{fullTitle}</title>
      <meta name="description" content={finalDescription} />
      {keywords && <meta name="keywords" content={keywords} />}
      {canonical && <link rel="canonical" href={canonical} />}

      {/* Open Graph / Facebook */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={finalDescription} />
      <meta property="og:type" content={ogType} />
      {ogImage && <meta property="og:image" content={ogImage} />}

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={finalDescription} />
      {ogImage && <meta name="twitter:image" content={ogImage} />}

      {/* Structured Data (JSON-LD) for AI / GEO */}
      {schema && (
        <script type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      )}
    </Helmet>
  );
};

export default SEO;
