import { useMemo } from "react";
import { TablePage } from "../../common/table-page-3-pagination-airforce-theme";
import { useApiQuery } from "@/hooks/useApiQuery";
import endpoints from "@/api/endpoints";

const Management = () => {
  return (
    <section id="management" className="relative overflow-hidden py-20 px-6">
      <h1 className="text-3xl md:text-5xl font-bold text-center pb-10">
        Management
      </h1>
      <figure className="absolute bottom-0 right-0 w-60">
        <img
          src="/heroplane.png"
          alt=""
          className="w-full h-full object-contain"
        />
      </figure>
      <figure className="absolute -top-20 md:-top-64 md:-left-32 2xl:-top-28 -left-5 z-10">
        <img
          src="/managewavetop.png"
          className="w-full h-full object-contain"
        />
      </figure>
      <figure className="absolute bottom-0 right-0">
        <img src="/managewave.png" className="w-full h-full object-contain" />
      </figure>

      <div className="relative flex justify-center">
        <div className="max-w-7xl w-full">
          <ManagementTable />
        </div>
        <figure className="absolute -top-[30%] left-[10%] z-10  w-64 hidden lg:block">
          <img
            src="/manageplane.png"
            alt=""
            className="w-full h-full object-contain"
          />
        </figure>
      </div>
    </section>
  );
};

export default Management;

const ManagementTable = () => {
  const { data } = useApiQuery(endpoints.entities.table_management.all);
  const tableFilteredData = useMemo(() => data?.data?.data ?? [], [data]);
  // console.log("MANAGE", tableFilteredData);

  const tableData = useMemo(
    () =>
      tableFilteredData.map(
        (
          {
            _id,
            member_name,
            designation,
            remark,
          }: {
            _id: string;
            member_name: string;
            designation: string;
            remark: string;
          },
          index
        ) => ({
          _id,
          sl_no: index + 1,
          member_name,
          designation,
          remark,
        })
      ) || [],
    [tableFilteredData]
  );
  const columns = [
    { key: "sl_no", header: "Sl.no", width: "120px" },
    { key: "member_name", header: "Committee Members" },
    { key: "designation", header: "Designation" },
    { key: "remark", header: "Remarks" },
  ];
  return (
    <TablePage
      // title="Table Careers"
      // createButtonText="Create"
      // onCreate={() => setIsCreating(true)}
      columns={columns}
      data={tableData}
      // pageSize={5}
    />
  );
};
