// src/dayjsConfig.ts
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import updateLocale from "dayjs/plugin/updateLocale";

// Extend Day.js with the Relative Time plugin
dayjs.extend(relativeTime);
dayjs.extend(updateLocale);
// Customize the 'en' locale with abbreviated relative time strings
dayjs.updateLocale("en", {
  relativeTime: {
    future: "in %s",
    past: "%s ago",
    s: "s",
    m: "m",
    mm: "%dm",
    h: "h",
    hh: "%dh",
    d: "d",
    dd: "%dd",
    M: "mo",
    MM: "%dmo",
    y: "y",
    yy: "%dy",
  },
});

export default dayjs;
