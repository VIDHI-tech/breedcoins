import endpoints from "@/api/endpoints";
import { useMemo } from "react";
import { useApiQuery } from "@/hooks/useApiQuery";
import { CustomModal } from "@/components/common/modals/custom-modal";
import { useLatestUpdatesStore } from "@/stores/latest_updates.store";
import { ExternalLink, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { useSectionNavigation } from "@/components/common/scroll-to-hash";

export const LatestUpdatesModal = () => {
  const { isOpen, onClose } = useLatestUpdatesStore();
  // console.log("isOpen", isOpen);
  const { navigateToSection } = useSectionNavigation();

  const route = useMemo(() => {
    if (isOpen) {
      return endpoints.entities.latest_updates.one(isOpen as string);
    }
    return "";
  }, [isOpen]);

  const { data, isLoading } = useApiQuery(route);
  // const filteredData = data?.data?.data ?? [];
  const filteredData = useMemo(
    () => (data?.data?.data ? data.data.data : null),
    [data]
  );
  console.log("filteredData", filteredData);
  if (!isOpen) return null;
  return (
    <CustomModal
      isOpen={!!isOpen}
      onClose={onClose}
      title={filteredData?.title ?? `Update ${isOpen}`}
      submitButtonText="Delete"
      onSubmit={() => {}}
      footer={<></>}
      needX={true}
    >
      {isLoading ? (
        <>Loading...</>
      ) : filteredData ? (
        <div className="space-y-4 border hover:shadow-2xl rounded-md p-5">
          {filteredData?.section && (
            <p className="inline-block px-3 py-1.5 bg-primary text-white rounded-tl-2xl rounded-br-2xl text-xs mb-3 md:mb-4">
              {filteredData?.section.section_name}
            </p>
          )}
          <p className="text-base md:text-lg text-black">
            {filteredData?.description}
          </p>
          {/* <div>
            <h2>Documents</h2>
            <ul className="list-disc list-inside">
              {filteredData?.pdfLinks?.length > 0 ? (
                filteredData.pdfLinks.map((pdf, index) => (
                  <li key={index}>
                    <a
                      href={pdf}
                      target="_blank"
                      rel="noopener noreferrer"
                      className=""
                    >
                      {pdf}
                    </a>
                  </li>
                ))
              ) : (
                <p>No PDF documents available.</p>
              )}
            </ul>
          </div>
          <div>
            <h2>Links</h2>
            <ul className="grid grid-cols-3 gap-4">
              {filteredData?.links?.length > 0 ? (
                filteredData.links.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className=" "
                    >
                      
                    </a>
                  </li>
                ))
              ) : (
                <p>No links available.</p>
              )}
            </ul>
          </div> */}
          {(filteredData?.pdfLinks.length > 0 ||
            filteredData?.links.length > 0) && (
            <>
              <Separator />
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {filteredData?.pdfLinks.length > 0 && (
                  <div className="space-y-2">
                    <h4 className="text-sm font-medium">Documents</h4>
                    <div className="flex flex-wrap gap-2">
                      {filteredData?.pdfLinks.map((link, index) => (
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

                {filteredData?.links.length > 0 && (
                  <div className="space-y-2">
                    <h4 className="text-sm font-medium">Related Links</h4>
                    <div className="flex flex-wrap gap-2">
                      {filteredData?.links.map((link, index) => (
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

          {filteredData?.section && (
            <div className="flex justify-end">
              <Button
                className="bg-primary hover:bg-primary-hover"
                onClick={() => {
                  console.log("section", filteredData?.section);
                  navigateToSection(filteredData?.section?.section_id);
                }}
              >
                See More
              </Button>
            </div>
          )}
        </div>
      ) : (
        <div>No data found</div>
      )}
    </CustomModal>
  );
};
