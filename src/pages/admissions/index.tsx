import Button from "@/components/common/Button";
import { motion } from "framer-motion";
import FeesStructure from "../../components/modules/admissions/fees";
import { CurriculumTable } from "@/components/modules/admissions/admissiontable";
import { useApiQuery } from "@/hooks/useApiQuery";
import endpoints from "@/api/endpoints";
import { useMemo } from "react";

const admissionConfig = {
  imageSrc: "/hero1.JPG",
  disclosure: "./disclosure.pdf",
};
const Cbse: React.FC = () => {
  const { data } = useApiQuery(endpoints.pages.admissionsPage.all);
  const filteredData = useMemo(() => data?.data?.data ?? [], [data]);
  console.log("admissions", filteredData);

  return (
    <>
      <section
        id="top"
        className="relative h-96 lg:h-[500px] flex items-center justify-center text-center"
      >
        <figure className="absolute h-full w-full">
          <img
            src={filteredData?.hero_img ?? admissionConfig.imageSrc}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 h-full w-full bg-black rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-70" />
        </figure>
        <span className="flex flex-col z-10 text-white max-w-6xl items-center gap-7">
          <h2 className="text-3xl lg:text-[56px] font-bold">Admissions</h2>
          <p className="text-lg xl:text-[32px] font-bold leading-10">
            For detailed admission information, please visit: Admission
            Information
          </p>
          <a target="_blank" href={filteredData?.admission_pdf ?? "#"}>
            <Button label="Open PDF" className="text-xs 2xl:text-base w-fit" />
          </a>
        </span>
      </section>
      <section
        id="admissions_circular"
        className="flex flex-col items-center justify-center py-20"
      >
        <h2 className="text-4xl md:text-[53.33px] font-bold text-[#252B42]">
          Curricular
        </h2>
        <div className="max-w-4xl w-full pt-5">
          <CurriculumTable />
        </div>
      </section>
      <FeesStructure />
      <section
        id="admissions_lkg_form"
        className="py-8 px-3 md:py-20 2xl:py-40 xl:px-[calc(100%-80%)] flex flex-col md:flex-row justify-center gap-10 lg:gap-12"
      >
        <motion.div
          className="flex flex-col justify-between text-2xl font-bold bg-white drop-shadow-2xl shadow-2xl border border-gray-50 rounded-lg p-10 space-y-7"
          whileHover={{ scale: 1.05 }}
        >
          <h2 className="text-primary">PRE Nursery & LKG Admission Form</h2>
          <p className="text-[#737373] font-normal">
            Parents seeking admission for their children in the LKG and UKG
            classes can fill out the admission form available on our website.{" "}
          </p>
          <a
            target="_blank"
            href={filteredData?.pre_nursery_lkg_pdf ?? "#"}
            className="w-fit bg-primary text-white px-6 py-4 rounded-sm text-sm"
          >
            Google Form
          </a>
        </motion.div>
        <motion.div
          className="flex flex-col justify-between text-2xl font-bold bg-white drop-shadow-2xl shadow-2xl border border-gray-50 rounded-lg p-10 space-y-7"
          whileHover={{ scale: 1.05 }}
        >
          <h2 className="text-primary">Class XI Admission Form</h2>
          <p className="text-[#737373] font-normal">
            Students wishing to enroll in Class XI can download the admission
            form from our site and submit it according to the given
            instructions.
          </p>
          <a
            target="_blank"
            href={filteredData?.class10_form_pdf ?? "#"}
            className="w-fit bg-primary text-white px-6 py-4 rounded-sm text-sm"
          >
            Google Form
          </a>
        </motion.div>
      </section>
      <section
        id="admissions_class_form"
        className="flex flex-col items-center px-4 pb-20 text-center"
      >
        <h2 className="text-4xl md:text-[53.33px] font-bold text-[#252B42]">
          Admission Guidelines
        </h2>
        <p className="text-sm xl:text-base py-8">
          Our admission process is designed to provide a smooth and transparent
          experience for parents and students. Please review the guidelines
          below before applying
        </p>
        <a
          target="_blank"
          href={filteredData?.admission_guidelines_pdf ?? "#"}
          download
          className="bg-primary text-white underline font-semibold px-4 py-4 lg:px-10 text-xs md:text-base rounded-lg shadow-md hover:bg- transition h-fit"
        >
          View guidelines
        </a>
      </section>
    </>
  );
};

export default Cbse;
