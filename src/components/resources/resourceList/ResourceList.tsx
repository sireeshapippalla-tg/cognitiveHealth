import { Grid, Box } from "@mui/material";
import ResourceCard from "../resourceCard/ResourceCard";
import CaseStudyCard from "../caseStudyCard/CaseStudyCard";
import VideoCard from "../videoCard/VideoCard";
import { resourcesData } from "../../../data/resourcesData";
import VideoPlayerModal from "../videoPlayerModal/VideoPlayerModal";
import { useState } from "react";

interface ResourceListProps {
  activeTab: number;
}

const ResourceList = ({ activeTab }: ResourceListProps) => {
  const [open, setOpen] = useState(false);
const [videoUrl, setVideoUrl] = useState("");

const handlePlayVideo = (url: string) => {
  setVideoUrl(url);
  setOpen(true);
};


  const filteredResources = (() => {
    switch (activeTab) {
      case 0:
        return resourcesData.filter((r) => r.type === "blog");
      case 1:
        return resourcesData.filter((r) => r.type === "case-study");
      case 2:
        return resourcesData.filter((r) => r.type === "video");
      case 3:
        return resourcesData.filter((r) => r.type === "media");
      default:
        return resourcesData;
    }
  })();

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={4}>
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
                date={"date" in resource ? resource.date : undefined}
                readTime={"readTime" in resource ? resource.readTime : undefined}
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
    </Box>
  );
};

export default ResourceList;


