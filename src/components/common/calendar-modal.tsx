import { useCalendarStore } from "@/stores/calendar.store";
import { CustomModal } from "./modals/custom-modal";
import endpoints from "@/api/endpoints";
import {
  appStandardDateFormatter,
  appStandardDateFormatter2,
  appStandardDateFormatter3,
} from "@/utils/formatter";
import { useMemo } from "react";
import { useApiQuery } from "@/hooks/useApiQuery";
import { Card, CardContent, CardHeader } from "../ui/card";
import { CalendarIcon, CalendarX, ExternalLink, FileText } from "lucide-react";
import { Badge } from "../ui/badge";
import { Separator } from "../ui/separator";
import { Button } from "../ui/button";
import { RichTextPreview } from "./preview";

export const CalendarModal = () => {
  const { isOpen, onClose } = useCalendarStore();
  // console.log("isOpen", isOpen);

  const route = useMemo(() => {
    if (isOpen) {
      return endpoints.entities.event.getEventsByDate({
        date: appStandardDateFormatter2(isOpen),
      });
    }
    return "";
  }, [isOpen]);

  const { data, isLoading } = useApiQuery(route);
  const filteredEvents = data?.data?.data ?? [];
  // console.log("route", route, "filteredEvents", filteredEvents);
  return (
    <CustomModal
      isOpen={!!isOpen}
      onClose={onClose}
      title={`${isOpen ? appStandardDateFormatter3(isOpen) : ""}`}
      //   isSubmitting={isBlogDeletionPending}
      submitButtonText="Delete"
      onSubmit={() => {}}
      footer={<></>}
      needX={true}
    >
      {isLoading ? (
        <>Loading...</>
      ) : filteredEvents?.length > 0 ? (
        <div className="space-y-4">
          {filteredEvents?.map(
            (
              { date, title, description, pdfLinks, links }: EventCardProps,
              index: number
            ) => (
              <EventCard
                key={index}
                date={date}
                title={title}
                description={description}
                pdfLinks={pdfLinks}
                links={links}
              />
            )
          )}
        </div>
      ) : (
        <NoEventsCard />
      )}
    </CustomModal>
  );
};

interface EventCardProps {
  date: string;
  title: string;
  description: string;
  pdfLinks: string[];
  links: string[];
}

export const EventCard = ({
  date,
  title,
  description,
  pdfLinks,
  links,
}: EventCardProps) => {
  return (
    <Card className="w-full max-w-[1000px] bg-card hover:shadow-lg transition-shadow">
      <CardHeader className="space-y-2">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
          <h3 className="text-xl font-semibold tracking-tight">{title}</h3>
          <Badge variant="secondary" className="w-fit">
            <CalendarIcon className="mr-1 h-3 w-3" />
            {appStandardDateFormatter(date)}
          </Badge>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        {description && <RichTextPreview content={description} />}

        {(pdfLinks.length > 0 || links.length > 0) && (
          <>
            <Separator />
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {pdfLinks.length > 0 && (
                <div className="space-y-2">
                  <h4 className="text-sm font-medium">Documents</h4>
                  <div className="flex flex-wrap gap-2">
                    {pdfLinks.map((link, index) => (
                      <Button
                        key={index}
                        variant="outline"
                        size="sm"
                        className="flex items-center"
                        asChild
                      >
                        <a
                          href={link}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <FileText className="mr-1 h-4 w-4" />
                          PDF {index + 1}
                        </a>
                      </Button>
                    ))}
                  </div>
                </div>
              )}

              {links.length > 0 && (
                <div className="space-y-2">
                  <h4 className="text-sm font-medium">Related Links</h4>
                  <div className="flex flex-wrap gap-2">
                    {links.map((link, index) => (
                      <Button
                        key={index}
                        variant="outline"
                        size="sm"
                        className="flex items-center"
                        asChild
                      >
                        <a
                          href={link}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <ExternalLink className="mr-1 h-4 w-4" />
                          Link {index + 1}
                        </a>
                      </Button>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </>
        )}
      </CardContent>
    </Card>
  );
};

export const NoEventsCard = () => {
  return (
    <Card className="w-full max-w-[1000px] bg-white shadow-md">
      <CardContent className="flex flex-col items-center justify-center py-12">
        <CalendarX className="h-12 w-12 text-primary/50 mb-4" />
        <h3 className="text-xl font-semibold text-foreground mb-2">
          No Events Found
        </h3>
        <p className="text-muted-foreground text-center">
          There are no events scheduled for this day.
        </p>
      </CardContent>
    </Card>
  );
};
