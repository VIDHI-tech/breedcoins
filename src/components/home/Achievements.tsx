import { useApiQuery } from "@/hooks/useApiQuery";
import { useMemo } from "react";
import endpoints from "@/api/endpoints";
import { TablePage } from "@/components/common/table-page-3-pagination-airforce-theme";
import FileDownload from "@/components/common/file-download";

const achievementsConfig = {
  achievements_info:
    "Air Force School takes pride in its students' outstanding achievements in academics, sports, and co-curricular activities, excelling at national and international levels.",
};
const Achievements = () => {
  return (
    <section className="relative bg-white py-10 md:py-16">
      {/* Left Image */}
      <div className="absolute left-0 top-0 h-full w-1/6">
        <img
          src="/enquiry1.png"
          alt="Education Background"
          className="h-full w-full object-cover"
        />
      </div>

      {/* Right Image */}
      <div className="absolute right-0 top-0 h-full w-1/4">
        <img
          src="/enquiry2.png"
          alt="Education Background"
          className="h-full w-full object-cover"
        />
      </div>

      {/* Form */}
      <div className="relative px-5 flex flex-col justify-center items-center">
        <h2 className="text-2xl md:text-5xl font-bold py-5 md:py-10 text-center">
          ACHIEVERS/
          <br className="lg:hidden" />
          ACHIEVEMENTS
        </h2>
        <p className="md:text-2xl text-gray-500 text-center line-clamp-3">
          {achievementsConfig.achievements_info}
        </p>
        <div className="flex justify-center py-10 w-full">
          <div className="max-w-5xl w-full">
            <AchievementTable />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;

const AchievementTable = () => {
  const { data } = useApiQuery(endpoints.entities.tableAchievements.all);
  const tableFilteredData = useMemo(() => data?.data?.data ?? [], [data]);
  // console.log("achievement", tableFilteredData);

  const tableData = useMemo(
    () =>
      tableFilteredData.map(
        (
          {
            _id,
            name,
            description,
            pdf,
          }: {
            _id: string;
            name: string;
            description: string;
            pdf: string;
          },
          index
        ) => ({
          _id,
          sl_no: index + 1,
          name,
          description,
          pdf,
        })
      ) || [],
    [tableFilteredData]
  );
  const columns = [
    { key: "sl_no", header: "Sl.no", width: "120px" },
    { key: "name", header: "Name", canFilter: true },
    { key: "description", header: "Description", canFilter: true },
    {
      key: "pdf",
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
