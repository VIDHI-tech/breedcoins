import { useEffect, useMemo, useState } from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import endpoints from "@/api/endpoints";
import { useApiQuery } from "@/hooks/useApiQuery";
import { NoContentCard } from "@/components/common/no-content-cards";
import { ImageViewerDialog } from "../gallery";
import { RichTextPreview } from "@/components/common/preview";
import { Loader2 } from "lucide-react";

type Facility = {
  _id: string;
  folder_name: string;
  folder_description: string;
  images: string[];
};
export default function Facilities() {
  const { data, isPending } = useApiQuery(endpoints.entities.facilities.all);
  // Preview states
  const [previewImageIndex, setPreviewImageIndex] = useState<number | null>(
    null
  );
  const facilitiesFilteredData: Facility[] = useMemo(
    () => data?.data?.data ?? [],
    [data]
  );

  // console.log("facilitiesFilteredData", facilitiesFilteredData);

  const [activeFolder, setActiveFolder] = useState(
    facilitiesFilteredData?.[0]?._id
  );
  const activeFolderData = facilitiesFilteredData?.find(
    (folder) => folder?._id === activeFolder
  );

  useEffect(() => {
    setActiveFolder(facilitiesFilteredData?.[0]?._id);
  }, [facilitiesFilteredData]);

  // Next/prev media
  const handleNextImage = () => {
    if (previewImageIndex !== null && activeFolderData?.images?.length) {
      setPreviewImageIndex(
        (previewImageIndex + 1) % activeFolderData?.images?.length
      );
    }
  };
  const handlePrevImage = () => {
    if (previewImageIndex !== null && activeFolderData?.images?.length) {
      setPreviewImageIndex(
        (activeFolderData?.images?.length + previewImageIndex - 1) %
          activeFolderData?.images?.length
      );
    }
  };

  if (isPending) {
    return (
      <div className="h-96 grid place-items-center">
        <Loader2 className="h-8 w-8 animate-spin text-primary" />
      </div>
    );
  }
  return (
    <div id="top" className="px-[calc(5%-10px)] flex gap-x-28">
      {/* Sidebar */}
      <div className="w-fit hidden lg:flex items-start flex-col space-y-8 py-20">
        {facilitiesFilteredData?.map((folder) => (
          <Button
            key={folder._id}
            variant="outline"
            className={cn(
              "w text-xl text-[#64748B] border border-[#CBD5E1] font-medium rounded-3xl py-5 bg-[#F8FAFC]",
              activeFolder === folder._id &&
                "bg-primary text-white font-bold border-none hover:bg-primary-hover hover:text-white"
            )}
            onClick={() => setActiveFolder(folder._id)}
          >
            {folder.folder_name}
          </Button>
        ))}
      </div>

      {/* Main Content */}
      <div className="flex-1 space-y-10 py-[4.2rem]">
        <h2 className="text-6xl break-all font-normal">
          {activeFolderData?.folder_name}
        </h2>
        <RichTextPreview content={activeFolderData?.folder_description ?? ""} />

        <div
          className={cn("flex flex-wrap gap-4", {
            "flex w-full": !activeFolderData?.images?.length,
          })}
        >
          {activeFolderData?.images?.length ? (
            activeFolderData?.images?.map((image, index) => (
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
          )}
        </div>
      </div>
      {previewImageIndex !== null && activeFolderData && (
        <ImageViewerDialog
          images={activeFolderData?.images}
          currentIndex={previewImageIndex}
          onClose={() => setPreviewImageIndex(null)}
          onNext={handleNextImage}
          onPrev={handlePrevImage}
        />
      )}
    </div>
  );
}
