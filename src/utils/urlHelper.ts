export const getBaseUrl = (): string => {
  if (typeof window !== "undefined") {
    return window.location.origin;
  }
  return "https://cognitivehealthit.com"; // Default fallback
};
