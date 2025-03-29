import { MediaRenderer } from "@/utils/mediaRenderer";

interface ContentSectionProps {
  config: {
    title: string;
    description: string;
    asset: string | null;
  };
}

const ContentSection: React.FC<ContentSectionProps> = ({ config }) => {
  const { title, description, asset } = config;
  console.log({ title, description, asset });
  return (
    <>
      {/* Main flex container */}
      <div className="flex flex-col-reverse lg:flex-row bg-white rounded-lg shadow-md gap-x-0">
        {/* Left part - this will determine the height */}
        <div className="bg-[#2B8FDB] lg:flex-[4] p-6 md:p-8 lg:p-14 flex flex-col text-center text-white justify-center lg:text-start gap-y-4 xl:gap-5">
          <h1 className="text-2xl md:text-3xl xl:text-4xl font-bold">
            {title}
          </h1>
          <p className="text-sm leading-6 md:text-base lg:text-lg font-light">
            {description}
          </p>
        </div>

        {/* Right part - height matches left, overflow hidden */}
        <div className="lg:flex-[3] relative lg:h-auto min-h-[400px] h-[400px] lg:min-h-auto">
          <div className="absolute inset-0 flex items-center justify-center overflow-hidden">
            {asset ? <MediaRenderer url={asset} /> : <div />}
          </div>
        </div>
      </div>
    </>
  );
};

export default ContentSection;
