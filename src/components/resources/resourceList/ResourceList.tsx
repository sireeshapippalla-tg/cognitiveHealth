import { Grid, Box, Typography } from "@mui/material";
import ResourceCard from "../resourceCard/ResourceCard";
import CaseStudyCard from "../caseStudyCard/CaseStudyCard";
import VideoCard from "../videoCard/VideoCard";
import { resourcesData } from "../../../data/resourcesData";
import VideoPlayerModal from "../videoPlayerModal/VideoPlayerModal";
import { useState } from "react";
import { ResourceListWrapper } from "./ResourceList.style";
import { motion } from "framer-motion";
import { styled } from "@mui/material/styles";
import MicIcon from "@mui/icons-material/Mic";
import HeadphonesIcon from "@mui/icons-material/Headphones";
import RecordVoiceOverIcon from "@mui/icons-material/RecordVoiceOver";

/* ─── Inline Podcast Coming Soon styles ─────────────────── */
const PodcastWrapper = styled(Box)({
  width: "100%",
  minHeight: 500,
  // background: "linear-gradient(135deg, #e9ebf1ff 0%, #edf4f1ff 50%, #f1edebff 100%)",
  borderRadius: 24,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  padding: "72px 24px",
  position: "relative",
  overflow: "hidden",
});

const GlowOrb = styled(motion.div)<{ color: string; size: number; top: string; left: string }>(
  ({ size, top, left }) => ({
    position: "absolute",
    width: size,
    height: size,
    borderRadius: "50%",
    // background: color,
    filter: "blur(70px)",
    top,
    left,
    opacity: 0.3,
    pointerEvents: "none",
  })
);

const IconRing = styled(motion.div)({
  width: 96,
  height: 96,
  borderRadius: "50%",
  background: "linear-gradient(135deg, rgba(235,123,51,0.2) 0%, rgba(235,123,51,0.05) 100%)",
  border: "2px solid rgba(235,123,51,0.4)",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  marginBottom: 28,
  position: "relative",
  "&::before": {
    content: '""',
    position: "absolute",
    inset: -8,
    borderRadius: "50%",
    border: "1px solid rgba(235,123,51,0.15)",
  },
});

const Badge = styled(Box)({
  display: "inline-flex",
  alignItems: "center",
  gap: 8,
  // background: "rgba(235,123,51,0.12)",
  // border: "1px solid rgba(235,123,51,0.35)",
  borderRadius: 100,
  padding: "6px 16px",
  marginBottom: 24,
  backdropFilter: "blur(8px)",
});

const WaveBar = styled(motion.div)<{ delay: number; color?: string }>(({ color }) => ({
  width: 4,
  borderRadius: 4,
  background: color || "#eb7b33",
}));

const FeatureChip = styled(motion.div)({
  display: "flex",
  alignItems: "center",
  gap: 8,
  background: "rgba(255,255,255,0.05)",
  border: "1px solid rgba(255,255,255,0.1)",
  borderRadius: 12,
  padding: "10px 18px",
  backdropFilter: "blur(8px)",
  color: "rgba(4, 4, 4, 0.75)",
  fontSize: 13,
  fontWeight: 600,
  "& svg": { color: "#eb7b33", fontSize: 16 },
});

const waveBars = [20, 36, 48, 36, 28, 40, 52, 40, 32, 44, 56, 44, 32, 40, 28];
const features = [
  { icon: <HeadphonesIcon />, label: "Expert Interviews" },
  { icon: <MicIcon />, label: "Deep-Dive Episodes" },
  { icon: <RecordVoiceOverIcon />, label: "Industry Insights" },
];

