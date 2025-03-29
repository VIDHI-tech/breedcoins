import React from "react";

interface MediaRendererProps {
  url: string;
}

export const MediaRenderer: React.FC<MediaRendererProps> = ({ url }) => {
  const mediaType = getMediaType(url);
  console.log("url", url);

  if (mediaType === "image") {
    return (
      <div className="relative w-full h-full flex items-center justify-center">
        <img
          src={url}
          alt="Dynamic media"
          className="max-w-full max-h-full w-full h-full object-cover"
        />
      </div>
    );
  }

  if (mediaType === "video") {
    return (
      <div className="relative w-full h-full flex items-center justify-center">
        <video
          autoPlay
          muted
          playsInline
          loop
          controls={false}
          className="max-w-full max-h-full w-auto h-auto object-contain"
        >
          <source src={url} />
          Your browser does not support the video tag.
        </video>
      </div>
    );
  }

  // If unknown type, render a fallback or nothing
  return <div>Unsupported media type</div>;
};

function getMediaType(url: any): "image" | "video" | "unknown" {
  console.log("url", url);
  if (typeof url !== "string") return "unknown";

  const imageExtensions = ["jpg", "jpeg", "png", "gif", "bmp", "webp"];
  const videoExtensions = ["mp4", "webm", "ogg", "mov"];

  const extension = url.split(".").pop()?.toLowerCase() ?? "";

  if (extension && imageExtensions.includes(extension)) {
    return "image";
  }

  if (extension && videoExtensions.includes(extension)) {
    return "video";
  }

  return "unknown";
}
export default MediaRenderer;
