import { useApiQuery } from "@/hooks/useApiQuery";
import { useMemo } from "react";
import endpoints from "@/api/endpoints";
import { TablePage } from "@/components/common/table-page-3-pagination-airforce-theme";

const ClassTime = () => {
  return (
    <section
      id="academics_class_time_table"
      className="border-b-2 py-14 space-y-10"
    >
      <div>
        <h1>Class Time Table</h1>
        <h2>PRIMARY SCHOOL</h2>
        <ClassTimeTable />
      </div>
      <div></div>
    </section>
  );
};

export default ClassTime;

const ClassTimeTable = () => {
  const { data } = useApiQuery(endpoints.entities.timetable.createSubTimetable);
  const tableFilteredData = useMemo(() => data?.data?.data ?? [], [data]);
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
          index: number
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
