import { useApiQuery } from "@/hooks/useApiQuery";
import endpoints from "@/api/endpoints";
import { useMemo } from "react";
import { InfoSection } from "@/components/common/titledescbtn";

const RulesRegulations = () => {
  const { data } = useApiQuery(endpoints.pages.academicsPage.all);
  const dataFiltered = useMemo(() => data?.data?.data ?? [], [data]);
  console.log("DataFiltered hello here", dataFiltered);

  return (
    <section id="academics_rules_regulations" className="border-b-2 py-20">
      <InfoSection
        title="Rules & Regulations"
        description="Air Force School, ASTE is located within Bangalore city limits. The school is one of the forerunners amongst the elite educational institutions in the city. It functions under the aegis of IAF educational and cultural society and is meant primarily for the children of Air Force personnel, Air Force School ASTE is recognised school up to XIIth class and affiliated with CBSE New Delhi. Air Force School, ASTE was started as a Nursery School in 1977 to cater to the educational needs of the children of Air Force personnel serving in HAL based units. Over the years, the school has grown in size up to XII std. Air Force School, ASTE functions from its two locations at Murgeshpalya Camp and Akash Vihar Camp and comprises of classes from Nursery to XII std."
        button={{
          label: "Load More",
          link: dataFiltered?.rules_and_regulations_pdf ?? "#",
        }}
      />
    </section>
  );
};

export default RulesRegulations;
