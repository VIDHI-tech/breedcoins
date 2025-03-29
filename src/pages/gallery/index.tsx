import { useEffect, useMemo, useState } from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { useApiQuery } from "@/hooks/useApiQuery";
import endpoints from "@/api/endpoints";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import {
  ChevronLeft,
  ChevronRight,
  ImageOff,
  Loader2,
  PlayCircle,
} from "lucide-react";
import { NoContentCard } from "@/components/common/no-content-cards";
import { Skeleton } from "@/components/ui/skeleton";
import { useNavStore } from "@/stores/nav.store";
import { useIsMobile } from "@/hooks/use-mobile";

type YearFolder = {
  _id: string;
  year: number;
  images: string[];
  videos: string[];
};

type Gallery = {
  _id: string;
  folder_name: string;
  yearFolders: YearFolder[];
};

export default function GalleryComponent() {
  const { navHeight } = useNavStore();
  const isMd = useIsMobile();

  const { data } = useApiQuery(endpoints.entities.gallery.all);
  const galleryFilteredData: Gallery[] = useMemo(
    () => data?.data?.data ?? [],
    [data]
  );

  // Active folder & year
  const [activeFolder, setActiveFolder] = useState<Gallery | null>(null);
  const [activeYear, setActiveYear] = useState<YearFolder | null>(null);

  // Media selection
  const [activeMediaType, setActiveMediaType] = useState<"images" | "videos">(
    "images"
  );

  // Preview states
  const [previewImageIndex, setPreviewImageIndex] = useState<number | null>(
    null
  );
  const [previewVideoIndex, setPreviewVideoIndex] = useState<number | null>(
    null
  );

  // On data load, pick first folder by default (if any)
  useEffect(() => {
    if (!galleryFilteredData || galleryFilteredData.length < 1) {
      setActiveFolder(null);
      setActiveYear(null);
      return;
    }

    // If we already have an activeFolder not in the new data, reset it
    const found = galleryFilteredData.find((f) => f._id === activeFolder?._id);
    if (!activeFolder || !found) {
      setActiveFolder(galleryFilteredData[0]);
      // Also handle the year
      const firstYears = galleryFilteredData[0].yearFolders;
      setActiveYear(firstYears.length ? firstYears[0] : null);
    }
  }, [galleryFilteredData, activeFolder]);

  // -------- Handlers --------

  // Clicking on a folder button:
  //  - setActiveFolder to that folder
  //  - setActiveYear to its first year folder (or null if none)
  const handleSelectFolder = (folder: Gallery) => {
    setActiveFolder(folder);
    if (folder.yearFolders && folder.yearFolders.length > 0) {
      setActiveYear(folder.yearFolders[0]);
    } else {
      setActiveYear(null);
    }
    // Also reset previews, just in case
    setPreviewImageIndex(null);
    setPreviewVideoIndex(null);
  };

  // Year selection
  const handleChangeYear = (value: string) => {
    if (!activeFolder || !activeFolder.yearFolders.length) return;
    const foundYear = activeFolder.yearFolders.find(
      (yf) => yf.year === Number(value)
    );
    setActiveYear(foundYear ?? activeFolder.yearFolders[0]);
  };

  // Next/prev media
  const handleNextImage = () => {
    if (previewImageIndex !== null && activeYear) {
      setPreviewImageIndex((previewImageIndex + 1) % activeYear.images.length);
    }
  };
  const handlePrevImage = () => {
    if (previewImageIndex !== null && activeYear) {
      setPreviewImageIndex(
        (activeYear.images.length + previewImageIndex - 1) %
          activeYear.images.length
      );
    }
  };

  const handleNextVideo = () => {
    if (previewVideoIndex !== null && activeYear) {
      setPreviewVideoIndex((previewVideoIndex + 1) % activeYear.videos.length);
    }
  };
  const handlePrevVideo = () => {
    if (previewVideoIndex !== null && activeYear) {
      setPreviewVideoIndex(
        (activeYear.videos.length + previewVideoIndex - 1) %
          activeYear.videos.length
      );
    }
  };

  return (
    <div id="top" className={`px-[calc(5%-10px)] overflow-x-hidden`}>
      <div className="flex flex-col md:flex-row md:justify-between md:gap-x-20 gap-y-7">
        <div
          style={isMd ? { maxHeight: `calc(100vh - ${navHeight}px)` } : {}}
          className={`h-full md:overflow-y-auto md:shrink-0 md:py-10`}
        >
          <div className="w-full flex gap-5 h-full max-h-full overflow-y-auto md:flex-col md:items-start md:max-w-56 overflow-x-auto py-2">
            {galleryFilteredData.map((folder) => {
              const { _id, folder_name } = folder;
              return (
                <Button
                  key={_id}
                  variant="outline"
                  className={cn(
                    "px-3 py-4 md:px-4 md:py-5 text-[#64748B] text-base md:text-lg border md:max-w-full font-medium rounded-3xl bg-[#F8FAFC]",
                    "border-[#CBD5E1] min-w-fit md:min-w-0 md:overflow-hidden whitespace-nowrap text-ellipsis",
                    activeFolder?._id === _id &&
                      "bg-primary text-white font-bold border-none hover:bg-primary-hover hover:text-white"
                  )}
                  onClick={() => handleSelectFolder(folder)}
                >
                  <span className="w-full md:block md:truncate md:max-w-full">
                    {folder_name}
                  </span>
                </Button>
              );
            })}
          </div>
        </div>
        <div
          style={isMd ? { maxHeight: `calc(100vh - ${navHeight}px)` } : {}}
          className={`h-full md:overflow-y-auto w-full md:py-10`}
        >
          <div className="h-full max-h-full overflow-auto">
            {activeFolder && activeFolder.yearFolders.length > 0 ? (
              <div className="w-full px-2">
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-4 gap-4 py-2">
                  <div className="flex gap-4">
                    <Button
                      variant={
                        activeMediaType === "images" ? "default" : "outline"
                      }
                      className={cn({
                        "bg-primary hover:bg-primary-hover":
                          activeMediaType === "images",
                      })}
                      onClick={() => {
                        setActiveMediaType("images");
                        setPreviewVideoIndex(null);
                      }}
                    >
                      Images
                    </Button>
                    <Button
                      variant={
                        activeMediaType === "videos" ? "default" : "outline"
                      }
                      className={cn({
                        "bg-primary hover:bg-primary-hover":
                          activeMediaType === "videos",
                      })}
                      onClick={() => {
                        setActiveMediaType("videos");
                        setPreviewImageIndex(null);
                      }}
                    >
                      Videos
                    </Button>
                  </div>
                  <Select
                    value={activeYear ? activeYear.year.toString() : undefined}
                    onValueChange={handleChangeYear}
                  >
                    <SelectTrigger className="w-[180px]">
                      <SelectValue placeholder="Select Year" />
                    </SelectTrigger>
                    <SelectContent>
                      {activeFolder.yearFolders.map(({ year }) => (
                        <SelectItem key={year} value={year.toString()}>
                          {year}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div
                  className={cn("flex flex-wrap gap-4", {
                    "flex w-full":
                      (activeMediaType === "images" &&
                        !activeYear?.images?.length) ||
                      (activeMediaType === "videos" &&
                        !activeYear?.videos?.length),
                  })}
                >
                  {activeMediaType === "images" &&
                    (activeYear?.images?.length ? (
                      activeYear.images.map((image, index) => (
                        <div
                          key={index}
                          className="relative group cursor-pointer overflow-hidden rounded-xl border-2 border-muted aspect-video w-full md:w-auto md:max-h-36 grid place-items-center"
                          onClick={() => setPreviewImageIndex(index)}
                        >
                          <img
                            src={image || "/placeholder.svg"}
                            alt={`Gallery image ${index + 1}`}
                            className="w-full h-56 object-cover transition-transform duration-300 group-hover:scale-110 "
                          />
                          <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        </div>
                      ))
                    ) : (
                      <div className="w-full">
                        <NoContentCard type="images" />
                      </div>
                    ))}

                  {activeMediaType === "videos" &&
                    (activeYear?.videos?.length ? (
                      activeYear.videos.map((video, index) => (
                        <div
                          key={index}
                          className="relative group cursor-pointer overflow-hidden rounded-xl border-2 border-muted aspect-video w-full md:w-auto md:max-h-36 grid place-items-center"
                          onClick={() => setPreviewVideoIndex(index)}
                        >
                          <VideoThumbnail
                            videoUrl={video}
                            alt={`Video thumbnail ${index + 1}`}
                            className="w-full aspect-video md:h-full md:max-h-36 object-cover"
                          />
                        </div>
                      ))
                    ) : (
                      <div className="w-full">
                        <NoContentCard type="videos" />
                      </div>
                    ))}
                </div>
              </div>
            ) : (
              <div className="w-full">
                <NoContentCard type="assets" />
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="h-full max-h-[calc(100vh-500px)] overflow-hidden flex flex-col md:flex-row gap-x-10 gap-y-7"></div>

      {/* Preview Dialog for Images */}
      {previewImageIndex !== null && activeYear && (
        <ImageViewerDialog
          images={activeYear.images}
          currentIndex={previewImageIndex}
          onClose={() => setPreviewImageIndex(null)}
          onNext={handleNextImage}
          onPrev={handlePrevImage}
        />
      )}

      {/* Preview Dialog for Videos */}
      {previewVideoIndex !== null && activeYear && (
        <VideoViewerDialog
          videos={activeYear.videos}
          currentIndex={previewVideoIndex}
          onClose={() => setPreviewVideoIndex(null)}
          onNext={handleNextVideo}
          onPrev={handlePrevVideo}
        />
      )}
    </div>
  );
}

/* ============================= */
/* Preview Dialog: Images        */
/* ============================= */
interface ImageViewerDialogProps {
  images: string[];
  currentIndex: number;
  onClose: () => void;
  onNext: () => void;
  onPrev: () => void;
}

export function ImageViewerDialog({
  images,
  currentIndex,
  onClose,
  onNext,
  onPrev,
}: ImageViewerDialogProps) {
  return (
    <Dialog open onOpenChange={onClose}>
      <DialogContent className="max-w-4xl w-full aspect-video p-0 flex items-center justify-between px-3">
        <Button size="icon" onClick={onPrev} className="shrink-0">
          <ChevronLeft />
        </Button>
        <div className="max-w-full max-h-[480px] h-full w-full">
          <img
            key={images[currentIndex]}
            src={images[currentIndex]}
            alt={`Image ${currentIndex + 1}`}
            className="h-full w-full object-contain"
          />
        </div>
        <Button size="icon" onClick={onNext} className="shrink-0">
          <ChevronRight />
        </Button>
      </DialogContent>
    </Dialog>
  );
}

/* ============================= */
/* Preview Dialog: Videos        */
/* ============================= */
interface VideoViewerDialogProps {
  videos: string[];
  currentIndex: number;
  onClose: () => void;
  onNext: () => void;
  onPrev: () => void;
}

function VideoViewerDialog({
  videos,
  currentIndex,
  onClose,
  onNext,
  onPrev,
}: VideoViewerDialogProps) {
  return (
    <Dialog open onOpenChange={onClose}>
      <DialogContent className="max-w-4xl w-full aspect-video p-0 flex items-center justify-between px-3">
        <Button size="icon" onClick={onPrev} className="shrink-0">
          <ChevronLeft />
        </Button>
        <div className="max-w-full max-h-[480px] overflow-hidden">
          <video
            key={videos[currentIndex]}
            controls
            autoPlay
            className="max-h-[480px] w-full object-contain"
          >
            <source src={videos[currentIndex]} />
          </video>
        </div>
        <Button size="icon" onClick={onNext} className="shrink-0">
          <ChevronRight />
        </Button>
      </DialogContent>
    </Dialog>
  );
}

/* ============================= */
/* Video Thumbnail Component     */
/* ============================= */
interface VideoThumbnailProps {
  videoUrl: string;
  alt: string;
  className?: string;
  [x: string]: any;
}

export function VideoThumbnail({
  videoUrl,
  alt,
  className,
  ...props
}: VideoThumbnailProps) {
  const [thumbnail, setThumbnail] = useState<string | null>(null);
  const [error, setError] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const video = document.createElement("video");

    const handleError = () => {
      setError(true);
      setLoading(false);
    };

    const handleLoadedMetadata = () => {
      try {
        video.currentTime = 1;
      } catch (err) {
        handleError();
      }
    };

    const handleSeeked = () => {
      try {
        const canvas = document.createElement("canvas");
        canvas.width = video.videoWidth;
        canvas.height = video.videoHeight;
        const ctx = canvas.getContext("2d");
        if (ctx) {
          ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
          setThumbnail(canvas.toDataURL("image/png"));
          setLoading(false);
        } else {
          handleError();
        }
      } catch (err) {
        handleError();
      }
    };

    try {
      video.crossOrigin = "anonymous";
      video.src = videoUrl;
      video.addEventListener("loadedmetadata", handleLoadedMetadata);
      video.addEventListener("seeked", handleSeeked);
      video.addEventListener("error", handleError);
    } catch (err) {
      handleError();
    }

    return () => {
      video.removeEventListener("loadedmetadata", handleLoadedMetadata);
      video.removeEventListener("seeked", handleSeeked);
      video.removeEventListener("error", handleError);
    };
  }, [videoUrl]);

  if (error) {
    return (
      <div
        className={cn("flex items-center justify-center bg-muted", className)}
        {...props}
      >
        <div className="flex flex-col items-center gap-2 text-muted-foreground">
          <ImageOff className="h-8 w-8" />
          <span className="text-sm">Failed to load thumbnail</span>
        </div>
      </div>
    );
  }

  if (loading) {
    return (
      <div
        className={cn(
          "relative w-full h-full grid place-items-center",
          className
        )}
        {...props}
      >
        <Skeleton className="absolute inset-0" />
        <Loader2 className="h-8 w-8 animate-spin text-primary" />
      </div>
    );
  }

  return (
    <div className="relative h-full w-full">
      <img
        src={thumbnail || ""}
        alt={alt}
        className={cn("object-cover", className)}
        loading="lazy"
        {...props}
      />
      {!loading && (
        <div className="absolute inset-0 grid place-items-center bg-black/30 opacity-50 group-hover:opacity-100 transition-opacity">
          <PlayCircle className="w-12 h-12 text-white" />
        </div>
      )}
    </div>
  );
}
