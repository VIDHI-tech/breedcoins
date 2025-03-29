import Button from "@/components/common/Button";
import RajBhasha from "../../components/modules/cbse/rajBhasha";
import Circular from "@/components/modules/cbse/circular";
import { useApiQuery } from "@/hooks/useApiQuery";
import endpoints from "@/api/endpoints";
import { useMemo } from "react";

const cbseConfig = {
  imageSrc: "/hero1.JPG",
  disclosure: "./disclosure.pdf",
  workshop1: "./workshop1.pdf",
  workshop2: "./workshop2.pdf",
};
const teacherTraining = {
  title: "Teachers’ Training Programme",
  imageSrc: "/hero1.JPG",
  message:
    "AFSASTE emphasizes continuous professional development for its educators. While specific details about the school's training programmes are not provided in the available sources, teachers are encouraged to participate in CBSE's capacity-building and empowerment initiatives.",
};

const Cbse: React.FC = () => {
  const { data } = useApiQuery(endpoints.pages.cbsePage.all);
  const filteredData = useMemo(() => data?.data?.data ?? [], [data]);
  console.log("cbse", filteredData);
  console.log(
    "Workshop I:",
    filteredData?.teachers_training_program_workshop_pdf1
  );
  console.log(
    "Workshop II:",
    filteredData?.teachers_training_program_workshop_pdf2
  );

  return (
    <>
      <section
        id="top"
        className="relative w-full h-[500px] flex items-center justify-center"
      >
        <figure className="absolute h-96 w-full">
          <img
            src={filteredData?.hero_img ?? cbseConfig?.imageSrc}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 h-full w-full bg-black rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-70" />
        </figure>
        <span className="flex flex-col z-10 text-white text-center max-w-7xl md:px-4 2xl:px-0">
          <h2 className="text-3xl lg:text-[56px] font-bold pb-10">CBSE</h2>
          <p className="text-lg md:text-2xl 2xl:text-[32px] font-bold md:leading-snug">
            The CBSE regularly issues circulars to provide updates on academic
            policies, examinations, and other essential information. These
            circulars are accessible on the official CBSE website under the
            'Examination Circulars' section.
          </p>
        </span>
      </section>
      <Circular />
      <section
        id="cbse_mandatory_public_disclosure"
        className="flex flex-col items-center px-4 py-14 xl:py-20 text-center"
      >
        <h2 className="text-3xl md:text-5xl lg:text-6xl text-[#080A12]">
          Mandatory Public Disclosure
        </h2>
        <p className="text-sm xl:text-base py-8">
          Mandatory Public Disclosure refers to the legal requirement for
          organizations, especially publicly listed companies, to share specific
          and important information with the public.
          <br /> For more information, visit
        </p>
        <a
          href={filteredData?.mandatory_public_disclosure_pdf ?? "#"}
          target="_blank"
          download
          className="bg-primary text-white underline font-semibold px-4 py-4 lg:px-10 text-xs md:text-base rounded-lg shadow-md hover:bg- transition h-fit"
        >
          Mandatory Public Disclosure {new Date().getFullYear()}
        </a>
      </section>
      <section
        id="cbse_teachers_training_programme"
        className="relative py-16 px-6 overflow-hidden bg-white"
      >
        {/* Background Design */}

        <figure className="absolute -top-20 md:-top-64 md:-left-32 2xl:-top-28 -left-5 z-10">
          <img
            src="/managewavetop.png"
            className="w-full h-full object-contain"
          />
        </figure>
        <figure className="absolute bottom-0 right-0">
          <img src="/managewave.png" className="w-full h-full object-contain" />
        </figure>

        {/* Content Wrapper */}
        <div className="flex flex-col lg:flex-row items-center gap-14 md:py-16 xl:px-[calc(100%-90%)]">
          <section className="w-full">
            <div className="w-32 h-2 bg-primary" />
            <h2 className="text-4xl md:text-[53.33px] md:max-w-2xl font-bold py-10 text-[#252B42] leading-tight">
              {teacherTraining.title}
            </h2>
            <p className="text-sm md:text-xl text-[#737373] pb-7 tracking-wide">
              {teacherTraining.message}
            </p>
            <span className="flex gap-4">
              <a
                className="cursor-pointer bg-primary z-10 text-white font-semibold px-4 py-3 lg:px-10 text-xs md:text-base rounded-lg shadow-md hover:bg- transition h-fit hover:bg-primary"
                target="_blank"
                href={
                  filteredData?.teachers_training_program_workshop_pdf1 ?? "#"
                }
              >
                {/* <Button label="Workshop I" /> */}
                Workshop I
              </a>
              <a
                target="_blank"
                className="cursor-pointer bg-primary z-10 text-white font-semibold px-4 py-3 lg:px-10 text-xs md:text-base rounded-lg shadow-md hover:bg- transition h-fit"
                href={
                  filteredData?.teachers_training_program_workshop_pdf2 ?? "#"
                }
              >
                Workshop II
              </a>
            </span>
          </section>
          <figure className="w-2/3 lg:w-full">
            <img
              src={
                filteredData?.teachers_training_program_img ??
                teacherTraining.imageSrc
              }
              className="w-full h-full object-cover rounded-2xl"
            />
          </figure>
        </div>
      </section>
      <RajBhasha />
    </>
  );
};

export default Cbse;
