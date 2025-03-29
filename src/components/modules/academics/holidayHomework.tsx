import { useApiQuery } from "@/hooks/useApiQuery";
import { useMemo } from "react";
import endpoints from "@/api/endpoints";
import { TablePage } from "@/components/common/table-page-3-pagination-airforce-theme";

const HolidayHomework = () => {
  return (
    <section
      id="academics_holiday_homework"
      className="border-b-2 py-20 space-y-5"
    >
      <h1 className="text-3xl md:text-5xl">Holiday Homework</h1>
      <HolidayHomeworkTable />
    </section>
  );
};

export default HolidayHomework;

const HolidayHomeworkTable = () => {
  const { data } = useApiQuery(endpoints.entities.homework.all);
  const tableFilteredData = useMemo(() => data?.data?.data ?? [], [data]);
  console.log(" kdv", tableFilteredData);

  const tableData = useMemo(() => {
    return [
      {
        sl_no: "1",
        class: "Class LKG",
        pdf: tableFilteredData?.primary?.["lkg"],
      },
      {
        sl_no: "2",
        class: "Class UKG",
        pdf: tableFilteredData?.primary?.["ukg"],
      },
      {
        sl_no: "3",
        class: "Class I",
        pdf: tableFilteredData?.primary?.["1st"],
      },
      {
        sl_no: "4",
        class: "Class II",
        pdf: tableFilteredData?.primary?.["2nd"],
      },
      {
        sl_no: "5",
        class: "Class III",
        pdf: tableFilteredData?.primary?.["3rd"],
      },
      {
        sl_no: "6",
        class: "Class IV",
        pdf: tableFilteredData?.primary?.["4th"],
      },
      {
        sl_no: "7",
        class: "Class V",
        pdf: tableFilteredData?.primary?.["5th"],
      },
      {
        sl_no: "8",
        class: "Class VI",
        pdf: tableFilteredData?.secondary?.["6th"],
      },
      {
        sl_no: "9",
        class: "Class VII",
        pdf: tableFilteredData?.secondary?.["7th"],
      },
      {
        sl_no: "10",
        class: "Class VIII",
        pdf: tableFilteredData?.secondary?.["8th"],
      },
      {
        sl_no: "11",
        class: "Class IX",
        pdf: tableFilteredData?.secondary?.["9th"],
      },
      {
        sl_no: "12",
        class: "Class X",
        pdf: tableFilteredData?.secondary?.["10th"],
      },
      {
        sl_no: "13",
        class: "Class XI",
        pdf: tableFilteredData?.cbse?.["11th"],
      },
      {
        sl_no: "14",
        class: "Class XII",
        pdf: tableFilteredData?.cbse?.["12th"],
      },
    ];
  }, [tableFilteredData]);
  const columns = [
    { key: "class", header: "Classes", canFilter: true },
    {
      key: "pdf",
      header: "Time Table",
      render: (value: any) => {
        if (!value) return <p>No File</p>;
        return (
          <a href={value} download target={"_blank"}>
            Download
          </a>
        );
      },
    },

    // { key: "isActive", header: "Status" },
  ];

  return <TablePage columns={columns} data={tableData} pageSize={5} />;
};
