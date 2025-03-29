import { TablePage } from "@/components/common/table-page-3-pagination-airforce-theme";
import { useApiQuery } from "@/hooks/useApiQuery";
import endpoints from "@/api/endpoints";
import { useMemo } from "react";
export const StaffAvNonteachingTable = () => {
  const { data } = useApiQuery(
    endpoints.entities.table_staff_av_non_teaching.all
  );
  const tableFilteredData = useMemo(() => data?.data?.data ?? [], [data]);
  //   console.log("avnon", tableFilteredData);

  const tableData = useMemo(
    () =>
      tableFilteredData.map(
        (
          {
            _id,
            commitee_member_name,
            designation,
          }: {
            _id: string;
            commitee_member_name: string;
            designation: string;
          },
          index
        ) => ({
          _id,
          sl_no: index + 1,
          commitee_member_name,
          designation,
        })
      ) || [],
    [tableFilteredData]
  );
  const columns = [
    { key: "sl_no", header: "Sl.no", width: "120px" },
    { key: "commitee_member_name", header: "Members" },
    { key: "designation", header: "Designation" },
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
