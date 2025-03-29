import { Card, CardContent } from "@/components/ui/card";
import { ImageOff, VideoOff, FileX } from "lucide-react";

interface NoContentCardProps {
  type: "images" | "videos" | "assets";
}

const cardConfig = {
  images: {
    icon: ImageOff,
    title: "No Images Available",
    message: "There are currently no images uploaded to this section.",
  },
  videos: {
    icon: VideoOff,
    title: "No Videos Available",
    message: "There are currently no videos uploaded to this section.",
  },
  assets: {
    icon: FileX,
    title: "No Assets Available",
    message: "There are currently no assets uploaded to this section.",
  },
};

export function NoContentCard({ type }: NoContentCardProps) {
  const config = cardConfig[type];
  const Icon = config.icon;

  return (
    <Card className="bg-white border-2 border-primary hover:border-primary-hover transition-all duration-300">
      <CardContent className="flex flex-col items-center justify-center p-8 text-center min-h-[200px]">
        <Icon
          className="w-16 h-16 text-primary mb-4 animate-pulse"
          strokeWidth={1.5}
        />
        <h3 className="text-xl font-semibold text-black mb-2">
          {config.title}
        </h3>
        <p className="text-black/70">{config.message}</p>
      </CardContent>
    </Card>
  );
}
