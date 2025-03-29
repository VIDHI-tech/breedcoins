import endpoints from "@/api/endpoints";
import { RichTextPreview } from "@/components/common/preview";
import { TablePage } from "@/components/common/table-page-3-pagination-airforce-theme";
import { useApiQuery } from "@/hooks/useApiQuery";
import { useMemo } from "react";

const ExamTime = () => {
  const { data } = useApiQuery(endpoints.pages.academicsPage.all);
  const filteredData = useMemo(() => data?.data?.data ?? [], [data]);
  console.log("filteredData", filteredData);
  return (
    <section
      id="academics_exam_time_table"
      className="border-b-2 py-20 space-y-5"
    >
      <h1 className="text-3xl md:text-5xl">Exam Time Table</h1>
      <div className="max-w-5xl w-full">
        <ExamTable />
      </div>
      <h2 className="text-2xl font-bold">CLASS VI TO X</h2>
      {filteredData?.exam_timetable_text && (
        <RichTextPreview content={filteredData?.exam_timetable_text} />
      )}
    </section>
  );
};

export default ExamTime;

const ExamTable = () => {
  const { data } = useApiQuery(endpoints.entities.tableExamTimetable.all);
  const tableFilteredData = useMemo(() => data?.data?.data ?? [], [data]);
  console.log("HK ", tableFilteredData);

  const tableData = useMemo(
    () =>
      tableFilteredData.map(
        (
          {
            _id,
            name_of_examination,
            standard,
            timetable_pdf,
          }: {
            _id: string;
            name_of_examination: string;
            standard: string;
            timetable_pdf: string;
          },
          index
        ) => ({
          _id,
          sl_no: index + 1,
          name_of_examination,
          standard,
          timetable_pdf,
        })
      ) || [],
    [tableFilteredData]
  );
  const columns = [
    { key: "sl_no", header: "Sl.no", width: "120px" },
    {
      key: "name_of_examination",
      header: "Name of the examination",
      canFilter: true,
    },
    { key: "standard", header: "Standard", canFilter: true },
    {
      key: "timetable_pdf",
      header: "Time Table",
      render: (item) => {
        console.log(item);
        return (
          <a href={item} download target={"_blank"} className="underline">
            View
          </a>
        );
      },
    },
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
