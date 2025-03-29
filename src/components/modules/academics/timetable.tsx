import endpoints from "@/api/endpoints";
import { TablePage } from "@/components/common/table-page-3-pagination-airforce-theme";
import { useApiQuery } from "@/hooks/useApiQuery";
import { useMemo } from "react";

export function Timetable() {
  const { data } = useApiQuery(
    endpoints.entities.timetable.getAllSubTimetables
  );
  const filteredData = useMemo(() => data?.data?.data ?? [], [data]);
  console.log("timetable data", filteredData);

  return (
    <div
      id="academics_class_time_table"
      className="flex flex-col py-20 border-b-2 gap-y-10"
    >
      <h1 className="text-3xl md:text-5xl">Class Time Table</h1>
      <div className="max-w-2xl w-full">
        {filteredData?.map((item: SubTimetable) => (
          <SubTimeTable _id={item?._id} name={item?.name} rows={item?.rows} />
        ))}
      </div>
    </div>
  );
}
type SubTimetable = {
  _id: string;
  name: string;
  rows: SubTimetableRow[];
};

type SubTimetableRow = {
  _id: string;
  class: string;
  schedule: string;
};

const SubTimeTable = ({ _id, name, rows }: SubTimetable) => {
  const columns = [
    { key: "class", header: "Classes" },
    {
      key: "schedule",
      header: "Schedule",
      canFilter: true,
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
    <div key={_id + name + rows?.length} className="flex flex-col">
      <h1 className="text-2xl font-semibold">{name}</h1>
      <TablePage columns={columns} data={rows} pageSize={5} />
    </div>
  );
};
