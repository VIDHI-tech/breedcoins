import Button from "@/components/common/Button";
import { TablePage } from "@/components/common/table-page-3-pagination-airforce-theme";
import { useApiQuery } from "@/hooks/useApiQuery";
import { useMemo } from "react";
import endpoints from "@/api/endpoints";

const Alumni = () => {
  const { data } = useApiQuery(endpoints.pages.miscellaneousPage.all);
  const filteredData = useMemo(() => data?.data?.data ?? [], [data]);
  // console.log("alumni", filteredData);

  return (
    <section id="miscellaneous_alumni" className="py-20 border-b-2">
      <h2 className="text-4xl md:text-[53.33px] font-bold text-[#252B42] flex justify-between pb-10">
        Alumni
        <a href={filteredData?.alumni_registration_link ?? "#"} target="_blank">
          <Button label="Register here" className="text-sm underline" />
        </a>
      </h2>
      <p className="text-lg pb-16">
        Join Our Team at Air Force School Reconnect with Air Force School
        Bangalore! Our school has shaped countless lives and has been enriched
        by the students who walked its halls. The bond between the school and
        its alumni is timeless, and we cherish the memories and experiences
        shared over the years. We are reaching out to all former students who
        have been a part of this incredible journey. It would be a pleasure to
        reconnect and celebrate the legacy we have built together. To strengthen
        this lifelong connection, we have prepared an alumni pro forma. We
        invite you to fill it out and send it back to us, allowing us to keep in
        touch and celebrate our shared history. We look forward to hearing from
        you!
      </p>
      <h3 className="text-3xl font-semibold">Success Stories</h3>
      <div className="flex justify-start">
        <div className="max-w-5xl w-full">
          <AlumniTable />
        </div>
      </div>
    </section>
  );
};

export default Alumni;

const AlumniTable = () => {
  const { data } = useApiQuery(endpoints.entities.alumni.all);
  const tableFilteredData = useMemo(() => data?.data?.data ?? [], [data]);
  // console.log("alumni", tableFilteredData);

  const tableData = useMemo(
    () =>
      tableFilteredData.map(
        (
          {
            _id,
            passingYear,
            name,
            designation,
            img,
          }: {
            _id: string;
            passingYear: number;
            name: string;
            designation: string;
            img: string;
          },
          index
        ) => ({
          _id,
          sl_no: index + 1,
          passingYear,
          name,
          designation,
          img,
        })
      ) || [],
    [tableFilteredData]
  );
  const columns = [
    { key: "sl_no", header: "Sl.no", width: "120px" },
    { key: "passingYear", header: "Year Passed Out" },
    { key: "name", header: "Name", canFilter: true },
    { key: "designation", header: "Designation / Employer", canFilter: true },
    {
      key: "img",
      header: "",
      render: (item) => {
        // console.log(item);
        return (
          <figure className="aspect-square h-20 border">
            <img src={item} alt="img" />
          </figure>
        );
      },
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
