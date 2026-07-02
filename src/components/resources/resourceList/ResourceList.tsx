import { Grid } from "@mui/material";
import ResourceCard from "../resourceCard/ResourceCard";
import CaseStudyCard from "../caseStudyCard/CaseStudyCard";
import VideoCard from "../videoCard/VideoCard";
import { resourcesData } from "../../../data/resourcesData";
import VideoPlayerModal from "../videoPlayerModal/VideoPlayerModal";
import { useState } from "react";
import { ResourceListWrapper } from "./ResourceList.style";

interface ResourceListProps {
  activeTab: number;
  searchQuery: string;
}

const ResourceList = ({ activeTab, searchQuery }: ResourceListProps) => {
  const [open, setOpen] = useState(false);
  const [videoUrl, setVideoUrl] = useState("");

  const handlePlayVideo = (url: string) => {
    setVideoUrl(url);
    setOpen(true);
  };

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
    if (searchQuery) {
      const q = searchQuery.toLowerCase();
      list = list.filter(
        (r) =>
          r.title?.toLowerCase().includes(q) ||
          r.description?.toLowerCase().includes(q)
      );
    }

    // Sort by date descending (latest first)
    list.sort((a, b) => {
      const dateA = "date" in a && a.date ? new Date(a.date).getTime() : 0;
      const dateB = "date" in b && b.date ? new Date(b.date).getTime() : 0;
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
                date={"date" in resource ? resource.date : undefined}
                readTime={
                  "readTime" in resource ? resource.readTime : undefined
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

