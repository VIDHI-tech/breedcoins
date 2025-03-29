import { useState, useEffect, useRef, useMemo } from "react";
import { schoolConfig } from "../../configs/heroConfig";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useApiQuery } from "@/hooks/useApiQuery";
import endpoints from "@/api/endpoints";
import { LatestUpdatesModal } from "../modules/latest-updates/modal";
import { useLatestUpdatesStore } from "@/stores/latest_updates.store";

export default function Hero() {
  const { isOpen, setIsOpen } = useLatestUpdatesStore();

  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const updatesContainerRef = useRef<HTMLDivElement>(null);

  const { data } = useApiQuery(endpoints.entities.latest_updates.all);
  const updateData = useMemo(() => data?.data?.data ?? [], [data]);

  const { data: data2 } = useApiQuery(endpoints.pages.homePage.all);
  const data2Filtered = useMemo(() => data2?.data?.data ?? [], [data2]);

  // Pull the hero image array into a local variable.
  // If data2Filtered is an object, hero_imgs is presumably an array of strings.
  const images = data2Filtered?.hero_imgs ?? [];

  /**
   * Set up the auto-advance carousel effect.
   * Re-run whenever images changes (e.g., when the backend data arrives).
   */
  useEffect(() => {
    // If there are no images, don't start the interval
    if (images.length < 1) {
      return;
    }

    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);

    // Clean up on unmount or if images changes
    return () => clearInterval(interval);
  }, [images]);

  const scrollUpdates = (direction: "left" | "right") => {
    if (updatesContainerRef.current) {
      const scrollAmount = 320; // Width of one card + gap
      const scrollPosition =
        direction === "left"
          ? updatesContainerRef.current.scrollLeft - scrollAmount
          : updatesContainerRef.current.scrollLeft + scrollAmount;

      updatesContainerRef.current.scrollTo({
        left: scrollPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <main className="relative px-4 md:px-8 lg:px-16">
      <div className="flex flex-col lg:flex-row gap-20 justify-between items-start py-12 md:py-16 lg:py-20">
        {/* Left Content */}
        <div className="space-y-6 md:space-y-8 w-full lg:w-[50%] shrink-0">
          <div>
            <h2 className="text-primary text-lg lg:text-xl font-bold mb-4 flex items-center gap-2 line-clamp-1">
              {schoolConfig.school_name}
            </h2>
            <h1 className="text-3xl lg:text-4xl 2xl:text-5xl font-bold text-gray-900 mb-4 md:mb-6 line-clamp-3">
              {schoolConfig.hero_title}
            </h1>
            <p className="text-base md:text-lg text-gray-500 font-light mb-6 md:mb-8 line-clamp-3">
              {schoolConfig.hero_para}
            </p>
            <a href={data2Filtered?.enroll_now_link} target="_blank">
              <button
                // onClick={() => {
                //   const url = data2Filtered?.enroll_now_link;
                //   if (url) {
                //     window.location.href = url;
                //   }
                // }}
                className="bg-primary text-white px-6 md:px-8 py-2.5 md:py-3 rounded-lg font-semibold hover:bg-primary-hover transition-colors flex items-center gap-2"
              >
                Enroll Now
                <img src="/flight.svg" alt="" className="w-5 h-5" />
              </button>
            </a>
          </div>

          {/* Latest Updates Section */}
          <div className="mt-8 md:mt-12">
            {isOpen && <LatestUpdatesModal />}
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-base font-medium uppercase">
                Latest Updates
              </h3>
              <div className="flex gap-2 text-[#181818]">
                <button
                  onClick={() => scrollUpdates("left")}
                  className="p-1.5 rounded-full hover:bg-gray-200 transition-colors"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={() => scrollUpdates("right")}
                  className="p-1.5 rounded-full hover:bg-gray-200 transition-colors"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>
            <div
              ref={updatesContainerRef}
              className="overflow-x-auto scrollbar-hide"
              style={{
                scrollbarWidth: "none",
                msOverflowStyle: "none",
              }}
            >
              <div className="flex gap-4 md:gap-10 w-[38rem] pb-4">
                {updateData?.map((update, index) => (
                  <div
                    key={index}
                    className="bg-[#EDECEC] p-3 md:p-4 rounded shadow-md w-[280px] flex-shrink-0 cursor-pointer"
                    onClick={() => {
                      console.log("update id clicked", update?._id);
                      setIsOpen(update?._id);
                    }}
                  >
                    <span className="inline-block px-3 py-1.5 bg-gradient-to-br from-primary to-primary-hover text-white rounded-tl-2xl rounded-br-2xl text-xs mb-3 md:mb-4">
                      {update?.section?.section_name}
                    </span>
                    <h4
                      className="text-lg mb-2 line-clamp-2 font-light"
                      title={update?.title}
                    >
                      {update?.title}
                    </h4>
                    <p
                      className="text-xs text-[#646464] line-clamp-3"
                      title={update.description}
                    >
                      {update.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Right Carousel */}
        <div className="w-full h-full">
          {/* If we have images, show the carousel; otherwise show dummy. */}
          {images.length > 0 ? (
            <>
              <div className="relative h-[300px] md:h-[450px] lg:h-[650px]">
                {images.map((image, index) => (
                  <div
                    key={index + image + ""}
                    className={`absolute inset-0 transition-opacity duration-500 ${
                      index === currentImageIndex
                        ? "opacity-100 z-10"
                        : "opacity-0 z-0"
                    }`}
                  >
                    <Image src={image} />
                  </div>
                ))}
              </div>
              {/* Carousel Indicators */}
              <div className="flex justify-center items-center gap-4 mt-6">
                {images.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`transition-all duration-300 rounded-full ${
                      index === currentImageIndex
                        ? "w-4 h-4 bg-primary"
                        : "w-2 h-2 bg-transparent border border-primary hover:bg-primary-hover"
                    }`}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>
            </>
          ) : (
            // dummy placeholder
            <div>dummy placeholder</div>
          )}
        </div>
      </div>

      {/* Bottom Right Plane */}
      <figure className="absolute bottom-0 right-0 w-24 md:w-32 lg:w-40">
        <img src="heroplane.png" alt="Plane" className="w-full h-full" />
      </figure>
    </main>
  );
}

// Simple Image component
const Image = ({ src }: { src: string }) => {
  return (
    <img
      src={src}
      alt={`School Image ${src}`}
      className="w-full h-full object-cover rounded-lg"
    />
  );
};
