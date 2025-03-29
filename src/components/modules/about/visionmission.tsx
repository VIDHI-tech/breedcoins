// const VisionMission = () => {
//     const visionmissionConfig = {
//       title: "Vision & Mission",
//       paragraph: `
//         Air Force School, ASTE is located within Bangalore city limits. The school is one of the forerunners amongst the elite educational institutions in the city. It functions under the aegis of IAF educational and cultural society and is meant primarily for the children of Air Force personnel, Air Force School ASTE is recognised school up to XIIth class and affiliated with CBSE New Delhi. Air Force School, ASTE was started as a Nursery School in 1977 to cater to the educational needs of the children of Air Force personnel serving in HAL based units. Over the years, the school has grown in size up to XII std. Air Force School, ASTE functions from its two locations at Murgeshpalya Camp and Akash Vihar Camp and comprises of classes from Nursery to XII std.
//       `,
//     };

//     return (
//       <div id="visionmission" className="flex flex-col lg:flex-row w-full">
//         <section className="text-center lg:text-start bg-[#2B8FDB] text-white py-7 px-5 2xl:pl-32 2xl:pr-14 flex flex-col justify-center lg:w-2/3">
//           <h1 className="text-3xl lg:text-4xl 2xl:text-5xl font-semibold pb-4 max-w-3xl">
//             {visionmissionConfig.title}
//           </h1>
//           <p className="text-sm md:text-base xl:text-lg pb-8">
//             {visionmissionConfig.paragraph}
//           </p>
//         </section>
//         <figure className="w-full">
//           <img
//             src="/determined.gif"
//             alt="Determined"
//             className="h-full w-full object-cover"
//           />
//         </figure>
//       </div>
//     );
//   };

//   export default VisionMission;

import React, { useMemo } from "react";
import ContentSection from "../../common/ContentSection";
import { contentConfig } from "../../../configs/dummyContent";
import { useApiQuery } from "@/hooks/useApiQuery";
import endpoints from "@/api/endpoints";

const VisionMission: React.FC = () => {
  const { data: data2 } = useApiQuery(endpoints.pages.aboutPage.all);
  const data2Filtered = useMemo(() => data2?.data?.data ?? [], [data2]);
  console.log("DataFiltered here", data2Filtered);
  return (
    <section id="visionmission">
      <ContentSection
        config={{
          title: contentConfig.visionMission?.title,
          description: contentConfig.visionMission?.description,
          asset: data2Filtered?.vision_mission_img_video_url,
        }}
      />
    </section>
  );
};

export default VisionMission;
