import React, {
  useLayoutEffect,
  useState,
  useRef,
  useMemo,
  useCallback,
} from "react";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Plus, ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { TooltipWithCopy } from "./tooltip-content-with-copy";

type TableColumn<T> = {
  key: keyof T;
  header: string;
  render?: (value: any, row: T) => React.ReactNode;
  isRightAligned?: boolean;
  /** Optional minWidth for this column */
  minW?: string;
  /** Optional maxWidth for this column */
  maxW?: string;
  /** Optional fixed width for this column */
  width?: string;
};

type TablePageProps<T> = {
  title?: string;
  createButtonText?: string;
  onCreate?: () => void;
  columns: TableColumn<T>[];
  data: T[];
  /**
   * If provided and > 0, table will paginate data at the given page size.
   * If omitted or invalid, no pagination is used and table shows all data.
   */
  pageSize?: number;
};

export function TablePage<T>({
  title,
  createButtonText,
  onCreate,
  columns,
  data,
  pageSize,
}: TablePageProps<T>) {
  const headerRef = useRef<HTMLDivElement | null>(null);
  const tableRef = useRef<HTMLDivElement | null>(null);

  const [screenHeight, setScreenHeight] = useState<number>(0);
  const [tableTop, setTableTop] = useState<number>(0);
  const [maxHeight, setMaxHeight] = useState<string>("100vh");

  const [screenWidth, setScreenWidth] = useState<number>(0);
  const [tableLeft, setTableLeft] = useState<number>(0);
  const [maxWidth, setMaxWidth] = useState<string>("100vw");

  // Current page state (only relevant if pageSize is valid)
  const [currentPage, setCurrentPage] = useState<number>(1);

  // Compute total pages if pageSize is valid, else default to 1
  const totalPages = useMemo(() => {
    if (pageSize && pageSize > 0) {
      return Math.ceil(data.length / pageSize);
    }
    return 1;
  }, [data.length, pageSize]);

  // Derive paginated data if pageSize is valid
  const paginatedData = useMemo(() => {
    if (!pageSize || pageSize <= 0) return data;
    const startIndex = (currentPage - 1) * pageSize;
    const endIndex = startIndex + pageSize;
    return data.slice(startIndex, endIndex);
  }, [data, currentPage, pageSize]);

  const handlePageChange = useCallback(
    (page: number) => {
      // Clamp page between 1 and totalPages
      const newPage = Math.max(1, Math.min(totalPages, page));
      setCurrentPage(newPage);
    },
    [totalPages]
  );

  // Desktop pagination logic (always show first, one before/after current, and last)
  const getPageNumbers = (): Array<number | string> => {
    if (totalPages <= 1) return [];

    const pages: Array<number | string> = [];
    pages.push(1); // Always show first page

    const start = Math.max(2, currentPage - 1);
    const end = Math.min(totalPages - 1, currentPage + 1);

    if (start > 2) {
      pages.push("...");
    }

    for (let i = start; i <= end; i++) {
      pages.push(i);
    }

    if (end < totalPages - 1) {
      pages.push("...");
    }

    if (totalPages > 1) {
      pages.push(totalPages);
    }

    return pages;
  };

  const calculateHeightsAndWidths = () => {
    const screenHeight = window.innerHeight;
    const screenWidth = window.innerWidth;

    const tableTop = tableRef.current
      ? tableRef.current.getBoundingClientRect().top + window.scrollY
      : 0;

    const tableLeft = tableRef.current
      ? tableRef.current.getBoundingClientRect().left
      : 0;

    setScreenHeight(screenHeight);
    setScreenWidth(screenWidth);
    setTableTop(tableTop);
    setTableLeft(tableLeft);

    const availableHeight = screenHeight - tableTop - 80; // 80px is padding/margin
    const availableWidth = screenWidth - tableLeft - 70; // Subtract some padding

    setMaxHeight(`${availableHeight}px`);
    setMaxWidth(`${availableWidth}px`);
  };

  useLayoutEffect(() => {
    calculateHeightsAndWidths();
    window.addEventListener("resize", calculateHeightsAndWidths);
    return () => {
      window.removeEventListener("resize", calculateHeightsAndWidths);
    };
  }, []);

  // Determine mobile view (<768px) using the screenWidth state.
  const isMobile = screenWidth < 768;
  // Even smaller button CSS and icon size for mobile pagination.
  const iconSize = 16;
  const btnCss = ({
    isActive,
    isDisabled,
  }: {
    isActive?: boolean;
    isDisabled?: boolean;
  }) =>
    cn(
      "aspect-square h-2 text-[10px] p-2 sm:text-[12px] sm:p-3 hover:bg-primary-hover hover:brightness-60 hover:text-white active:bg-primary active:text-white",
      {
        "bg-primary text-white": isActive,
        "bg-white text-black": !isActive,
        "opacity-50 cursor-not-allowed": isDisabled,
      }
    );

  return (
    <div style={{ padding: "32px 0px" }}>
      {(title || onCreate || createButtonText) && (
        <div
          ref={headerRef}
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: "24px",
          }}
        >
          {title && (
            <h1 style={{ fontSize: "24px", fontWeight: "bold" }}>{title}</h1>
          )}
          <div style={{ display: "flex", gap: "8px" }}>
            {onCreate && (
              <Button onClick={onCreate}>
                <Plus />
                {createButtonText ?? "Create"}
              </Button>
            )}
          </div>
        </div>
      )}

      <div
        className="border-2 border-[#0000001F] scrollbar-x shadow-[-20px_0_40px_rgba(0,0,0,0.13),20px_0_40px_rgba(0,0,0,0.13)]"
        ref={tableRef}
        style={{
          maxWidth: maxWidth,
          width: "100%",
          overflowX: "auto",
          borderRadius: "8px",
        }}
      >
        <div
          className="scrollbar-y scrollbar-x w-full"
          style={{
            overflowX: "auto",
            overflowY: "auto",
            width: "100%",
          }}
        >
          <Table
            className="border-[#0000001F]"
            style={{
              // Force the table to stretch to the container's full width
              width: "100%",
              tableLayout: "auto",
            }}
          >
            <TableHeader className="bg-primary">
              <TableRow>
                {columns.map((column) => (
                  <TableHead
                    key={String(column.key)}
                    className={cn(
                      "text-white p-5",
                      column.isRightAligned && "text-right"
                    )}
                  >
                    {column.header}
                  </TableHead>
                ))}
              </TableRow>
            </TableHeader>
            <TableBody className="bg-white text-black">
              {paginatedData.map((row, rowIndex) => (
                <TableRow
                  key={rowIndex}
                  className="border-[#0000001F] border-y-2"
                >
                  {columns.map((column) => (
                    <TableCell
                      key={String(column.key)}
                      style={{
                        /**
                         * If `width` is provided, the browser will try to give that exact width
                         * but `minWidth` / `maxWidth` can still override if there's a conflict.
                         * (That's standard CSS precedence.)
                         */
                        width: column.width,
                        minWidth: column.minW ?? "120px",
                        maxWidth: column.maxW ?? "none",
                      }}
                      className={cn(
                        "px-5",
                        column.isRightAligned && "text-right"
                      )}
                    >
                      {column.render ? (
                        column.render(row[column.key], row)
                      ) : (
                        <TooltipWithCopy tooltipText={row[column.key]}>
                          <span>{truncateText(row[column.key], 28)}</span>
                        </TooltipWithCopy>
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>

      {/* Pagination Controls */}
      {pageSize && pageSize > 0 && totalPages > 1 && (
        <div className="flex items-center justify-center mt-4 gap-2 -translate-x-5">
          {isMobile ? (
            <>
              {/* Mobile Layout: Left, Start, (if applicable) Ellipsis, (if applicable) Current, (if applicable) Ellipsis, End, Right */}
              <Button
                variant="outline"
                className={btnCss({
                  isDisabled: currentPage === 1,
                })}
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 1}
              >
                <ChevronLeft size={iconSize} />
              </Button>
              {/* Start (first page) */}
              <Button
                variant={currentPage === 1 ? "default" : "outline"}
                className={btnCss({
                  isActive: currentPage === 1,
                  isDisabled: currentPage === 1,
                })}
                onClick={() => handlePageChange(1)}
              >
                1
              </Button>
              {/* Show left ellipsis if current page is greater than 2 */}
              {totalPages > 2 && currentPage > 2 && (
                <Button
                  variant="ghost"
                  className={btnCss({ isDisabled: true })}
                  disabled
                >
                  ...
                </Button>
              )}
              {/* Show current page if it's not the first or last */}
              {totalPages > 2 &&
                currentPage !== 1 &&
                currentPage !== totalPages && (
                  <Button
                    variant="default"
                    className={btnCss({ isActive: true })}
                    onClick={() => handlePageChange(currentPage)}
                  >
                    {currentPage}
                  </Button>
                )}
              {/* Show right ellipsis if current page is at least two less than the last page */}
              {totalPages > 2 && currentPage < totalPages - 1 && (
                <Button
                  variant="ghost"
                  className={btnCss({ isDisabled: true })}
                  disabled
                >
                  ...
                </Button>
              )}
              {/* End (last page) */}
              {totalPages > 1 && (
                <Button
                  variant={currentPage === totalPages ? "default" : "outline"}
                  className={btnCss({ isActive: currentPage === totalPages })}
                  onClick={() => handlePageChange(totalPages)}
                >
                  {totalPages}
                </Button>
              )}
              <Button
                variant="outline"
                className={btnCss({ isDisabled: currentPage === totalPages })}
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
              >
                <ChevronRight size={iconSize} />
              </Button>
            </>
          ) : (
            <>
              {/* Desktop: Full pagination */}
              <Button
                variant="outline"
                className={btnCss({ isDisabled: currentPage === 1 })}
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 1}
              >
                <ChevronLeft size={iconSize} />
              </Button>
              {getPageNumbers().map((p, idx) =>
                typeof p === "number" ? (
                  <Button
                    key={`page-${p}`}
                    variant={p === currentPage ? "default" : "outline"}
                    className={btnCss({ isActive: p === currentPage })}
                    onClick={() => handlePageChange(p)}
                  >
                    {p}
                  </Button>
                ) : (
                  <Button
                    key={`ellipsis-${idx}`}
                    variant="ghost"
                    className={btnCss({ isDisabled: true })}
                    disabled
                  >
                    {p}
                  </Button>
                )
              )}
              <Button
                variant="outline"
                className={btnCss({ isDisabled: currentPage === totalPages })}
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
              >
                <ChevronRight size={iconSize} />
              </Button>
            </>
          )}
        </div>
      )}
    </div>
  );
}

function truncateText(
  text: any,
  maxLength: number,
  ellipsis: string = "..."
): any {
  if (typeof text !== "string") return text;
  if (!text) return text;
  if (text.length <= maxLength) return text;
  const truncationLength = maxLength - ellipsis.length;
  return text.slice(0, truncationLength) + ellipsis;
}
