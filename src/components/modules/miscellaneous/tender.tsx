import endpoints from "@/api/endpoints";
import Button from "@/components/common/Button";
import { useApiQuery } from "@/hooks/useApiQuery";
import { useMemo } from "react";

const Tender = () => {
  const { data } = useApiQuery(endpoints.pages.miscellaneousPage.all);
  const filteredData = useMemo(() => data?.data?.data ?? [], [data]);
  // console.log("tender", filteredData);

  return (
    <section id="miscellaneous_tender" className="border-b-2 py-20">
      <h2 className="text-4xl md:text-[53.33px] font-bold text-[#252B42] pb-10">
        Tender
      </h2>
      <p className="text-lg pb-10">
        Join Our Team at Air Force School Reconnect with Air Force School
        Bangalore! Our school has shaped countless lives and has been enriched
        by the students who walked its halls. The bond between the school and
        its alumni is timeless, and we cherish the memories and experiences
        shared over the years. We are reaching out to all former students who
        have been a part of this incredible journey. It would be a pleasure to
        reconnect and celebrate the legacy we have built together. To strengthen
        this lifelong connection, we have prepared an alumni pro forma. We
        invite you to fill it out and send it back to us, allowing us to keep in
        touch and celebrate our shared history. We look forward to hearing from
        you!
      </p>
      <a target="_blank" href={filteredData?.tender_pdf ?? "#"}>
        <Button label="Open PDF" className="text-sm" />
      </a>
    </section>
  );
};

export default Tender;
