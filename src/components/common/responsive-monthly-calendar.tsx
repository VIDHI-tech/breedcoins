import { useMemo, useState } from "react";
import {
  format,
  startOfMonth,
  endOfMonth,
  eachDayOfInterval,
  addMonths,
  subMonths,
} from "date-fns";
import { Card } from "../ui/card";
import { Button } from "../ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { appStandardDateFormatter2 } from "@/utils/formatter";
import { useCalendarStore } from "@/stores/calendar.store";
import { CalendarModal } from "./calendar-modal";
import endpoints from "@/api/endpoints";
import { useApiQuery } from "@/hooks/useApiQuery";

export function ResponsiveMonthlyCalendar() {
  return (
    <div
      // This is our container for container queries
      className="
        [container-type:inline-size] 
        [container-name:monthlyCalendarContainer]
        w-full
        min-w-[320px]  
        max-w-screen-lg  
        mx-auto
        p-4

        /* 
          Scale to 90% if the container is under 882px wide 
          (keeping all elements in the same aspect ratio).
        */
        scale-100 
        origin-top 
        cq-monthlyCalendarContainer-[max-width:882px]:scale-90
      "
    >
      <MonthlyCalendar />
    </div>
  );
}

function MonthlyCalendar() {
  const { isOpen, setIsOpen } = useCalendarStore();
  const [currentDate, setCurrentDate] = useState(new Date());
  const route = useMemo(() => {
    return endpoints.entities.event.getEventsByMonth({
      year: format(currentDate, "yyyy"),
      month: format(currentDate, "MM"),
    });
  }, [currentDate]);
  const { data, isLoading } = useApiQuery(route);
  const dayWiseEvents = data?.data?.data ?? [];
  const firstDayOfMonth = startOfMonth(currentDate);
  const lastDayOfMonth = endOfMonth(currentDate);
  const daysInMonth = eachDayOfInterval({
    start: firstDayOfMonth,
    end: lastDayOfMonth,
  });

  // Calculate padding days for the start of the month
  const startPadding = firstDayOfMonth.getDay();
  const paddingDays = Array(startPadding).fill(null);

  console.log(
    "route",
    route,
    "dayWiseEvents",
    dayWiseEvents,
    appStandardDateFormatter2(currentDate)
  );
  // Weekday labels
  const weekDays = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  // Navigation handlers
  const goToPreviousMonth = () => {
    setCurrentDate((prev) => subMonths(prev, 1));
  };
  const goToNextMonth = () => {
    setCurrentDate((prev) => addMonths(prev, 1));
  };

  return (
    <>
      {!!isOpen && <CalendarModal />}
      <Card className="pb-6 max-w-6xl mx-auto overflow-hidden rounded-[2.5rem]">
        <div className="flex items-center justify-between mb-6 bg-primary py-6 px-6">
          <Button
            variant="outline"
            size="icon"
            onClick={goToPreviousMonth}
            className="h-8 w-8"
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>

          <div className="flex items-center gap-2">
            <span className="text-2xl font-semibold text-white">
              {format(currentDate, "MMMM yyyy")}
            </span>
          </div>

          <Button
            variant="outline"
            size="icon"
            onClick={goToNextMonth}
            className="h-8 w-8"
          >
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>

        <div className="grid grid-cols-7 px-6">
          {/* Weekday headers */}
          {weekDays.map((day) => (
            <>
              <div
                key={day + "short"}
                className="xl:hidden text-center font-medium text-muted-foreground pb-4 text-xs"
              >
                {day.slice(0, 3)}
              </div>
              <div
                key={day + "long"}
                className="hidden xl:block text-center font-medium text-muted-foreground pb-4 text-xs"
              >
                {day}
              </div>
            </>
          ))}

          {/* Top divider */}
          <div className="col-span-7 border-t border-[#E6E6E6] mb-0" />

          {/* Padding days */}
          {paddingDays.map((_, index) => (
            <div
              key={`padding-${index}`}
              className="xl:min-h-28 max-h-28 border border-[#E6E6E6] bg-[#FAFAFA]"
            />
          ))}

          {/* Actual days */}
          {daysInMonth.map((day) => {
            const standardDate = appStandardDateFormatter2(day);
            const eventList = dayWiseEvents[standardDate]?.map(
              ({ title }: { title: string }) => title
            );
            return (
              <div
                key={day.toISOString()}
                onClick={() => {
                  console.log(appStandardDateFormatter2(day));
                  setIsOpen(standardDate);
                }}
                className={cn(
                  "relative p-4 border border-[#E6E6E6] cursor-pointer xl:min-h-28 max-h-28 overflow-hidden",
                  {
                    "bg-[#FAFAFA] sm:hover:bg-[#EAEAEA]":
                      eventList?.length === 0,
                    "bg-[#FEC02733] sm:hover:bg-[#fec1276b]":
                      eventList?.length > 0,
                  }
                )}
              >
                {/* <div className="xl:absolute xl:inset-0"></div> */}
                <div className="text-base font-medium text-black flex justify-center xl:justify-start">
                  {format(day, "d")}
                </div>
                {eventList?.length > 0 && (
                  <div className="hidden xl:block mt-2 text-[#666666] text-[0.6rem] px-2">
                    <ul>
                      {eventList?.map((title: string, index: number) => (
                        <li className="list-disc font-semibold" key={index}>
                          {title}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </Card>
    </>
  );
}
