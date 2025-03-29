import endpoints from "@/api/endpoints";
import { useApiQuery } from "@/hooks/useApiQuery";
import { useMemo } from "react";

const RajBhasha = () => {
  // const [activeFolder, setActiveFolder] = useState(infraConfig.folders[0].id);

  // const activeFolderData =
  //   infraConfig.folders.find((folder) => folder.id === activeFolder) || {};

  const { data } = useApiQuery(endpoints.entities.rajBhasha.all);
  const filteredData = useMemo(() => data?.data?.data ?? [], [data]);
  console.log("raj", filteredData);

  return (
    <section id="cbse_raj_basha_implementation" className="py-28 space-y-10">
      <h1 className="text-4xl md:text-[53.33px] text-[#080A12] font-bold text-center">
        Raj Basha Implementation
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-10 px-[calc(5%-10px)]">
        {filteredData.map((image, index) => (
          <div key={index} className="overflow-hidden relative">
            <img
              src={image || "/placeholder.svg"}
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </div>
        ))}
      </div>
    </section>
  );
};

export default RajBhasha;