const PodcastComingSoon = () => (
  <PodcastWrapper>
    <GlowOrb color="#eb7b33" size={380} top="-60px" left="-100px"
      animate={{ scale: [1, 1.1, 1], opacity: [0.25, 0.4, 0.25] }}
      transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
    />
    <GlowOrb color="#1e40af" size={300} top="100px" left="65%"
      animate={{ scale: [1, 1.15, 1], opacity: [0.15, 0.3, 0.15] }}
      transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1 }}
    />
    <GlowOrb color="#15803d" size={280} top="250px" left="20%"
      animate={{ scale: [1, 1.12, 1], opacity: [0.15, 0.35, 0.15] }}
      transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
    />

    {/* Badge */}
    <motion.div initial={{ opacity: 0, y: -16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
      <Badge>
        <span style={{ width: 7, height: 7, borderRadius: "50%", background: "#eb7b33", display: "inline-block", animation: "podcastPulse 1.5s ease-in-out infinite" }} />
        <Typography sx={{ color: "#eb7b33", fontWeight: 700, fontSize: 12, letterSpacing: 0.8 }}>
          COMING SOON
        </Typography>
      </Badge>
    </motion.div>

    {/* Mic icon */}
    <motion.div initial={{ opacity: 0, scale: 0.7 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6, delay: 0.1, type: "spring", stiffness: 200 }}>
      <IconRing
        animate={{ boxShadow: ["0 0 0 0 rgba(235,123,51,0)", "0 0 0 18px rgba(235,123,51,0.08)", "0 0 0 0 rgba(235,123,51,0)"] }}
        transition={{ duration: 2.5, repeat: Infinity }}
      >
        <MicIcon sx={{ fontSize: 42, color: "#eb7b33" }} />
      </IconRing>
    </motion.div>

    {/* Sound wave */}
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.25 }}
      style={{ display: "flex", alignItems: "center", gap: 4, marginBottom: 28, height: 60 }}
    >
      {waveBars.map((height, i) => {
        const barColor = i % 3 === 0 ? "#eb7b33" : i % 3 === 1 ? "#1e40af" : "#15803d";
        return (
          <WaveBar key={i} delay={i * 0.08} color={barColor}
            animate={{ height: [height * 0.4, height, height * 0.4] }}
            transition={{ duration: 1.2, repeat: Infinity, ease: "easeInOut", delay: i * 0.08 }}
            style={{ height }}
          />
        );
      })}
    </motion.div>

    {/* Heading */}
    <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }}>
      <Typography variant="h3" sx={{ fontWeight: 900, color: "#0b0a0aff", textAlign: "center", letterSpacing: "-0.03em", lineHeight: 1.15, mb: 1.5 }}>
        The CognitiveHealth{" "}
        <Box component="span" sx={{ color: "inherit" }}>
          Podcast
        </Box>{" "}
        is Coming Soon
      </Typography>
    </motion.div>

    {/* Subtitle */}
    <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.3 }}>
      <Typography sx={{ color: "rgba(20, 19, 19, 0.55)", fontSize: 16, lineHeight: 1.7, textAlign: "center", maxWidth: 520, mb: 4 }}>
        Real conversations on AI, agentic automation, and the future of healthcare revenue cycle management — with the leaders shaping it.
      </Typography>
    </motion.div>

    {/* Feature chips */}
    <Box sx={{ display: "flex", gap: 2, flexWrap: "wrap", justifyContent: "center" }}>
      {features.map((f, i) => (
        <FeatureChip key={f.label} initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 + i * 0.1 }} whileHover={{ scale: 1.04, borderColor: "rgba(235,123,51,0.4)" }}>
          {f.icon}
          {f.label}
        </FeatureChip>
      ))}
    </Box>

    <style>{`
      @keyframes podcastPulse {
        0%, 100% { opacity: 1; transform: scale(1); }
        50% { opacity: 0.5; transform: scale(1.3); }
      }
    `}</style>
  </PodcastWrapper>
);

/* ─── Main ResourceList ──────────────────────────────────── */
interface ResourceListProps {
  activeTab: number;
  // searchQuery: string;
}

const ResourceList = ({ activeTab }: ResourceListProps) => {
  const [open, setOpen] = useState(false);
  const [videoUrl, setVideoUrl] = useState("");

  const handlePlayVideo = (url: string) => {
    setVideoUrl(url);
    setOpen(true);
  };

  // Podcast tab (index 3) — render Coming Soon inline
  if (activeTab === 3) {
    return (
      <ResourceListWrapper>
        <PodcastComingSoon />
      </ResourceListWrapper>
    );
  }

  const filteredResources = (() => {
    let list = resourcesData;
    switch (activeTab) {
      case 0:
        list = resourcesData.filter((r) => r.type === "blog");
        break;
      case 1:
        list = resourcesData.filter((r) => r.type === "video");
        break;
      case 2:
        list = resourcesData.filter((r) => r.type === "media");
        break;
    }
    // if (searchQuery) {
    //   const q = searchQuery.toLowerCase();
    //   list = list.filter(
    //     (r) =>
    //       r.title?.toLowerCase().includes(q) ||
    //       r.description?.toLowerCase().includes(q)
    //   );
    // }

    list.sort((a, b) => {
      const dateA = "date" in a && a.date ? new Date(a.date as string).getTime() : 0;
      const dateB = "date" in b && b.date ? new Date(b.date as string).getTime() : 0;
      return dateB - dateA;
    });

    return list;
  })();

  return (
    <ResourceListWrapper>
      <Grid container spacing={6}>
        {filteredResources.map((resource) => (
          <Grid size={{ xs: 12, sm: 6, md: 6, lg: 6 }} key={resource.id}>
            {resource.type === "case-study" ? (
              <CaseStudyCard
                image={resource.image}
                category={resource.category || ""}
                title={resource.title}
                description={resource.description}
                link={resource.link}
                metricValue={resource.metricValue}
                metricLabel={resource.metricLabel}
              />
            ) : resource.type === "video" ? (
              <VideoCard
                image={resource.image}
                category={resource.category || ""}
                title={resource.title}
                description={resource.description}
                link={resource.link}
                duration={resource.readTime}
                onPlay={() => handlePlayVideo(resource.link)}
              />
            ) : (
              <ResourceCard
                image={resource.image}
                category={resource.category}
                date={"date" in resource ? (resource.date as string | undefined) : undefined}
                readTime={
                  "readTime" in resource ? (resource.readTime as string | undefined) : undefined
                }
                title={resource.title}
                description={resource.description}
                link={resource.link}
                type={resource.type}
              />
            )}
          </Grid>
        ))}
      </Grid>
      <VideoPlayerModal
        open={open}
        videoUrl={videoUrl}
        onClose={() => setOpen(false)}
      />
    </ResourceListWrapper>
  );
};

export default ResourceList;
