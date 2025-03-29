import React, { useMemo } from "react";
import ContentSection from "../common/ContentSection";
import { useApiQuery } from "@/hooks/useApiQuery";
import endpoints from "@/api/endpoints";

const determinedConfig = "/hero1.JPG";

const Determined: React.FC = () => {
  const { data: data2 } = useApiQuery(endpoints.pages.homePage.all);
  const data2Filtered = useMemo(() => data2?.data?.data ?? [], [data2]);
  // console.log("DataFiltered here", data2Filtered);
  return (
    <ContentSection
      config={{
        title: "We are determined to achieve the highest standards",
        description:
          "Air Force School, ASTE is located within Bangalore city limits. The school is one of the forerunners amongst the elite educational institutions in the city. It functions under the aegis of IAF educational and cultural society and is meant primarily for the children of Air Force personnel, Air Force School ASTE is recognised school up to XIIth class and affiliated with CBSE New Delhi. Air Force School, ASTE was started as a Nursery School in 1977 to cater to the educational needs of the children of Air Force personnel serving in HAL based units. Over the years, the school has grown in size up to XII std. Air Force School, ASTE functions from its two locations at Murgeshpalya Camp and Akash Vihar Camp and comprises of classes from Nursery to XII std.",
        asset: data2Filtered?.determined_img_video_url ?? determinedConfig,
      }}
    />
  );
};

export default Determined;
