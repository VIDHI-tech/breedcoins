import endpoints from "@/api/endpoints";
import { useApiQuery } from "@/hooks/useApiQuery";
import { motion } from "framer-motion";
import { useMemo } from "react";

const SchoolCommitee = () => {
  const { data } = useApiQuery(endpoints.pages.miscellaneousPage.all);
  const filteredData = useMemo(() => data?.data?.data ?? [], [data]);
  // console.log(" school commitee", filteredData);

  return (
    <div className="py-20 border-b-2" id="miscellaneous_school_committee">
      <h1 className="text-4xl md:text-[53.33px] font-bold text-[#252B42] flex justify-between items-center ">
        School Committee
      </h1>
      <p className="mt-2 font-bold text-[#252B42] text-xl py-2 w-full">
        COMMITTEES FOR THE ACADEMIC YEAR 2024-25
      </p>
      <div className="flex gap-4 pt-10">
        <motion.div
          id="miscellaneous_school_committe_av"
          whileHover={{ scale: 1.05 }}
          className="bg-white drop-shadow-2xl shadow-2xl border border-x-gray-100 p-6 rounded-xl"
        >
          <h2 className="text-base font-bold text-primary">AV CAMP</h2>
          <a
            href={filteredData?.school_committee_av_camp_pdf ?? "#"}
            target="_blank"
            rel="noopener noreferrer"
            className="block text-sm bg-primary text-white text-center py-2 mt-4 rounded-lg hover:bg-primary-hover px-10"
          >
            Click Here
          </a>
        </motion.div>
        <motion.div
          id="miscellaneous_school_committe_gv"
          whileHover={{ scale: 1.05 }}
          className="bg-white drop-shadow-2xl shadow-2xl border border-x-gray-100 p-6 rounded-xl"
        >
          <h2 className="text-base font-bold text-primary">GV CAMP</h2>
          <a
            href={filteredData?.school_committee_gv_camp_pdf ?? "#"}
            target="_blank"
            rel="noopener noreferrer"
            className="block text-sm bg-primary text-white text-center py-2 mt-4 rounded-lg hover:bg-primary-hover px-10"
          >
            Click Here
          </a>
        </motion.div>
      </div>
    </div>
  );
};

export default SchoolCommitee;
