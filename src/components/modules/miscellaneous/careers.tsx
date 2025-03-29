import endpoints from "@/api/endpoints";
import Button from "@/components/common/Button";
import { TablePage } from "@/components/common/table-page-3-pagination-airforce-theme";
import { useApiQuery } from "@/hooks/useApiQuery";
import { useMemo } from "react";

const Careers = () => {
  const { data } = useApiQuery(endpoints.pages.miscellaneousPage.all);
  const filteredData = useMemo(() => data?.data?.data ?? [], [data]);
  console.log("career", filteredData);

  return (
    <section className="py-20 border-b-2" id="miscellaneous_careers">
      <h2 className=" flex justify-between items-center pb-10 text-4xl md:text-[53.33px] font-bold text-[#252B42]">
        Careers
        <a target="_blank" href={filteredData?.careers_pdf ?? "#"}>
          <Button label="Click here" className="text-sm h-fit" />
        </a>
      </h2>
      <p className="text-lg">
        Air Force School, ASTE is located within Bangalore city limits. The
        school is one of the forerunners amongst the elite educational
        institutions in the city. It functions under the aegis of IAF
        educational and cultural society and is meant primarily for the children
        of Air Force personnel.
      </p>
      <div className="flex justify-start">
        <div className="max-w-4xl w-full">
          <CareersTable />
        </div>
      </div>
    </section>
  );
};

export default Careers;

const CareersTable = () => {
  const { data } = useApiQuery(endpoints.entities.tableCareers.all);
  const tableFilteredData = useMemo(() => data?.data?.data ?? [], [data]);
  // console.log("num", tableFilteredData);

  const tableData = useMemo(
    () =>
      tableFilteredData.map(
        (
          {
            _id,
            designation,
            num_vacancy,
            isActive,
          }: {
            _id: string;
            designation: string;
            num_vacancy: number;

            isActive: boolean;
          },
          index
        ) => ({
          _id,
          sl_no: index + 1,
          designation,
          num_vacancy,

          isActive: isActive ? "Active" : "Inactive",
        })
      ) || [],
    [tableFilteredData]
  );
  const columns = [
    { key: "sl_no", header: "Sl.no", width: "120px" },
    { key: "designation", header: "Designation", canFilter: true },
    { key: "num_vacancy", header: "Vacancies" },
    //
  ];
  return (
    <TablePage
      // title="Table Careers"
      // createButtonText="Create"
      // onCreate={() => setIsCreating(true)}
      columns={columns}
      data={tableData}
      pageSize={5}
    />
  );
};
