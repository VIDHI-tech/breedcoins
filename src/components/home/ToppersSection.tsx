import endpoints from "@/api/endpoints";
import { useApiQuery } from "@/hooks/useApiQuery";
import { useMemo } from "react";

// const students = [
//   {
//     name: "NIVIKSHA SUMANA REDDY",
//     percentage: "97.6%",
//     class: "Class Xth Topper",
//     image: "/topper1.png",
//   },
//   {
//     name: "KANISHK PUNDIR",
//     percentage: "98.6%",
//     class: "Class XIIth Science Topper",
//     image: "/topper2.png",
//   },
//   {
//     name: "SIMRAN BEDI",
//     percentage: "91.6%",
//     class: "Class XIIth Humanities Topper",
//     image: "/topper3.png",
//   },
//   {
//     name: "NITYAPRIYA N",
//     percentage: "97%",
//     class: "Class XIIth Commerce Topper",
//     image: "/topper4.png",
//   },
// ];

const ToppersSection = () => {
  const { data } = useApiQuery(endpoints.entities.topper.all);
  const filteredData = useMemo(() => data?.data?.data ?? [], [data]);
  // console.log("topper", filteredData);

  return (
    <section
      id="home_toppers"
      className="py-10 px-2 md:px-4  flex flex-col items-center gap-y-8"
    >
      <h2 className="text-5xl lg:text-6xl font-bold">Our Toppers</h2>
      <p className="text-[#363848] font-light text-center text-sm md:text-lg max-w-6xl opacity-90">
        Celebrating excellence and achievement in academics. Meet our brightest
        minds who made us proud!
      </p>
      <div className="w-full grid sm:grid-cols-2 xl:grid-cols-4 gap-5 max-w-3xl xl:max-w-7xl">
        {filteredData.map((student: any) => (
          <div
            key={student._id}
            className="w-full flex flex-col justify-start items-center text-center font-bold text-2xl gap-2"
          >
            <figure className="aspect-square w-52 px-5 overflow-hidden">
              <img
                src={student.imgLink}
                className="w-full h-full object-contain object-bottom"
              />
            </figure>
            {/* {JSON.stringify(student)} */}
            <h3 className="text-[#202020] font-semibold text-base md:text-lg">
              {student.standard} - {student.name} ({student.marks.value}{" "}
              {student.marks.type === "percentage" ? "%" : "CGPA"})
            </h3>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ToppersSection;
