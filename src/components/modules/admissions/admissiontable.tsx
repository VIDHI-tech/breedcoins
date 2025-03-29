import endpoints from "@/api/endpoints";
import FileDownload from "@/components/common/file-download";
import { TablePage } from "@/components/common/table-page-3-pagination-airforce-theme";
import { useApiQuery } from "@/hooks/useApiQuery";
import { useMemo } from "react";

export const CurriculumTable = () => {
  const { data } = useApiQuery(endpoints.entities.tableCurriculum.all);
  const tableFilteredData = useMemo(() => data?.data?.data ?? [], [data]);
  console.log("tableFilteredData", tableFilteredData);

  const tableData = useMemo(
    () =>
      tableFilteredData.map(
        (
          {
            _id,
            curriculum,
            file,
          }: {
            _id: string;
            curriculum: string;
            file: string;
          },
          index
        ) => ({
          _id,
          sl_no: index + 1,
          curriculum,
          file,
        })
      ) || [],
    [tableFilteredData]
  );
  const columns = [
    { key: "sl_no", header: "Sl.no", width: "120px" },
    { key: "curriculum", header: "Circular", canFilter: true },
    {
      key: "file",
      header: "File",
      render: (item) => {
        // console.log(item);
        return (
          <a href={item} download target={"_blank"}>
            <FileDownload />
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
