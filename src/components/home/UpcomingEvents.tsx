import { useApiQuery } from "@/hooks/useApiQuery";
import Button from "../common/Button";
import endpoints from "@/api/endpoints";
import { useMemo } from "react";
import { getMonthAndDate } from "@/utils/formatter";
import { useSectionNavigation } from "../common/scroll-to-hash";
import { RichTextPreview } from "../common/preview";

const UpcomingEvents = () => {
  const { navigateToSection } = useSectionNavigation();

  const { data } = useApiQuery(endpoints.entities.event.getUpcomingEvents);
  const eventData = useMemo(() => data?.data?.data ?? [], [data]);
  console.log("eventData", eventData);

  return (
    <div id="home_upcoming_events" className="grid grid-cols-4 relative">
      <section className="bg-[#2459A8] text-white col-span-4 md:col-span-1 items-center flex flex-col justify-center gap-4 py-6 px-2">
        <h1 className="text-2xl font-semibold">Upcoming Events</h1>
        <a href="/academics#academics_school_calendar">
          <Button label="All events" />
        </a>
      </section>
      <section className="bg-[#023AA2] overflow-x-auto col-span-4 md:col-span-3 py-6">
        <div
          className="flex gap-6 items-center"
          style={{ minWidth: "max-content" }}
        >
          {eventData?.map((event) => (
            <div
              key={event._id}
              className="p-6 w-[500px]"
              onClick={() => {
                navigateToSection(`/academics#academics_school_calendar`);
              }}
            >
              <div className="flex gap-6 items-center">
                <span className="bg-white rounded-full p-6 text-center w-[110px] font-bold">
                  <div className="text-4xl">
                    {getMonthAndDate(event.date).date}
                  </div>
                  <div>{getMonthAndDate(event.date).month}</div>
                </span>
                <div className="flex-1 text-white">
                  <h3 className="text-xl font-semibold pb-1 line-clamp-1">
                    {event.title}
                  </h3>
                  <p className="text-[#A3ABB6] line-clamp-2 ">
                    <RichTextPreview
                      content={event.description ?? "Blog Content"}
                    />
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
        {/* Gradient Overlay */}
        <div className="absolute hidden md:block top-0 right-0 h-full w-40 bg-gradient-to-l from-[#023AA2] to-transparent pointer-events-none" />
      </section>
    </div>
  );
};

export default UpcomingEvents;
