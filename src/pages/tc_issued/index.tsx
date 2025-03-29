import endpoints from "@/api/endpoints";
import { TablePage } from "@/components/common/table-page-3-pagination-airforce-theme";
import { useApiQuery } from "@/hooks/useApiQuery";
import { useMemo } from "react";

const TcIssued = () => {
  return (
    <section className="py-16 px-7">
      <h1 className="text-4xl md:text-5xl font-bold">TC Issued</h1>
      <div className="w-full">
        <TcIssuedTable />
      </div>
    </section>
  );
};

export default TcIssued;

const TcIssuedTable = () => {
  const { data } = useApiQuery(endpoints.entities.table_tc_issued.all);
  const tableFilteredData = useMemo(() => data?.data?.data ?? [], [data]);
  console.log("tc", tableFilteredData);

  const tableData = useMemo(
    () =>
      tableFilteredData.map(
        (
          item: {
            _id: string;
            student_name: string;
            guardian_name: string;
            dob: string;
            admission_number: string;
            class: string;
            tc_number: string;
            date_of_tc: string;
            scanned_tc_pdf: string;
            remarks: string;
          },
          index
        ) => ({
          _id: item._id,
          student_name: item.student_name,
          guardian_name: item.guardian_name,
          dob: item.dob,
          admission_number: item.admission_number,
          class: item.class,
          tc_number: item.tc_number,
          date_of_tc: item.date_of_tc,
          scanned_tc_pdf: item.scanned_tc_pdf,
          remarks: item.remarks,
        })
      ) || [],
    [tableFilteredData]
  );
  const columns = [
    { key: "student_name", header: "Student Name", canFilter: true },
    { key: "guardian_name", header: "Guardian Name", canFilter: true },
    { key: "dob", header: "Date of Birth", canFilter: true },
    { key: "admission_number", header: "ADM. No.", canFilter: true },
    { key: "class", header: "Class", canFilter: true },
    { key: "tc_number", header: "TC No.", canFilter: true },
    { key: "date_of_tc", header: "Date of TC", canFilter: true },
    {
      key: "scanned_tc_pdf",
      header: "Scanned TC",
      canFilter: true,
      render: (item) => {
        // console.log(item);
        return (
          <a
            className="text-red-600 font-bold"
            href={item}
            download
            target={"_blank"}
          >
            Click Here To View TC Issued
          </a>
        );
      },
    },
    { key: "remarks", header: "Remarks", canFilter: true },

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
