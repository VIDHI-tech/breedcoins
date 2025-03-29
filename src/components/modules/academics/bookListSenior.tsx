import { useApiQuery } from "@/hooks/useApiQuery";
import { InfoSection } from "../../common/titledescbtn";
import endpoints from "@/api/endpoints";
import { useMemo } from "react";

const BookListSenior = () => {
  const { data } = useApiQuery(endpoints.pages.academicsPage.all);
  const dataFiltered = useMemo(() => data?.data?.data ?? [], [data]);
  console.log("DataFiltered hello here", dataFiltered);

  return (
    <section id="academics_senior_wing" className="border-b-2 py-20">
      <InfoSection
        title="Book List of Senior Wing"
        description="Air Force School, ASTE is located within Bangalore city limits. The school is one of the forerunners amongst the elite educational institutions in the city. It functions under the aegis of IAF educational and cultural society and is meant primarily for the children of Air Force personnel."
        button={{
          label: "Read PDF",
          link: dataFiltered?.book_list_senior_wing_pdf ?? "#",
        }}
      />
    </section>
  );
};

export default BookListSenior;
