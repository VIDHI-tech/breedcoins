import endpoints from "@/api/endpoints";
import { useApiQuery } from "@/hooks/useApiQuery";
import React, { useMemo } from "react";

const pdfConfig = {
  feesStructure: "/fees.pdf",
};

const FeesStructure: React.FC = () => {
  const { data } = useApiQuery(endpoints.pages.admissionsPage.all);
  const filteredData = useMemo(() => data?.data?.data ?? [], [data]);
  console.log("fee", filteredData);

  return (
    <section id="admissions_fees_structure" className="text-white flex">
      <span className="bg-[#2459A8] w-20 lg:w-40 hidden md:block" />
      <span className="bg-[#023AA2] flex flex-col md:flex-row w-full px-10 py-28 lg:px-32 items-center justify-between gap-y-10 md:gap-y-0">
        <div>
          <h2 className="text-[38px] font-bold">Fees Structure</h2>
          <p className="text-sm md:text-base mt-3 text-gray-200 max-w-md">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut ...
          </p>
        </div>

        <a
          target="_blank"
          href={filteredData?.fees_pdf ?? "#"}
          className="bg-white text-[#003DA5] font-semibold px-4 py-4 lg:px-10 text-sm lg:text-lg rounded-lg shadow-md hover:bg-gray-200 transition h-fit"
        >
          DOWNLOAD
        </a>
      </span>
    </section>
  );
};

export default FeesStructure;
