export type VideoType = "youtube" | "vimeo" | "mp4" | "unknown";

export const getVideoInfo = (url: string) => {
  // MP4
  if (url.endsWith(".mp4")) {
    return { type: "mp4" as VideoType, src: url };
  }

  // YouTube
  if (url.includes("youtube.com") || url.includes("youtu.be")) {
    const id =
      url.split("v=")[1]?.split("&")[0] ||
      url.split("youtu.be/")[1]?.split("?")[0];

    return {
      type: "youtube" as VideoType,
      src: `https://www.youtube.com/embed/${id}?autoplay=1`,
    };
  }

  // Vimeo
  if (url.includes("vimeo.com")) {
    const id = url.split("/").pop();
    return {
      type: "vimeo" as VideoType,
      src: `https://player.vimeo.com/video/${id}?autoplay=1`,
    };
  }

  return { type: "unknown" as VideoType, src: url };
};
