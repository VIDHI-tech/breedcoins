import { ExternalLink } from "lucide-react";
import endpoints from "@/api/endpoints";
import { useApiQuery } from "@/hooks/useApiQuery";
import { useMemo } from "react";

const Notification = () => {
  const { data } = useApiQuery(endpoints.entities.notification.all);
  const notifications = useMemo(() => data?.data?.data ?? [], [data]);

  console.log("notifications", notifications);
  if (notifications.length === 0) {
    return null;
  }

  return (
    <section className=" overflow-hidden relative text-sm z-[10]">
      <div className="animate-marquee whitespace-nowrap flex items-center gap-8">
        {/* First set of notifications */}
        {notifications?.map((notification) => (
          <a
            key={notification._id}
            href={notification.link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex cursor-pointer items-center gap-2 hover:text-indigo-200 transition-colors duration-700"
          >
            <span>{notification.notification_text}</span>
            <ExternalLink className="h-4 w-4" />
          </a>
        ))}
        {/* Duplicate set for seamless loop */}
        {notifications?.map((notification) => (
          <a
            key={`${notification._id}-duplicate`}
            href={notification.link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex cursor-pointer items-center gap-2 hover:text-indigo-200 transition-colors duration-700"
          >
            <span>{notification.notification_text}</span>
            <ExternalLink className="h-4 w-4" />
          </a>
        ))}
      </div>
    </section>
  );
};

export default Notification;
