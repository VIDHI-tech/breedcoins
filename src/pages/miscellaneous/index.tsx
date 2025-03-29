import { useMemo, useState } from "react";
import infraConfig from "../../configs/miscellaneousConfig";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

import SchoolCommitee from "../../components/modules/miscellaneous/schoolCommitee";
import Tender from "../../components/modules/miscellaneous/tender";
import Alumni from "../../components/modules/miscellaneous/alumni";
import Careers from "@/components/modules/miscellaneous/careers";
import Blogssection from "../../components/modules/miscellaneous/blogs";
import { useApiQuery } from "@/hooks/useApiQuery";
import endpoints from "@/api/endpoints";

const recruitmentConfig = {
  imageSrc: "/hero1.JPG",
};
const Miscellaneous = () => {
  const { data } = useApiQuery(endpoints.pages.miscellaneousPage.all);
  const filteredData = useMemo(() => data?.data?.data ?? [], [data]);
  // console.log("miscellaneous", filteredData);

  const [activeFolder, setActiveFolder] = useState(infraConfig.folders[0].id);

  return (
    <main id="top" className="flex flex-col w-full">
      <section className="relative  w-full h-[500px] md:h-[600px] flex items-center">
        {/* Background Image */}
        <figure className="absolute h-full w-full">
          <img
            src={filteredData?.hero_img ?? recruitmentConfig.imageSrc}
            alt="Our School"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 h-full w-full bg-black rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-70" />
        </figure>

        {/* Content */}
        <div className="flex flex-col lg:flex-row z-10 px-6 md:px-12 xl:px-28 text-white items-center">
          <section className="flex-1 text-center lg:text-start">
            <h2 className="text-3xl lg:text-[56px] font-bold pb-10">
              Miscellaneous
            </h2>
            <h3 className="text-lg xl:text-[32px] font-bold leading-snug">
              Welcome to AIR FORCE SCHOOL,
              <br /> ASTE, Bengaluru!
            </h3>
          </section>
          <section className="flex-1 space-y-4 text-center lg:text-start items-center lg:items-start flex flex-col">
            <p className="mt-4 text-xs lg:text-base 2xl:text-xl 2xl:leading-relaxed">
              The Achievements section highlights the outstanding
              accomplishments of our students and faculty members, reflecting
              their dedication, hard work, and commitment to excellence. This
              section serves to acknowledge the various awards, honors, and
              recognitions earned in academics, sports, arts, community service,
              and other fields. Each entry includes a brief description of the
              achievement, showcasing the significance of the accomplishment and
              its impact on personal and institutional growth.
            </p>
          </section>
        </div>
      </section>
      <section className="max-w-full px-4 2xl:px-28 flex flex-col lg:flex-row w-full overflow-x-hidden">
        <div className="w-full hidden lg:flex lg:flex-col lg:max-w-xs items-start space-y-8 overflow-scroll py-20">
          {infraConfig.folders.map((folder) => (
            <Button
              key={folder.id}
              variant="outline"
              className={cn(
                "w text-xl text-[#64748B] border border-[#CBD5E1] font-medium rounded-3xl py-5 bg-[#F8FAFC]",
                activeFolder === folder.id &&
                  "bg-primary text-white font-bold border-none hover:bg-primary-hover hover:text-white"
              )}
              onClick={() => setActiveFolder(folder.id)}
            >
              {folder.name}
            </Button>
          ))}
        </div>
        <div className="flex flex-col w-full overflow-x-hidden px-5 lg:pl-16">
          <Careers />
          <SchoolCommitee />
          <Tender />
          <Alumni />
          <Blogssection />
        </div>
      </section>
    </main>
  );
};

export default Miscellaneous;
