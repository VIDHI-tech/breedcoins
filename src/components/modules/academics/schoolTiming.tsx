import { useApiQuery } from "@/hooks/useApiQuery";
import { useMemo } from "react";
import endpoints from "@/api/endpoints";
import { TablePage } from "@/components/common/table-page-3-pagination-airforce-theme";

const SchoolTiming = () => {
  return (
    <section
      id="academics_school_timing"
      className="border-b-2 py-20 space-y-5 md:space-y-10"
    >
      <h1 className="text-3xl md:text-5xl">School Timing</h1>
      <div className="grid grid-cols-1 lg:grid-cols-2 text-sm md:gap-2 md:text-lg">
        <p>School Timings will be 8 am to 2.40 pm</p>
        <p>School is working all days of the week (Mon-Sat)</p>
        <p>Every second Saturday is a holiday</p>
        <p>Every Saturday is holiday for the pre-primary section</p>
      </div>
      <div className="max-w-4xl w-full">
        <TimingsTable />
      </div>
    </section>
  );
};

export default SchoolTiming;

const TimingsTable = () => {
  const { data } = useApiQuery(endpoints.entities.tableTimings.all);
  const tableFilteredData = useMemo(() => data?.data?.data ?? [], [data]);
  // console.log(" kdv", tableFilteredData);

  const tableData = useMemo(
    () =>
      tableFilteredData.map(
        (
          {
            _id,
            standard,
            school_working_hours,
          }: {
            _id: string;
            standard: string;
            school_working_hours: string;
          },
          index
        ) => ({
          _id,
          sl_no: index + 1,
          standard,
          school_working_hours,
        })
      ) || [],
    [tableFilteredData]
  );
  const columns = [
    { key: "sl_no", header: "Sl.no", width: "120px" },
    { key: "standard", header: "Classes", canFilter: true },
    {
      key: "school_working_hours",
      header: "School Working Hours",
      canFilter: true,
    },

    // { key: "isActive", header: "Status" },
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
