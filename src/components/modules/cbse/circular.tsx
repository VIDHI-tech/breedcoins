import endpoints from "@/api/endpoints";
import FileDownload from "@/components/common/file-download";
import { TablePage } from "@/components/common/table-page-3-pagination-airforce-theme";
import { useApiQuery } from "@/hooks/useApiQuery";
import { useMemo } from "react";

const Circular = () => {
  return (
    <section id="cbse_circular" className="py-20">
      <h1 className="text-4xl md:text-[53.33px] font-bold text-[#252B42] text-center">
        Circular
      </h1>
      <div className="flex justify-center pt-5">
        <div className="max-w-4xl w-full">
          <CircularTable />
        </div>
      </div>
    </section>
  );
};

export default Circular;

const CircularTable = () => {
  const { data } = useApiQuery(endpoints.entities.tableCircular.all);
  const tableFilteredData = useMemo(() => data?.data?.data ?? [], [data]);
  // console.log("tableFilteredData", tableFilteredData);

  const tableData = useMemo(
    () =>
      tableFilteredData.map(
        (
          {
            _id,
            circular,
            file,
          }: {
            _id: string;
            circular: string;
            file: string;
          },
          index
        ) => ({
          _id,
          sl_no: index + 1,
          circular,
          file,
        })
      ) || [],
    [tableFilteredData]
  );
  const columns = [
    { key: "sl_no", header: "Sl.no", width: "120px" },
    { key: "circular", header: "Circular", canFilter: true },
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
