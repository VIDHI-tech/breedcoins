import { cn } from "@/lib/utils";

export const RichTextPreview = ({ content }: { content: string }) => {
  const transformedContent = content.replace(/<p><\/p>/g, "<br />");

  return (
    <div
      className={cn(
        "prose dark:prose-invert max-w-none",
        "bg-background",
        "[&>*:first-child]:mt-0",
        "[&>*:last-child]:mb-0",
        "[&>ul]:list-disc", // Apply 'list-disc' to unordered lists (ul)
        "[&>ol]:list-decimal", // Apply 'list-decimal' to ordered lists (ol)
        "[&>ul>li]:ml-6", // Indent unordered list items
        "[&>ol>li]:ml-6" // Indent ordered list items
      )}
      dangerouslySetInnerHTML={{ __html: transformedContent }}
    />
  );
};
