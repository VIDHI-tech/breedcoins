import { useApiQuery } from "@/hooks/useApiQuery";
import { useMemo } from "react";
import endpoints from "@/api/endpoints";
import { TablePage } from "@/components/common/table-page-3-pagination-airforce-theme";
import FileDownload from "@/components/common/file-download";

const ourSchoolConfig = {
  imageSrc: "/hero1.JPG",
};
const Achievements = () => {
  const { data } = useApiQuery(endpoints.pages.achievementPage.all);
  const filteredData = useMemo(() => data?.data?.data ?? [], [data]);
  console.log("achievement", filteredData);
  return (
    <>
      <section
        id="top"
        className="relative w-full h-[500px] md:h-[600px] flex items-center"
      >
        {/* Background Image */}
        <figure className="absolute h-full w-full">
          <img
            src={filteredData?.hero_img ?? ourSchoolConfig.imageSrc}
            alt="Our School"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 h-full w-full bg-black rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-70" />
        </figure>

        {/* Content */}
        <div className="flex flex-col lg:flex-row z-10 px-6 md:px-12 xl:px-28 text-white items-center">
          <section className="flex-1 text-center lg:text-start">
            <h2 className="text-3xl lg:text-[56px] font-bold pb-10">
              Achievements
            </h2>
            <h3 className="text-lg xl:text-[32px] font-bold leading-snug">
              Welcome to AIR FORCE SCHOOL,
              <br /> ASTE, Bengaluru!
            </h3>
          </section>
          <section className="flex-1 space-y-4 text-center lg:text-start items-center lg:items-start flex flex-col">
            <p className="mt-4 text-xs lg:text-base 2xl:text-xl 2xl:leading-relaxed">
              Join Our Team at Air Force School Reconnect with Air Force School
              Bangalore! Our school has shaped countless lives and has been
              enriched by the students who walked its halls. The bond between
              the school and its alumni is timeless, and we cherish the memories
              and experiences shared over the years. We are reaching out to all
              former students who have been a part of this incredible journey.
              It would be a pleasure to reconnect and celebrate the legacy we
              have built together. To strengthen this lifelong connection, we
              have prepared an alumni pro forma. We invite you to fill it out
              and send it back to us, allowing us to keep in touch and celebrate
              our shared history. We look forward to hearing from you!
            </p>
          </section>
        </div>
      </section>
      <div className="flex justify-center py-10">
        <div className="max-w-5xl w-full">
          <AchievementTable />
        </div>
      </div>
    </>
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
