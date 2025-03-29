import dayjs from "dayjs";

export function formatNumber(num: number): string {
  const suffixes = ["", "K", "M", "B", "T"];
  if (num === 0) return "0";
  const absNum = Math.abs(num);
  if (absNum < 1000) {
    const truncated = Math.trunc(num * 100000) / 100000;
    if (truncated % 1 === 0) return truncated.toFixed(0);
    if ((truncated * 10) % 1 === 0) return truncated.toFixed(1);
    if ((truncated * 100) % 1 === 0) return truncated.toFixed(2);
    if ((truncated * 1000) % 1 === 0) return truncated.toFixed(3);
    if ((truncated * 10000) % 1 === 0) return truncated.toFixed(4);
    return truncated.toFixed(5);
  }
  const suffixIndex = Math.floor(Math.log10(absNum) / 3);
  const cappedSuffixIndex = Math.min(suffixIndex, suffixes.length - 1);
  const scaled = num / Math.pow(1000, cappedSuffixIndex);
  const truncated = Math.trunc(scaled * 100) / 100;
  if (truncated % 1 === 0)
    return `${truncated.toFixed(0)}${suffixes[cappedSuffixIndex]}`;
  if ((truncated * 10) % 1 === 0)
    return `${truncated.toFixed(1)}${suffixes[cappedSuffixIndex]}`;
  return `${truncated.toFixed(2)}${suffixes[cappedSuffixIndex]}`;
}

export function convertToProperCase(inputString: string): string {
  // Replace underscores with spaces and capitalize the first letter of each word
  return inputString
    .replace(/_/g, " ") // Replace underscores with spaces
    .replace(/\b\w/g, (char) => char.toUpperCase()); // Capitalize first letter of each word
}

export function truncateText(
  text: any,
  maxLength: number,
  ellipsis: string = "..."
): any {
  if (typeof text !== "string") return text; // Return non-string values as is
  if (!text) return text; // Handle null, undefined, or empty strings
  if (text.length <= maxLength) return text; // No truncation needed
  const truncationLength = maxLength - ellipsis.length;
  return text.slice(0, truncationLength) + ellipsis;
}

export function appStandardDateFormatter3(dateInput: Date | string): string {
  const date = dayjs(dateInput);
  if (!date.isValid()) {
    return "invalid date";
  }

  const day = date.date();
  const suffix = getDaySuffix(day);

  return `${day}${suffix} ${date.format("MMMM YYYY")}`;
}

// Function to determine ordinal suffix
function getDaySuffix(day: number): string {
  if (day >= 11 && day <= 13) {
    return "th";
  }
  switch (day % 10) {
    case 1:
      return "st";
    case 2:
      return "nd";
    case 3:
      return "rd";
    default:
      return "th";
  }
}

export function appStandardDateFormatter2(dateInput: Date | string): string {
  const date = dayjs(dateInput);
  if (!date.isValid()) {
    return "invalid date";
  }
  return date.format("YYYY-MM-DD");
}

export function appStandardDateFormatter(dateInput: Date | string): string {
  const date = dayjs(dateInput);
  if (!date.isValid()) {
    return "invalid date";
  }
  return date.format("MMM DD YYYY");
}

export function appStandardDateTimeFormatter(dateInput: Date | string): string {
  const date = dayjs(dateInput);
  if (!date.isValid()) {
    return "invalid date-time";
  }
  return date.format("MMM DD YYYY, HH:mm");
}

export const getMonthAndDate = (
  input: any
): { month: string; date: number } => {
  const d = dayjs(input);
  if (!d.isValid()) throw new Error("Invalid date format");
  return { month: d.format("MMM"), date: d.date() };
};
